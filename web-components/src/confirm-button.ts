import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('w-confirm-button')
export class ConfirmButton extends LitElement {
  _onClick(e: Event) {
    if (!confirm('Are you sure?')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render() {
    return html`<button type="submit" @click="${this._onClick}" class="btn btn-default"><slot></slot></button>`
  }
}
