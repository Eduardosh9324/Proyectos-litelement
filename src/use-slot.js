import { LitElement, html } from 'lit-element';

class UseSlot extends LitElement {
  render(){
    return html`
      <div>
        <slot name="one"></slot>
        <slot name="two"></slot>
      </div>
    `;
  }
}
customElements.define('use-slot', UseSlot);
