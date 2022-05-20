var entrada = []
var userName = ''
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
    window.location.replace('main/rataalada.html');
}