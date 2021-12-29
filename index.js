const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')

suffleImage();
clicking();
function suffleImage(){
  
    card.forEach(c=>{

      const num = [...Array(card.length).keys() ];
      const random = Math.floor(Math.random()*card.length);

     c.style.order = num[random];
    })
}

function clicking(){
    for(let i =0; i<card.length; i++){
  
          front[i].classList.add('show');
          setInterval(() => {
            front[i].classList.remove('show');

          }, 2000);

        card[i].addEventListener("click" ,()=>{
            front[i].classList.add('flip');
            const filppedcard = document.querySelectorAll('.flip');

            if(filppedcard.length == 2){
                
                container.style.pointerEvents = 'none';
                setInterval(() => {
                    container.style.pointerEvents = 'all';

                }, 1000);

                match(filppedcard[0] ,filppedcard[1] );
            }
        })
    }
}
function match(cardOne , cardTow){
    if( cardOne.dataset.index == cardTow.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTow.classList.remove('flip');

        cardOne.classList.add('match');
        cardTow.classList.add('match');
    }else{
        setTimeout(() =>{
            cardOne.classList.remove('flip');
            cardTow.classList.remove('flip');
    
        }, 1000);
    }
}