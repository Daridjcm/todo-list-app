let notesContainer = document.getElementById('notesContainer');

AgregarNotasAlDOM();

function createNote(title, description, date) {
  const note = {
    title: title,
    description: description,
    date: date,
    tag,
  };

  const lastNotes = JSON.parse(localStorage.getItem('notes') ?? '[]');

  const noteObjectString = JSON.stringify([note, ...lastNotes]);

  localStorage.setItem('notes', noteObjectString);

  // Render the new note
  const noteElement = document.createElement('div');
  noteElement.classList.add(
    'card',
    'cursor-pointer',
    'bg-slate-100',
    'border',
    'border-black',
    'shadow-lg',
    'rounded-2xl',
    'm-3',
    'p-3',
    'hover:shadow-lg',
  );

  // Clone dynamic tags content
  const tagsClone = dynamicTagsContainer.cloneNode(true);

  noteElement.innerHTML = `
    <h3 class="font-bold mb-1 p-2">${note.title}</h3>
    <p class="font-light mb-1 p-2">${date.toLocaleString('en-US', {
    day: '2-digit',
    month: 'numeric',
    year: '2-digit',
  })}</p>
    <div class="font-light p-2">${note.description}</div>
    <div class="p-2 cursor-pointer btnDeleteNote">
      <i class="fas fa-trash-can" style="color: red;"></i>
    </div>
  `;
  // Append the cloned tags
  noteElement.appendChild(tagsClone);
  notesContainer.appendChild(noteElement);

  // Clear input fields
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  tagInput.value = '';
  dynamicTagsContainer.innerHTML = ''; // Clear tags container

  // Add click event listener to the delete button of the new note
  const deleteButton = noteElement.querySelector('.btnDeleteNote');
  deleteButton.addEventListener('click', function() {
    deleteNote(lastNotes.length); // Index of the new note
  });
}

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
    deleteButton.addEventListener('click', function() {
      deleteNote(index);
    });
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

function deleteNotes() {
  localStorage.removeItem('notes');
  notesContainer.innerHTML = '';
}

// Map tags and IDs
const tagsMap = {
  "#alls": "tag-1",
  "#work": "tag-2",
  "#personal": "tag-3",
  "#shopping": "tag-4",
  "#homework": "tag-5",
  "#others": "tag-6",
  "#": "tag-7"
};

const tagInput = document.getElementById("tagInput");
const dynamicTagsContainer = document.getElementById("dynamicTagsContainer");

tagInput.addEventListener("input", () => {
  const value = tagInput.value.toLowerCase();
  dynamicTagsContainer.innerHTML = ""; // Clean dinamic container

  // Find the tags
  Object.keys(tagsMap).forEach((tag) => {
    if (value.includes(tag)) {
      const tagId = tagsMap[tag];

      // Create dinamic button
      const button = document.createElement("button");
      button.className =
        "p-2 text-white font-bold rounded border border-black hover:shadow-xl transition duration-300 ease-in-out";
      button.style.backgroundColor = getTagColor(tagId);
      if (button.textContent === tag["#"]) {
        button.innerText = tagInput.value
      } else {
        button.textContent = tag
      }
      // Add button to container
      let tagRender = `${dynamicTagsContainer.appendChild(button)}`;
      tagRender += note.tag
    }
  });
});

function getTagColor(tagId) {
  return tagId === "tag-1" ? "#3b82f6" :
    tagId === "tag-2" ? "#6366f1" :
      tagId === "tag-3" ? "#06b6d4" :
        tagId === "tag-4" ? "#ec4899" :
          tagId === "tag-5" ? "#f59e0b" :
            tagId === "tag-6" ? "#84cc16" :
              tagId === "tag-7" ? "#000000" : null;
}
