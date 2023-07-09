let container = document.querySelector(".container");

function getDataForCard() {
  fetch("data.json", { method: "GET" })
    .then((res) => res.json())
    .then((user_Data) => {
      users = user_Data;
      displayAsCard();
    })
    .catch((err) => console.log(err));
}

function displayAsCard() {
  users.forEach((user, index) => {
    container.innerHTML =
      container.innerHTML +
      `<div class="card card_item" style="width: 18rem">
      <button class="delBtn" onclick="removeCard(this)">X</button>
      <img src="${user.img}" class="card-img-top card_img" alt="..." />
      <div class="card-body">
        <h3>Name: ${user.name}</h3>
        <h3>Id: ${user.id}</h3>
        <h3 id="skill_item">Skills: <span>${user.skills}</span></h3>
        <h3>Project: ${user.Project}</h3>
        <h3>HCM: ${user.Hcm}</h3>
      </div>
      <div class="card-body">
        <button type="button" class="btn btn-warning" id="editBtn" onclick="editCard(this)">Edit</button>
      </div>
    </div>`;
  });
}

getDataForCard();

// Remove cards
function removeCard(currentElement) {
  currentElement.parentElement.remove();
}

// Edit skills in cards
function editCard(currElement) {

    if (currElement.textContent == "Save") {
        currElement.textContent = "Edit";
        currElement.className="btn btn-warning"
        let newSkills =currElement.parentElement.previousElementSibling.children[2].firstElementChild.value;
        // console.log(newSkills)
        let currSkill = document.createElement('span');
        currSkill.textContent = newSkills;

        currElement.parentElement.previousElementSibling.children[2].replaceChild(
            currSkill, currElement.parentElement.previousElementSibling.children[2]
            .firstElementChild
      
        );
    }
    else {
        currElement.textContent = "Save";
        currElement.className = "btn btn-success";
        let skillElement =
            currElement.parentElement.previousElementSibling.children[2]
                .firstElementChild;

        let currSkillsName =
            currElement.parentElement.previousElementSibling.children[2]
                .firstElementChild.textContent;

        let currInput = document.createElement("input");
        currInput.type = "text";
        currInput.placeholder = " ";
        currInput.value = currSkillsName;
        currElement.parentElement.previousElementSibling.children[2].replaceChild(
            currInput,
            skillElement
        );

    }

}


function seeCards(currentElement) {
  if (currentElement.textContent== "Card Grid Hide") {
    currentElement.textContent = "Card Grid View";
    document.getElementById("cardContainer").style.visibility = "hidden";
  }
  else {
    currentElement.textContent = "Card Grid Hide";
    document.getElementById("cardContainer").style.visibility = "visible";
  }
}

function seeTable(currentElement) {
   if (currentElement.textContent == "Toggle List Hide") {
     currentElement.textContent = "Toggle List View";
     document.getElementById("tableContainer").style.visibility = "hidden";
   } else {
     currentElement.textContent = "Toggle List Hide";
     document.getElementById("tableContainer").style.visibility = "visible";
   }
}
