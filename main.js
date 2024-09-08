const form = document.getElementById('formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();

    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let mensagemSucesso = `O Número <b>${input2.value}</b> é maior que o Número <b>${input1.value}</b>. Tudo certo!`
    let messageError = `O segundo número deve ser maior que o primeiro número`

    const containerMessageError = document.querySelector('.error-message')
    containerMessageError.innerHTML = messageError
    containerMessageError.style.display = 'block'


    if(input1.value >= input2.value){
        const containerMessageSuccess = document.querySelector('.success-message');
        containerMessageSuccess.style.display = 'none';
        const containerMessageError = document.querySelector('.error-message')
        containerMessageError.style.display = 'block'
        input2.style.border = '2px solid red';
                
    }else{
        const containerMessageError = document.querySelector('.error-message')
        containerMessageError.style.display = 'none'
        const containerMessageSuccess = document.querySelector('.success-message');
        containerMessageSuccess.innerHTML = mensagemSucesso;
        containerMessageSuccess.style.display = 'block';
        input1.value = ' ';
        input2.value = ' ';
        input2.style.border = '';
    }
})