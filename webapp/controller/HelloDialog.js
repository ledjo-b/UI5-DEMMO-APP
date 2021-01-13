sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {
    "use strict";

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            const oView = this._oView;
            //Create the dialog
            if (!oView.byId("helloDialog")) {

                const oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }
                //load asyncXML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.fragments.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    //connect dialog to root view of the component
                    oView.addDependent(oDialog);
                    
                    // forward compact/cozy style into dialog
                    syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    
                    oDialog.open();
                });

            } else {
                //load the dialog
                oView.byId("helloDialog").open();
            }
        }
    });
});