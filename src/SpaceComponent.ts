import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Integer from "@ui5/webcomponents-base/dist/types/Integer.js";

// Template
import SpaceComponentTemplate from "./generated/templates/SpaceComponentTemplate.lit.js";

// Styles
import SpaceComponentCss from "./generated/themes/SpaceComponent.css.js";

import SpaceItemComponent from "./SpaceItemComponent.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>space-component</code> component is a demo component that displays some text.
 *
 * @constructor
 * @alias demo.components.SpaceComponent
 * @extends sap.ui.webc.base.UI5Element
 * @tagname space-component
 * @public
 */
@customElement({
	tag: "space-component",
	renderer: litRender,
	styles: SpaceComponentCss,
	template: SpaceComponentTemplate,
})
class SpaceComponent extends UI5Element {
	static i18nBundle: I18nBundle;
	/**
	 * Defines the intro of the space component.
	 *
	 * @type {string}
	 * @name demo.components.SpaceComponent.prototype.intro
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	intro!: string;

	/**
	 * Defines the logo of the space component.
	 *
	 * @type {string}
	 * @name demo.components.SpaceComponent.prototype.logo
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	logo!: string;

	/**
	 * Defines the articles of the component.
	 *
	 * @type {demo.components.SpaceItemComponent[]}
	 * @name demo.components.SpaceComponent.prototype.default
	 * @slot items
	 * @public
	 */
	@slot({ type: HTMLElement, "default": true })
	items!: Array<SpaceItemComponent>;

	static async onDefine() {
		SpaceComponent.i18nBundle = await getI18nBundle("SpacePackage");
	}

	onAfterRendering() {
		const numStars = 1000;

		// this.shadowRoot!.addEventListener('click', e => {
		// 	const event = new CustomEvent('doSomething', {
		// 		composed: true,
		// 		bubbles: true,
		// 		detail: { intro: this.intro }
		// 	});
		// 	this.shadowRoot!.dispatchEvent(event);
		// });
		const mainDiv = this.shadowRoot!.querySelector(".star-wars-intro") as HTMLElement;

		// For every star we want to display
		for (let i = 0; i < numStars; i++) {
			const { top, left } = this.getRandomPosition(mainDiv);
			mainDiv.append(this.getRandomStar(top, left));
		}
	}
	getRandomStar(top: string, left: string) {
		const star = document.createElement("div");
		star.className = "star";
		star.style.top = top;
		star.style.left = left;
		return star;
	}
	getRandomPosition(element: HTMLElement) {
		return {
			top: `${this.getRandomNumber(element.offsetHeight || 1000)}px`,
			left: `${this.getRandomNumber(element.offsetWidth)}px`,
		};
	}
	getRandomNumber(value: number) {
		return Math.floor(Math.random() * value);
	}
}

SpaceComponent.define();

export default SpaceComponent;
