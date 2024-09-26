const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{ 
        console.log(e);
        console.log(e.target);
        switch(e.target.id){
            case 'grey':{
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'lightblue':{
                body.style.backgroundColor = e.target.id;
                break;
            } case 'beige':{
                body.style.backgroundColor = e.target.id;
                break;
            } case 'green':{
                body.style.backgroundColor = 'greenyellow';
               break; 
            }
            default:{
                body.style.backgroundCbreak;olor='white';
                break;
    }
}
    });
});
