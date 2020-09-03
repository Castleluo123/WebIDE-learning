sap.ui.define([
		"zleif10/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zleif10.controller.NotFound", {

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