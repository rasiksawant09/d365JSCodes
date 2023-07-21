function switchBPF(executionContext){
    //this code is used to switch the BPF.
    var formContext = executionContext.getFormContext();
    debugger;
    var fieldValue = formContext.getAttribute("rgitp_switchbpf").getValue();
    //var value1 = "{7b96B926B9-3C04-EE11-8F6D-6045BD09045F}";
    //var value2 = "{7b57594016-67DF-ED11-A7C7-6045BD098C12}";

    if(fieldValue === 1){
        formContext.data.process.setActiveProcess("7b96B926B9-3C04-EE11-8F6D-6045BD09045F");
    }else{
        formContext.data.process.setActiveProcess("7b57594016-67DF-ED11-A7C7-6045BD098C12");
    }
}