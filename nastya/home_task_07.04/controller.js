var controller = {
    init:function(){
        view.init();  // 
    },
    updateName: function(name){ // method for render input's value in HTML
        model.name = name;
        view.acception();
        view.render();
        view.fillinputOne();
    },
    checkEmail: function(email){  // validation e-mail input
        var regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/ig;
        if(regExp.test(email) === true){
            view.acception();
             view.fillinputTwo();
        } 
    },

    checkForm: function(name, email){ // method for button activation
        if( name != undefined && name != '' && email != '' && email != undefined){
                view.success();
        }
        
    }
    
}

controller.init();
