var userRoles = {
    // opening a quick create Account form on the button click
    openQuickCreateAccountForm: function() {
        "use strict";
        var entityFormOptions = {};
        entityFormOptions["entityName"] = "account";            
        entityFormOptions["useQuickCreateForm"] = true;

        Xrm.Navigation.openForm(entityFormOptions, null).then(
            function(lookup) { console.log("Success"); },
            function(error) { console.log("Error"); } );

    }
};