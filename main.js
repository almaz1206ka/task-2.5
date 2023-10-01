const wrapper = document.querySelector('.wrapper');
const inputName = document.querySelector('.name');
const inputPswd = document.querySelector('.pswd');
const buttonLogin = document.querySelector('.login');
const buttonRegistr = document.querySelector('.registr');

buttonRegistr.addEventListener('click', e => {
    window.location.href = 'https://almaz1206ka.github.io/task-2.5/registration_page.html'
});

const person = {
    user: {
        email: 'almaz@mail.com',
        password: '124'
    }
}

const getData = async(data) => {
    const response = await fetch('https://blog.kata.academy/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const userInfo = await response.json();
    return userInfo
}

buttonLogin.addEventListener('click', () => {
    const data = {
        user: {
            email: inputName.value,
            password: inputPswd.value,
        }
    };
    getData(data).then(res => console.log(res))
})
