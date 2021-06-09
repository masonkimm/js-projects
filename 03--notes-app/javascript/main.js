console.log('hi');

const addBtn = document.querySelector('.addBtn');
// const notesElement = document.querySelector('.notes');

const notes = JSON.parse(localStorage.getItem('notes'));

const addNewNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="notes">
      
    <div class="tools">
      <button class="editBtn"><i class="far fa-edit"> Edit </i></button>
       <button class="publishBtn"><i class="far fa-edit"> Publish </i></button>
    
       <button class="removeBtn"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main hidden"></div>
      <textarea></textarea>
  </div> 
    `;

  const editBtn = note.querySelector('.editBtn');
  const publishBtn = note.querySelector('.publishBtn');
  const removeBtn = note.querySelector('.removeBtn');

  const mainElement = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  mainElement.innerHTML = marked(text);
  editBtn.classList.toggle('hidden');

  editBtn.addEventListener('click', () => {
    if (editBtn.style.display !== 'none') {
      editBtn.classList.toggle('show');
    }
    publishBtn.classList.toggle('hidden');

    mainElement.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    console.log('hi');
  });
  publishBtn.addEventListener('click', () => {
    editBtn.classList.toggle('show');
    publishBtn.classList.toggle('hidden');
    mainElement.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    console.log('hi');
  });

  removeBtn.addEventListener('click', () => {
    note.remove();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    mainElement.innerHTML = marked(value);

    saveCurrentNotes();
  });

  document.body.appendChild(note);
};

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener('click', () => {
  addNewNote();
});
const saveCurrentNotes = () => {
  const notesText = document.querySelectorAll('textArea');

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem('notes', JSON.stringify(notes));
};
