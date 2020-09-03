jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zleif10/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zleif10/test/integration/pages/Worklist",
		"zleif10/test/integration/pages/Object",
		"zleif10/test/integration/pages/NotFound",
		"zleif10/test/integration/pages/Browser",
		"zleif10/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zleif10.view."
	});

	sap.ui.require([
		"zleif10/test/integration/WorklistJourney",
		"zleif10/test/integration/ObjectJourney",
		"zleif10/test/integration/NavigationJourney",
		"zleif10/test/integration/NotFoundJourney",
		"zleif10/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});