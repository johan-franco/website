function memory() {
    var progress_bar = document.querySelector(".progressinner");

    amount = 1;
    while(true) {
        var stage = document.getElementById("number");

        for(var i = 0; i < amount; i++) {
            var number = Math.floor(Math.random()*9);
            
        }
        stage.innerHTML = toString(number);
    }
}
