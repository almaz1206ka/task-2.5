const wrapper = document.querySelector('.wrapper');
const wrapperForm = document.querySelector('.wrapper__form')
const inputName = document.querySelector('.name');
const inputPswd = document.querySelector('.pswd');
const buttonLogin = document.querySelector('.login');
const buttonRegistr = document.querySelector('.registr');
const wrongEmail = document.createElement('div');
const invalidData = document.createElement('div');
invalidData.classList.add('active');
wrongEmail.classList.add('active');
invalidData.innerHTML = `Извините, вы ввели неправильный email или пароль!`
wrongEmail.innerHTML = `Извините, вы ввели неккоректный email!`

const REGEXP = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

buttonRegistr.addEventListener('click', e => {
    location.href = 'https://almaz1206ka.github.io/task-2.5/registration_page.html';
});

let data = {};

const getData = async(data) => {
    return await fetch('https://blog.kata.academy/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

buttonLogin.addEventListener('click', (e) => {
    e.stopPropagation();
    data = {
        user: {
            email: inputName.value,
            password: inputPswd.value
        }
    };
    if(REGEXP.test(data.user.email)) {
    getData(data).then(res => {
        if(res.status >= 200 && res.status < 300) {
            res.json().then(userInfo => {
                location.href = 'https://almaz1206ka.github.io/task-2.5/login.html';
                localStorage.setItem('username', userInfo.user.username);
                localStorage.setItem('email', userInfo.user.email);
                document.cookie = `token=${userInfo.user.token}; max-age=3600`;
            })
        } 
        else {
            wrapper.appendChild(invalidData);
            wrapperForm.classList.add('hidden');
            let error = new Error(res.statusText);
            error.response = res;
            throw error;
        }
    }).catch(err => {
        console.log(err);
    })} else {
        wrapper.appendChild(wrongEmail);
        wrapperForm.classList.add('hidden')
    }
});

document.addEventListener('click', (e) => {
    if(wrapper.contains(wrongEmail)) {
        wrapper.removeChild(wrongEmail);
        wrapperForm.classList.remove('hidden')
    } else if(wrapper.contains(invalidData)) {
        wrapper.removeChild(invalidData);
        wrapperForm.classList.remove('hidden')
    }
});
