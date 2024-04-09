
let score=JSON.parse(localStorage.getItem('score'));
      if(score===null){
         score={
          wins:0,
          losses:0,
          ties:0
         }
        }
        updateScoreElement();
        // resultUpdateJs();
      

      //events
      const rockButton=document.querySelector('.rock-button');
      
      const paperButton=document.querySelector('.paper-button');

      const scissorsButton=document.querySelector('.scissors-button');

      const autoplayButton=document.querySelector('.autoplay-button')

      rockButton.addEventListener('click',()=>compareMoves('rock'));
      
      paperButton.addEventListener('click',()=>compareMoves('paper'));
     
      scissorsButton.addEventListener('click',()=>compareMoves('scissors'));
     
      autoplayButton.addEventListener('click',()=>{
        autoplayFun();
      })
     

      //keydown functionality

      const keyDown=document.body.addEventListener('keydown',(event)=>{
      if(event.key==='r'){
        compareMoves('rock');
      }else if(event.key==='p'){
        compareMoves('paper');
      }else if(event.key==='s'){
        compareMoves('scissors')
      }else if(event.key==='a'){
        autoplayFun();
      }else if(event.key==='Backspace'){
        score.wins=0,
        score.losses=0,
        score.ties=0
        localStorage.removeItem('score')
        updateScoreElement();
      }
      })


      console.log(JSON.parse(localStorage.getItem('score')));
      let isAuto=false;
      let intervalId;

      const autoplayFun=function(){
        if(!isAuto){
        document.querySelector('.autoplay-button').innerHTML='Stop autoplay'
        intervalId=setInterval(function(){
        const playerMove= PickComputerMove();
        compareMoves(playerMove)
        },1000);
        isAuto=true;
      }else{
        document.querySelector('.autoplay-button').innerHTML='Autoplay'
        clearInterval(intervalId);
        isAuto=false;
      }
    }

    
      function compareMoves(playerMove){
      const computerMove=PickComputerMove();
      let result='';
      if(playerMove==='rock'){
        
        if(computerMove==='rock'){
          result='game is tie';
        }
        else if(computerMove==='scissors'){
          result='you win the game';
        }
        else if(computerMove==='paper'){
          result='you lost the game';
        }
      }
      else if(playerMove==='paper'){
        if(computerMove==='paper'){
          result='game is tie';
        }
        else if(computerMove==='rock'){
          result='you win the game';
        }
        else if(computerMove==='scissors'){
          result='you lost the game';
        }
      }
      else if(playerMove==='scissors'){
        if(computerMove==='scissors'){
          result='the game is tie';
        }
        else if(computerMove==='paper'){
          result='you win the game';
        }
        else if(computerMove==='rock'){
          result='you lost the game';
        }
      }
      resultUpdate(result);
      pickMoves(playerMove,computerMove);
      resultUpdateJs(result);
      // return result;

      console.log(`you pick:${playerMove} and computer picks: ${computerMove}, the result is: ${result}
      wins:${score.wins}Losses:${score.losses},Ties:${score.ties}`)
        }
      function resultUpdate(result){
        if(result==='you win the game'){
          score.wins+=1;
        }else if(result==='you lost the game'){
          score.losses+=1;
        }else{
          score.ties+=1;
        }
      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();
      }

      function updateScoreElement(){
        document.querySelector('.js-score-element').innerHTML=`wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
      }

      function resultUpdateJs(result){
        document.querySelector('.js-result-element').innerHTML=
        `${result}`;
      }

      function pickMoves(playerMove,computerMove){
        document.querySelector('.js-pick-element').innerHTML=
         `You pick : <img src="${playerMove}-emoji.png" class="move-img">
          Computer Move: <img src="${computerMove}-emoji.png" class="move-img"> `
      }

      function PickComputerMove(){
        const randomNum=Math.random();
        let computerMove='';
        if(randomNum>0 && randomNum<=1/3){
          computerMove='rock';
        }
        else if(randomNum>1/3 && randomNum<=2/3){
          computerMove='paper';
        }
        else{
          computerMove='scissors';
        }
        return computerMove;
    }