function openURLjoc2048(){

    window.open("https://raw.githack.com/AndreiBalan98/Proiect-HTML-CSS-JS---2048/master/index.html", "_blank");
}

function openURLgameOfLife(){

    window.open("https://raw.githack.com/AndreiBalan98/Proiect-HTML-CSS-JS---GameOfLife/master/index.html", "_blank");
}

function openURLsiteStefania(){

    window.open("https://raw.githack.com/AndreiBalan98/Proiect-HTML-CSS-JS---Site-Stefania/master/index.html", "_blank");
}

function onLoadFunction(){

    document.getElementById("joc2048").addEventListener('click', openURLjoc2048);
    document.getElementById("gameOfLife").addEventListener('click', openURLgameOfLife);
    document.getElementById("siteStefania").addEventListener('click', openURLsiteStefania);
}

window.onload = function(){
    onLoadFunction();
};