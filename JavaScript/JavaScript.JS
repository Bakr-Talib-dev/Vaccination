// Toggle عرض القائمة عند الضغط
document.querySelector('.dropdown-button').addEventListener('click', function() {
    document.querySelector('.dropdown-content').classList.toggle('show');
  }); 
  // تغيير الدولة المختارة عند الضغط
  function selectCountry(countryName, countryCode) {
    document.querySelector('.dropdown-button img').src = `https://flagcdn.com/w40/${countryCode}.png`;
    document.querySelector('.dropdown-button span').textContent = countryName;
    document.querySelector('.dropdown-content').classList.remove('show');
  }
  
  // إغلاق القائمة إذا نقر المستخدم خارجها
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button') && !event.target.closest('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  