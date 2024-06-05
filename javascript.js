function calcular() {
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    const operation = document.getElementById('operation').value;
    let result;

    switch(operation) {
        case '+':
            result = v1 + v2;
            break;
        case '-':
            result = v1 - v2;
            break;
        case '*':
            result = v1 * v2;
            break;
        case '/':
            result = v1 / v2;
            break;
        default:
            result = 'Operación no válida';
    }

    document.getElementById('res').value = result;
}