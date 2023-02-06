const navList = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Home",
    path: "/examples.html",
    items: [
      {
        label: "Example 1",
        path: "/length-trim.html",
      },
    ],
  },
];

class Nav extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 10px;
        }

        .is-active {
          color: green;
        }

        nav {
          display: flex;
          gap: 2.5em;
          flex-wrap: wrap;
        }

        nav a {
          min-height: 34px;
        }
      </style>

      <nav>
        <a href="/">Home</a>
        <a href="/examples.html">Examples</a>
        <a href="/examples/retrieving-parameters.html">retrieving-parameters</a>
        <a href="/examples/adding-parameters-list.html">adding-parameters-list</a>
        <a href="/examples/adding-parameters-details.html">adding-parameters-details</a>
        <a href="/examples/reusable-html-function.html">reusable-html-function</a>
        <a href="/examples/get-requests-handling-errors.html">get-requests-handling-errors</a>
        <a href="/examples/try-catch-finally.html">try-catch-finally</a>
        <a href="/examples/then-catch.html">then-catch</a>
      <nav>
    `;

    const currentUrl = window.location.pathname;

    const links = this.shadowRoot.querySelectorAll("a");

    links.forEach((link) => {
      if (currentUrl.includes(link.pathname) && link.pathname !== "/") {
        link.classList.add("is-active");
        return;
      }
    });
  }
}

customElements.define("my-nav", Nav);
