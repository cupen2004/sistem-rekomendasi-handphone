// Typing Animation with Loop for Hero (2 lines full typing)
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  
  if (heroTitle) {
    const typingLine1 = heroTitle.querySelector('.typing-line-1');
    const typingLine2 = heroTitle.querySelector('.typing-line-2');
    
    if (!typingLine1 || !typingLine2) {
      console.error('Typing elements not found');
      return;
    }
    
    // Sentences to type (2 lines)
    const sentences = [
      { line1: 'Cari HP Terbaik', line2: 'Untukmu' },
      { line1: 'Cari HP Impianmu', line2: 'Untukmu' },
      { line1: 'Cari HP Idaman', line2: 'Untukmu' },
      { line1: 'Cari HP Favoritmu', line2: 'Untukmu' },
      { line1: 'Cari HP Cocok', line2: 'Untukmu' }
    ];
    
    let sentenceIndex = 0;
    let lineIndex = 1; // 1 = line1, 2 = line2
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
      const currentSentence = sentences[sentenceIndex];
      
      if (isDeleting) {
        // Deleting backwards (line2 first, then line1)
        if (lineIndex === 2) {
          // Delete line 2
          const text = currentSentence.line2.substring(0, charIndex - 1);
          typingLine2.textContent = text;
          charIndex--;
          typingSpeed = 30;
          
          if (charIndex === 0) {
            // Line 2 deleted, move to line 1
            lineIndex = 1;
            charIndex = currentSentence.line1.length;
          }
        } else {
          // Delete line 1
          const text = currentSentence.line1.substring(0, charIndex - 1);
          typingLine1.textContent = text;
          charIndex--;
          typingSpeed = 30;
          
          if (charIndex === 0) {
            // All deleted, move to next sentence
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            lineIndex = 1;
            charIndex = 0;
            typingSpeed = 500;
          }
        }
      } else {
        // Typing forward (line1 first, then line2)
        if (lineIndex === 1) {
          // Type line 1
          const text = currentSentence.line1.substring(0, charIndex + 1);
          typingLine1.textContent = text;
          charIndex++;
          typingSpeed = 150;
          
          if (charIndex === currentSentence.line1.length) {
            // Line 1 complete, move to line 2
            lineIndex = 2;
            charIndex = 0;
            typingSpeed = 300;
          }
        } else {
          // Type line 2
          const text = currentSentence.line2.substring(0, charIndex + 1);
          typingLine2.textContent = text;
          charIndex++;
          typingSpeed = 150;
          
          if (charIndex === currentSentence.line2.length) {
            // All typed, pause then start deleting
            typingSpeed = 2000;
            isDeleting = true;
            lineIndex = 2;
            charIndex = currentSentence.line2.length;
          }
        }
      }
      
      setTimeout(type, typingSpeed);
    }
    
    // Start typing after initial delay
    setTimeout(() => {
      console.log('Starting typing animation');
      type();
    }, 1000);
  } else {
    console.error('Hero title not found');
  }
});
