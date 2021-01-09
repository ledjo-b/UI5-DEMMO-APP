sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {

            // testing // access OData model declared in manifest.json file
            var oModel = this.getOwnerComponent().getModel("invoice");
            console.log(oModel.oData);
            // End of test

            const oViewModel = new JSONModel({
                currency: "EUR"
            });
            // "view" is an allias so we can use it easly when we call it invoiceList.view
            this.getView().setModel(oViewModel, "view")
        },
        onFilterInvoices: function (oEvent) {
            //Build the filter array
            let aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            //filter biding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
})