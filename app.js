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
    var submit = document.getElementById('submit');
    var hi = document.getElementById('hi');
    // greeting message
    name.addEventListener('keyup',function(e){
        hi.innerHTML = e.target.value;
    })
    // form validation
    name.onblur = function(){        
        if(name.value.length < 6){            
            wName.textContent = 'Name should have more than 6 characters';
            wName.style.color = 'red';
            wName.style.display = 'block';
        } else if (name.value){}
    }
    email.onblur = validateEmail;
    function validateEmail(){
        if(!(/\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)/.test(email))){
            wEmail.textContent = 'Insert a valid email';
            wEmail.style.color = 'red';
        }
    }
    password.onblur = validatePassword;
    function validatePassword(){
        if(password.value.length <= 8){
            wPassword.textContent = 'Password should have at least 8 characters';
            wPassword.style.color = 'red';
        } else if (password.value);
    }
    repeatPass.onblur = repeatPassword;
    function repeatPassword(){
        if(repeatPass.value !== password.value){
            wRepeat.textContent = 'The password does not match';
            wRepeat.style.color = 'red';
        }
    }
    age.onblur = validateAge;
    function validateAge(){
        if(age.value <18 || age.value != Number.isInteger){
            wAge.textContent = 'You should have at lest 18 years and insert a integer number';
            wAge.style.color = 'red';
        }
    }
    phone.onblur = validatePhone;
    function validatePhone(){
        if(phone.value.length <7){
            wPhone.textContent = 'Phone should have at least 7 numbers';            
        }if (!isNaN(phone)){
            wPhone.textContent = 'Only numbers accepted';
        }
        wPhone.style.color = 'red';
    }
    adress.onblur = validateAdress;
    function validateAdress(){
        if(adress.value.length <5){
            wAdress.textContent = 'Adress should have at least 5 characters';
            wAdress.style.color = 'red';       
        }if(!isNaN(adress)){
    }
    city.onblur = validateCity;
    function validateCity(){
        if(city.value.length <3){
            wCity.textContent = 'City should have at least 3 characters';
        }
        wCity.style.color = 'red';
    }
    zipCode.onblur = validateZipCode;
    function validateZipCode(){
        if(zipCode.value.length <3){
            wZipCode.textContent = 'Zip code should have at least 3 characters';
        }
        wZipCode.style.color = 'red';
    }
    idNumber.onblur = validateId;
    function validateId(){
        if(idNumber.value.length <=8 && idNumber.value.length >=7 && idNumber.value % 1 == 0 ){
            wIdNumber.textContent = 'Id should have between 7 and 8 digits';
        }
        wIdNumber.style.color = 'red';
    }
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
        wCity.style.display = '';
    }
    zipCode.onfocus = function(){
        wZipCode.style.display = '';
    }
    idNumber.onfocus = function(){
        wIdNumber.style.display = '';
    }
}
}