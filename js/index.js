/***************************
 *
 *  JC PORTFOLIO
 *  index.js
 *
 ***************************/

/*******************
 * Navigation
 *******************/

/*******************
 * Sticky Header
 *******************/

const heroSection = document.querySelector('.hero');
const header = document.querySelector('.header');

const stickyNav = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add('header--scroll');
    navButton.classList.add('nav__button--scroll');
    console.log(navButton);
  } else {
    header.classList.remove('header--scroll');
    navButton.classList.remove('nav__button--scroll');
  }
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(heroSection);

/*******************
 * Section animation
 *******************/

const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.35,
});

allSections.forEach((section) => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

/*************************
 * Split section animation
 *************************/

const allSplits = document.querySelectorAll('.section__split');

const revealSplit = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  let leftDiv, rightDiv;

  if (entry.target.children.length === 2) {
    leftDiv = entry.target.children[0];
    rightDiv = entry.target.children[1];
  } else {
    leftDiv = entry.target.children[1];
    rightDiv = entry.target.children[2];
  }

  // Remove the hidden class when we intersect left and right divs
  leftDiv.classList.remove('section__left--hidden');
  rightDiv.classList.remove('section__right--hidden');

  observer.unobserve(entry.target);
};

const splitObserver = new IntersectionObserver(revealSplit, {
  root: null,
  threshold: 0.75,
});

allSplits.forEach((section) => {
  let leftDiv, rightDiv;

  // Hide all sections with JS
  if (section.children.length === 2) {
    leftDiv = section.children[0];
    rightDiv = section.children[1];
  } else {
    leftDiv = section.children[1];
    rightDiv = section.children[2];
  }

  leftDiv.classList.add('section__left--hidden');
  rightDiv.classList.add('section__right--hidden');
  splitObserver.observe(section);
});

/***************************
 * Project spread animation
 **************************/

const revealSpread = ([entry], observer) => {
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('spread__left--hidden');
  entry.target.classList.remove('spread__right--hidden');

  console.log(entry.target.classList);

  observer.unobserve(entry.target);
};

const spreadObserver = new IntersectionObserver(revealSpread, {
  root: null,
  threshold: 0.5,
});

const allSpreads = document.querySelectorAll('.spread');

let isLeft = false;

allSpreads.forEach((spread) => {
  // Apply our hidden classes
  isLeft = !isLeft;
  console.log(isLeft);
  if (isLeft) spread.classList.add('spread__left--hidden');
  else spread.classList.add('spread__right--hidden');

  spreadObserver.observe(spread);
});
