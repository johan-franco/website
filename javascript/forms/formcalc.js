function piece() {
    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                            loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);

    console.log("working");

    var horse = document.getElementsByClassName("horse");
    var bishop = document.getElementsByClassName("bishop");
    var rook = document.getElementsByClassName("rook");
    var pawn = document.getElementsByClassName("pawn");
    var king = document.getElementsByClassName("king");
    var queen = document.getElementsByClassName("queen");

    var input = document.getElementById("tra");

    var total = [horse,bishop,rook,pawn,king, queen];
    console.log(input.innerHTML);
    console.log(total.innerHTML);
    for (var i = 0; i < total.length; i++) {
        for (var j = 0; j < total[i].length; j++) {
            if (total[i][j].value == input.value) {
                console.log(total[i][j].className);
                console.log("reached");
            }
            console.log(total[i][j].value);
        }
    }
    
}

window.onload = piece;