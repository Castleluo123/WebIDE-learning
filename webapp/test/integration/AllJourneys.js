jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zleif09/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zleif09/test/integration/pages/Worklist",
		"zleif09/test/integration/pages/Object",
		"zleif09/test/integration/pages/NotFound",
		"zleif09/test/integration/pages/Browser",
		"zleif09/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zleif09.view."
	});

	sap.ui.require([
		"zleif09/test/integration/WorklistJourney",
		"zleif09/test/integration/ObjectJourney",
		"zleif09/test/integration/NavigationJourney",
		"zleif09/test/integration/NotFoundJourney",
		"zleif09/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});