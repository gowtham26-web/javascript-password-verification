var nameinput = document.getElementById("name")
var password = document.getElementById("password")
var confirmpassword = document.getElementById("confirmpassword")


var nameError = document.getElementById("nameError")
var passError = document.getElementById("passError")
var confirmError = document.getElementById("confirmError")

var btn = document.querySelector(".button")



btn.addEventListener("click", function(event) {
    event.preventDefault()

    var nameregex = /^(?=.{6,16}$)[A-Za-z]+[0-9]*$/
    var passregex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,16}$/

    var username = nameinput.value
    var userpass = password.value
    var confirmpass = confirmpassword.value



        if (username === '') {
            nameError.textContent = "Name field is empty"
        }
        else if (!nameregex.test(username)) {
            nameError.textContent = "Enter valid name"
        }
        else {
            nameError.textContent = ""
        }


        if (userpass === '')
    {
        passError.textContent = "Password field is empty"
    }
    else if (!passregex.test(userpass)) {
        passError.textContent = "Enter valid password"
    }
    else {
        passError.textContent = ""
    }

    if (confirmpass === '') {
        confirmError.textContent = "Password dosent match"
    }
    else if (confirmpass != userpass) {
        confirmError.textContent = "Password dosent match"
    }
    else {
        confirmError.textContent = ""
       
    }
})