/* 
The following codes contains five functions the first function EnableFields is to enable the fields on teh bais sof userrole.
2. the Second function SetActiveStageOnRejection sets the stage on the active stage on the basis of various fields.
3. the Third function hideSections hide sections on active stage.
4. The fourth function hideTab on the Apporvals stage and also hides the navigation menus tabs.
5. The fifth function errorAlert shows an error message with a dialog box opening.

*/

var sample = sample || {};
sample.opportunity = sample.opportunity || {};
sample.opportunity.Form = sample.opportunity.Form || {};

sample.opportunity.Form = function (form) {
    form.EnableFields = async function (executionContext) {
        debugger;
        var formContext = executionContext.getFormContext();
        var opportunityId = formContext.data.entity.getId();

        var userrolerecords = await Xrm.WebApi.retrieveMultipleRecords("pmx_userrole", "?$select=pmx_submittask&$filter=(_pmx_opportunity_value eq '" + opportunityId + "' and pmx_role eq 893550000)");
        var allsubmitted = userrolerecords.entities.every(record => record.pmx_submittask === true);
        if (allsubmitted) {
            formContext.getControl("pmx_senddesignsforinternalapproval")?.setDisabled(false);
        }
        else {
            formContext.getControl("pmx_senddesignsforinternalapproval")?.setDisabled(true);
        }
    },
        form.SetActiveStageOnRejection = function (executionContext) {
            try {
                debugger;
                var formContext = executionContext.getFormContext();
                var activeStage = formContext.data.process?.getActiveStage();
                if (activeStage == null) return;
                if (activeStage?.getName() != "Approvals") return;

                var boqInternalApprovalStatus = formContext.getAttribute("pmx_boqforinternalapproval")?.getValue();
                var boqCustomerApprovalStatus = formContext.getAttribute("pmx_boqforcustomerapproval")?.getValue();


                if (boqInternalApprovalStatus == 893550001) {
                    formContext.getControl("pmx_senddesignsforcustomerapproval")?.setDisabled(false);
                }
                else {
                    formContext.getControl("pmx_senddesignsforcustomerapproval")?.setDisabled(true);
                }
                if (boqInternalApprovalStatus != 893550002 && boqCustomerApprovalStatus != 893550002) return;
                if (boqInternalApprovalStatus == 893550002) {
                    formContext.getAttribute("pmx_sendboqforinternalapproval")?.setValue(false);
                    formContext.getAttribute("pmx_boqforinternalapproval")?.setValue(null);
                }
                if (boqCustomerApprovalStatus == 893550002) {
                    formContext.getAttribute("pmx_sendboqforcustomerapproval")?.setValue(false);
                    formContext.getAttribute("pmx_sendboqforinternalapproval")?.setValue(false);
                    formContext.getAttribute("pmx_boqforinternalapproval")?.setValue(null);
                    formContext.getAttribute("pmx_boqforcustomerapproval")?.setValue(null);
                }

                formContext.data.process.setActiveStage("74F8D8D6-BA03-4793-B636-47BB9C029AE1");
            }
            catch (error) {
                form.errorAlert(error);
            }
        },
        //the function hides section on the opportunity stage.
        form.hideSections = function (executionContext) {
            "use strict";
            debugger;
            var formContext = executionContext.getFormContext();

            if (formContext.data.process.getActiveProcess() === null) return;

            var teamTab = formContext.ui.tabs.get("tab_7");
            // var activeStage = formContext.data.process.getActiveStage();
            // var activeStageName = activeStage.getName();
            var activeStageName = formContext.data.process.getActiveStage().getName();

            if (activeStageName === "Opportunity") {
                teamTab.sections.get("tab_7_section_3").setVisible(false);
                teamTab.sections.get("tab_7_section_4").setVisible(false);
                teamTab.sections.get("tab_7_section_5").setVisible(false);
            }else{
                return;
            }
        },
        // the function hides tab also the navigation menu tabs (related taba)
        form.hideTab = function (executionContext) {
            "use strict";
            debugger;
            var formContext = executionContext.getFormContext();
            
            if(formContext.data.process.getActiveProcess() === null) return;

            var activeStageName = formContext.data.process.getActiveStage().getName();
            if (activeStageName === "Approvals") {

             formContext.ui.tabs.get("Summary").setVisible(false);
             formContext.ui.tabs.get("OpportunityLinesTab").setVisible(false);
             formContext.ui.tabs.get("tab_6").setVisible(false);

                var navs = formContext.ui.navigation.items.get();
                for (var i in navs) {
                    var nav = navs[i];
                    nav.setVisible(false);
                }
            } else {
                return;
            }
        },
        form.errorAlert = function (error) {
            var alertStrings = { confirmButtonLabel: "OK", text: error.message, title: "Information" };
            var alertOptions = { height: 120, width: 260 };
            Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
        };
    return form;
}(sample.opportunity.Form);