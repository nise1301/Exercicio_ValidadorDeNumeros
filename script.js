let res = document.querySelector('div#res')
let num = document.querySelector('input#fnum')
let lista = document.querySelector('input#flista')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    for(let i = 0; i<l.length; i++){
        if(l[i] == n){
            return true
        }
    }
    return false
}
function adicionar(){
    if(isNumero(num.value)&&inLista(num.value,valores)){

    } else{
        window.alert("[ERRO!] Valor inválido ou já encontrado na lista")
    }
}