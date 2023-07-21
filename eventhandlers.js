var eventHandlers = {
    eventHandlers: function(executionContext) {
        "use strict";
        var formContext = executionContext.getFormContext();
        function myFunction(){
            alert("Hello");
        }
        formContext.data.process.addOnPreProcessStatusChange(myFunction);


    },
};