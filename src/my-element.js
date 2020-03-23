import { LitElement, html, property } from 'lit-element';

export class MyElement extends LitElement {
  static get properties(){
    return{
      count: {type:Number}
    };
    
  }

  constructor(){
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div>Llevas tantos clics ${this.count}</div>
      <button @click="${this.incrementa}">+1</button>
      <button @click="${this.decrementa}">-1</button>
    `;
  }

  incrementa(){
    this.count ++;
  }

  decrementa(){
    this.count --;
  }
}

customElements.define('my-element', MyElement);