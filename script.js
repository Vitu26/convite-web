document.getElementById("nextButton").onclick = function () {
    location.href = "home_two.html";
};

document.getElementById("nextButton2").onclick = function () {
    location.href = "home_3.html"; // Altere para a URL da sua próxima página
};

document.getElementById("nextButton3").onclick = function () {
    location.href = "question.html"; // Altere para a URL da sua próxima página
};

document.getElementById("simButton").onclick = function () {
    // Aqui você pode adicionar código para enviar o evento "Sim" para o servidor
    alert("Evento 'Sim' registrado!");
};

document.getElementById("naoButton").onclick = function () {
    moveButton();
};

function moveButton() {
    var button = document.getElementById("naoButton");
    var newPositionTop = Math.random() * (window.innerHeight - button.clientHeight);
    var newPositionLeft = Math.random() * (window.innerWidth - button.clientWidth);
    button.style.top = newPositionTop + "px";
    button.style.left = newPositionLeft + "px";
}


