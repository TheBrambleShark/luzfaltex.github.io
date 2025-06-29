// document.querySelector('#year').innerText = new Date().getFullYear();

customElements.define(
    'x-year',
    class extends HTMLElement {
      connectedCallback() {
        const s = document.createElement('span');
        s.innerText = new Date().getFullYear();
  
        this.appendChild(s);
      }
    }
  );

function loader() {
    const loader = document.getElementsByClassName('loader');
    loader.remove

    window.parent.scrollTo(0,0);
}