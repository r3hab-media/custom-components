const template = document.createElement("template");
template.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="./css/custom-list.css">
  <ul class="custom-marker">
    <li></li>
  </ul>
`;

class CustomList extends HTMLElement {
	constructor() {
		super();

		this.showInfo = true;

		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.shadowRoot.querySelector("li").innerText = this.getAttribute("item");
	}
}

window.customElements.define("custom-list", CustomList);
