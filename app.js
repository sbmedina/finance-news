window.onload=function(){

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var repeatPass = document.getElementById('repeatPass');
    var age = document.getElementById('age');
    var phone = document.getElementById('phone');
    var adress = document.getElementById('adress');
    var city = document.getElementById('city');
    var zipCode = document.getElementById('zipCode');
    var idNumber = document.getElementById('idNumber');
    var wName = document.getElementById('wName');
    var wEmail = document.getElementById('wEmail');
    var wPassword = document.getElementById('wPassword');
    var wRepeat = document.getElementById('wRepeat');
    var wAge = document.getElementById('wAge');
    var wPhone = document.getElementById('wPhone');
    var wAdress = document.getElementById('wAdress');
    var wCity = document.getElementById('wCity');
    var wZipCode = document.getElementById('wZipCode');
    var wIdNumber = document.getElementById('wIdNumber');
    var submitForm = document.getElementById('submitForm');
    var hi = document.getElementById('hi');
    var form = document.getElementById('form');
    // greeting message
    name.addEventListener('keyup',function(e){
        hi.innerHTML = e.target.value;
    })
    // form validation
    name.onblur = validateName;
    function validateName(){        
        if(!(/^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/.test(name.value)) || name.value.length < 6){            
            wName.textContent = 'Name should have more than 6 characters and a space between words';
            wName.style.color = 'red';
            wName.style.display = 'block';
        }        
    }
    email.onblur = validateEmail;
    function validateEmail(){
        if(!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email.value))){
            wEmail.textContent = 'Insert a valid email';
            wEmail.style.color = 'red';
            wEmail.style.display = 'block';
        }
    }
    password.onblur = validatePassword;
    function validatePassword(){
        if(!(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password.value))){
            wPassword.textContent = 'Password should have at least 8 characters (letters and numbers)';
            wPassword.style.color = 'red';
            wPassword.style.display = 'block';
        } else if (password.value);
    }
    repeatPass.onblur = repeatPassword;
    function repeatPassword(){
        if(repeatPass.value !== password.value){
            wRepeat.textContent = 'The password does not match';
            wRepeat.style.color = 'red';
            wRepeat.style.display = 'block';
        }
    }
    age.onblur = validateAge;
    function validateAge(){
        if(age.value >= 18 && Number.isInteger){
        } else {
            wAge.textContent = 'You should have at lest 18 years and insert a integer number';
            wAge.style.color = 'red';
            wAge.style.display = 'block';
        }
    }
    phone.onblur = validatePhone;
    function validatePhone(){
        if(phone.value.length <7){
            wPhone.textContent = 'Phone should have at least 7 numbers';
            wPhone.style.color = 'red';
            wPhone.style.display = 'block';
        }
        if (!isNaN(phone)){
            wPhone.textContent = 'Only numbers accepted';
            wPhone.style.color = 'red';
            wPhone.style.display = 'block';
        }
    }
    adress.onblur = validateAdress;
    function validateAdress(){
        if( !(/^[a-zA-Z0-9]+(?:\s[a-zA-Z0-9]+)+$/.test(adress.value)) || adress.value.length <5){
            wAdress.textContent = 'Should have at least 5 characters, letters, numbers and space in between';
            wAdress.style.color = 'red';       
            wAdress.style.display = 'block';
        }
    }
    city.onblur = validateCity;
    function validateCity(){        
        if(city.value.length < 3){            
            wCity.textContent = 'City should have more than 3 characters';
            wCity.style.color = 'red';
            wCity.style.display = 'block';
        }        
    }
    zipCode.onblur = validateZipCode;
    function validateZipCode(){        
        if(zipCode.value.length < 3){            
            wZipCode.textContent = 'Zip code should have more than 3 characters';
            wZipCode.style.color = 'red';
            wZipCode.style.display = 'block';
        }        
    }
    idNumber.onblur = validateId;
    function validateId(){
        if(idNumber.value.length <7 || idNumber.value.length >8){
            wIdNumber.textContent = 'Id should have between 7 and 8 numbers';
            wIdNumber.style.color = 'red';
            wIdNumber.style.display = 'block';
        }
        if (!isNaN(idNumber)){
            wIdNumber.textContent = 'Only numbers accepted';
            wIdNumber.style.color = 'red';
            wIdNumber.style.display = 'block';
        }
    }
    // hide messages
    name.onfocus = function(){
        wName.style.display = 'none';
    }
    email.onfocus = function(){
        wEmail.style.display = 'none';
    }
    password.onfocus = function(){
        wPassword.style.display = 'none';
    }
    repeatPass.onfocus = function(){
        wRepeat.style.display = 'none';
    }
    age.onfocus = function(){
        wAge.style.display = 'none';
    }
    phone.onfocus = function(){
        wPhone.style.display = 'none';
    }
    adress.onfocus = function(){
        wAdress.style.display = 'none';
    }
    city.onfocus = function(){
        wCity.style.display = 'none';
    }
    zipCode.onfocus = function(){
        wZipCode.style.display = 'none';
    }
    idNumber.onfocus = function(){
        wIdNumber.style.display = 'none';
    }
    //submit alert
    form.addEventListener('submit', function(){
        let validForm = [];
        let notValidForm = [];

        if(!validateName(name.value)){
            notValidForm.push('Name is not valid');        
        } else if (validForm.push('Name: ' + name.value))

        if(!validateEmail(email.value)){
            notValidForm.push('Email is not valid');        
        } else if (validForm.push('Email: ' + email.value))

        if(!validatePassword(password.value)){
            notValidForm.push('Password is not valid');        
        } else if (validForm.push('Password: ' + password.value))

        if(!repeatPassword(password.value)){
            notValidForm.push('Password does not match');
        }        
                        
        if(!validateAge(age.value)){
            notValidForm.push('Age is not valid');        
        } else if (validForm.push('Age: ' + age.value))
        
        if(!validatePhone(phone.value)){
            notValidForm.push('Phone is not valid');        
        } else if (validForm.push('Phone: ' + phone.value))

        if(!validateCity(city.value)){
            notValidForm.push('City is not valid');        
        } else if (validForm.push('City: ' + city.value))

        if(!validateZipCode(zipCode.value)){
            notValidForm.push('Zip code is not valid');        
        } else if (validForm.push('Zip code: ' + zipCode.value))

        if(!validateZipCode(idNumber.value)){
            notValidForm.push('Id is not valid');        
        } else if (validForm.push('Id code: ' + idNumber.value))
       

        alert(validForm + notValidForm)

    });
}