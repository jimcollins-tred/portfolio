/***************************
 *
 *  JC PORTFOLIO
 *  Footer.js
 *
 ***************************/

// Reusable Header component

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="footer">
        <ul class="footer__nav">
          <li class="footer__nav__item">
            <a href="/index.html" class="footer__nav__link">Home</a>
          </li>
          <li class="footer__nav__item">
            <a href="/index.html" class="footer__nav__link">About</a>
          </li>
          <li class="footer__nav__item">
            <a href="/pages/portfolio.html" class="footer__nav__link"
              >Portfolio</a
            >
          </li>
          <li class="footer__nav__item">
            <a href="/pages/experience.html" class="footer__nav__link"
              >Experience</a
            >
          </li>
        </ul>

        <div class="footer__logo">/</div>

        <p class="footer__text">© 2020 James Collins. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define('footer-comp', Footer);
