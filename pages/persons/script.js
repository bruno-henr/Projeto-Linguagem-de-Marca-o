// window.addEventListener('scroll', () => {
//     // console.log('aaaa', document.querySelectorAll('.person-item'));

//     document.querySelectorAll('.person-item').forEach((item, index) => {
//         console.log('=>',item.getBoundingClientRect().top, window.innerHeight)
//         if(item.getBoundingClientRect().top+ 100 < window.innerHeight ) {
//             // console.log(item.classList);
//             item.classList.add("active-item");
//             // document.getElementById("sidebar").classList.add("active-sidebar");
//         }
//     })
// })

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
// console.log(hiddens)
hiddens.forEach((el) => observer.observe(el))