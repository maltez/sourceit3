var validate = function(name, email, btnSubmit) {

    var statusName = false;
    var statusEmail = false;

    if (/.+@.+\..+/i.test(email) === true) {
        view.validEmail();
        statusEmail = true;
    } 

    if (name != undefined && name != '') {
        view.validName();
        statusName = true;
    } 

    if (statusName && statusEmail) {
        view.validForm();
    }

    var model = data.get(name, email, btnSubmit);
    view.render(model);
}


