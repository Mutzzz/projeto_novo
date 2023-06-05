const form = document.getElementById("deposito");
const nomeBeneficiario = document.getElementById('nome');
let formValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    
    const contaBeneficiario = document.getElementById('conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${conta.value}</b>`

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        const containerMesagemSucesso = document.querySelector('.sucesso')
        containerMesagemSucesso.innerHTML = mensagemSucesso;
        containerMesagemSucesso.style.display = 'block';
        nomeBeneficiario.value = ' ';
        valorDeposito.value = ' ';
        conta.value = ' ';    }
    else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';

    }
    })

    nomeBeneficiario.addEventListener('keyup', function(e) {
        console.log(e.target.value);
        formValido = validaNome(e.target.value)

    })

    if (!formValido) {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
        }
    else{
        nomeBeneficiario.style = '';
        document.querySelector('.mensagem-erro').style.display = 'none';
    }




