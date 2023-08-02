function generateNumber() {

const min = Math.ceil (document.querySelector ('.Input-min').value)
const max = Math.floor (document.querySelector ('.Input-max').value)

const result = Math.floor (Math.random() * (max - min + 1)) + min;

alert(result)

}