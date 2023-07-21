var userRoles = {
    displayAlertBox: function (executionContext){
        debugger;
        "use strict";
        var alertStrings = {
            confirmButtonLabel: "Yes",
            text: "Edit this field carefully",
            title: "ALERT"
        };

        var alertOptions = {
            height: 100,
            width: 200
        };

        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function (success) {
                console.log("success");
            },
            function (error) {
                console.log("error");
            }
        );

    }
};