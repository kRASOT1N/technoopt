document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tgForm');

    // Укажите свои значения
    const BOT_TOKEN = '7873466862:AAE9a4dDHHi-fgobNJ1MLGwIPjmuyJ8-lHo';
    const CHAT_ID = '-4752081913';  // Например, 123456789

    form.addEventListener('submit', async (e) => {
        e.preventDefault();  // отменяем отправку формы по умолчанию

        // Считываем данные полей формы
        const nameValue = form.name.value.trim();
        const phoneValue = form.phone.value.trim();
        const commentValue = form.comment.value.trim();

        // Готовим текст сообщения
        const messageText = `<b>Новая заявка с сайта!</b>\n`
            + `<b>Имя:</b> ${nameValue}\n`
            + `<b>Телефон:</b> ${phoneValue}\n`
            + `<b>Комментарий:</b> ${commentValue}`;

        // Указываем URL для метода sendMessage
        const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        // Параметры для отправки
        const params = {
            chat_id: CHAT_ID,
            text: messageText,
            parse_mode: 'HTML'
        };

        try {
            // Отправляем запрос методом POST
            const response = await fetch(telegramURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(params)
            });
            const data = await response.json();

            if (data.ok) {
                alert('Заявка успешно отправлена!');
                form.reset(); // очищаем форму
            } else {
                alert('Ошибка при отправке. Проверьте правильность токена/чата.');
                console.error(data);
            }
        } catch (error) {
            alert('Ошибка при отправке. Проверьте соединение или токен.');
            console.error(error);
        }
    });
});
