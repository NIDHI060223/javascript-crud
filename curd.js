// Get references to form elements
const studentForm = document.getElementById('student-form');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const rollNoInput = document.getElementById('rollNo');
const studentList = document.querySelector('.student-list');

let editMode = false; // Track edit state
let currentRow; // Track the row being edited

// Handle form submission
studentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form refresh

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const rollNo = rollNoInput.value.trim();

    if (firstName === '' || lastName === '' || rollNo === '') {
        alert('All fields are required!');
        return;
    }

    if (editMode) {
        // Update the row
        currentRow.children[0].textContent = firstName;
        currentRow.children[1].textContent = lastName;
        currentRow.children[2].textContent = rollNo;
        resetForm();
    } else {
        // Add a new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
                <button class="btn btn-warning btn-sm edit">Edit</button>
                <button class="btn btn-danger btn-sm delete">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    }

    resetForm();
});

// Handle row actions (Edit/Delete)
studentList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        // Edit functionality
        currentRow = event.target.closest('tr');
        firstNameInput.value = currentRow.children[0].textContent;
        lastNameInput.value = currentRow.children[1].textContent;
        rollNoInput.value = currentRow.children[2].textContent;
        editMode = true; // Enable edit mode
    } else if (event.target.classList.contains('delete')) {
        // Delete functionality
        const row = event.target.closest('tr');
        row.remove();
    }
});

// Reset form
function resetForm() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    rollNoInput.value = '';
    editMode = false;
    currentRow = null;
}

document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    if (!studentForm) {
        console.error('Form not found!');
        return;
    }

    studentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted');
    });
});
