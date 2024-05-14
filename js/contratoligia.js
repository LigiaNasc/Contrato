function digitar(){
    let N= document.getElementById("nome").value
    let RG = document.getElementById("rg").value
    let CPF = document.getElementById("cpf").value
    let P = document.getElementById("prof").value
    let E = document.getElementById("ende").value
    document.getElementById('Nome').textContent= N
    document.getElementById('Rg').textContent= RG
    document.getElementById('Cpf').textContent= CPF
    document.getElementById('Prof').textContent= P
    document.getElementById('Ende').textContent= E
}