const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const reg = document.querySelector('.registr');

const url = 'https://blog.kata.academy/api/users'

const postData = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
};

reg.addEventListener('click', () => {
    const data = {
        user: {
            email: email.value,
            username: username.value,
            password: password.value,
            token: `${username.value}.token.here`,
            bio: `I love ${Math.ceil(Math.random()*100)}`,
            image: null
        }
    };
    postData(url, data).then(res => console.log(res))
});







