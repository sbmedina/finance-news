
var name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPass = document.getElementById('repeatPass');
var age = document.getElementById('age');
var phone = document.getElementById('phone');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var zipCode = document.getElementById('zipCode');
var id = document.getElementById('id');
var error = document.getElementById('error');
var wName = document.getElementById('wName')
var wEmail = document.getElementById('wEmail')
var wPassword = document.getElementById('wEmail')
var wRepeat = document.getElementById('wRepeat')
var wAge = document.getElementById('wAge')
var wPhone = document.getElementById('wPhone')
var wAdress = document.getElementById('wAdress')
var wCity = document.getElementById('wCity')
var wZipCode = document.getElementById('wZipCode')
var wId = document.getElementById('wId')


name.onblur = function (){
    if(name.value.lenght < 6){
        wName.textContent = "Name should have more than 6 characters";
    }
}
 email.onblur = validateEmail;
function validateEmail(){
    if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))){
        wName.textContent = 'Insert a valid email';
    }
}
password.onblur = validatePassword;
function validatePassword (){
    if(password.value.lenght <= 8){
        wPassword.textContent = 'Password should have at least 8 characters';
    } else if (password.value.);
}
repeatPass.onblur = repeatPassword;
function repeatPassword (){
    if(repeatPass.value !== password.value){
        wRepeat.textContent = 'The password does not match';
    }
}
age.onblur = validateAge;
function validateAge (){
    if(age.value <18 || age.value != Number.isInteger) {
        wAge.textContent = 'You should have at lest 18 years and insert a integer number';
    }
}
phone.onblur = validatePhone
function validatePhone (){
    if(phone.value.lenght <7){
        wPhone.textContent = 'Phone should have at least 7 numbers';
    } else if (phone.value !=(' ')){
        wPhone.textContent = "Phone number can't have spaces";
    }
}
adress.onblur = validateAdress
function validateAdress(){
    if(adress.value.lenght <5){
        alert('Adress should have at least 5 characters')        
    
}
city.onblur = validateCity
function validateCity (){
    if(city.value.lenght <3){
        wCity.textContent = 'City should have at least 3 characters';
    }
}
zipCode.onblur = validateZipCode
function validateZipCode (){
    if(zipCode.value.lenght <3){
        wZipCode.textContent = 'Zip code should have at least 3 characters';
    }
}
id.onblur = validateId
function validateId (){
    if(!(/^\d[7<8]$/.test(valor))){
        wId.textContent = 'Id should have between 7 and 8 digits';
    };
}}