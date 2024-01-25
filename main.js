let notesContainer = document.getElementById('notesContainer');

AgregarNotasAlDOM();

function AgregarNotasAlDOM() {
  let notes = obtenerNotas();

  notes.forEach((note) => {
    const date = new Date(note.date);
    notesContainer.innerHTML += `
  <div class="card bg-slate-100 border border-black shadow-lg rounded-2xl m-3 hover:shadow-xl transition-all">
    <h3 class="font-bold mb-1 p-2">${note.title}</h3>
    <p class="font-light mb-1 p-2">${date.toLocaleString('en-US', { day: '2-digit', month: 'numeric', year: '2-digit' })}</p>
    <div class="font-light p-2">
      ${note.description}
    </div>
    <div class="p-2 cursor-pointer" id="btnDeleteNotes">
      <i class="fas fa-trash-can" style="color: red;"></i>
    </div>
  </div>
    `;
  });
}

/**
 * Función para crear notas almacenándolas en el localStorage
 * @param {string} title
 * @param {string} description
 * @param {date} date
 */
function createNote(title, description, date) {
  const note = {
    title: title,
    description: description,
    date: date,
  };

  const lastNotes = JSON.parse(localStorage.getItem('notes') ?? '[]');

  const noteObjectString = JSON.stringify([note, ...lastNotes]);

  localStorage.setItem('notes', noteObjectString);

  notesContainer.innerHTML =
    `
  <div class="card bg-slate-100 border border-black shadow-lg rounded-2xl m-3 hover:shadow-xl transition-all">
    <h3 class="font-bold mb-1 p-2">${note.title}</h3>
    <p class="font-light mb-1 p-2">${date.toLocaleString('en-US', { day: '2-digit', month: 'numeric', year: '2-digit' })}</p>
    <div class="font-light p-2">
      ${note.description}
    </div>
    <div class="p-2 cursor-pointer" id="btnDeleteNote">
      <i class="fas fa-trash-can" style="color: red;"></i>
    </div>
  </div>
    ` + notesContainer.innerHTML;
}

/**
 * función para obtener las notas del localstorage
 * @returns {Array} notas
 */
function obtenerNotas() {
  const notas = JSON.parse(localStorage.getItem('notes') ?? '[]');

  return notas;
}
