var userRoles = {
    // this function restrict user to change the stage of the BPF.
    customizeTest3Flow: function(executionContext){
        "use strict";
        var formContext = executionContext.getFormContext();
        debugger;
        
        function handlePreviousStage(executionContext){
            var bpfargs = executionContext.getEventArgs();
            if(bpfargs.getDirection() === "Previous"){
                bpfargs.preventDefault();
                var alertStrings = { 
                    confirmButtonLabel: "OK", 
                    text: "Back stage movement is not allowed", 
                    title: "ALERT" 
                };

                var alertOptions = { 
                    height: 120, 
                    width: 260 
                };

                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
            }

            if(bpfargs.getDirection() === "Next"){
                bpfargs.preventDefault();
                var alertStrings = { 
                    confirmButtonLabel: "OK", 
                    text: "Next stage movement is not allowed", 
                    title: "ALERT" 
                };

                var alertOptions = { 
                    height: 120, 
                    width: 260 
                };

                Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);


            }

        }

        function handleStatusChange(executionContext){
            var status = executionContext.getEventArgs();
            status.preventDefault();
            var alertStrings = {
                confirmButtonLabel: "OK",
                text: "This Operation is not allowed to continue",
                title: "WARNING Status Change!",
            };

            var alertOptions = {
                height: 120,
                width: 260
            };
            Xrm.Navigation.openAlertDialog(alertStrings,alertOptions);
        }

        function myFunction(){
            alert("Hello on Change ");
        }

        function handleStageSelected(){
            alert("Handled Stage Selection");
        }

        function switchBPF(formContext){
            var fieldValue = formContext.getAttribute("rgitp_switchbpf").getValue();

            if(fieldValue === 1){
                formContext.data.process.setActiveProcess("7b96B926B9-3C04-EE11-8F6D-6045BD09045F");
            }else{
                formContext.data.process.setActiveProcess("7b57594016-67DF-ED11-A7C7-6045BD098C12");
            }
        }

        
        
        // NOTE: Code are commented for reference and educational purposes.
        // formContext.data.process.addOnPreStageChange(handlePreviousStage);
        // formContext.data.process.addOnPreProcessStatusChange(handlePreviousStage);
        // formContext.data.process.removeOnPreStageChange(handlePreviousStage);
        // formContext.data.process.addOnPreProcessStatusChange(handleStatusChange);
        // formContext.data.process.addOnStageChange(myFunction);
        // formContext.data.process.addOnStageSelected(handleStageSelected);
        // alert(formContext.data.process.getId());
        // alert(procObj.getId());

        // formContext.ui.formSelector
        var formItem = formContext.ui.formSelector.getCurrentItem();
        alert(formItem.getId());
        alert(formItem.getLabel());
        alert(formItem.getVisible());
        // alert(formItem.navigate());
        // formItem.setVisible(false);

        // formContext.ui.headerSection
        // var headerItem = formContext.ui.headerSection.getBodyVisible();
        // console.log(headerItem);
        // formContext.ui.headerSection.setBodyVisible(false);
        // formContext.ui.headerSection.setCommandBarVisible(false);
        // formContext.ui.headerSection.setTabNavigatorVisible(false);
        // var labelName = formContext.ui.navigationItem.getLabel();
        // alert(labelName);

        var processState = formContext.ui.process.getDisplayState();
        console.log(processState);



    }
};
