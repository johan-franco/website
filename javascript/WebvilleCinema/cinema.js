window.onload = init;

function Movie(title, genre,rating, showtimes, table) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.table = table
    this.getNextShowing = function() {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
    };
    this.display = function () {
        var Mtable = document.getElementById("MovieTable");
        /*if (this.table == false) {
            var Mtable = document.getElementById("MovieTable");
            let row = document.createElement(tr);
            Mtable.append(row);
            var a = document.createElement(th);
            a.innerHTML = "Movie"
            var b = document.createElement(th);
            b.innerHTML = "Closest Showings"
            row.append(a);
            row.append(b); 
        };*/

        var row = document.createElement("tr");
        Mtable.append(row);
        var name = document.createElement("td");
        name.innerHTML = this.title;
        row.append(name);
        var showing = document.createElement("td");
        showing.innerHTML = this.getNextShowing();
        row.append(showing);
    };
}

function init() {
    var Mtable = document.getElementById("MovieTable");
    var banzaiMovie= new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"], false);
    alert(banzaiMovie.getNextShowing);
    var plan9Movie = new Movie("Plan 9 from Outer Space",
                           "Cult Classic",
                           2,
                           ["3:00pm", "7:00pm", "11:00pm"], true);

    var forbiddenPlanetMovie = new Movie("Forbidden Planet",
                                     "Classic Sci-fi",
                                     5,
                                     ["5:00pm", "9:00pm"], true)
    banzaiMovie.display();
    plan9Movie.display();
    forbiddenPlanetMovie.display();


    
    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' + loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);


}

