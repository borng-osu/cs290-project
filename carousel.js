show = 0;
slidePics();

function slidePics() { 
    let pics = document.getElementsByClassName("pics");

    for (let i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    show++;

    if (show > pics.length) {show = 1};

    pics[show - 1].style.display = "block";
    
    setTimeout(slidePics, 4000);  
} 

document.getElementById("left").addEventListener("click", function() {
    let pics = document.getElementsByClassName("pics");

    for (let i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    show--;

    if (show < 1) {show = pics.length};

    pics[show - 1].style.display = "block";
});

document.getElementById("right").addEventListener("click", function() {
    let pics = document.getElementsByClassName("pics");

    for (let i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }

    show++;

    if (show > pics.length) {show = 1};

    pics[show - 1].style.display = "block";
});