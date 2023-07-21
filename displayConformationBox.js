var userRoless ={
    displayConformationBoxR: function(executionContext){

        debugger;
        "use strict";
        var confirmStrings = { text:"Are you sure you want to continue?", title:"Confirm" };
        Xrm.Navigation.openConfirmDialog(confirmStrings, null).then(
            function (success){
                if(success.confirmed){
                    console.log("Confirmed OK");
                }else{
                    console.log("Failed to confirm");
                }
            },
            function (error){
                console.log("Error");
            }
        );

    }
};