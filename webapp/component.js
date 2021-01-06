sap.ui.define([

    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
        metadata:{
            manifest:"json"
        },
        init: function(){
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            const oData = {
                recipient: {
                    name: "Sap Ui5"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            //Set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function () {
            this._HelloDialog.destroy();
            delete this._HelloDialog;
        },

        openHelloDialog : function () {
            this._helloDialog.open();
        }
    })
})