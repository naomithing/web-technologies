function validation(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    // if(username==5){
    //     alert("Username must be entered");
    //     return false;
    // }else if(password==""){
    //     alert("Password must be entered");
    //     return false;
    // }else{
    //     alert("logged in successfully");
    //     return true;
    // }
    if (username==""){
        alert("username must be entered");
        return false;
    }else if (password==""){
        alert("please enter a password");
        return false;
    }else if (password.length<5){
        alert("Password length must contain 6 characters");
        return false;
    }else{
        alert("logged in successfully");
        return true;
    }
}