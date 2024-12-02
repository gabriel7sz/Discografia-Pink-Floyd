const nav = document.getElementsByTagName("nav")[0];
const topoNav = offsetTop;

window.onscroll = function() {
    fixarNoTopo();
}

function fixarNoTopo() {
    if (window.YOffset >= topoNav) {
        nav.classList.add("fixarTopo")
    } else {
        nav.classList.remove("fixarTopo");
    };
}