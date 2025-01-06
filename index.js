// Basit animasyonlar için JavaScript ile header arka planını değiştirme
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#ff66b2"; // Daha koyu pembe
    } else {
        header.style.backgroundColor = "#ffaad4"; // Açık pembe
    }
});