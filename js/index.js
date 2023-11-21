var question="";
var reponse="";
var resutltat=true;
var play=false;
var choix=aleatoire(); 
var input;
var score=0;
var life=3;
var time=0;
var minutes;
var secondes;
let played=document.getElementById("play");
//choisir un nombre aléatoire
function aleatoire(){
    return  Math.floor(Math.random(10)*(10-1+1)+1);
}
//choisir la question et la réponse de manière aléatoire grace au nombre 
function quizzchoice(number){
    
    switch(number){
        case 1:
            question="Faire ce calcul: 45 + 2" ;
            reponse="47";
            break;
        case 2:
            question="Faire ce calcul: 50 x 2" ;
            reponse="100";
            break;
        case 3:
            question="Faire ce calcul: 20 x 10" ;
            reponse="200";
            break;
        case 4:
            question="Faire ce calcul: 2 + 4 x 5" ;
            reponse="22";
            break;
        case 5:
            question="Faire ce calcul: 50 x 1 / 2" ;
            reponse="25";
            break;
        case 6:
            question="Faire ce calcul: 1000 x 1000 / 1000" ;
            reponse="1000";
            break;
        case 7:
            question="Faire ce calcul: 4 + 4 x 1 / 2" ;
            reponse="6";
            break;
        case 8:
            question="Faire ce calcul: 4 x 5" ;
            reponse="20";
            break;
        case 9:
            question="Faire ce calcul: 80-50" ;
            reponse="30";
            break;
        case 10:
            question="Faire ce calcul: 52 +(-2)  " ;
            reponse="50";
            break;
        default:
            question="commencer le jeu";
            break;
    }
}
//verifier si la valeur entrer par l'utilisateur et la reponse sont identiques
function verified(reponse){
    input=document.getElementById("reponse").value;
    if (input==reponse){
        resutltat=true;
    }else{
        resutltat=false;
        console.log(input);
    }
    

}
//afficher les valeurs 
function affichervaleurs(){
        document.getElementById("question").innerHTML=question;
        document.getElementById("score").innerHTML=score;
        document.getElementById("life").innerHTML=life;
}
//commencer le jeu 
function start(){
    quizzchoice(choix);
    affichervaleurs();
    play=true;
}
//Compteur de temps passée  sur une question
function timer(){  
    setInterval(
        function(){
            time+=1;
            minutes =parseInt(time/60,10); 
            secondes = parseInt(time,10)
            if (secondes>60){
                secondes-=60*minutes;
            }
           document.getElementById("time").innerHTML=minutes+":"+secondes;

        },1000
    )

}
start();//lancer le jeu
timer();//lancer le comptur de temps 
// Si on click sur le button valider verifier si le la reponse correspond si oui augmenter le 
//score de 1 si la reponse n'a pas été rapide et 5 si c'est rapide. choisir une autre question
//et afficher un message pour notifier que c'est une bonne réponse
//Mais si la reponse est mauvaise diminuer la vie d'un etrelancer le choix, si la vie vient a 0 
//afficher un message de perte et relancer le jeu.
played.onclick=function(){
        verified(reponse);
        if(resutltat){
            choix=aleatoire();
            
            if(time<20){
                score+=5;
            }else{
                score+=1;
            }
            quizzchoice(choix);
            affichervaleurs();
            alert("You win")
            time=0;
        }else{
            life-=1;
            if(life==0){
                choix=aleatoire();
                alert("you loose \nRéponse: "+reponse);
                score=0;
                time=0;
                life=3;
                document.getElementById("life").innerHTML=life;
            }
            quizzchoice(choix);
            affichervaleurs();
        }
        document.getElementById("reponse").value="";
}

