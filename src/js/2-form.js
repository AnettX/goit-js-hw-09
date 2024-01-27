// 1. Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".

// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.

// 3. Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.js-feedback-form');
const texarea = form.querySelector('texarea');

form.addEventListener('input', (e) => {
    const userEmail = form.elements.email.value;
    const userMessage = form.elements.message.value;
    
    const data = {
        email: userEmail,
        message: userMessage,
    }

    saveToLS(STORAGE_KEY, data);
});

function saveToLS(key = 'empty', value = '') {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = loadFromLS(STORAGE_KEY) || {};
    form.reset();
    console.log(data);
})


function loadFromLS(key) {
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
    } catch (error) {
        return data;
    }
}

function restoreData() {
    const data = loadFromLS(STORAGE_KEY) || {};
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}
restoreData();
