jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zleif03/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zleif03/test/integration/pages/Worklist",
		"zleif03/test/integration/pages/Object",
		"zleif03/test/integration/pages/NotFound",
		"zleif03/test/integration/pages/Browser",
		"zleif03/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zleif03.view."
	});

	sap.ui.require([
		"zleif03/test/integration/WorklistJourney",
		"zleif03/test/integration/ObjectJourney",
		"zleif03/test/integration/NavigationJourney",
		"zleif03/test/integration/NotFoundJourney",
		"zleif03/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});