/*
The below code runs on onSave Event and the function name is : userRoless.concatNames
The function concats names of the two custom lookups selected values and store it in an another custom field.


*/
var userRoless = {


    concatNames: async function (executionContext) {

        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_opplookup")?.getValue() == null) {
            // alert("Please fill the Opportunity lookup field in the form");
            formContext.getAttribute("rgitp_customnamefield")?.setValue("");
            openDialogBox();
            return;
        }

        var oppLookupValue = formContext.getAttribute("rgitp_opplookup").getValue();
        console.log(JSON.stringify(oppLookupValue));

        var oppLookupValueName = oppLookupValue[0].name;
        console.log(oppLookupValueName);

        if (formContext.getAttribute("rgitp_customlookup")?.getValue() == null) {
            // alert("Please fill the Custom Lookup field in the form");
            formContext.getAttribute("rgitp_customnamefield")?.setValue("");
            openDialogBox();
            return;
        }

        var customLookupValue = formContext.getAttribute("rgitp_customlookup").getValue();
        console.log(JSON.stringify(customLookupValue));

        var customLookupValueName = customLookupValue[0].name;
        console.log(customLookupValueName);

        var finalConcatString = oppLookupValueName.concat("_", customLookupValueName);
        console.log(finalConcatString);

        await formContext.getAttribute("rgitp_customnamefield")?.setValue(finalConcatString);

        alert("The Value is updated successfully");


        function openDialogBox() {

            var alertStrings = {
                confirmButtonLabel: "OK",
                text: "Please enter the Lookup Values",
                title: "ALERT"
            };

            var alertOptions = {
                height: 120,
                width: 260
            };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
        }

    }
}