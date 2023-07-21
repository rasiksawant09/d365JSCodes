var rasik = {
    addFunctionOnLoad: function(executionContext){
        debugger;
        var testString = "Rasik";
        var formContext = executionContext.getFormContext();
        function myFunction(){
            alert("My Function run after load.");
        }
        formContext.ui.addOnLoad(myFunction);
        alert(formContext.ui.getFormType());
        alert(formContext.ui.getViewPortHeight());
        formContext.ui.setFormEntityName(testString);
        // alert(formContext.data.process.getActiveProcess());
        var activeProcess = formContext.data.process.getActiveProcess();
        alert(activeProcess.getId());
        alert(activeProcess.getName());

        // formContext.ui.close();
    }

};