sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict'; // command to  stop/report bugs

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello: function () {
            //Read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipent = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipent]);
            MessageToast.show(sMsg);
        }
    });
});