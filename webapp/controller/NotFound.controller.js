sap.ui.define([
		"zleif03/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zleif03.controller.NotFound", {

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