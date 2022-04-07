var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onclick = validatePassword;
validatePassword()
  
  
  /*var txtPassword = document.getElementById("psw");
  var txtConfirmPassword = document.getElementById("psw-repeat");
  function validation()
  {
      if (txtPassword.value != txtConfirmPassword.value) 
      {
          txtConfirmPassword.setCustomValidity("Passwords do not match.");
      }
      else
      {
          txtConfirmPassword.setCustomValidity("Passwords is matched.");
      }
  }
*/
/*
function search_items() {
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('timeZone');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}*/