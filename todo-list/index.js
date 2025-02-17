const button = document.getElementById('button');
const list = document.getElementById('list');
const input = document.getElementById('input');

const handleButtonTextContent = () => {
    const button = event.target
    button.textContent = button.textContent === 'complete' ? 'not yet' : 'complete'
}

const handleComplete = (event) => {
    const li = event.target.closest('li')
    li.classList.toggle('completed')
    handleButtonTextContent(event);
}

const createElement = () => {
    const todo = input.value;
    if (todo.trim() === '') return;
    const li = document.createElement('li')
    li.innerHTML = todo.trim()
    return li;
}

const createDeleteButton = () => {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'complete'
    return deleteButton
}
const handleAdd = (event) => {
    event.preventDefault();

    const li = createElement();
    const deleteButton = createDeleteButton();
    if (input.value.trim() === '') return;
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = "";
    deleteButton.addEventListener("click", handleComplete)
}
button.addEventListener('click', handleAdd);