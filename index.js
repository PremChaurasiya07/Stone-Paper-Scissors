    let ComputerMove;
    let Move=document.getElementById('move');
    let score=document.getElementById('score');
    let Scoredata={
        Attempts:0,
        Win:0,
        Lose:0,
        Tie:0,
    }
    let UserMove=(value)=>{
        Rock_Paper_Scissors(RandomGenerator(),value);
        
    }
    let RandomGenerator=()=>{
        let Randomvalue=Math.random()*3;
        if(Randomvalue>0 && Randomvalue<1){
            ComputerMove='ROCK';
        }
        else if(Randomvalue>=1 && Randomvalue<2){
            ComputerMove='PAPER';
        }
        else if(Randomvalue>=2 && Randomvalue<3){
            ComputerMove='SCISSORS';
        }
        console.log(Randomvalue);
    
    return ComputerMove;
    }

    function Rock_Paper_Scissors(RandomGenerator,UserMove){
        let result;
        if(UserMove==RandomGenerator){
            result='ITS A TIE';
            Scoredata.Tie++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
    else if(UserMove!=RandomGenerator){
        if( UserMove=='PAPER' && RandomGenerator=='ROCK'){
            result='YOU WIN';
            Scoredata.Win++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else if(UserMove=='SCISSORS' && RandomGenerator=='ROCK'){
            result='YOU LOSE';
            Scoredata.Lose++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else if(UserMove=='ROCK' && RandomGenerator=='PAPER'){
            result='YOU LOSE';
            Scoredata.Lose++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else if(UserMove=='SCISSORS' && RandomGenerator=='PAPER'){
            result='YOU WIN';
            Scoredata.Win++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else if(UserMove=='ROCK' && RandomGenerator=='SCISSORS'){
            result='YOU WIN';
            Scoredata.Win++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else if(UserMove=='PAPER' && RandomGenerator=='SCISSORS'){
            result='YOU LOSE';
            Scoredata.Lose++;
            Scoredata.Attempts++;
            Outputfun(UserMove,RandomGenerator,result);
        }
        else{
            console.log('Error 404');
            Scoredata.Attempts++;
        }
    }
    SCOREDATA(Scoredata.Attempts,Scoredata.Win,Scoredata.Lose,Scoredata.Tie);

    
    }

    function Outputfun(usermove,computermove,RESULT){
        Move.innerHTML=`<span>YOU:</span> <img src='img/${usermove}.jpeg' class='icon'></img> <span>COMPUTER:</span> <img src='img/${computermove}.jpeg' class='icon'></img><br>
    <p class='msg'> ${RESULT}</p>
        `;
    }
    function SCOREDATA(attempts,win,lose,tie){
        score.innerHTML=`<p class='display'>
        <abbr title='ATTEMPTS:${attempts}'>ATTEMPTS:${attempts}</abbr> 
        <abbr title='WIN:${win}'>WIN:${win}</abbr>  <abbr title='LOSE:${lose}'>LOSE:${lose}</abbr>   
        <abbr title='TIE:${tie}'>TIE:${tie}</abbr></p>`;
    }

    function Reset(){
        let Attempts=Scoredata.Attempts;
        let Win=Scoredata.Win;
        let Lose=Scoredata.Lose;
        let Tie=Scoredata.Tie;
        Attempts=0;
        Win=0;Lose=0;
        Tie=0;
    
            SCOREDATA(Attempts,Win,Lose,Tie);

    }
let autobtn=document.getElementById('autoplay');
    let AUTOID; 
    function Autoplay(){
        if(autobtn.innerText=='Autoplay'){
        AUTOID=setInterval(()=>{
        autobtn.innerText='Stop';
        UserMove(forAUTOPLAYmove()),2000
       },1000);
    }
    else if(autobtn.innerText=='Stop'){
        autobtn.innerText='Autoplay';
       clear();

    }
    }
    function clear(){
        clearInterval(AUTOID);
    }
    function forAUTOPLAYmove(){
       
        let ComputerMove1;
        let Randomvalue=Math.random()*3;
        if(Randomvalue>0 && Randomvalue<1){
            ComputerMove1='ROCK';
        }
        else if(Randomvalue>=1 && Randomvalue<2){
            ComputerMove1='PAPER';
        }
        else if(Randomvalue>=2 && Randomvalue<3){
            ComputerMove1='SCISSORS';
        } 
        return ComputerMove1;
    }



