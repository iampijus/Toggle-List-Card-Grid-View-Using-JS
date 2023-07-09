let tbody = document.querySelector("tbody");
let users = [];
let setEdit = false;

function getData() {
  fetch("data.json", { method: "GET" })
    .then((res) => res.json())
    .then((usersData) => {
      users = usersData;
      displayAsTable();
    })
    .catch((err) => console.log(err));
}

function displayAsTable(id) {
  tbody.innerHTML = null; //If we dont write this the every time the new table after deleting will be added to the existing table.

  //  for taking the index we have to use forEach loop
  users.forEach((user, index) => {
    id != user.id || setEdit == false
      ? (tbody.innerHTML =
          tbody.innerHTML +
          `<tr>
           <td>${user.name}</td>
           <td>${user.id}</td>
           <td>${user.skills}</td>
           <td>${user.Project}</td>
           <td>${user.Hcm}</td>
           <td>
           <button class="deleteBtn" onclick="deleteElement(${user.id})">X</button>
           </td>
           <td>
           <button class="editBtn" onclick="editElement(${user.id})">Edit</button>
           </td>
        </tr>`)
      : (tbody.innerHTML =
          tbody.innerHTML +
          `<tr>
             <td>
             <input value="${user.name}" id="name">
             </td>
             <td>
             <input value="${user.id}"> 
             </td>
             <td>
             <input value="${user.skills}" id="skills">
             </td>
             <td>
             <input value="${user.Project}" id="project">
             </td>
             <td>
             <input value="${user.Hcm}" id="hcm">
             </td>
             <td>
             <button class="deleteBtn" onclick="deleteElement(${user.id})">X</button>
             </td>
             <td>
             <button class="saveBtn" onclick="saveElement(${user.id},${index})">Save</button>
             </td>
          </tr>`);
  });

}

getData();

// Delete row from the table
function deleteElement(id) {
  users = users.filter((userObj) => userObj.id != id); //It will return everything except the id that we want to delete
  displayAsTable();
}

// Edit row in the table
function editElement(id) {
  setEdit = true;
  displayAsTable(id);
}

// Save row
function saveElement(id, index) {
  setEdit = false;

  let name = document.querySelector("#name").value;
  let skills = document.querySelector("#skills").value;
  let project = document.querySelector("#project").value;
  let hcm = document.querySelector("#hcm").value;
  users.splice(index, 1, { name, id, skills, project, hcm });

  displayAsTable(id);
}
