function showModal() {
    document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function hideModal() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
}

var isModalShown = localStorage.getItem("modalShown");

if (!isModalShown) {
    if (window.pageYOffset >= 1500) {
        showModal();
        localStorage.setItem("modalShown", true);
    }
}

window.onscroll = function() {
    isModalShown = localStorage.getItem("modalShown"); // Обновляем значение переменной
    if (!isModalShown && window.pageYOffset >= 1500) {
        showModal();
        localStorage.setItem("modalShown", true);
    }
};

document.getElementById("close-btn").onclick = function() {
    hideModal();
};

document.addEventListener('click', function(event) {
    var modal = document.getElementById("modal-content");
    var target = event.target;
    console.log(target);
    var isClickInside = modal.contains(target);
    if (!isClickInside) {
        hideModal();
  }});