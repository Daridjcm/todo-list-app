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
  const notas = JSON.parse(localStorage.getItem('notas') ?? '[]');

  return notas;
}

createNote();
