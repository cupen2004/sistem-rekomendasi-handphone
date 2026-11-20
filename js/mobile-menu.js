// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.nav-mobile');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      mobileMenuBtn.textContent = nav.classList.contains('active') ? '×' : '☰';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-content')) {
        nav.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      }
    });
    
    // Close menu when clicking nav link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
      });
    });
  }
});
