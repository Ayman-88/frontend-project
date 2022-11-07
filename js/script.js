let sections = document.querySelectorAll('section');
let navLi = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    sections.forEach(section => {
        if (scroll >= section.offsetTop && scroll < section.offsetTop + section.offsetHeight) {
            let current = section.getAttribute('id');
            navLi.forEach(li => {
                li.classList.remove('active')
            })
            document.querySelector('.navbar-nav a[href*=' + current + ']').classList.add('active')
        }
    })
})

let content = document.querySelectorAll('.content');
let button = document.querySelectorAll('.fa-plus');
let question = document.querySelectorAll('#questions li');
let minus = document.querySelectorAll('.minus-icon');
let accordion = document.querySelectorAll('.accordionParent');


button.forEach((a, b) => {
    a.addEventListener('click', () => {


        minus.forEach(element => {
            element.style.display = 'none';
        })
        button.forEach(element => {
            element.style.display = 'block';
        })

        content.forEach(element => {
            element.classList.add('content');
        })
        a.style.display = 'none';
        minus[b].style.display = 'block';
        content[b].classList.remove('content')
    })

})
minus.forEach((a, b) => {
    a.addEventListener('click', () => {

        a.style.display = 'none';
        button[b].style.display = 'block';
        content[b].classList.add('content')
    })

})
question.forEach((a, b) => {
    a.addEventListener('click', () => {
        accordion.forEach(i => {
            i.style.display = 'none';
        });
        accordion[b].style.display = 'block';
        question.forEach(x => {
            x.classList.remove('add');
        })

        a.classList.add('add');
    })

})


