var userRoles = {
    showGlobalNotifications: function(executionContext) {
        var notificationObj = {
            type: 2,
            level: 3,
            message: "This is a global Notification",
            showCloseButton: true,
        }

        Xrm.App.addGlobalNotification(notificationObj).then(
            function Success(result){
                console.log("Notification created with the Id" + result);
                window.setTimeout(function () {
                    Xrm.App.clearGlobalNotification(result);   
                },5000);
            },
            
            function Errors(error){
                console.log("This is the error message" + error.message);
            }
        );

    }
};

