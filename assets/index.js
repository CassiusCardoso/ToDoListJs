// input para pegar o que o usuário escrever
const input = document.querySelector('.input-text-todo')
// botão para pegar o click de add to list
const btn = document.querySelector('.btn-add-todo')
// icon do calendário para exibir um calendário quando o usuário clicar
const iconCalendar = document.querySelector('.icon')
// Ul list
const list = document.querySelector('.list')

// Function principal, responsável por adicionar à lista, ela guarda todas as outras funções importantes, como a de apagar a task, limpar o input, e salvar a tarefa
function addToDoList(inputText) {
    const li = document.createElement('li');
    li.textContent = inputText;
    list.appendChild(li)
    cleanInput();
    excludeBtn(li);
    saveToDo();
    
}

// Function para salvar a task em um array
function saveToDo() {
    const liToDo = list.querySelectorAll('li');

    const listToDo = []
    for (let lista of liToDo){ 
        let textTask = lista.textContent;
        textTask = textTask.replace('Exclude', '').trim()
        listToDo.push(textTask)
        console.log(listToDo)
    }
}

// Function que criar um botão de exclude ao encontrar uma nova tarefa
// Essa function criar um elemento button
// Cria uma classe para esse mesmo buton
// Adiciona esse botão de exclude à lista, utilizando o appendChild
// E captura o click no botão de apagar, para de fator dar um removeChild(li) no li selecionado
function excludeBtn(li) {
    li.textContent += ' ';
    const excludeBtn = document.createElement('button');
    excludeBtn.textContent = 'Exclude';
    excludeBtn.className = 'exclude-btn'
    li.appendChild(excludeBtn)

    excludeBtn.addEventListener('click', () => {
        list.removeChild(li);
    })
}

// Function que limpa o input value
function cleanInput() {
    input.value = '';
    input.focus();
}


// Evento para pegar o keypress do enter
// Esse evento permite ao usuário adicionar a tarefa clicando com enter, além de utilizar somente o botão
// Para isso precisou checar se a keyCode acionada é a de número 13, que recorresponde ao enter
input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!input.value) return
        addToDoList(input.value);
    }
})

// Evento para captura o click no botão Add task
// Esse evento vai capturar o click e se passar pela checagem do if, que verifica se o valor dentro do input digitado pelo usuário é diferente de um espaço vazio, pois se for, ele passa e considera uma tarefa
btn.addEventListener('click', () => {
    if (!input.value) return
    addToDoList(input.value);
})
