
let allaDjur = []; // Tom array där vi pushar in objekten

const läggTillDjur = (ev) => {
    ev.preventDefault();
    let djur = {
        namn: document.getElementById('djuretsNamn').value,
        ålder: document.getElementById('djuretsÅlder').value,
        art: document.getElementById("art").value,
        försäkring: document.getElementById("försäkring").value,
        pris: 50,
    }
        
    if (djur.namn) {
        if (djur.ålder) {
            if (art.value === "katt") {
                if (djur.ålder >= 9) {
                    djur.pris += 25;
                }
            
                if (försäkring.value === "bas") {
                    djur.pris += 50;
                } else if (försäkring.value === "premium") {
                    djur.pris += 75;
                } else if (försäkring.value === "lyx") {
                    djur.pris += 100;
                }
            
            } if (art.value === "hund") {
                if (djur.ålder >= 9) {
                    djur.pris += 25;
                }
            
                if (försäkring.value === "bas") {
                    djur.pris += 150;
                } else if (försäkring.value === "premium") {
                    djur.pris += 175;
                } else if (försäkring.value === "lyx") {
                    djur.pris += 200;
                }
            
            } if (art.value === "kanin") {
                if (försäkring.value === "bas") {
                    djur.pris += 25;
                } else if (försäkring.value === "premium") {
                    djur.pris += 50;
                } else if (försäkring.value === "lyx") {
                    djur.pris += 75;
                }
            
            } if (art.value === "hamster") {
                if (försäkring.value === "premium") {
                    djur.pris += 50;
                } else if (försäkring.value === "lyx") {
                    djur.pris += 75;
                }
            
            }

            console.log(djur);
            allaDjur.push(djur);
            document.forms[0].reset();

            const fallandeDjur = document.createElement("div"); // html skapar en div
            fallandeDjur.classList.add("fallandeDjur"); 
            fallandeDjur.style.left = 60 + "vw";
            if (djur.art === "hund") {
                fallandeDjur.innerText = "Nu är din hund försäkrad🐶";
            } else if (djur.art === "katt") {
                fallandeDjur.innerText = "Nu är din katt försäkrad😻";
            } else if (djur.art === "hamster") {
                fallandeDjur.innerText = "Nu är din hamster försäkrad🐹";
            } else {
                fallandeDjur.innerText = "Nu är din kanin försäkrad🐰";
            }
            document.body.appendChild(fallandeDjur);
            setTimeout(() => {
                fallandeDjur.remove(); }, 5000); 

        } else {
            alert("Observera alla fält måste vara ifyllda😐");
        }
    } else {
        alert("Observera alla fält måste vara ifyllda😐");
    }
}
        document.getElementById('btn').addEventListener('click', läggTillDjur);

function visaDjur() {
        document.getElementById("output").innerHTML = "";
    allaDjur.forEach(element => {
        document.getElementById("output").innerHTML += "Namn/Ålder : " + element.namn +  ", " + element.ålder + "år" + "<br>" +
            "Försäkring : " + element.försäkring + "<br>" + "Pris : " + element.pris + "<br>" + "Art : " + element.art + "<br>" + "<br>";
    });

}

function ångraDjur() {
    allaDjur.pop();
    visaDjur();
    };

    




















    

/*
PRISLISTA
katt under 9 år / över 9 år
bas =     100 / 125
premium = 125 / 150
lyx =     150 / 175

hund under 9 år / över 9 år
bas =     200 / 225
premium = 225 / 250
lyx =     250 / 275

kanin 
bas =     75
premium = 100
lyx =     125

hamster
bas =     50 
premium = 75
lyx =     100
*/


/*html
    <input type="text" id="djurInput" placeholder="inpDjur" />
    <input type="text" id="ålderInput" placeholder="ålderinput" />

    <button type="button" id="btn-insert" onclick="läggTill()">Ok</button>
    */

    /* javascriptet

    const djurInput = document.getElementById("djurInput");
const ålderInput = document.getElementById("ålderInput");
const btnInsert = document.getElementById("btn-insert");
const output = document.getElementById("output");

function läggTill() {

    const djur = djurInput.value;
    const ålder = ålderInput.value;
    console.log(djur)
    console.log(ålder)

    if (djur && ålder) {
        localStorage.setItem(djur, ålder);
        location.reload();
    }
}

*/


            

