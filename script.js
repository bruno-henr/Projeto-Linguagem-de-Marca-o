document.getElementById("toggle-menu").addEventListener("click", function() {
    var sidebar_class_value = document.getElementById("sidebar").className.split(" ");
    if(sidebar_class_value.includes('active-sidebar')) {
        document.getElementById("sidebar").classList.remove("active-sidebar");
    } else {
        document.getElementById("sidebar").classList.add("active-sidebar");
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddens = document.querySelectorAll('.hidden');
hiddens.forEach((el) => observer.observe(el))