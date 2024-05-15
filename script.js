// 1. kenalin html elemen ke js

// 2. menentukan jenis interakasi (event) dyg didenger

//3. menentukan fungsi ketika interaksi 

let todos = []

const addTodo = () => {
//menambahkan kegiatan dalam list
// menambahkan elemen kegiatan ke dalam array
let inputEl = document.getElementsByClassName("todo-input")    

todos.push(inputEl[0].value)
// console.log(todos)
renderTodo()

}
const removeTodo = () => {
    //menghapus kegiatan terakhir
    // menghapus elemen terakhir dalam array todos

    todos.pop()

    // console.log(todos)
    renderTodo()
}

const renderTodo = () => {
    let listEl = document.getElementsByClassName("todo-list") //wadah tempat dimasukan
    
    while (listEl[0].firstChild) {
        listEl[0].removeChild(listEl[0].firstChild)
    }


    for (let i = 0; i < todos.length; i++) {
    let todoEl = document.createElement("li") // buat element li
    
    todoEl.innerText = todos[i] // isi elemen li

    listEl[0].appendChild(todoEl) // masukkan elemen lis ke ul

}
}