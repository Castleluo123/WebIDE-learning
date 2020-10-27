sap.ui.define([
		"zappleif008/zappleif008/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zappleif008.zappleif008.controller.NotFound", {

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