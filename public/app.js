
let delButtons = document.querySelectorAll(".del");
let noButtons = document.querySelectorAll(".no");
let yesButtons = document.querySelectorAll(".del2");

delButtons.forEach(function(delBtn) {
    delBtn.addEventListener("click", function() {
        let chatBox = this.closest(".chat");
        let box = chatBox.querySelector(".dis");
        box.classList.remove("hide");
    });
});

noButtons.forEach(function(noBtn) {
    noBtn.addEventListener("click", function() {
        let box = this.closest(".dis");
        box.classList.add("hide");
    });
});

yesButtons.forEach(function(yesBtn) {
    yesBtn.addEventListener("click", function() {
        let box = this.closest(".dis");
        box.classList.add("hide");
    });
});
