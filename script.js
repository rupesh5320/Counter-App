const countValue = document.getElementById('counter');

function decrement(){
    let value = parseInt(countValue.innerText);
    value-=1;
    countValue.innerText = value;
}

function increment(){
    let value = parseInt(countValue.innerText);
    value+=1;
    countValue.innerText = value;
}