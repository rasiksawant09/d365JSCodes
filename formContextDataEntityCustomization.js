// var userRoles = {
    // formContextDataEntity: function (executionContext){
        function formContextDataEntity (executionContext) {
        debugger;
        var formContext = executionContext.getFormContext();
        // formContext.data.entity.addOnPostSave(myFunction);

        formContext.data.entity.addOnSave(myFunction);

        var xmlData = formContext.data.entity.getDataXml();

        formContext.data.entity.getEntityName();

        var test = formContext.data.entity.getEntityReference();
        alert(test.entityType);
        alert(test.id);
        alert(test.name);

        alert(formContext.data.entity.getId());

        alert(formContext.data.entity.getIsDirty());

        alert(formContext.data.entity.getPrimaryAttributeValue());
        alert(formContext.data.entity.isValid());

        // formContext.data.entity.removeOnPostSave(myFunction);
        formContext.data.entity.removeOnSave(myFunction);
        
        alert(formContext.ui.navigationItem.getId());

        function myFunction(){
            alert('Success');
        }

    }
// }