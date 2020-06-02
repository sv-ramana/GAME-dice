var score, roundscore, activeplayer, gameplaying;

function init() {
    
      score = [0,0];
    roundscore = 0;
    activeplayer = 0;
    gameplaying = true;
    
    //document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '<em>';
//var x = document.querySelector('#current-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'PLAYER 1';
document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-name-0').classList.remove = 'winner';
    document.querySelector('.player-name-1').classList.remove = 'winner';
    document.querySelector('.player-name-0').classList.remove = 'active';
    document.querySelector('.player-name-1').classList.remove = 'active';
    document.querySelector('.player-name-0').classList.add = 'active';
};

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gameplaying) {
        
          //  random nmber
    dice = Math.floor(Math.random()*6) + 1;
    
   //  display the result
    
    //document.querySelector('.dice').style.display = 'block';
    
    var diceDoms= document.querySelector('.dice');
    diceDoms.style.display = 'block';
    diceDoms.src = 'dice' + dice + '.png';
    
    
    //update the round score
    if(dice !== 1) {
        //add score
        
        roundscore += dice;
        document.querySelector('#current-' + activeplayer).textContent = roundscore;
         
    } else {
       
        nextPlayer();
        
    }    
    }
});


//function for roll and hold

function nextPlayer() {
    
     //another player
        activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;
        
        document.querySelector('#current-0').textContent = 0;
         document.querySelector('#current-0').textContent = 0;
        
        // panel activation
        
//        document.querySelector('#panel0').classList.remove('active');
//        document.querySelector('#panel1').classList.add('active');
//        
        document.querySelector('#panel0').classList.toggle('active');
        document.querySelector('#panel1').classList.toggle('active');
        
        // display none after change the toggle
        
        document.querySelector('.dice').style.display = 'none';
};



// hold activation
 
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gameplaying) {
      
        //add current score to the global score
    
    score[activeplayer] += roundscore;
    
    
    // update the UI
    
    document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];
    
    
    
    //check if player won the game
    
    if(score[activeplayer] >= 200) {
        // this player won the match
        document.querySelector('.player-name-' + activeplayer).textContent = ' Winner!';
        document.querySelector('.dice').style.display = 'none';
       // document.querySelector('#panel' + activeplayer).style.border = '1px solid hotpink';
        gameplaying = false;
        
    } else {
          //next player
    
        nextPlayer();
    }
    
    }
});

document.querySelector('.btn-new').addEventListener('click', init);












