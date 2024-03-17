const header = document.querySelector('header');
const nav = document.querySelector('header nav .lists');
const aboutSection = document.querySelector('.section-1');
const year = document.querySelector('.footer #date');
const navList = document.querySelectorAll('header nav .lists .list');
const logo = document.querySelector('.main header nav .navLogo');
const exploreTour = document.querySelector('.content .btn');
const tour = document.querySelector('[data-id="tour"]');

// Scroll to Section
const scrollTo = function (e) {
    if (e.target.classList.contains('list')) {
        const dataID = e.target.dataset.id;
        document.querySelector(`#${dataID}`).scrollIntoView({ behavior: "smooth", block: "start" })
    }
}

nav.addEventListener('click', scrollTo);

exploreTour.addEventListener('click', () => {
    console.log('click');
    tour.click();
})

// Sticky Nav bar
const callback = function (entries) {
    const [entry] = entries
    if (!entry.isIntersecting) {
        header.classList.add('stickyBar');
    } else {
        header.classList.remove('stickyBar');
    }
}

const option = {
    root: null,
    threshold: 0.9,
}

const observer = new IntersectionObserver(callback, option);
observer.observe(aboutSection);

// Current Year
const date = new Date();
year.textContent = date.getFullYear();

// Fading Nav List
const fadingNavList = function (e) {
    if (e.target.classList.contains('list')) {
        navList.forEach(list => list.classList.add('fade'))
        e.target.classList.remove('fade')
    }
    logo.classList.add('fade')
}

const unFadingNavList = function (e) {
    if (e.target.classList.contains('list')) {
        navList.forEach(list => list.classList.remove('fade'))
    }
    logo.classList.remove('fade')
}

nav.addEventListener('mouseover', fadingNavList)
nav.addEventListener('mouseout', unFadingNavList)