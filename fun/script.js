window.onload = loadGame;

let money = 0;
let clickPower = 1;
let workers = 0;
let workerCost = 15;
let printers = 0;
let printerCost = 100;
let mps = 0;
let workeramount = 1;
let printeramount = 4;
let disabled = 0;
let x = document.getElementById('remove');
let y = document.getElementById('remove1');

function addToScore(amount) {
    money += amount;
    document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
        saveGame();
}
function buyWorker(){
    if(money >= workerCost){
        money -= workerCost;
        workers++;
        workerCost = Math.ceil(workerCost * 1.3);
        mps += workeramount;

        document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
        document.getElementById('workers').innerHTML = 'Workers: ' + workers.toLocaleString();
        document.getElementById('workerCost').innerHTML = 'Worker Cost: ' + workerCost.toLocaleString();
        document.getElementById('mps').innerHTML = 'Money per second: ' + mps.toLocaleString();
    }
}
function buyPrinter(){
    if(money >= printerCost) {
        money -= printerCost;
        printers++;
        clickPower++;
        printerCost = Math.ceil(printerCost * 1.3);
        mps += printeramount;

        document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
        document.getElementById('printers').innerHTML = 'Printers: ' + printers.toLocaleString();
        document.getElementById('printerCost').innerHTML = 'Printer Cost: ' + printerCost.toLocaleString();
        document.getElementById('mps').innerHTML = 'Money per second: ' + mps.toLocaleString();
            saveGame();
    }
}
function buyFasterPrinters(){
    if(money >= 5000) {
        money -= 5000;
        printeramount = 8;
        mps += printers * 4;
        clickPower *= 2;
        disabled = 2;

        document.getElementById('mps').innerHTML = 'Money per second: ' + mps.toLocaleString();
        document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
    }
}
function buyBetterWorkers(){
    if(money >= 100) {
        mps += workers;
        clickPower = 2;
        workeramount = 2;
        money -= 100;
        disabled = 1;
        x.style.display = 'none';
        document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
        document.getElementById('mps').innerHTML = 'Money per second: ' + mps.toLocaleString();
    }
}
function saveGame(){
    localStorage.setItem('money',money);
    localStorage.setItem('clickPower',clickPower);
    localStorage.setItem('mps',mps);
    localStorage.setItem('workers',workers);
    localStorage.setItem('workerCost',workerCost);
    localStorage.setItem('workeramount',workeramount);
    localStorage.setItem('disabled',disabled);
    localStorage.setItem('workeramount',workeramount);
    localStorage.setItem('printeramount',printeramount);
}
function loadGame(){
    money = parseInt(localStorage.getItem('money')) || 0;
    clickPower = parseInt(localStorage.getItem('clickPower')) || 1;
    mps = parseInt(localStorage.getItem('mps')) || 0;
    workers = parseInt(localStorage.getItem('workers')) || 0;
    workerCost = parseInt(localStorage.getItem('workerCost')) || 15;
    workeramount = parseInt(localStorage.getItem('workeramount')) || 1;
    disabled = parseInt(localStorage.getItem('disabled')) || 0;
    workeramount = parseInt(localStorage.getItem('workeramount')) || 1;

    document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
    document.getElementById('mps').innerHTML = 'Money per second: ' + mps.toLocaleString();
    document.getElementById('workers').innerHTML = 'Workers: ' + workers.toLocaleString();
    document.getElementById('workerCost').innerHTML = 'Worker Cost: ' + workerCost.toLocaleString();
}
setInterval(function(){
    money += mps;
    document.getElementById('money').innerHTML = 'Money: ' + money.toLocaleString();
        saveGame();
},1000);
setInterval(function(){
    if(disabled == 1) {
        x.style.display = 'none';
    }
    if(disabled == 2) {
        x.style.display = 'none';
        y.style.display = 'none';
    }
},1);