import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ButtonElement-styles.js';

import bootstrap from "./styles/bootstrap";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<button-element></button-element>
```

##styling-doc

@customElement button-element
*/
export class ButtonElement extends LitElement {
  static get is() {
    return 'button-element';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('button-element-shared-styles'),
      bootstrap
    ];
  }

  static get properties() {
    return {
        identifier: { type: String },
        selected: { type: Boolean },
        name: { type: String },
    };
}

constructor() {
    super();
    this.selected = false;
    this.name = 'Button'
}

_buttonClick(e) {
    const { value } = e.currentTarget;

    console.log(value);
    console.log(this.identifier);

    const buttonClick = new CustomEvent("button-click", {
        detail: {
            identifier: this.identifier,
            value: value,
            selected: true,
        },
        bubbles: true,
        composed: true,
    });

    this.dispatchEvent(buttonClick);
}

render() {
    return html`<button
        type="button"
        class="${this.selected ? "selected" : ""}"
        value=${this.name}
        @click="${this._buttonClick}"
    >
        ${this.name}
    </button>`;
}

}
