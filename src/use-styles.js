import { LitElement, html, css, property } from 'lit-element';

class UseStyles extends LitElement {
  static get styles() {
    return css`
      * { color: red; }
      p { font-family: sans-serif; }
      .myclass { margin: 100px; }
      #main { padding: 30px; }
      h1 { font-size: 4em; }
    `;
  }
  render() {
    return html`
      <p>Hello World</p>
      <p class="myclass">Hello World</p>
      <p id="main">Hello World</p>
      <h1>Hello World</h1>
    `;
  }
}

customElements.define('use-styles', UseStyles);