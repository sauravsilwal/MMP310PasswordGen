//variables
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*=-_';
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var generate = document.getElementById("generate");
var yourPassword = document.getElementById("yourPassword"); 
//button
generate.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += numbers : '';
    (symBox.checked) ? characters += symbols : '';
    yourPassword.value = password(charNum.value, characters);
});
//randomize
function password(l,characters){
		var pw = '';
    for(var i = 0; i<l; i++){
    		pw += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pw;
}



/*
function generatePassword() {
	// create password
	let password = "";
	
	for (let i = 0; i < 10; i++) {
		const n = Math.floor(Math.random() * alphabet.length);
        password += alphabet[n];
	}
    
	// display password
	displayPassword.textContent = password;   
}
*/


