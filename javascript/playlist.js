function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;

    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' + loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}

function handleButtonClick() {
    alert("Button was clicked!");
}

window.onload = init;