/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zappleif008/zappleif008/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zappleif008/zappleif008/test/integration/pages/Worklist",
	"zappleif008/zappleif008/test/integration/pages/Object",
	"zappleif008/zappleif008/test/integration/pages/NotFound",
	"zappleif008/zappleif008/test/integration/pages/Browser",
	"zappleif008/zappleif008/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zappleif008.zappleif008.view."
	});

	sap.ui.require([
		"zappleif008/zappleif008/test/integration/WorklistJourney",
		"zappleif008/zappleif008/test/integration/ObjectJourney",
		"zappleif008/zappleif008/test/integration/NavigationJourney",
		"zappleif008/zappleif008/test/integration/NotFoundJourney",
		"zappleif008/zappleif008/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});