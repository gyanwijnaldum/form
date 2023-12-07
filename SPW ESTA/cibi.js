let data = [];
let editIndex = -1;

function manageData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    if (editIndex !== -1) {
      // Edit existing data
      data[editIndex] = { name, email };
      editIndex = -1; // Reset editIndex after editing
    } else {
      // Add new data
      const newData = { name, email };
      data.push(newData);
    }

    displayData();
    clearForm();
    updateButtonLabel(); // Update button label after editing
  } else {
    alert("Nama dan Email tidak boleh kosong.");
  }
}

function displayData() {
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = "<h2>Hasil Data</h2>";

  data.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `<p>${index + 1}. <strong>${item.name}</strong> - ${
      item.email
    } <button onclick="showEditForm(${index})">Edit</button> <button onclick="deleteData(${index})">Hapus</button></p>`;
    dataList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function showEditForm(index) {
  // Set editIndex and populate form with existing data
  editIndex = index;
  const { name, email } = data[index];
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;

  // Change button label to "Edit Data"
  document.getElementById("submitButton").innerText = "Edit Data";
}

function deleteData(index) {
  const confirmDelete = confirm("Anda yakin ingin menghapus data ini?");
  if (confirmDelete) {
    data.splice(index, 1);
    displayData();
    updateButtonLabel(); // Update button label after deleting
  }
}

function updateButtonLabel() {
  // Change button label to "Tambah Data" after editing or deleting
  document.getElementById("submitButton").innerText = "Tambah Data";
}
