// Mudando Titulo Dinamicamente
// Declarando variaveis utilizando o let
let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//-----------------------------------------------------------------------

//selecionando todos os pacientes da tabela e colocando dentro de uma lista
let pacientes = document.querySelectorAll('.paciente')
// console.log(pacientes)

//percorrendo a lista de pacientes
for (var i = 0; i <= pacientes.length; i++) {
    let paciente = pacientes[i]

    //recebendo o peso do paciente
    let pesoTd = paciente.querySelector('.info-peso')
    // console.log(pesoTd)
    let peso = pesoTd.textContent
    // console.log(peso)



    //recebendo a altura do paciente
    let alturaTd = paciente.querySelector('.info-altura')
    // console.log(alturaTd)
    let altura = alturaTd.textContent


    let imcTd = paciente.querySelector('.info-imc')
    //toFixed para ajustar as casas decimais 
    let imc = calculaImc(peso, altura)
    imcTd.textContent = imc
}

function calculaImc(peso, altura) {
    let imc = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}
