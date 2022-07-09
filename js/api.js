// liga ingris : 2021
// liga italia : 2019
// liga jerman : 2140

let id_liga = "2021";  //liga Inggris
let url_klasemen = `https://api.football-data.org/v2/competitions/${id_liga}/standings`;
let url_topskor = `https://api.football-data.org/v2/competitions/PL/scorers?limit=3`;
let url_lastmatch = `https://api.football-data.org/v2/competitions/2021/matches?matchday=9&status=FINISHED`;
let url_upcoming = `https://api.football-data.org/v2/competitions/2021/matches?matchday=10&status=SCHEDULED`;

function getKlasemen(){

    let http = new XMLHttpRequest();
    //console.log(http);

    //mengirim permintaan ke server footbal-data
    http.open("GET", url_klasemen);
    http.setRequestHeader("X-Auth-Token", "3cdc91980b9d49bf88d28d350f578441");
    http.send();

    //menerima respon dari server
    http.addEventListener("load", ()=>{
        console.log("data klasemen diterima");
        console.log(http.responseText);

        let data = JSON.parse(http.responseText);

        let span_nama_liga = document.getElementById('nama_liga');
        span_nama_liga.innerHTML = data.competition.name;

        let span_last_update = document.getElementById('last_update');
        span_last_update.innerHTML = data.competition.lastUpdated;

        let dataKlasemen = data.standings[0].table;
        let outputKlasemen = "";
        for(let x in dataKlasemen){
            //console.log(`${dataKlasemen[x].team.name} ${dataKlasemen[x].position}`);
            outputKlasemen += `<tr>`;
            outputKlasemen += `<td>${dataKlasemen[x].position}</td>`;
            outputKlasemen += `<td><img src="${dataKlasemen[x].team.crestUrl}" width="24px"></td>`;
            outputKlasemen += `<td>${dataKlasemen[x].team.name}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].playedGames}</td>`;  
            outputKlasemen += `<td>${dataKlasemen[x].won}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].draw}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].lost}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].goalsFor}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].goalsAgainst}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].goalDifference}</td>`;
            outputKlasemen += `<td>${dataKlasemen[x].points}</td>`;
            outputKlasemen += `</tr>`;

        }

        let tabel_klasemen = document.getElementById("data_klasemen");
        tabel_klasemen.innerHTML = outputKlasemen;
    })
}

function getTopskor(){

    let http1 = new XMLHttpRequest();
    //console.log(http);

    //mengirim permintaan ke server footbal-data
    http1.open("GET", url_topskor);
    http1.setRequestHeader("X-Auth-Token", "3cdc91980b9d49bf88d28d350f578441");
    http1.send();

    // menerima respon dari server 
    http1.addEventListener("load", () => {
        console.log("data topSkor diterima");
        // console.log(http1.responseText);

        let data = JSON.parse(http1.responseText);

        let dataTopscore = data.scorers;
        let outputTopscore = "";
        for (let x in dataTopscore) {
            // console.log(dataTopscore[x].player.name);

            outputTopscore += `<div class="col-lg-4 text-center text-white">`;
            outputTopscore += `<div class="bg-primary p-3">`;
            outputTopscore += `<h4>${dataTopscore[x].player.name}</h4>`;
            outputTopscore += `${dataTopscore[x].team.name} <br>`;
            outputTopscore += `${dataTopscore[x].numberOfGoals}`;
            outputTopscore += `</div>`;
            outputTopscore += `</div>`;
        }
        let div_topscore = document.getElementById("div_topscore");
        div_topscore.innerHTML = outputTopscore;
    })
}

