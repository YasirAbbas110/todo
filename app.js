const addForm = document.querySelector(".add");
const list = document.querySelector(".todos")
const search = document.querySelector(".search input");


//generate a li tag and append it with list
const genTemp = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa fa-trash delete"></i>
    </li>`;
    list.innerHTML += html;
}

//when enter is pressed submit method is called and li tag is appended
addForm.addEventListener("submit", e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); //trim remove white spaces
    if (todo.length) {
        genTemp(todo);
        addForm.reset();
    }


});

//delete li when bin is clicked
list.addEventListener("click", e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//filter text
let filterTodo = (term) => {

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add("filtered"));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove("filtered"));

}

//key up
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase(); //remove white spaces\
    filterTodo(term);
});