let anoAtual = document.getElementById("2020s");
let dataDoComputador = new Date().getFullYear();

if(dataDoComputador < 1981){
    anoAtual.style.display = "none";
}