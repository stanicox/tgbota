let tg = window.Telegram.WebApp;
let clic = document.getElementById("clic");

clic.addEventListener("click", () => {
    tg.close();

});

profil.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("profile").style.display = "block";

});

mai.addEventListener("click", () => {
    document.getElementById("profile").style.display = "none";
    document.getElementById("main").style.display = "block";

});

