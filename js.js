let tg = window.Telegram.WebApp;
let clic = document.getElementById("clic");
let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `@${tg.initDataUnsafe.user.username}`; //показываем user_id
usercard.appendChild(userid); //добавляем

let profilepic = document.createElement('img')
profilepic.src = `https://ui-avatars.com/api/?name=${tg.initDataUnsafe.user.username}`

