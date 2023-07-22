var userRole = {
    enableDisableActivateQuoteButton: function(primaryControl){
        var formContext = primaryControl;

        if(formContext.getAttribute("rgitp_customactivatequote").getValue() === null){
            return false;
        }

        var activateOptionValue = formContext.getAttribute("rgitp_customactivatequote").getValue();
        if(activateOptionValue === true){
            return true;
        }else{
            return false;
        }
    }
}