
const dropdownIcon = document.getElementById('dropdown-icon');
const dropdownContainer = document.getElementById('dropdown-container');


dropdownIcon.addEventListener('click', () => {

  dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', (event) => {
  if (!dropdownIcon.contains(event.target) && !dropdownContainer.contains(event.target)) {
    dropdownContainer.style.display = 'none';
  }
});
