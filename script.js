function contar() {
    var inic = Number(window.document.getElementById('inic').value)
    var fim = Number(window.document.getElementById('fim').value)
    var passo = Number(window.document.getElementById('passo').value)
    var res = window.document.getElementById('res')

    res.innerHTML = "";  

    if (isNaN(inic) || isNaN(fim) || isNaN(passo) || passo <= 0){
        res.innerHTML = 'Insira valores válidos'
        return
    }

    if (inic < fim) {
        for (let i = inic;i <= fim;i = i + passo){
            res.innerHTML += `${i} ->`
        }
    } else {
        for (let i = inic;i >= fim;i = i - passo){
            res.innerHTML += `${i} ->`
        }
    }
   
    res.innerHTML += `🏁`;
    
}