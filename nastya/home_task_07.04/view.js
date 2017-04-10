var view = {

    init: function(){ // get data from form
        this.inputOne = document.getElementById('name-input');
        this.inputTwo = document.getElementById('email');
        this.btn = document.getElementById('btn');
        this.btn.disabled = true; 
        this.name = document.getElementById('name');
        this.inputOne.addEventListener('change', function(){
            return controller.updateName(this.inputOne.value); // Call controller method for render name from input 1
        }.bind(this));
        this.render();
       
        this.inputTwo.addEventListener('change', function(){ // Call controller method for check E-mail
           return controller.checkEmail(this.inputTwo.value);
        }.bind(this))
    },

    render: function(){
        this.name.innerHTML = model.name; // render property name of model in HTML
    },

    acception: function(){
       return controller.checkForm(this.inputOne.value, this.inputTwo.value); //  form validation
        
    },
        // button activation and change inputs borders after validation 
    success: function(){
        this.btn.disabled = false;   
    },
    fillinputOne: function(){
        this.inputOne.style.border = '2px solid #ccc'; 
    },
    fillinputTwo: function(){
        this.inputTwo.style.border = '2px solid #ccc';
    }
   
}

