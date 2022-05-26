var entrada = []
var userName = ''
var page = 1

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
    window.location.href = 'main/rataalada.html';
}
function usuario(){
    user = userInp.value
    if (user == `charada`){
        window.location.replace('charada1.html');
    }
}

function criminosoEsq(){
    page--
    if (page == 1) {
        nomeCrime.innerHTML = `Nome: Victor Fries`
        idadeCrime.innerHTML = `Idade: 47`
        akaCrime.innerHTML = `Conhecido como: Senhor Frio`
        procCrime.innerHTML = `Procurado desde: 01/05/2019`
        criminoso.src = `main/imgs/fries.jpeg`
    } else if (page == 2) {
        nomeCrime.innerHTML = `Nome: Selina Kyle`
        idadeCrime.innerHTML = `Idade: 28`
        akaCrime.innerHTML = `Conhecida como: Mulher Gato`
        procCrime.innerHTML = `Procurada desde: 17/09/2021`
        criminoso.src = `main/imgs/selina.jpg`
    } else if (page == 3) {
        nomeCrime.innerHTML = `Nome: Bane Dorrance`
        idadeCrime.innerHTML = `Idade: 30`
        akaCrime.innerHTML = `Conhecido como: Bane`
        procCrime.innerHTML = `Procurado desde: 21/11/2021`
        criminoso.src = `main/imgs/bane.jpeg`
    } else if (page == 4) {
        nomeCrime.innerHTML = `Nome: Edward Nigma`
        idadeCrime.innerHTML = `Idade: 34`
        akaCrime.innerHTML = `Conhecido como: Charada`
        procCrime.innerHTML = `Procurado desde: 04/05/2022`
        criminoso.src = `main/imgs/nigma.jpg`
    } else if (page == 0) {
        page = 4
        nomeCrime.innerHTML = `Nome: Edward Nigma`
        idadeCrime.innerHTML = `Idade: 34`
        akaCrime.innerHTML = `Conhecido como: Charada`
        procCrime.innerHTML = `Procurado desde: 04/05/2022`
        criminoso.src = `main/imgs/nigma.jpg`
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
        criminoso.src = `main/imgs/selina.jpg`
    } else if (page == 3) {
        nomeCrime.innerHTML = `Nome: Bane Dorrance`
        idadeCrime.innerHTML = `Idade: 30`
        akaCrime.innerHTML = `Conhecido como: Bane`
        procCrime.innerHTML = `Procurado desde: 21/11/2021`
        criminoso.src = `main/imgs/bane.jpeg`
    } else if (page == 4) {
        nomeCrime.innerHTML = `Nome: Edward Nigma`
        idadeCrime.innerHTML = `Idade: 34`
        akaCrime.innerHTML = `Conhecido como: Charada`
        procCrime.innerHTML = `Procurado desde: 04/05/2022`
        criminoso.src = `main/imgs/nigma.jpg`
    } else if (page == 5) {
        page = 1
        nomeCrime.innerHTML = `Nome: Victor Fries`
        idadeCrime.innerHTML = `Idade: 47`
        akaCrime.innerHTML = `Conhecido como: Senhor Frio`
        procCrime.innerHTML = `Procurado desde: 01/05/2019`
        criminoso.src = `main/imgs/fries.jpeg`
    }
}

function riddle1(){
    var resp = resp1.value
    if (resp == `Riqueza` || resp == `riqueza`){ 
        window.location.replace('resultado1.html')
    }
}

function denuncia() {
    boletimDen.innerHTML = `<ocorrencias-a></ocorrencias-a>`
}