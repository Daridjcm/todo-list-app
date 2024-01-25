let notesContainer = document.getElementById('notesContainer');

AgregarNotasAlDOM();

function AgregarNotasAlDOM() {
  let notes = obtenerNotas();

  notes.forEach((note, index) => {
    const date = new Date(note.date);
    const noteElement = document.createElement('div');
    noteElement.classList.add(
      'card',
      'bg-slate-100',
      'border',
      'border-black',
      'shadow-lg',
      'rounded-2xl',
      'm-3',
      'hover:shadow-xl',
      'transition-all',
    );
    noteElement.innerHTML = `
      <h3 class="font-bold mb-1 p-2">${note.title}</h3>
      <p class="font-light mb-1 p-2">${date.toLocaleString('en-US', { day: '2-digit', month: 'numeric', year: '2-digit' })}</p>
      <div class="font-light p-2">${note.description}</div>
      <div class="p-2 cursor-pointer btnDeleteNote">
        <i class="fas fa-trash-can" style="color: red;"></i>
      </div>
    `;

    notesContainer.appendChild(noteElement);

    // Add click event listener to each delete button
    const deleteButton = noteElement.querySelector('.btnDeleteNote');
    deleteButton.addEventListener('click', function () {
      deleteNote(index);
    });
  });
}

function createNote(title, description, date) {
  const note = {
    title: title,
    description: description,
    date: date,
  };

  const lastNotes = JSON.parse(localStorage.getItem('notes') ?? '[]');

  const noteObjectString = JSON.stringify([note, ...lastNotes]);

  localStorage.setItem('notes', noteObjectString);

  // Render the new note
  const noteElement = document.createElement('div');
  noteElement.classList.add(
    'card',
    'bg-slate-100',
    'border',
    'border-black',
    'shadow-lg',
    'rounded-2xl',
    'm-3',
    'hover:shadow-xl',
    'transition-all',
  );
  noteElement.innerHTML = `
    <h3 class="font-bold mb-1 p-2">${note.title}</h3>
    <p class="font-light mb-1 p-2">${date.toLocaleString('en-US', { day: '2-digit', month: 'numeric', year: '2-digit' })}</p>
    <div class="font-light p-2">${note.description}</div>
    <div class="p-2 cursor-pointer btnDeleteNote">
      <i class="fas fa-trash-can" style="color: red;"></i>
    </div>
  `;

  notesContainer.appendChild(noteElement);

  // Add click event listener to the delete button of the new note
  const deleteButton = noteElement.querySelector('.btnDeleteNote');
  deleteButton.addEventListener('click', function () {
    deleteNote(lastNotes.length); // Index of the new note
  });
}

function deleteNote(index) {
  let notes = obtenerNotas();
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));

  // Remove the note from the DOM
  notesContainer.innerHTML = '';
  AgregarNotasAlDOM();
}

function obtenerNotas() {
  const notas = JSON.parse(localStorage.getItem('notes') ?? '[]');
  return notas;
}

document.getElementById('btnDeleteNotes').addEventListener('click', function () {
  deleteNotes();
});

function deleteNotes() {
  localStorage.removeItem('notes');
  notesContainer.innerHTML = '';
}
