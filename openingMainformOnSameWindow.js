var userRoles = {  
    // This function opens a modal form on the same page 
    openingMainformOnSameWindow: function (executionContext){
        "use strict";
        var formContext = executionContext.getFormContext();
        var selectedRecord = formContext.data.entity;
        var Id = selectedRecord.getId();
        
        var pageInput = {
            pageType: "entityrecord",
            entityName: "opportunityproduct",
            entityId: Id
        };

        var navigationOptions = {
            target: 2,
            height: {value: 80, unit: "%"},
            width: {value: 80, unit: "%"},
            position: 1
        };

        Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
            function success() {
                Xrm.Utility.refreshParentGrid(selectedRecord.getEntityReference());
            },
            function errors() {
                Xrm.Utility.refreshParentGrid(selectedRecord.getEntityReference());
            }
        );

    }
};