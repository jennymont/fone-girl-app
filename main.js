function tocaSom(seletorAudio) {

    document.querySelector('.som').play();
}

const listaDeTeclas = document.querySelectorAll('.teclas');

const campoTelefone = document.getElementById("telefone");
const idAudio = `#som_tecla_fone${1}`

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador];    
    teclas.onclick = function () {
        campoTelefone.value += teclas.value
        tocaSom(idAudio);

    }

}

const teclaDeletar = document.querySelector('.deletar')
teclaDeletar.onclick = function () {
    
    tocaSom(idAudio);
    const penultimo = campoTelefone.value.length - 1;

    const textoAtual = campoTelefone.value.substring(0, penultimo);

    campoTelefone.value = textoAtual;
    

}


