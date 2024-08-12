document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado con éxito');
    document.getElementById('mensaje').style.display = ''
});

document.getElementById('mensaje').style.display = 'none'