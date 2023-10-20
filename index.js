var studentList = [];

getLocalStorage();

// TODO: Add student
function addStudent() {
  /**
   * 1. create an empty array
   * 2. get info from form => to create object => then push object to the array
   * 3. render array object on UI (create <tr></tr> respectively)
   * 4. localStorage 
   */

  var _id = document.getElementById("txtId").value;
  var _name = document.getElementById("txtName").value;
  var _email = document.getElementById("txtEmail").value;
  var _password = document.getElementById("txtPass").value;
  var _math = document.getElementById("txtMath").value * 1;
  var _literature = document.getElementById("txtLite").value * 1;

  // Create object 
  var student = new Student(_id, _name, _email, _password, _math, _literature);

  // Validate student before pushing 
  var isValid = checkIdStudent(student.id, studentList); 
  isValid &= checkLength(student.password, "spanPass", 7, 8); 
  isValid &= checkEmail(student.email); 

  if (isValid) {
    // push object student to studentList
    studentList.push(student);
    console.log(studentList);

    // save data to localStorage
    saveLocalStorage();

    renderStudentList(studentList);
  }
}

// TODO: Delete student
function deleteStudent(idStudent) {
  /**
   * splice(position needed to delete, amount of delete item)
   * 1. from id, find position => findIndex
   * 2. using splice() to remove item 
   * 3. update layout 
   */

  var position = studentList.findIndex((item) => {
    console.log("item", item);
    return item.id == idStudent; 
  });
  studentList.splice(position, 1); 
  console.log("studentList", studentList);

  renderStudentList(studentList);

  // to save studentList after being removed in localStorage
  saveLocalStorage();
}

// TODO: Edit student 
function editStudent(idStudent) {
  // Find item's position in studentList which has item.id == idStudent 
  var position = studentList.findIndex((item) => {
    return item.id == idStudent; 
  }); 
  
  var student = studentList[position];

  // Put student's info on the form 
  document.getElementById("txtId").value = student.id; 
  document.getElementById("txtName").value = student.name; 
  document.getElementById("txtEmail").value = student.email; 
  document.getElementById("txtPass").value = student.password; 
  document.getElementById("txtMath").value = student.math; 
  document.getElementById("txtLite").value = student.literature; 

  document.getElementById("txtId").disabled = true; 
}

// TODO: Update student 
function updateStudent() {  
  // Retrieve the edited data from the form
  var updatedStud = {
    id: document.getElementById("txtId").value,
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    password: document.getElementById("txtPass").value,
    math: document.getElementById("txtMath").value * 1,
    literature: document.getElementById("txtLite").value * 1
  }; 

  // Find the position of updatedStud in studentList
  var position = studentList.findIndex((item) => {
    return item.id == updatedStud.id; 
  }); 

  if (position != -1) {
    // update student info in the studentList
    studentList[position] = updatedStud; 

    // create studentList[position] as a new object of Student() (cuz updatedStud is only an independent object, not related to Student() in model.js)
    studentList[position] = new Student(updatedStud.id, updatedStud.name, updatedStud.email, updatedStud.password, updatedStud.math, updatedStud.literature); 
    
    // clear the form after updating
    document.getElementById("formQLSV").reset(); 

    renderStudentList(studentList);

    saveLocalStorage();
  }
}

/**
 * TODO: LocalStorage  
 * LocalStorage - to save only JSON format 
 * JSON: JSON.stringify() ~ array => json, JSON.parse() ~ json => array - to convert from original data to json format 
 */
// todo: Save data in localStorage 
function saveLocalStorage() {
  // Convert studentList array into json format
  var dataJson = JSON.stringify(studentList); 

  // Then save to localStorage
  localStorage.setItem('STUDENT_LIST_LOCAL', dataJson);
}

// todo: Get data from localStorage 
function getLocalStorage() {
  // Get dataJson saved in function saveLocalStorage()
  var dataJson = localStorage.getItem("STUDENT_LIST_LOCAL", studentList);

  if (dataJson != null) {
    // convert json data to array data
    var dataArr = JSON.parse(dataJson); 

    // convert 1 array including object without method to 1 array including object with method
    // using map() ~ to convert 
    studentList = dataArr.map((item) => {
      return new Student(item.id, item.name, item.email, item.password, item.math, item.literature);
    });

    // render data on UI
    renderStudentList(studentList);
  }
};