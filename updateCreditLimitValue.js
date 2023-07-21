var userRoleRasikS = {

    /*The below function updates the field value of "creditlimit" in account entity to the field value
    of the contact entity to a customcreditlimit field value. */
    updateCreditLimitValue: async function (executionContext){
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();
        // var creditLimitValue = await formContext.getAttribute('creditlimit')?.getValue();
        
        var creditLimitValue = await formContext.getAttribute('creditlimit').getValue();
        alert(creditLimitValue);

        var getId = formContext.getAttribute("primarycontactid").getValue(); // getting the value of the targeted field.

        var testId = getId[0].id; //getting the guid
        var newTestId = testId.replace("{","").replace("}","");
        testId.replace("{","").replace("}","");

        alert(testId);
        alert(newTestId);

        var testData = {
            "rgitp_customcreditvalue" : creditLimitValue,
        }

        function handleUpdateRecordSuccess(){
            //Task update.
            alert("Record is updated successfully");
        }

        function handleUpdateRecordFailure(error){
            //Task update.
            alert("Record is not updated successfully " + "Error Meassage: " + error.message);
        }

        Xrm.WebApi.updateRecord("contact",newTestId,testData).then(
            handleUpdateRecordSuccess, handleUpdateRecordFailure
        );



        // console.log(creditLimitValue);
    }
}