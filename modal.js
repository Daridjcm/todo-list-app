document.getElementById('openDialogButton').addEventListener('click', openDialog);
document.getElementById('cancel').addEventListener('click', closeDialog);
let editDialog = document.getElementById('editDialog');

function openDialog() {
  editDialog.showModal();
}

function closeDialog() {
  editDialog.close();
}

function editElement() {
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;

  if ((title, description)) {
    createNote(title, description, new Date());
  } else {
    alert('Please, fill outs all fields.');
  }
  // Cerrar el diálogo después de la edición
  closeDialog();
}