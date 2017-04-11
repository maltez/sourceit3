var view = {
    init: function() { 
        this.inputName = document.getElementById('name');
        this.inputEmail = document.getElementById('email');
        this.btnSubmit = document.getElementById('btnSubmit');
        this.from_name = document.getElementById('from_name');
        
        this.inputName.addEventListener('keypress', function() { 
            validate(this.inputName.value, this.inputEmail.value, this.btnSubmit);
        }.bind(this));

        this.inputEmail.addEventListener('change', function() { 
            validate(this.inputName.value, this.inputEmail.value, this.btnSubmit);
        }.bind(this));
    },

    render: function(model){
        for (var i = 0; i < model.length; i++) {
            from_name.innerHTML = model[i].name;
        }
    },

    validName: function() {
        this.inputName.style.border = '2px solid green'; 
    },

    validEmail: function() {
        this.inputEmail.style.border = '2px solid green'; 
    },

    validForm: function() {
        this.btnSubmit.style.border = '2px solid green'; 
    }
   
}



window.onload = function() {
    view.init();
}