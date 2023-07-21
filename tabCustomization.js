userRasik = {
    //the below function contains the tab realted customizations.
    tabCustomizaion: function(executionContext){
        var formContext = executionContext.getFormContext();
        var tabObj = formContext.ui.tabs.get("SUMMARY_TAB");
        
        function handleTabchange(){
            // console.log("handleTabChange even triggered");
            alert("handleTabChange even triggered");
        }
        
        tabObj.addTabStateChange(handleTabchange);
        alert(tabObj.getContentType());
        var refObj = tabObj.getParent();
        alert(refObj.getFormType());
        // tabObj.setContentType("singleComponent");

        //SECTION CUSTOMIZATION
        var sectionObj = tabObj.sections.get("ACCOUNT_INFORMATION");
        // alert(sectionObj.getLabel());
        // sectionObj.setLabel("Account Information");



    }
};