function memory() {
    var progress_bar = document.querySelector(".progressinner");

    var amount = 0;

        var stage = document.getElementById("number");
        var number = Math.floor(Math.random()*9);
        for(var i = 0; i < amount; i++) {
            let temp = Math.floor(Math.random()*9);
            number = toString(number) + toString(temp);
        }
        stage.innerHTML = number;
        console.log(number);

}
