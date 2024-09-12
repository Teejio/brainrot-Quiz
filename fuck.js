

let questions = window.questions;

        document.getElementById('bbg').play();
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('bbg').play();
    document.removeEventListener('click', musicPlay);
}
let qSeq = 0;

let please = [...Array(questions.problems.length).keys()];
            let questionNum = 0;
            




        let numRight = 0;

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
shuffle(please);
        function fart(){
questionNum = please[qSeq];

     //     window.alert( _.shuffle(questions.problems));
                
     //     window.alert( _.shuffle(questions.problems));
        
            document.getElementById("sigmoid").innerHTML = questions.problems[questionNum].q;
            document.getElementById("fim").value = "";
            document.getElementById("pingas").innerHTML = `Question ${(questionNum + 1).toString()} / ${questions.problems.length}`;
        }

        var bort= function(){

            let test = CryptoJS.SHA1(document.getElementById("fim").value.toUpperCase()).toString();
            let a = questions.problems[questionNum].a.includes(test);
            document.getElementById("CHUD").innerHTML += `<li>${(a)? "✔":"❌"} ${document.getElementById("fim").value}</li>`;
            if (a){
                numRight ++;
            }
            
            if (qSeq == questions.problems.length -1){
                // do the ending Screen;
       //         document.getElementById("chungus").innerHTML= `<h2>FINAL SCORE: ${Math.floor((numRight/ questions.problems.length) * 100)}%</h2><h5>Return if you want some more ;)</h5>`;


                let thing = "";

                switch(Math.floor((numRight/ questions.problems.length) * 10)) {
                case 10:
                    thing = "<h4>Perfect! Perfect ! Perfect ! You truly have some [[AMBITION]] [[INSIDE YOU]]</h4><img src='gassy.gif' width='150vw' />";
                    break;
                case 9:
                    thing = "<h4>So Close! [[JUST REMEMBER WHAT YOUR OLD PAL SAID]] and keep going till 100%</h4><img src='babycorn.png' width='150vw' />";
                    break;
                case 8:
                    thing = "<h4>Impress Work! Continue on your [[MISSION]] for 100%</h4><img src='bbg.gif' width='150vw' />";
                    break;
                case 7:
                    thing = "<h4>Getting there [[FRIEND]]! Let more of thre rot consume you.</h4><img src='bbg.gif' width='150vw' />";
                    break;
                case 6:
                    thing = "<h4>You need much more [[GUIDE]]ance to reach ur potiental [[OLD PAL]] have a wingy to motivate you.</h4><img src='wingy.png' width='150vw' />";
                    break;
                default:
                    thing = "<h4>Only elder sigmas get this score. Study this image and come back.</h4><img src='horrid.png' width='200vw' />";
                    break;

                }
                document.getElementById("chungus").innerHTML += thing;
                return;
            }
            qSeq+;
            fart();
        }

        fart();
