// Splide JS
var splide = new Splide('.splide', {
  rewind: true,
  perPage: 3,
  perMove: 1,
  gap: 30,
});

splide.mount();

// Navbar Scroll
window.onscroll = function () {
  const header = document.querySelector('nav');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Navbar JS
const buttonNavbar = document.querySelector('#navbar-button')
const menuNavbar = document.querySelector('#navbar')

buttonNavbar.addEventListener('click', function () {
  menuNavbar.classList.toggle('block')
  menuProfile.classList.add('block')
});

// Navbar Active
window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  var sections = document.querySelectorAll('section');
  var currentSectionIndex = 0;
  var isNavVisible = false;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom > 0) {
      currentSectionIndex = i;
      break;
    }
  }

  var currentSectionLink = document.querySelector('nav a[href="#' + sections[currentSectionIndex].id + '"]');

  var rect = currentSectionLink.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    currentSectionLink.classList.add('active');
  } else {
    currentSectionLink.classList.remove('active');
  }

  // tambahan kode untuk menghapus class 'active'
  for (var i = 0; i < sections.length; i++) {
    var sectionLink = document.querySelector('nav a[href="#' + sections[i].id + '"]');

    if (i !== currentSectionIndex) {
      sectionLink.classList.remove('active');
    }
  }

  if (window.scrollY > 100) {
    if (!isNavVisible) {
      nav.style.display = 'block';
      isNavVisible = true;
    }
  } else {
    if (isNavVisible) {
      nav.style.display = 'none';
      isNavVisible = false;
    }
  }
});