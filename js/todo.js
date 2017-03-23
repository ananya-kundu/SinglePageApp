var User=function(firstName,lastName,email,password,birthDate,country){
  this.firstName=firstName;
  this.lastName=lastName;
  this.email=email;
  // this.phNo=phNo;
  this.password=password;
  this.birthDate=birthDate;
  this.country=country;
  //this.gender=gender;
};


$(document).ready(function(){
    $("#signinBtn").click(function(){
      var firstName=$("#firstName").val();
      console.log(firstName);
      var lastName=$("#lastName").val();
      console.log(lastName);
      var email=$("#email").val();
      console.log(email);
      // var phNo=$("#phNo").val();
      // console.log(phNo);
      var password=$("#password").val();
      console.log(password);
      var birthDate=$("#birthDate").val();
      console.log(birthDate);
      var country=$("#country").val();
      console.log(country);
      var temp;
      try {
        temp = JSON.parse(sessionStorage.getItem('user')) || [];
      } catch (e) {
        temp = [];
      }
      var userObj = new User(firstName,lastName,email,password,birthDate,country);
      temp.push(userObj);
      var updatedObj = JSON.stringify(temp);
      sessionStorage.setItem("user",updatedObj);

    });

});
//  function SaveDataToLocalStorage(a)
// {
//  var c = [];
// // Parse the serialized data back into an aray of objects
// c = JSON.parse(sessionStorage.getItem('user'));
// // Push the new data (whether it be an object or anything else) onto the array
// c.push(a);
// // Alert the array value
// alert(c);  // Should be something like [Object array]
// // Re-serialize the array back into a string and store it in localStorage
// localStorage.setItem('session', JSON.stringify(c));
// }

function fetchUser(){
    var userNewObj=sessionStorage.getItem("user");
    var arrPos=JSON.parse(userNewObj);
    console.log(arrPos);
    for(var i in arrPos){
      console.log(arrPos[i]);
      if(arrPos[i].firstName===document.getElementById("firstName").value && arrPos[i].password===document.getElementById("loginPassword").value ){
        console.log("hiiiiiiiii...........");
        //welcomePage();
        alert("Log-in Successfull..");
        break;
      }
    }
  if(arrPos[i].firstName!==document.getElementById("firstName").value && arrPos[i].password!==document.getElementById("loginPassword").value ){
    console.log("byeee..");
    alert("Invalid log-in id or password..");
    }
}

// function welcomePage(){
//     $.ajax({
//         url:"welcome.html",
//         type:"GET",
//         dataType:"text/html",
//         success:function(response){
//           console.log("The page is successfull",response);
//         },
//       error:function(error){
//         console.log("the page iis not loaded",error);
//       },
//       complete:function(xhr,status){
//         console.log("the request is not completed");
//       }
//     });
//
// }
