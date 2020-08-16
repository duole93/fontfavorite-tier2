document.querySelector("#test-text").addEventListener("input", function (e) {

    document.querySelectorAll(".font-test").forEach(fontCardBody => {
        if (e.target.value === "") {
            resetFontCard();
        }
        else {
            fontCardBody.textContent = e.target.value;
        }
    });
});


function resize() {       
    document.querySelector(".resize-menu").classList.toggle("dropdown-menu-visible");
    event.stopPropagation();
    let btn = event.target;
    document.querySelectorAll(".resize-menu .dropdown-item").forEach(function (item) {
        item.addEventListener("click", function (e) {
            changeCardFontSize(e.target.textContent);            
            changeButtonLabel(btn, e.target.textContent)
        })
    });
};

function changeButtonLabel(button, label) {
    console.log(label);
    button.innerHTML = label + "px <i class='fas fa-caret-down'></i>";    
}
function changeCardFontSize(value) {
    document.querySelectorAll(".font-test").forEach(function (card) {
        card.style.fontSize = value + "px";
    })
}


function reset() {
    changeCardFontSize(24);
    let btn = document.querySelector(".resize-btn");
    changeButtonLabel(btn, 24);
    resetFontCard();
    document.querySelector("#search-text").value = "";
}

function resetFontCard() {
    document.querySelectorAll(".font-test").forEach(function (cardText) {
        cardText.textContent = "Almost before we knew it, we had left the ground."
    })
    document.querySelector("#test-text").value = "";
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-menu-visible')) {
                openDropdown.classList.remove('dropdown-menu-visible');
            }
        }
    }
}