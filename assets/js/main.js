const {createApp} = Vue 

createApp({
    data() {
        return {
            // creo un array di oggetti (ToDos) dove ogni oggetto ha due proprietà
            todos: [
                {
                    text: 'creo un array di oggetti (ToDos) dove ogni oggetto ha due proprietà',
                    done: true
                },
                {
                    text: 'Definisco unsa stringa newTodoText per il nuovo task',
                    done: false
                }
            ],
            newTodoText: ''
        }
    },
    methods: {
        // aggiungo un nuovo li tramite input
        addTodo() {
            console.log('aggiungo un task:', this.newTodoText);
            if (this.newTodoText.trim() !== '') {
                this.todos.push({text: this.newTodoText, done:false});
                this.newTodoText = '';
                console.log('task aggiunta:', this.todos);
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
            console.log('task rimossa:', this.todos)
        }
    }
}).mount('#app')