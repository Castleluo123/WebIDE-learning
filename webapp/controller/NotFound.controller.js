sap.ui.define([
		"zleif07/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zleif07.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);