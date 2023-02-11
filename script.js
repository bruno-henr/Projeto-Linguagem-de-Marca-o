
document.getElementById("toggle-menu").addEventListener("click", function() {
    var sidebar_class_value = document.getElementById("sidebar").className.split(" ");
    if(sidebar_class_value.includes('active-sidebar')) {
        document.getElementById("sidebar").classList.remove("active-sidebar");
    } else {
        document.getElementById("sidebar").classList.add("active-sidebar");
    }
})