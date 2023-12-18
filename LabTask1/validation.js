$(function(){
   $(".form").validate({
     rules:{

        name:{
            required:true,
            minlength:2,
        },
        email:{
            required:true,
            email:true

        },
        password:{
            required:true,
            minlength:8,
            maxlength:15,
        },
        confirmpassword:{
            required:true,
            equalTo:"#password"
        },
        agree_to_terms:"required",
    },
    messages:{

        name:{
            required: "Please enter your name",
            minlength:"Minimum length should be 2 charcaters"
        },
        email:{
            required:"Please enter your email",
            email:"Please enter a valid email"

        },
        password:{
            required:"Please enter password",
            minlength:"Passowrd should be 8 characters",
            maxlength:"Password can't have characters more than 15",
        },
        confirmpassword:{
            required:"Please re-enter your passowrd",
            equalTo:"Your password should be equal to as above"
        },
        agree_to_terms:"Please agree to the terms and conditions",
    }
   });
});