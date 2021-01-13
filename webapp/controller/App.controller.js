sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict'; // command to  stop/report bugs
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
            console.log(this.getOwnerComponent());
        }
    });
});