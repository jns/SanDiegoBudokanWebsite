function scrollToElement(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //0, 100); //{top: 100, left: 0, behavior: "smooth"});
}             
function addResponsive() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
    var sections = document.getElementsByClassName("section");
    for(var i = 0; i < sections.length; i++) {
        element = sections.item(i);
        if (element.className === "section") {
            element.className += " responsive";
            element.setAttribute('style', `scroll-margin-top: ${nav.clientHeight}px`);
        } else {
            element.className = "section";
            element.removeAttribute('style');
        }
    };
}
