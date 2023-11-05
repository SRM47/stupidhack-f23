// Function that display value 
if (localStorage.getItem("login") ===  null){
       alert("Forbidden page...You haven't logged in!");
       window.location.replace("http://127.0.0.1:5000/login")
}

function keyboard(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calc"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 

function dis(val) { 
    document.getElementById("result").value += val 
} 

// Fopens a new tab with Google Images search
function solve() {
    let x = document.getElementById("result").value;

    // Check if the input is not empty
    if (x) {
        // Construct the Google Images search URL
        let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(x)}&tbm=isch`;

        // Open a new window or tab with the search URL
        var audio = new Audio('static/music.mp3');
        audio.play();

        window.open(searchUrl, '_blank');
    }
}

// clear the display 
function clr() { 
    document.getElementById("result").value = "" 
} 