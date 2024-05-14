for (i = 0; i<=50 ; i++){
    if(i%2 == 0){
        document.write(` ${i} <br>`)
    }
}
document.write('<br>Agr é os impar<br>')
for (i = 0; i<=50 ; i++){
    if(i%2 == 1){
        
        document.write(`<br> ${i}`)
    }
}
function oi(){
    let nome= document.getElementById("blabla").value
    if((nome == "Davidson")||(nome == "Luis")||(nome == "Cicero")){
         alert(`Bem vindo ${nome}`)
    }else{
        document.getElementById("ka").innerHTML = `VÁ PA FRUTA QUE PARTIU`
    }
    



    
}