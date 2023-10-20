/**
 * TODO: Check idStudent is valid or not when adding new student 
 * if idStudent is not used yet => not found => valid => return true 
 * if idStudent is found => someone uses this id => false => display a notification to inform user
 */
function checkIdStudent(id, stuList) {
    var position = stuList.findIndex((item) => {
        return item.id == id;  
    }); 

    if (position != -1) {
        // id found => false
        document.getElementById("spanId").innerText = "ID has been used!"; 
        return false; 
    } else {
        document.getElementById("spanId").innerText = ""; 
        return true; // id not found => true 
    }
}

// TODO: Check length of input
function checkLength(value, idErr, min, max) {
    var length = value.length; 
    console.log("length", length);
    if (min <= length && length <= max) {
        // valid
        document.getElementById(idErr).innerText = ""; 
        return true;
    } else {
        document.getElementById(idErr).innerText = `Length must have from ${min} to ${max} characters!`; 
        return false; 
    }
}

// TODO: Regex 
function checkEmail(email) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (regex.test(email)) {
        document.getElementById("spanEmail").innerText = "";
        return true; 
    }

    document.getElementById("spanEmail").innerText = "Invalid Email!";
    return false; 
}