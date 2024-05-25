(function ColocarEventos(){
    const anoAtual = document.getElementById("2020s");
    let dataDoComputador = new Date().getFullYear();
    
    if(dataDoComputador < 1981){
        anoAtual.style.display = "none";
    }
})();

(async function AdicionarBloco(){
    const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.00&lon=49.00&appid=ba2acfbf29fe888fea7010dee7d8952e`).catch(erro => console.log(erro));
    const apiJson = await apiResponse.json();

    const dia = document.createTextNode("Dia: " + new Date().getDate() + "/" + Number(new Date().getMonth() + 1));
    const descricao = document.createTextNode("Descrição: " + JSON.stringify(apiJson.weather[0].description));
    const ceu = document.createTextNode("Céu: " + JSON.stringify(apiJson.weather[0].main));
    const id = document.createTextNode("Id: " + JSON.stringify(apiJson.weather[0].id));

    const diaDiv = document.getElementById("dia");
    const descricaoDiv = document.getElementById("descricao");
    const ceuDiv = document.getElementById("céu");
    const idDiv = document.getElementById("id");

    diaDiv.appendChild(dia);
    descricaoDiv.appendChild(descricao);
    ceuDiv.appendChild(ceu);
    idDiv.appendChild(id);
})()