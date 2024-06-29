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

let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем

