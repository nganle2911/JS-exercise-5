// * Include secondary functions 

// TODO: Render studentList
function renderStudentList(stuList) {
    var contentHTML = "";

    for (var i = 0; i < stuList.length; i++) {
        var item = stuList[i];

        contentHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.averageScore()}</td>
          <td>
            <button class="btn btn-primary" onclick="editStudent('${item.id}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteStudent('${item.id}')">Delete</button>
          </td>
        </tr>
      `;
    }

    // render studentList on UI
    document.getElementById("tbodyStudent").innerHTML = contentHTML;
};