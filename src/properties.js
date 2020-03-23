import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  static get properties() { return {
    prop1: { type: String, reflect: false  },
    prop2: { type: Number, reflect: true },
    prop3: { type: Boolean, reflect: true },
    prop4: { type: Array, reflect: true },
    prop5: { type: Object, reflect: true },
    myProp: { attribute: true },
    theProp: { attribute: false },
    otherProp: { attribute: 'other-prop' },
  };}

  constructor() {
    super();
    this.prop1 = '';
    this.prop2 = 0;
    this.prop3 = false;
    this.prop4 = [];
    this.prop5 = { };
    this.myProp = 'myProp';
    this.theProp = 'theProp';//la propiedad cambia pero no se refleja en el html
    this.otherProp = 'otherProp';
  }

  /*attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }*/

  render() {
    return html`
      <p>prop1 ${this.prop1}</p>
      <p>prop2 ${this.prop2}</p>
      <p>prop3 ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) =>
        html`<span>[${index}]:${item}&nbsp;</span>`)}
      </p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>      
      <button @click="${this.changeProperties}">change properties</button>
      <button @click="${this.changeAttributes}">change attributes</button>
      <p>myProp ${this.myProp}</p>
      <p>theProp ${this.theProp}</p>
      <p>otherProp ${this.otherProp}</p>
      <button @click="${this.changeAttributesNew}">change attributes</button>
    `;
  }

  changeAttributes() {
    let randy = Math.floor(Math.random()*10);
    let myBool = this.getAttribute('prop3');

    this.setAttribute('prop1', randy.toString());
    this.setAttribute('prop2', randy.toString());
    this.setAttribute('prop3', myBool? '' : null);
    this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
    this.setAttribute('prop5',
      JSON.stringify(Object.assign({}, this.prop5, {[randy]: randy})));
    this.requestUpdate();
  }
  changeAttributesNew() {
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('myprop', 'myprop ' + randomString);
    this.setAttribute('theprop', 'theprop ' + randomString);
    this.setAttribute('other-prop', 'other-prop ' + randomString);
    this.requestUpdate();
  }

  changeProperties() {
    let randy = Math.floor(Math.random()*10);
    let myBool = this.prop3;

    this.prop1 = randy.toString();
    this.prop2 = randy;
    this.prop3 = !myBool;
    this.prop4 = [...this.prop4, randy];
    this.prop5 = Object.assign({}, this.prop5, {[randy]: randy});
  }

  /*updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
  }*/

}

customElements.define('use-properties', MyElement);