function getLastmatch() {
    let http2 = new XMLHttpRequest();

    // mengirim permintaan ke server 
    http2.open("GET", url_lastmatch);
    http2.setRequestHeader("X-Auth-Token", "adc6b758cb4945409465746ce17dcdca");
    http2.send();

    // menerima respon dari server 
    http2.addEventListener("load", () => {
        console.log("data last match diterima");
        // console.log(http2.responseText);

        let data = JSON.parse(http2.responseText);

        let dataLastmatch = data.matches;
        let outputLastmatch = "";
        for (let x in dataLastmatch) {
            outputLastmatch += `<div class="col-lg-12 mb-3">`;
            outputLastmatch += `<div class="row">`;
            outputLastmatch += `<div class="col-lg-12">${dataLastmatch[x].utcDate}</div>`;
            outputLastmatch += `<div class="col-lg-5">`;
            outputLastmatch += `<img src="https://crests.football-data.org/${dataLastmatch[x].homeTeam.id}.svg" alt="logo" width="24px"> <br>`;
            outputLastmatch += `${dataLastmatch[x].homeTeam.name} <br>`;
            outputLastmatch += `${dataLastmatch[x].score.fullTime.homeTeam}`;
            outputLastmatch += `</div>`;
            outputLastmatch += `<div class="col-lg-2">`;
            outputLastmatch += `VS`;
            outputLastmatch += `</div>`;
            outputLastmatch += `<div class="col-lg-5">`;
            outputLastmatch += `<img src="https://crests.football-data.org/${dataLastmatch[x].awayTeam.id}.svg" alt="logo" width="24px"> <br>`;
            outputLastmatch += `${dataLastmatch[x].awayTeam.name} <br>`;
            outputLastmatch += `${dataLastmatch[x].score.fullTime.awayTeam}`;
            outputLastmatch += ` </div>`;
            outputLastmatch += ` </div>`;
            outputLastmatch += ` <hr></div>`;


        }
        let div_lastmatch = document.getElementById("div_lastmatch");
        div_lastmatch.innerHTML = outputLastmatch;
    })
}
function getUpcomingmatch() {
    let http3 = new XMLHttpRequest();

    // mengirim permintaan ke server 
    http3.open("GET", url_upcoming);
    http3.setRequestHeader("X-Auth-Token", "adc6b758cb4945409465746ce17dcdca");
    http3.send();

    // menerima respon dari server 
    http3.addEventListener("load", () => {
        console.log("data Upcoming match diterima");
        // console.log(http2.responseText);

        let data = JSON.parse(http3.responseText);

        let dataUpcomingmatch = data.matches;
        let outputUpcomingmatch = "";
        for (let x in dataUpcomingmatch) {
            outputUpcomingmatch += `<div class="col-lg-12 mb-3">`;
            outputUpcomingmatch += `<div class="row">`;
            outputUpcomingmatch += `<div class="col-lg-12">${dataUpcomingmatch[x].utcDate}</div>`;
            outputUpcomingmatch += `<div class="col-lg-5">`;
            outputUpcomingmatch += `<img src="https://crests.football-data.org/${dataUpcomingmatch[x].homeTeam.id}.svg" alt="logo" width="24px"> <br>`;
            outputUpcomingmatch += `${dataUpcomingmatch[x].homeTeam.name} <br>`;
            outputUpcomingmatch += `</div>`;
            outputUpcomingmatch += `<div class="col-lg-2">`;
            outputUpcomingmatch += `VS`;
            outputUpcomingmatch += `</div>`;
            outputUpcomingmatch += `<div class="col-lg-5">`;
            outputUpcomingmatch += `<img src="https://crests.football-data.org/${dataUpcomingmatch[x].awayTeam.id}.svg" alt="logo" width="24px"> <br>`;
            outputUpcomingmatch += `${dataUpcomingmatch[x].awayTeam.name} <br>`;
            outputUpcomingmatch += ` </div>`;
            outputUpcomingmatch += ` </div>`;
            outputUpcomingmatch += ` <hr></div>`;


        }
        let div_upcomingmatch = document.getElementById("div_upcomingmatch");
        div_upcomingmatch.innerHTML = outputUpcomingmatch;
    })
}


