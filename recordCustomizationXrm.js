userRasikRole = {

    // this function consists of recordCustomizations.
    recordCustomization: function (executionContext) {
        var onlineWebApi = Xrm.WebApi.online;
        var data = {
            "name": "test"
        }

        function handleSucess() {
            alert("Sucessfully created the record");
        }

        function handleFailure() {
            alert("Failed to create the record");
        }

        onlineWebApi.createRecord("account", data).then(handleSucess, handleFailure);

    },

    //this function deletes the record.
    deleteRecord: function (executionContext) {
        var onlineWebApi = Xrm.WebApi.online;

        function handleDeletionSuccess() {
            alert("Handle Deletion Success");
        }

        function handleDeletionFailure() {
            alert("Handle Deletion Failure");
        }

        onlineWebApi.deleteRecord("account", "d0349604-0705-ee11-8f6d-6045bd09045f").then(handleDeletionSuccess, handleDeletionFailure);
    },

    // this function retriveRecord.
    retriveRecord: function (executionContext) {
        "use strict";
        debugger;
        var onlineWebApi = Xrm.WebApi;
        var formContext = executionContext.getFormContext();

        var testRecordId = formContext.data.entity.getId();

        function handleRetriveRecordSuccess(result) {
            alert("Records are Retrive successfully. " + JSON.stringify(result.name) + " Telephone no: " + result.telephone1 + " Primary Contact Full Name " + result.primarycontactid.fullname);
        }

        function handleRetriveRecordFailure() {
            alert("Records are not Retrive successfully.");
        }

        // onlineWebApi.retrieveRecord("account", "27aae10d-0705-ee11-8f6d-6045bd09045f", "?$select=name,telephone1&$expand=primarycontactid($select=contactid,fullname)").then(
        onlineWebApi.retrieveRecord("account", testRecordId, "?$select=name,telephone1&$expand=primarycontactid($select=contactid,fullname)").then(

            handleRetriveRecordSuccess, handleRetriveRecordFailure
        );
    },

    //This function retrive Multiple record with fitler applied.
    retriveMultipleRecords: function () {
        "use strict";
        debugger;
        function handleRetriveMultipleRecordsSuccess(result) {
            // var testStringDisplay = "";
            for (var i = 0; i < result.entities.length; i++) {
                // testStringDisplay = result.entities[i] + " ";
                // alert(JSON.stringify(result.entities[i].name));
                alert(JSON.stringify(JSON.stringify(result.entities[i].fullname)));

            }
            // alert(testStringDisplay);
        }

        function handleRetriveMultipleRecordsFailure(error) {
            alert(error.message);
        }

        // Xrm.WebApi.retrieveMultipleRecords("account", "?$select=name&$top=3").then(
        Xrm.WebApi.retrieveMultipleRecords("account", "?$select=name,primarycontactid&$filter=_primarycontactid_value eq 0d10722b-bdd9-ed11-a7c7-6045bd098c12").then(
            handleRetriveMultipleRecordsSuccess, handleRetriveMultipleRecordsFailure
        );
    },

    //code Written on 8/6/23.
    retrieveMultipleRecordsUsingXML: function () {
        "use strict";
        debugger;

        var fetchXML =
            `?fetchXml=<fetch returntotalrecordcount="true">
            <!-- Table -->
            <entity name="account">
                <!-- Columns -->
                <attribute name="accountid" />
                <attribute name="name" />
            </entity>
        </fetch>`;

        function handleRetriveMultipleRecordsUsingXMLSuccess(result) {
            for (var i = 0; i < result.entities.length; i++) {
                // console.log(result.entities[i].name);
                alert(result.entities[i].name);
            }
        }

        function handleRetriveMultipleRecordsUsingXMLFailure(error) {
            // console.log(error.message);
            alert("Error Message" + error.message);
        }

        Xrm.WebApi.retrieveMultipleRecords("account", fetchXML).then(
            handleRetriveMultipleRecordsUsingXMLSuccess, handleRetriveMultipleRecordsUsingXMLFailure
        );
    },

    updateRecord: async function(executionContext){
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();

        var testRecordIdTwo = formContext.data.entity.getId();

        var dataTwo = {
            "name": "Rasik"
        }

          function handleUpdateRecordSucess(result){
            alert("Account updated successfully");
        }

         function handleUpdateRecordFailure(error) {
            alert("Error Message: " + error.message);
        }

         await Xrm.WebApi.updateRecord("account",  testRecordIdTwo,  dataTwo).then(
             handleUpdateRecordSucess,  handleUpdateRecordFailure
        );
    }

}

