# Vue To Do List

## Inizializzo applicazione 

- creo una nuova istanza di VUE
- monto l'applicativo su un elemento del DOM

## Data

1. creo un array di oggetti (ToDos) dove ogni oggetto ha due proprietà:
 * Text: inserisco il testo del task da completare 
 * Done: valore booleano che indica se il task è completo o meno 

2. Definisco unsa stringa newTodoText per il nuovo task

## Methods 

1. addTodo
 - se newTodoText non è vuoto:

  * crea un oggetto task con Text uguale a newTodoText e Done uguale a false

  * aggiungi il nuovo task all'array ToDos
  * resetta newTodoText a una stringa vuota

2. removeTodo
- riceve indice del task da rimuovere 
- rimuovi il task dall'array toDos usando l'indice 

# HTML 

1. Input Nuovo Task
 - crea un campo di input collegato a newTodoTetx
 - pulsante collegato al metodo addTodo

2. Lista dei task
 - crea una lista ul che itera su ogni elemento task in toDos.
    ogni elemento delle liste (li) ha:
  * una classe che rende il testo sbarrato se done è true
  * un pulsante X che per rimuovere il task




