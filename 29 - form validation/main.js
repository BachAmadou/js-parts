const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required = ["email", "userName"];

myForm.addEventListener("submit", validation);

function validation(e) {
    e.preventDefault();
    //console.log(e);
    let data = {};
    errors.forEach((item) => {
        item.classList.add("hide");
    });
    let error = false;

    inputs.forEach((el) => {
        //console.log(el);
        let inpName = el.getAttribute("name");
        console.log(inpName);

        if(inpName != null) {
            el.style.borderColor = "#ddd";
            if(el.value.length == 0 && required.includes(inpName)) {
                addError(el, " Required Field ", inpName);
                error = true;
            }

            if(inpName == "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if(!result) {
                    addError(el, "Invalid Email", inpName);
                    error = true;
                }
            }

            if(inpName == "password") {
                let exp = /[A-Za-z0-9._-]+$/;
                let result = exp.test(el.value);
                if(!result) {
                    addError(el, "Only numbers and letters", inpName);
                    error = true;
                }
                if(!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 characters", inpName);
                }
            }
            data[inpName] = el.value;
        }
    });
    //console.log(data);
    if(!error) {
        myForm.submit();
    }
}

function addError(el, mes, fieldName) {
    let temp = el.nextElementSibling;
    temp.classList.remove("hide");
    temp.textContent = fieldName.toUpperCase() + "" + mes;
    el.style.borderColor = "red";
    el.focus();
}