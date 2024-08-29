// Assign Variables
const createButton = document.getElementById('create');
const notesContainer = document.getElementById('notesContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

// New Note Process
createButton.addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const color = document.getElementById('color').value;

    // Validate title
    if (!title) {
        alert("Notes cannot be saved without a title.");
        return;
    }

    // Get the current date
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0'); 

    // Create a new note element
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.setAttribute('data-title', title.toLowerCase());
    noteCard.setAttribute('data-body', body.toLowerCase());

    // Create header
    const noteHeader = document.createElement("div");
    noteHeader.classList.add('note-header');
    
    const noteTitle = document.createElement('h5');
    noteTitle.textContent = title;
    noteTitle.classList.add('note-title');
    noteTitle.classList.add('col-md-9');

    const noteDate = document.createElement('p');
    noteDate.textContent = `${month}/${day}/${year}`;
    noteDate.classList.add('note-date');
    noteDate.classList.add('col-md-3');
    
    noteHeader.appendChild(noteTitle);
    noteHeader.appendChild(noteDate);

    // Create body
    const noteBody = document.createElement('div');
    noteBody.classList.add('note-body');

    const notePara = document.createElement('p');
    notePara.textContent = body;
    notePara.classList.add('note-para');

    noteBody.appendChild(notePara);

    // Create Footer
    const noteFooter = document.createElement('div');
    noteFooter.classList.add('note-footer');

    const editNote = document.createElement('a');
    editNote.textContent = 'Edit';
    editNote.href = '#';
    editNote.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Edit Function
        const newTitle = prompt('Edit title:', noteTitle.textContent);
        if (newTitle && newTitle.length <= 30) {
            noteTitle.textContent = newTitle;
            noteCard.setAttribute('data-title', newTitle.toLowerCase());
        } else if (newTitle) {
            alert('Title cannot exceed 30 characters.');
        }

        const newBody = prompt('Edit body:', notePara.textContent);
        if (newBody !== null) {
            notePara.textContent = newBody;
            noteCard.setAttribute('data-body', newBody.toLowerCase());
        }
    });
    
    //Delete Function
    const deleteNote = document.createElement('a');
    deleteNote.textContent = 'Delete';
    deleteNote.href = '#';
    deleteNote.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        noteCard.remove();
    });

    noteFooter.appendChild(editNote);
    noteFooter.appendChild(deleteNote);

    // Append header, body, and footer to the note card
    noteCard.appendChild(noteHeader);
    noteCard.appendChild(noteBody);
    noteCard.appendChild(noteFooter);
    
    // Assigning Colors for note background
    const validColors = ['blue', 'green', 'red', 'orange', 'pink', 'purple', 'yellow', 'white', 'gray'];
    if (validColors.includes(color)) {
        noteCard.classList.add(color);
    }

    // Append the note card to the notes container
    notesContainer.appendChild(noteCard);

    // Clear the input fields
    document.getElementById('entryForm').reset();
});

// Search Functionality
query.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase();
    const notes = notesContainer.getElementsByClassName('note-card');

    for (let i = 0; i < notes.length; i++) {
        const title = notes[i].getAttribute('data-title');
        const body = notes[i].getAttribute('data-body');
        
        if (title.includes(query) || body.includes(query)) {
            notes[i].style.display = ''; // Show note
        } else {
            notes[i].style.display = 'none'; // Hide note
        }
    }
});

const saveSettings = document.getElementById("saveSettings").value;
const userPfp = document.getElementById("userPfp");
const userName = document.getElementById("userName");
const newUserName = document.getElementById("newUserName").value;
const newPfp = document.getElementById("newPfp").value;

saveSettings.addEventListener("click", function(){
    userName.textContent.replace("HEHE");
})