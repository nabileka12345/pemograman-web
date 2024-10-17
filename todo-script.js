function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') return;

    const taskList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskValue} 
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const task = button.parentNode;
    task.classList.add('remove'); // Tambahkan kelas animasi fade-out
    setTimeout(() => {
        task.remove(); // Hapus setelah animasi selesai
    }, 300); // Sesuaikan durasi dengan animasi CSS (0.3s)
}

function editTask(button) {
    const task = button.parentNode;
    const newTask = prompt('Edit your task:', task.childNodes[0].textContent.trim());

    if (newTask) {
        task.childNodes[0].textContent = newTask;
    }
}
