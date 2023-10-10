const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const wrapperForm = document.querySelector('.wrapper__form')
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const reg = document.querySelector('.registr');
const sucsess = document.createElement('div');
sucsess.classList.add('active');
sucsess.innerHTML = `Поздравляю! Ваша регистрация завершилась успешно!`;
const errors = document.createElement('div');
errors.classList.add('active');
errors.innerHTML = `Извините! Введены не все данные =(`
const wrongEmail = document.createElement('div');
wrongEmail.classList.add('active');
wrongEmail.innerHTML = 'Извините! Введен неккоректный email!';
const takenData = document.createElement('div');
takenData.classList.add('active');
takenData.innerHTML = 'Извините, пользователь с таким именем или email уже зарегистрирован';

const REGEXP = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

const postData = async(data) => {
    return await fetch('https://blog.kata.academy/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

reg.addEventListener('click', (e) => {
    e.stopPropagation();
    const data = {
        user: {
            email: email.value,
            username: username.value,
            password: password.value
        }
    };
    if(!data.user.username || !data.user.email || !data.user.password) {
        wrapperForm.classList.add('hidden');
        wrapper.appendChild(errors)
    } else if(!REGEXP.test(data.user.email)) {
        wrapperForm.classList.add('hidden');
        wrapper.appendChild(wrongEmail)
    } else {
        postData(data).then(res => {
            if(res.status >= 200 && res.status < 300) {
                wrapperForm.classList.add('hidden');
                wrapper.appendChild(sucsess);
            } else {
                wrapperForm.classList.add('hidden');
                wrapper.appendChild(takenData);
            }
        })
    }
});

document.addEventListener('click', (e) => {
        wrapperForm.classList.remove('hidden');
        if(wrapper.contains(sucsess)) {
            wrapper.removeChild(sucsess)
            location.href = 'https://almaz1206ka.github.io/task-2.5/'
        } else if(wrapper.contains(errors)) {
            wrapper.removeChild(errors);
        } else if(wrapper.contains(wrongEmail)) {
            wrapper.removeChild(wrongEmail);
        } else if(wrapper.contains(takenData)) {
            wrapper.removeChild(takenData)
        }
});