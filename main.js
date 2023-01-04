const nome = prompt('Qual é seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagem = prompt('Qual linguagem de programaçao você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem} !` );

const pergunta = prompt(`Vocë gosta de estudar ${linguagem} ? Responda com o número 1
                        para SIM ou 2 para NAO.`)

if(pergunta == 1)
{
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
}else
{
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}



function playSong(AudioSelector)
{
   const element = document.querySelector(AudioSelector);

   if(element != null && element.localName === 'audio')
    {
        element.play();
    }
    else
    {
        alert('Elemento não encontrado ou seletor inválido');
    }
}



const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++)
{

    const teclas = listaDeTeclas[contador]
    const instrument = teclas.classList[1];
    const idAudio = `#som_${instrument}`;

    teclas.onclick = function()
    {
        playSong(idAudio);
    };   

    teclas.onkeydown = function(event)
    {
        if(event.code === 'Space' || event.code === 'Enter') 
        {
            teclas.classList.add('ativa');
        }
    } 

    teclas.onkeyup = function()
    {
        teclas.classList.remove('ativa');
    }

}
















