/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zappleif010/zappleif010/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zappleif010/zappleif010/test/integration/pages/Worklist",
	"zappleif010/zappleif010/test/integration/pages/Object",
	"zappleif010/zappleif010/test/integration/pages/NotFound",
	"zappleif010/zappleif010/test/integration/pages/Browser",
	"zappleif010/zappleif010/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zappleif010.zappleif010.view."
	});

	sap.ui.require([
		"zappleif010/zappleif010/test/integration/WorklistJourney",
		"zappleif010/zappleif010/test/integration/ObjectJourney",
		"zappleif010/zappleif010/test/integration/NavigationJourney",
		"zappleif010/zappleif010/test/integration/NotFoundJourney",
		"zappleif010/zappleif010/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});