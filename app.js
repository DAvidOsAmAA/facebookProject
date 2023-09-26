
  function submit(){
    var userNameInput = $("#firstName");
    var errormes =$("#errormes");
    var regexp = new RegExp("^[a-zA-Z]{3,5}$").test(userNameInput.val())
    if(regexp){
      $(userNameInput).css("border","2px solid green");
      $(errormes).html("valid");
      $(errormes).css("color","green")
      
    }else{
      $(userNameInput).css("border","2px solid red");
      $(errormes).html("write char between 3 to 5");
      $(errormes).css("color","red");
    }




    var lastNameInput = $("#lastName");
    var LastNameError =$("#lastNameError");
    var regexplastName = new RegExp("^[a-zA-Z]{3,5}$").test(lastNameInput.val())
    if(regexplastName){
      $(lastNameInput).css("border","2px solid green");
      $(LastNameError).html("valid");
      $(LastNameError).css({"color":"green" , "position":"relative","left":"5%"});
    }else{
      $(lastNameInput).css("border","2px solid red");
      $(LastNameError).html("write char between 3 to 5");
      $(LastNameError).css({"color":"red" , "position":"relative","left":"5%"});
    }




    var emailInput= $("#eamilInput");
    var emailerror = $("#emailEror");
    var reEmailError = $("#reEmailError");
    var reEmail =$("#reEmail")
    var regexpemail = new RegExp("[a-zA-Z]{0,5}@[a-zA-Z]{0,5}(.com|.net)").test(emailInput.val());
    if((regexpemail)&&($("#reEmail").val()==emailInput.val())){
      $(emailInput).css("border","2px solid green");
      $(reEmail).css("border","2px solid green");
      $(emailerror).html("valid");
      $(emailerror).css("color","green");
      $(reEmailError).html("valid");
      $(reEmailError).css("color","green");
      localStorage.setItem('email', emailInput.val());
    }else{
      $(emailInput).css("border","2px solid red");
      $(emailerror).html(" name @ example .com or net or not indentical with repeat data ");
      $(emailerror).css("color","red");
      $(reEmail).css("border","2px solid red");
      $(reEmailError).html(" name @ example .com or net or not indentical with repeat data");
      $(reEmailError).css("color","red")
    }

var passwordInput = $("#passwordInput");
var passwordError = $("#passwordError");
var RegExppassword = new RegExp("^[a-zA-Z]{1,5}[0-9]+$").test(passwordInput.val());
if(RegExppassword){
  $(passwordInput).css("border","2px solid green");
  $(passwordError).html("valid");
  $(passwordError).css("color","green");
  localStorage.setItem('password', passwordInput.val());
}else{
  $(passwordInput).css("border","2px solid red");
  $(passwordError).html("you must start with at least 1 to 5 char and 1 or more num ");
  $(passwordError).css("color","red");
}

var day = $("#day").val();
var dayError = $("#dayerror");
if(day <= 31){
  $(day).css("border","2px solid green");
  $(dayError).html("valid");
  $(dayError).css("color","green")}
  else{
    $(day).css("border","2px solid red");
    $(dayError).html("you must start with at least 1 to 5 char and 1 or more num ");
    $(dayError).css("color","red");
  }


var month = $("#month").val();
var monthError = $("#monthError");
if(month <= 12){
  $(month).css("border","2px solid green");
  $(monthError).html("valid");
  $(monthError).css({"color":"green","position":"relative","left":"10%"})}
  else{
    $(month).css("border","2px solid red");
    $(monthError).html("must be 1 to 12 ");
    $(monthError).css({"color":"red","position":"relative","left":"10%"});
  }


  var year =$("#year").val();
  var yearError = $("#yearError");
  if(year < 2004){
    $(year).css("border","2px solid green");
    $(yearError).html("valid");
    $(yearError).css({"color":"green","position":"relative","left":"24%"})
  }else{
    $(year).css("border","2px solid red");
    $(yearError).html("must be up 18 year ");
    $(yearError).css({"color":"red","position":"relative","left":"24%"});
    }
  }



function login(){
  $('#lognform').submit(function(e) {
    e.preventDefault();
    var storedUsername = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var username = $('#email').val();
    var password = $('#password').val();
  if (username === storedUsername && password === storedPassword) {
    window.open("home.html");
  }else{
    alert("invalid");
  }
  });
}




