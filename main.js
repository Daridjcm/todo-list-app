let notesContainer = document.getElementById('notesContainer');
let notes = obtenerNotas();

notes.forEach((note) => {
  const date = new Date(note.date);
  notesContainer.innerHTML += `
  <div class="card bg-slate-100 border border-black shadow-lg rounded-2xl p-5 m-3 hover:shadow-xl transition-all">
  <h3 class="font-bold mb-2">${note.title}</h3>
  <p class="font-light mb-4">${date.toLocaleString('en-US', { day: '2-digit', month: 'numeric', year: '2-digit' })}</p>
  <p class="font-light">
    ${note.description}
  </p>
</div>
  `;
});

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

  const noteObjectString = JSON.stringify([...lastNotes, note]);

  localStorage.setItem('notes', noteObjectString);
  console.log('main.js');
}

/**
 * función para obtener las notas del localstorage
 * @returns {Array} notas
 */
function obtenerNotas() {
  const notas = JSON.parse(localStorage.getItem('notes') ?? '[]');

  return notas;
}
