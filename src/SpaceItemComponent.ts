import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

import SpaceItemComponentTemplate from "./generated/templates/SpaceItemComponentTemplate.lit.js";

// Styles
import SpaceItemComponentCss from "./generated/themes/SpaceItemComponent.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 *
 * <h3>Usage</h3>
 *
 * For the <code>space-item-component</code>
 * <h3>ES6 Module Import</h3>
 *
 * <code>import space-package/dist/SpaceItemComponent.js";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias demo.components.SpaceItemComponent
 * @extends sap.ui.webc.base.UI5Element
 * @tagname space-item-component
 * @public
 */
@customElement({
	tag: "space-item-component",
	renderer: litRender,
	styles: SpaceItemComponentCss,
	template: SpaceItemComponentTemplate,
	dependencies: [],
})
class SpaceItemComponent extends UI5Element {
	/**
	 * Defines the title of the space item component.
	 *
	 * @type {string}
	 * @name demo.components.SpaceItemComponent.prototype.title
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	title!: string;

	/**
	 * Defines the description of the space item component.
	 *
	 * @type {string}
	 * @name demo.components.SpaceItemComponent.prototype.description
	 * @defaultvalue ""
	 * @public
	 */
	@property()
	description!: string;
}

SpaceItemComponent.define();

export default SpaceItemComponent;
