// script.js
const toggleBtn = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

if (toggleBtn && dropdownContent) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = dropdownContent.classList.toggle('open');

    if (isOpen) {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
      dropdownContent.style.opacity = '1';
    } else {
      dropdownContent.style.maxHeight = '0';
      dropdownContent.style.opacity = '0';
    }
  });
}
