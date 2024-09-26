
const res = document.createElement('div');
res.id='result';

const div = document.querySelector('form');
div.appendChild(res);

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#result');
    if(h===''||h<0||isNaN(h)){
        r.textContent = `PLEASE ENTER A VALID HEIGHT`;
    }
    else if(w===''||w<0||isNaN(w)){
        r.textContent = `PLEASE ENTER A VALID WEIGHT`;
    }
    else{
        const bmi = (w /((h*h)/10000)).toFixed(2);
        r.innerHTML=`<span>${bmi} </span>`;
    }
});


