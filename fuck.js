

let questions = window.questions;

        document.getElementById('bbg').play();
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('bbg').play();
    document.removeEventListener('click', musicPlay);
}
            let questionNum = 0;
            const topic = ["The Mission _", "What is Chapter 5", "What is Byza's True Title?","What AI did byza Kill?", "What does bbgStarlo's Thumbnail say", "What do we say to Frostex?", "Who Stinks it up?","Babycorn?", "What is Jupo's slash?" , "Who Cheated on FIM?"  ]
           // i see you alice stop looking
        let answers = [["INSIDE YOU", "INSIDE YOU!", "INSIDE YOU!!"], ["ICE PALACE"], ["ELDER SIGMA"], ["WING GASTER","WINGY","WINGY BOT", "WING GASTER AI","WINGY AI", "AI WING GASTER","AI WINGY"  ], ["THE WEST IS GOING NOWHERE", "THE WESTS GOING NOWHERE", "THE WEST'S GOING NOWHERE"], ["THE MISSION INSIDE YOU","THE MISSION INSIDE YOU!"], ["FARTYRUS"],["STARLOS HOME","STARLO'S HOME","STARLOS HOME, HELLO PRINCESS","STARLO'S HOME, HELLO PRINCESS" ], ["PAINT", "SPRAYPAINT"] ,["WING GASTER", "WINGY", "WINGY GYATTSTER"
            
            
        
] ];





        let numRight = 0;


        function fart(){


     //     window.alert( _.shuffle(questions.problems));
                
     //     window.alert( _.shuffle(questions.problems));
        questions.problems.sort( () => Math.random() - 0.5) );
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
            
            if (questionNum == questions.problems.length -1){
                // do the ending Screen;
                document.getElementById("chungus").innerHTML= `<h2>FINAL SCORE: ${Math.floor((numRight/ questions.problems.length) * 100)}%</h2><h5>Return if you want some more ;)</h5>`;


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
            questionNum++;
            fart();
        }

        fart();
