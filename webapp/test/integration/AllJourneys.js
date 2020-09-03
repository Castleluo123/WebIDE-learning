jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"zleif07/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"zleif07/test/integration/pages/Worklist",
		"zleif07/test/integration/pages/Object",
		"zleif07/test/integration/pages/NotFound",
		"zleif07/test/integration/pages/Browser",
		"zleif07/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zleif07.view."
	});

	sap.ui.require([
		"zleif07/test/integration/WorklistJourney",
		"zleif07/test/integration/ObjectJourney",
		"zleif07/test/integration/NavigationJourney",
		"zleif07/test/integration/NotFoundJourney",
		"zleif07/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});