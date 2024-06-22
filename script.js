document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. Gracias por contactarnos.');
});

document.getElementById('calc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const aireadores = parseInt(document.getElementById('aireadores').value);
    const bombas = parseInt(document.getElementById('bombas').value);
    const precioAireador = 199.49;
    const precioBomba = 300.40;
    const total = (aireadores * precioAireador) + (bombas * precioBomba);
    document.getElementById('resultado').innerText = `Precio estimado: $${total.toFixed(2)}`;
});
