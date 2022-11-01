
var btnSubmit = document.getElementById("btn");

btnSubmit.addEventListener('click',function(){
    var loginForm = document.getElementById('form');
    var ReferId = document.getElementById("Referid").value;
    var userName = document.getElementById("username").value;
    var emailAddress = document.getElementById("email").value;
    var selectCountry = document.getElementById("country").value;
    var phoneNumbar = document.getElementById("numbar").value;
    var passWord = document.getElementById("password").value;
    var passWord2 = document.getElementById("password2").value;
    
    if(ReferId==''){
        alert('refer id is required');
    }

  else  if (userName==''){
        alert('username is required');
    }
    else   if (emailAddress==''){
        alert('please enter email address');
    }
    else   if (selectCountry==''){
        alert('select your country');
    }

    else   if (phoneNumbar==''){
        alert('numbar is required');
    }

    else  if (passWord==''){
        alert('password is required');
    }
    else  if (passWord2==''){
        alert('password2 is required');
    }

    });

