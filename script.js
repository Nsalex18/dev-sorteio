function generateNumber() {

    const min = Math.ceil(document.querySelector('.Input-min').value)
    const max = Math.floor(document.querySelector('.Input-max').value)

    if (min >= max) {
        alert('O valor mínimo deve ser MENOR que o valor máximo')
    } 
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)

    }

}

// Poderiamos alterar a lógica também.