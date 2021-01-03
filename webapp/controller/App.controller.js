sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict'; // command to  stop/report bugs

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onInit: function () {
            // set data model on view
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // Set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello: function () {
            //Read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipent = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipent]);
            MessageToast.show(sMsg);
        }
    });
});