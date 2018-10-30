sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("iti.nl.HelloWorldApp.controller.HelloView", {
		 onInit : function (evt) {
    // set mock model
    //var sPath = jQuery.sap.getModulePath("view.Main", "/data.json");
    //var oModel = new sap.ui.model.json.JSONModel(sPath);

    var oModel = new sap.ui.model.json.JSONModel("tiles.json");
    this.getView().setModel(oModel);
  }
		 
	});
	
	
	
});