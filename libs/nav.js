class Nav extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .is-active {
          color: green;
        }

        nav {
          padding: 1em 1.2em;
          display: flex;
          flex-direction: column;
          gap: .5em;
          flex-wrap: wrap;
          background: var(--light-grey, transparent);
        }

        a {
          min-height: 34px;
          text-decoration: none;
          text-transform: capitalize;
          color: var(--grey, #333);
        }

        summary {
          background: var(--light-grey, transparent);
          border: none;
          border-radius: 5px;
          padding: 0.5em 1em;
          color: var(--grey, #333);
          cursor: pointer;
        }
      </style>

      <details>
        <summary>
          Navigation
        </summary>
        
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
          <a href="/examples/postman.html">postman</a>
          <a href="/examples/break.html">Skipping results</a>
          <a href="/examples/filter.html">Filtering</a>
          <a href="/examples/search.html">Searching</a>
          <a href="/examples/search-form.html">Search & Filter</a>
          <a href="/examples/games.html">Final Games UX</a>
          <a href="/examples/truthy-and-falsy.html">Truthy & falsy</a>
          <a href="/examples/regex.html">Regular Expressions</a>
          <a href="/examples/form.html">Forms</a>
          <a href="/examples/advanced-form.html">Advanced Form</a>
        </nav>
      </details>
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
