import { LitElement, html, property } from 'lit-element';
// Uso de get 
export class MyPage extends LitElement {
  render() {
    return html`
      ${this.headerTemplate}
      ${this.articleTemplate}
      ${this.footerTemplate}
    `;
  }
  get headerTemplate() {
    return html`<header>header</header>`;
  }
  get articleTemplate() {
    return html`<article>article</article>`;
  }
  get footerTemplate() {
    return html`<footer>footer</footer>`;
  }
}
customElements.define('my-page', MyPage);