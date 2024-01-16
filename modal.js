document.getElementById('openDialogButton').addEventListener('click', openDialog);
document.getElementById('cancel').addEventListener('click', closeDialog);
let editDialog = document.getElementById('editDialog');

function openDialog() {
  editDialog.showModal();
  
  // Obtener la fecha actual y mostrarla en el campo datetime-local
  var dateNow = new Date();
  var dateFormat = dateNow.toISOString().slice(0, 16);
  document.getElementById('dateNow').value = dateFormat;
}

function closeDialog() {
  editDialog.close();  
}


function editElement() {
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var dateNow = document.getElementById('dateNow').value;

  if (title, description, dateNow || value) {
    console.log('Title: ' + title);
    console.log('Description: ' + description);
    console.log('Current date: ' + dateNow);
  } else {
    alert("Please, fill outs all fields.");
  }
  // Cerrar el diálogo después de la edición
  cerrarDialog();
}
