/* 
The below code as some methods running on OnSave and OnLoad Event and starts with namesapce userRole.
The  below code as get and set methods of different data types.
Moreover it has two methods.
    1. createAccountButtonClick method creates a account on button click event.
    2. createEmailButtonClick method creates a email on button click event.
Also this code has function realted to Xrm.Utility methods.
*/

var userRole = {
    optionSetCustomizations: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();

        var valueOfOptionSet = formContext.getAttribute('rgitp_foodchoice')?.getValue();
        console.log(valueOfOptionSet);
        var textofOptionSet = formContext.getAttribute('rgitp_foodchoice')?.getText();
        console.log(textofOptionSet);

        var afdtTest = "Both";
        var optionSetValues = formContext.getAttribute('rgitp_foodchoice')?.getOptions();

        for (var i = 0; i < optionSetValues.length; i++) {
            if (optionSetValues[i].text === afdtTest) {
                formContext.getAttribute('rgitp_foodchoice')?.setValue(optionSetValues[i].value);
                console.log("Succesfully updated optionset value");
            }
        }


    },

    autoNumberCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute('rgitp_afdtautonumber')?.getValue() !== null) {
            var valueOfAutoNumber = formContext.getAttribute('rgitp_afdtautonumber').getValue();

        } else {
            alert("The Auto number value is not filled");
            var setValueofAutoNumber = formContext.getAttribute('rgitp_afdtautonumber')?.setValue("AFDT-1000");
            console.log("Value updated successfully");
            return;
        }




    },

    wholeNumberCustomization: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();
        if (formContext.getAttribute("rgitp_afdtdecimalnumber")?.getValue() === null) {
            var decimalSet = formContext.getAttribute("rgitp_afdtdecimalnumber")?.setValue("250");
            console.log("Decimal Value Set" + decimalSet);
        } else {
            var decimalSetValue = formContext.getAttribute("rgitp_afdtdecimalnumber")?.getValue();
            console.log(decimalSetValue);
        }
    },

    dateAndTime: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();
        if (formContext.getAttribute("rgitp_afdtdateandtime")?.getValue() !== null) {
            var dateAndTimeValue = formContext.getAttribute("rgitp_afdtdateandtime")?.getValue();
            console.log(dateAndTimeValue);
            console.log(dateAndTimeValue.getHours());
            console.log(dateAndTimeValue.getMinutes());
            console.log(dateAndTimeValue.getSeconds());
            console.log(dateAndTimeValue.getFullYear());
            console.log(dateAndTimeValue.getMonth()); // it returns value.(number)
            console.log(dateAndTimeValue.getDate()); // it returns value(number)
            console.log(dateAndTimeValue.getDay()); // it returns value(number)


        } else {
            var d = new Date();
            formContext.getAttribute("rgitp_afdtdateandtime")?.setValue(d);
            console.log("Done Rasik");
            return;
        }
    },

    date: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();
        if (formContext.getAttribute("rgitp_afdtdate")?.getValue() !== null) {
            var dateValue = formContext.getAttribute("rgitp_afdtdate")?.getValue();
            console.log(dateValue);
        } else {
            var dd = new Date();
            formContext.getAttribute("rgitp_afdtdate")?.setValue(dd);
        }
    },

    durationCustomization: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdtduration")?.getValue() !== null) {
            var durationValue = formContext.getAttribute("rgitp_afdtduration")?.getValue();
            console.log(durationValue);
        } else {
            var durationSetValue = formContext.getAttribute("rgitp_afdtduration").setValue(2880);  //if value is not set it is set undefined.
            console.log(durationSetValue);
            return;
        }
    },

    floatCustomization: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdtfloat")?.getValue() !== null) {
            var floatValue = formContext.getAttribute("rgitp_afdtfloat")?.getValue();
            console.log(floatValue);
            var setFloatValue = formContext.getAttribute("rgitp_afdtfloat")?.setValue(0.009);
            console.log(setFloatValue);
        }
    },

    phoneNumberCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdtphonenumber")?.getValue() !== null) {
            var phoneNumberValue = formContext.getAttribute("rgitp_afdtphonenumber")?.getValue();
            console.log(phoneNumberValue);
        } else {
            var phoneNumberSetValue = formContext.getAttribute("rgitp_afdtphonenumber").setValue("9876543241");
            //phone number value should be string value.
            console.log(phoneNumberSetValue);

        }
    },

    textAreaCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdttextarea")?.getValue() !== null) {
            var textAreaValue = formContext.getAttribute("rgitp_afdttextarea")?.getValue();
            console.log(textAreaValue);
        } else {
            var message = 'This is a long message\n' +
                'that spans across multiple lines qdeqgideqodjpe iudhq\n' +
                'in the code. deqdeqnder'
            var textAreaSetValue = formContext.getAttribute("rgitp_afdttextarea")?.setValue(message);
            console.log(textAreaSetValue);
        }
    },

    urlCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdturl")?.getValue() !== null) {
            var urlValue = formContext.getAttribute("rgitp_afdturl")?.getValue();
            console.log(urlValue);
        } else {
            var urlSetValue = formContext.getAttribute("rgitp_afdturl")?.setValue("https://www.youtube.com/watch?v=zLQUp5_xZyE&t=622s"); _
            console.log(urlSetValue);
        }
    },

    timeZoneCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdttimezone").getValue() !== null) {
            var timeZoneCustomizationValue = formContext.getAttribute("rgitp_afdttimezone")?.getValue();
            console.log(timeZoneCustomizationValue);
        } else {

            return;
            // var timeZoneCustomizationSetValue = formContext.getAttribute("rgitp_afdttimezone")?.setValue();
        }
    },

    booleanChoiceCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_booleanchoice")?.getValue() !== null) {
            var booleanChoiceValue = formContext.getAttribute("rgitp_booleanchoice").getValue();
            console.log(booleanChoiceValue);
            var booleanChoiceSetValue = formContext.getAttribute("rgitp_booleanchoice").setValue(false);
        }
    },

    tickerCustomization: function (executionContext) {
        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        if (formContext.getAttribute("rgitp_afdt")?.getValue() !== null) {
            var valueOfTickerCustomization = formContext.getAttribute("rgitp_afdt").getValue();
            console.log(valueOfTickerCustomization);
        } else {
            var valueOfTickerCustomizationSet = formContext.getAttribute("rgitp_afdt").setValue("Microsoft");
        }
    },

    //task given by Subash sir.
    createAccountButtonClick: function (executionContext) {

        var entityFormOptions = {};
        entityFormOptions["entityName"] = "account";
        entityFormOptions["useQuickCreateForm"] = true;

        function handleSuccess() {
            console.log("Quick create form opened Succesfully");
        }

        function handleFailure() {
            console.log("Failed to create account");
        }

        Xrm.Navigation.openForm(entityFormOptions).then(
            handleSuccess, handleFailure
        );

    },

    showAndHideCreateAccountButton: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var formType = formContext.ui.getFormType();
        if (formType == 2) {
            return true;
        } else {
            return false;
        }

    },

    // task given by Subash sir.
    createEmailButtonClick: async function (primaryControl) {

        "use strict";
        debugger;
        // var formContext = primaryControl.getFormContext(); // ** used only in home page.
        var formContext = primaryControl; //used to access the form.


        if (formContext.getAttribute("rgitp_afdtaccountlookup")?.getValue() !== null) {
            var lookupValue = formContext.getAttribute("rgitp_afdtaccountlookup").getValue();
            console.log(JSON.stringify(lookupValue));
            var lookupValuePrimaryContactId = lookupValue[0].id;
            // var flookupValuePrimaryContactId = lookupValuePrimaryContactId.replace("{","").replace("}","");
            // console.log(flookupValuePrimaryContactId);
            console.log(lookupValuePrimaryContactId);
        } else {
            alert("Please fill the lookup value");
            return;
        }




        //Retrieve Record code starts.

        let primarycontactidValue = "";
        function handleRetrieveRecordSuccess(result) {
            // var primarycontactid = result["_primarycontactid_value"].id;
            var primarycontactid = result._primarycontactid_value;

            primarycontactidValue = primarycontactid;
            console.log(primarycontactid);
            console.log("handleRetrieveRecordSuccess");
        }

        function handleRetrieveRecordFailure(error) {
            console.log("handleRetrieveRecordFailure " + error.message);
        }

        await Xrm.WebApi.retrieveRecord("account", lookupValuePrimaryContactId, "?$select=_primarycontactid_value").then(
            handleRetrieveRecordSuccess, handleRetrieveRecordFailure
        );

        //getting the contact guid.

        if (primarycontactidValue !== null) {
            var contactGUIDFinal = "/contacts(" + primarycontactidValue + ")";
        } else {
            alert("The Primary contact for the given Account is not available");
            return;
        }




        console.log("Working");

        var data = {
            "description": "Email Created using JS",
            // "regardingobjectid_contact@odata.bind": "/contacts(8986814d-f308-ee11-8f6e-6045bd006d96)", this line was use for static coding
            "regardingobjectid_contact@odata.bind": contactGUIDFinal,

            "subject": "Test Email Creation using JS",
            "email_activity_parties": [
                {
                    // "partyid_contact@odata.bind" : "/contacts(8986814d-f308-ee11-8f6e-6045bd006d96)", this line was use for static coding
                    "partyid_systemuser@odata.bind": "/systemusers(8bb2335f-c901-ee11-8f6e-00224802a3e9)",
                    "participationtypemask": 1 //From
                },
                {
                    // "partyid_contact@odata.bind": "/contacts(8986814d-f308-ee11-8f6e-6045bd006d96)", this line was use for static coding
                    "partyid_contact@odata.bind": contactGUIDFinal,

                    // "addressused" : "rasiksawant11@gmail.com", this line was use for static coding unresoved Emails.
                    "participationtypemask": 2 //To.
                }
            ],
        };

        function handleSuccessEmail() {
            console.log("Email is created successfully");
        }

        function handleFailureEmail() {
            console.log("Email is not created successfully");
        }

        Xrm.WebApi.createRecord("email", data).then(
            handleSuccessEmail, handleFailureEmail
        );
        //alert. 
    },

    getMainformDescription: function (executionContext) {
        "use strict";
        debugger;
        var formContext = executionContext.getFormContext();

        // var recordId = formContext.data.entity.getId();
        var formItem = formContext.ui.formSelector.getCurrentItem();


        var formId = formItem.getId();

        // var formId = Xrm.Page.ui.formSelector.getCurrentItem().getId()

        var obj = Xrm.Utility.getEntityMainFormDescriptor("rgitp_allfielddatatypes", formId);
        console.log(obj);
        console.log(JSON.stringify(obj));

    },

    globalContextCustomizations: function () {
        "use strict";
        debugger;
        var clientContext = Xrm.Utility.getGlobalContext().client;


        console.log(clientContext.getClient());
        console.log(clientContext.getClientState());
        console.log(clientContext.getFormFactor());
        console.log(clientContext.isNetworkAvailable());
        console.log(clientContext.isOffline());
    },

    globalContextCustomizationsSettings: function () {
        "use strict";
        debugger;

        var organizationSettings = Xrm.Utility.getGlobalContext().organizationSettings;

        console.log(organizationSettings.attributes);
        console.log(organizationSettings.baseCurrencyId.id);
        console.log(organizationSettings.baseCurrency.name);
        console.log(organizationSettings.defaultCountryCode);
        console.log(organizationSettings.isAutoSaveEnabled);
        console.log(organizationSettings.languageId);
        console.log(organizationSettings.organizationId);
        console.log(organizationSettings.isTrialOrganization);
        console.log(organizationSettings.organizationExpiryDate);
        console.log(organizationSettings.uniqueName);
        console.log(organizationSettings.useSkypeProtocol);
        console.log(organizationSettings.fullNameConventionCode);

    },

    //user Settings.

    globalContextCustomizationsUserSettings: function () {
        "use strict";
        debugger;

        var userSettings = Xrm.Utility.getGlobalContext().userSettings;

        console.log(userSettings.dateFormattingInfo);
        console.log(JSON.stringify(userSettings.dateFormattingInfo));
    },

    globalContextCustomizationsConfigSettings: function () {
        "use strict";
        debugger;
        var setting = "MaxChildIncidentNumber";

        var globalContext = Xrm.Utility.getGlobalContext();
        var t = globalContext.getAdvancedConfigSetting(setting);
        console.log(t);
    },

    globalContextCustomizationsGetClientUrl: function () {
        "use strict";
        debugger;

        var globalContext = Xrm.Utility.getGlobalContext();
        console.log(globalContext.getClientUrl());
    },

    globalContextCustomizationsGetCurrentAppName: function () {
        "use strict";
        debugger;

        function handleCurrentAppNameSuccess(appDetials) {
            console.log(appDetials);

        }

        function handleCurrentAppNameFailure(error) {
            console.log(error.message);
        }

        var globalContext = Xrm.Utility.getGlobalContext();
        globalContext.getCurrentAppName().then(
            handleCurrentAppNameSuccess, handleCurrentAppNameFailure
        );
    },

    globalContextCustomizationsAppProperties: function () {

        "use strict";
        debugger;

        function AppPropertiesSuccess(success) {
            console.log(success);
        }

        function AppPropertiesFailure(error) {
            console.log(error);
        }

        var globalContext = Xrm.Utility.getGlobalContext();
        globalContext.getCurrentAppProperties().then(
            AppPropertiesSuccess, AppPropertiesFailure
        );
    },

    globalContextCustomizationsAppUrl: function () {
        "use strict";
        debugger;
        var globalContext = Xrm.Utility.getGlobalContext();

        console.log(globalContext.getCurrentAppUrl());
    },

    globalContextCustomizationsGetVersion: function () {
        "use strict";
        debugger;
        var globalContext = Xrm.Utility.getGlobalContext();
        console.log(globalContext.getVersion());
    },

    globalContextCustomizationsGetWebResourceUrl: function () {
        "use strict";
        debugger;

        var globalContext = Xrm.Utility.getGlobalContext();
        console.log(globalContext.getWebResourceUrl("rgitp_script_/AllFieldDataTypes/AFDTCustomization.js"));
    },

    globalContextCustomizationsIsOnPremises: function () {
        "use strict";
        debugger;

        var globalContext = Xrm.Utility.getGlobalContext();
        console.log(globalContext.isOnPremises());

        console.log(Xrm.Utility.getLearningPathAttributeName());
        console.log(Xrm.Utility.getPageContext());


    },

    globalContextCustomizationsInvokeProcessAction: async function (executionContext) {

        "use strict";
        debugger;

        // var accountId = Xrm.page.data.entity.getId();
        var formContext = executionContext.getFormContext();
        var accountId = formContext.data.entity.getId();
        var parameter = {
            AccountId: accountId,
        };

        function handleInvokeProcessActionSuccess(result){
            console.log(result);
            console.log("Invoke Process Success");
        }

        function handleInvokeProcessActionFailure(error){
            console.log(error.message);
        }

        await Xrm.Utility.invokeProcessAction("rgitp_Clone", parameter).then(
            handleInvokeProcessActionSuccess, handleInvokeProcessActionFailure,
        );



    },

    globalContextCustomizationsLookupObjects: function(executionContext){
        var formContext = executionContext.getFormContext();

        if(formContext.getAttribute("rgitp_lookupaccount")?.getValue() !== null){
            var inputLookupValue = formContext.getAttribute("rgitp_lookupaccount")?.getValue();
        }

        var lookupOptions = {
            defaultEntityType: "account",
            entityTypes: ["account"],
            allowMultiSelect:false,
            defaultViewId: "00000000-0000-0000-00aa-000010001001",
            viewIds:["00000000-0000-0000-00aa-000010001001"],
            searchText: inputLookupValue,

        };

        function handleLookupSuccess(success){
            formContext.getAttribute("rgitp_lookupaccount").setValue("Record Name " + success[0].name);
            console.log("Success lookup object");
        }

        function handleLookupFailure(error){
            console.log(error.message);
        }

        Xrm.Utility.lookupObjects(lookupOptions).then(
            handleLookupSuccess, handleLookupFailure
        );
    },

    panelCustomization: function(){

        var url = "https://www.youtube.com/";
        var title = "Youtube side panel"

        Xrm.Panel.loadPanel(url, title)
    },

    createAccountAuto: function(){

    },

    multiSelectOptionSet: function(executionContext){

        "use strict";
        debugger;

        var formContext = executionContext.getFormContext();

        var optionsetValueId = formContext.getAttribute("rgitp_afdtmultichoiceoptionset").getValue();

        var optionsetValueText = formContext.getAttribute("rgitp_afdtmultichoiceoptionset").getText();

        for(var i=0; i<optionsetValueId.length; i++) {
            console.log(optionsetValueId[i]);
        }

        for(var i=0; i<optionsetValueId.length; i++) {
            console.log(optionsetValueText[i]);
        }

        //setting a new value.
        var common = [];

        var optionText = ["Noodles","Juice"];

        var optionsetValue = formContext.getAttribute("rgitp_afdtmultichoiceoptionset").getOptions();

        for(var i=0; i< optionText.length; i++) {
            for(var j =0; j< optionsetValue.length; j++) {
                if(optionText[i] === optionsetValue[j].text){
                    common.push(optionsetValue[j].value);
                    formContext.getAttribute("rgitp_afdtmultichoiceoptionset").setValue(common);
                }
            }
        }

    }















}