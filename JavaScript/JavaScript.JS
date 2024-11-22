
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

   // استهداف جميع العناصر في الصفحة
   const elements = document.querySelectorAll('*'); // اختيار كل العناصر

   // إعداد المراقب (IntersectionObserver)
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // عند دخول العنصر إلى نافذة العرض
               entry.target.style.opacity = 1; // جعله مرئيًا
               entry.target.classList.add('animate__animated', 'animate__fadeInLeft'); // تطبيق التحريك
               observer.unobserve(entry.target); // إيقاف المراقبة بعد التحريك
           }
       });
   }, {
       threshold: 0.2 // العنصر يُعتبر مرئيًا عند ظهوره بنسبة 20%
   });

   // تطبيق المراقبة على جميع العناصر
   elements.forEach(element => {
       if (element.tagName !== 'SCRIPT' && element.tagName !== 'STYLE') {
           observer.observe(element); // تجاهل العناصر غير المرغوبة (مثل script و style)
       }
   });