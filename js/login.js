const wrapperLogin = document.querySelector('.wrapper');
const wrapperHeader = document.querySelector('.wrapper__header')
const text = document.createElement('h4');
const userInfo = document.createElement('div');
userInfo.classList.add('wrapper__userinfo');
const button = document.querySelector('.exit');

let username = localStorage.getItem('username');
let email = localStorage.getItem('email');

wrapperLogin.appendChild(userInfo);
wrapperHeader.prepend(text);
text.innerHTML = `<h2>Добро пожаловать, ${username}</h2>`;

userInfo.innerHTML = 
`<h5>Информация о пользователе</h5>
<p>Логин: ${username}</p>
<p>Email: ${email}</p>
`;

button.addEventListener('click', (e) => {
    location.href = 'https://almaz1206ka.github.io/task-2.5/';
    localStorage.clear()
})
