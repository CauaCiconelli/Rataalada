var entrada = []
var userName = ''
var page = 1
var contadorErro = 0
var objetivo = []
objetivo[0] = 'Terminar os preparativos para o plano'

function cClick() {
    entrada[0] = 'c'
    if (entrada[3] == 'r' && entrada[1] == 'h'&& entrada[2] == 'a'&& entrada[5] == 'd'&& entrada[4] == 'a'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function hClick() {
    entrada[1] = 'h'
    if (entrada[0] == 'c' && entrada[3] == 'r'&& entrada[2] == 'a'&& entrada[5] == 'd'&& entrada[4] == 'a'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function aClick1() {
    entrada[2] = 'a'
    if (entrada[0] == 'c' && entrada[1] == 'h'&& entrada[3] == 'r'&& entrada[5] == 'd'&& entrada[4] == 'a'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function rClick() {
    entrada[3] = 'r'
    if (entrada[0] == 'c' && entrada[1] == 'h'&& entrada[2] == 'a'&& entrada[5] == 'd'&& entrada[4] == 'a'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function aClick2() {
    entrada[4] = 'a'
    if (entrada[0] == 'c' && entrada[1] == 'h'&& entrada[2] == 'a'&& entrada[3] == 'r'&& entrada[5] == 'd'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function dClick() {
    entrada[5] = 'd'
    if (entrada[0] == 'c' && entrada[1] == 'h'&& entrada[2] == 'a'&& entrada[3] == 'r'&& entrada[4] == 'a'&& entrada[6] == 'a') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}
function aClick3() {
    entrada[6] = 'a'
    if (entrada[0] == 'c' && entrada[1] == 'h' && entrada[2] == 'a' && entrada[3] == 'r' && entrada[4] == 'a' && entrada[5] == 'd') {
        charadaQuest.style.visibility = 'visible'
    } else {
        
    }
}

function charada(){
    window.location.href = 'rataalada.html';
}

function criminosoEsq(){
    page--
    if (page == 1) {
        nomeCrime.innerHTML = `Nome: Victor Fries`
        idadeCrime.innerHTML = `Idade: 47`
        akaCrime.innerHTML = `Conhecido como: Senhor Frio`
        procCrime.innerHTML = `Procurado desde: 01/05/2019`
        criminoso.src = `css/imgs/fries.jpeg`
    } else if (page == 2) {
        nomeCrime.innerHTML = `Nome: Selina Kyle`
        idadeCrime.innerHTML = `Idade: 28`
        akaCrime.innerHTML = `Conhecida como: Mulher Gato`
        procCrime.innerHTML = `Procurada desde: 17/09/2021`
        criminoso.src = `css/imgs/selina.jpg`
    } else if (page == 3) {
        nomeCrime.innerHTML = `Nome: Bane Dorrance`
        idadeCrime.innerHTML = `Idade: 30`
        akaCrime.innerHTML = `Conhecido como: Bane`
        procCrime.innerHTML = `Procurado desde: 21/11/2021`
        criminoso.src = `css/imgs/bane.jpeg`
    } else if (page == 4) {
        nomeCrime.innerHTML = `Nome: Edward Nigma`
        idadeCrime.innerHTML = `Idade: 34`
        akaCrime.innerHTML = `Conhecido como: Charada`
        procCrime.innerHTML = `Procurado desde: 04/05/2022`
        criminoso.src = `css/imgs/nigma.jpg`
    } else if (page == 0) {
        page = 5
        nomeCrime.innerHTML = `Nome: Desconhecido`
        idadeCrime.innerHTML = `Idade: Desconhecida`
        akaCrime.innerHTML = `Conhecido como: Coringa`
        procCrime.innerHTML = `Procurado desde: 01/06/2022`
        criminoso.src = `css/imgs/coringa.jpeg`
    }
}

function criminosoDir(){
    page++
    if (page == 1) {
        nomeCrime.innerHTML = `Nome: Victor Fries`
        idadeCrime.innerHTML = `Idade: 47`
        akaCrime.innerHTML = `Conhecido como: Senhor Frio`
        procCrime.innerHTML = `Procurado desde: 01/05/2019`
    } else if (page == 2) {
        nomeCrime.innerHTML = `Nome: Selina Kyle`
        idadeCrime.innerHTML = `Idade: 28`
        akaCrime.innerHTML = `Conhecida como: Mulher Gato`
        procCrime.innerHTML = `Procurada desde: 17/09/2021`
        criminoso.src = `css/imgs/selina.jpg`
    } else if (page == 3) {
        nomeCrime.innerHTML = `Nome: Bane Dorrance`
        idadeCrime.innerHTML = `Idade: 30`
        akaCrime.innerHTML = `Conhecido como: Bane`
        procCrime.innerHTML = `Procurado desde: 21/11/2021`
        criminoso.src = `css/imgs/bane.jpeg`
    } else if (page == 4) {
        nomeCrime.innerHTML = `Nome: Edward Nigma`
        idadeCrime.innerHTML = `Idade: 34`
        akaCrime.innerHTML = `Conhecido como: Charada`
        procCrime.innerHTML = `Procurado desde: 04/05/2022`
        criminoso.src = `css/imgs/nigma.jpg`
    } else if (page == 5) {
        nomeCrime.innerHTML = `Nome: Desconhecido`
        idadeCrime.innerHTML = `Idade: Desconhecida`
        akaCrime.innerHTML = `Conhecido como: Coringa`
        procCrime.innerHTML = `Procurado desde: 01/06/2022`
        criminoso.src = `css/imgs/coringa.jpeg`
    } else if (page == 6) {
        page = 1
        nomeCrime.innerHTML = `Nome: Victor Fries`
        idadeCrime.innerHTML = `Idade: 47`
        akaCrime.innerHTML = `Conhecido como: Senhor Frio`
        procCrime.innerHTML = `Procurado desde: 01/05/2019`
        criminoso.src = `css/imgs/fries.jpeg`
    }
}

function cadastroPag(){
    if (procInp.value == `y`) {   
        window.location.href = 'cadastro.html'
        procInp.value == ''
    }
}
function sair(){
    if (procInp2.value == `y`) {   
        window.location.href = 'index.html'
        procInp2.value == ''
    }
}

function prosseguir1(){
    var resp = resp1.value
    if (procInp.value == `y`) {  
        if (resp == `Frio` || resp == `frio`){ 
            window.location.replace('resultado1.html')
            procInp.value == ''
        } else {
            contadorErro++
        }
        if (contadorErro == 1) {
            erro.innerHTML = '&gt; Será que você consegue acertar a tempo?'
        } else if (contadorErro == 2) {
            erro.innerHTML = '&gt; Mas o que é isso, você só pode estar brincando comigo'
        } else if (contadorErro == 3) {
            erro.innerHTML = '&gt; Você não merece nem continuar este jogo'
            setTimeout(() => {
                window.location.href = 'erro.html'
            }, 4000);
        }
    } else{
        window.location.href = 'erro.html'
    }
}

function prosseguir2(){
    var resp = resp2.value
    if (procInp.value == `y`) {       
        if (resp == `Riqueza` || resp == `riqueza`){ 
            window.location.replace('resultado2.html')
            procInp.value == ''
        } else {
            contadorErro++
        }
        if (contadorErro == 1) {
            erro.innerHTML = '&gt; Você já atravessou um desafio, mas não acho que vá passar deste'
        } else if (contadorErro == 2) {
            erro.innerHTML = '&gt; Sua incapacidade me diverte'
        } else if (contadorErro == 3) {
            erro.innerHTML = '&gt; Você não merece nem continuar este jogo'
            setTimeout(() => {
                window.location.href = 'erro.html'
            }, 4000);
        }
    } else{
        window.location.href = 'erro.html'
    }
}

function prosseguir3(){
    var resp = resp3.value
    if (procInp.value == `y`) {       
        if (resp == `Sombras` || resp == `sombras`){ 
            window.location.replace('final.html')
            procInp.value == ''
        } else {
            contadorErro++
        }
        if (contadorErro == 1) {
            erro.innerHTML = '&gt; Você está quae no final. Vamos, erre agora'
        } else if (contadorErro == 2) {
            erro.innerHTML = '&gt; Você foi muito bem até este ponto. Boa sorte na vida'
        } else if (contadorErro == 3) {
            erro.innerHTML = '&gt; Agora chega, a diversão acabou'
            setTimeout(() => {
                window.location.href = 'erro.html'
            }, 4000);
        }
    } else{
        window.location.href = 'erro.html'
    }
}

function pag1(){
    if (procInp.value == `y`) {   
        window.location.href = 'charada2.html'
        procInp.value == ''
    }
}

function pag2(){
    if (procInp.value == `y`) {   
        window.location.href = 'charada3.html'
        procInp.value == ''
    }
}

function mostrarLista(){
    lista.innerHTML = ''
    for (var index = 0; index < objetivo.length; index++) {
        lista.innerHTML += `<div>${index+1}º ${objetivo[index]}</div>`
    }
}

function listaObj(){
    if (inserir.value == 'y') {
        objetivo.push(listagem.value)
        listagem.value = ''
        inserir.value = ''       
        mostrarLista()
    } else if (inserir.value == 'n') {
        listagem.value = ''
        inserir.value = ''
    }
}