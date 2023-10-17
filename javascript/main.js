let kisses = 0;
let clicker = 0;
let clickerupgradevari = 0;
let upgrade_pas = 50;
let autoupgrade = 100;
let autoClickLevel = 0;
let interval;

function updateKissesDisplay() {
    document.getElementById("Kiss").innerHTML = "Chyceni Pikachu: " + kisses;
}

function get() {
    if (clickerupgradevari === 0) {
        kisses += 1;
    } else if (clickerupgradevari === 1) {
        kisses += 1 + clicker;
    }
    updateKissesDisplay();
}

function autoClick() {
    kisses += autoClickLevel;
    updateKissesDisplay();
}

function upgrade() {
    if (kisses >= autoupgrade) {
        kisses -= autoupgrade;
        updateKissesDisplay();
        clearInterval(interval);
        interval = setInterval(autoClick, 1000);
        autoupgrade += 100;
        autoClickLevel++;
        document.getElementById("AClick").innerHTML = '<img src="obrazky/R-removebg-preview (1).png"> Pomocník Ash cost: ' + autoupgrade;
    } else {
        alert("Nemáš dostatečně pikachu :(");
    }
}

function clickerupgrade() {
    if (kisses >= upgrade_pas) {
        kisses -= upgrade_pas;
        clicker += 1;
        clickerupgradevari = 1;
        upgrade_pas += 50; // Zvýšení ceny dalšího upgrade o 50
        updateKissesDisplay();
        document.getElementById("Click").innerHTML = '<img src="obrazky/R-removebg-preview.png"> Lepší pokeball cost: ' + upgrade_pas;
    } else {
        alert("Nemáš dostatečně pikachu :(");
    }
}





































