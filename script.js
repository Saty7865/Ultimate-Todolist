function getAndUpdate() {
  desc = document.getElementById("description").value;
  if (desc.length > 0) {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push(desc);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // Populate the table
  let ulBody = document.getElementById("ulBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `<li><span>${element}</span><td><button class="dustbin btn btn-sm btn-info" onclick="deleted(${index})"><img src="dustbin.png"></button></td></li>`;
  });
  ulBody.innerHTML = str;
}

addtolist = document.getElementById("addtolist");
addtolist.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
  if (confirm("Do you want to delete this item?")) {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
    update();
  }
}
