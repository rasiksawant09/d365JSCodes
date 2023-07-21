var userRole = {
    // It customizes the form 
    customizationOnTestTableFormsLabelFocus: function (executionContext){
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();
        var quickViewControl = formContext.ui.quickForms.get("Account_Details");
        

        if(quickViewControl != undefined){
            if(quickViewControl.isLoaded()){   //isLoaded method is used so that the quick view form gets time load data.
                quickViewControl.getControl("address1_city").getAttribute().setValue("Mumbai");
                console.log(quickViewControl.getName());
                quickViewControl.setLabel("Account_Details");
                quickViewControl.setFocus();
                return;
            }else{
                setTimeout(userRole.customizationOnTestTableForms, 10, executionContext);
            }
        }else{
            console.log("No Data to Display");
        }
    }
};

