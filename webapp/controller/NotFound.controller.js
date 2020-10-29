sap.ui.define([
		"zappleif010/zappleif010/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zappleif010.zappleif010.controller.NotFound", {

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