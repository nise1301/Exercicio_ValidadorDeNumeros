let res = document.querySelector('div#res')
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
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

function maiorMenorValor(valores){
    let maior = valores[0]
    let menor = valores[0]

    for(let pos = 0;pos<valores.length;pos++){
        if(valores[pos]>maior){
            maior = valores[pos]
        }
        if(valores[pos]<menor){
            menor = valores[pos]
        }
    }
    return {maior, menor}
}

function somar(valores){
    let soma = 0
    for(let pos = 0;pos<valores.length;pos++){
        soma += valores[pos]
    }
    return soma
}

function calculoMedia(soma, tot){
    let media = soma/tot
    return media
}

function adicionar(){
    if(isNumero(num.value)&&!inLista(num.value,valores)){
        valores[valores.length] = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert("[ERRO!] Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length==0){
        window.alert("Adicione valores antes de finalizar")
    } else{
        let tot = valores.length
        let {maior,menor} = maiorMenorValor(valores)
        let soma = somar(valores)
        let media = calculoMedia(soma, tot)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media.toFixed(2)}</p>`

    }
}
/*Forma como Guanabara fez, mas que pros meus estudos não era tão interessantes, pois precisava exercitar o for:
        let tot = valores.length
        let {maior,menor} = maiorMenorValor(valores)
        let soma = somar(valores)
        let media = calculoMedia(soma, tot)

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior){
                maior = valores[pos]
            } 
            if(valores[pos]<menor){
                 menor = valores[pos] 
            }  
        }
        media = soma/tot
*/ 