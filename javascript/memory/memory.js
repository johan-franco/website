function memory() {
    var progress_bar = document.querySelector(".progressinner");

    amount = 1;
    while(true) {
        var stage = document.getElementById("number");

        for(var i = 0; i < amount; i++) {
            var number = Math.floor(math.random()*9);
            
        }
        stage.innerText(toString(number));
    }
}
