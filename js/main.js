window.addEventListener('DOMContentLoaded', () => {
'use strict';

const time = () => {
    let date = new Date(),
        newDates = new Date(2020, 11, 31).getTime(),
        seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours(),
        day = date.getDay(), 
        period  = ((newDates - date) / 1000),
        days = Math.floor(((period / 60) / 60) / 24);
        return{seconds, minutes, hours, day, days};
}

const message = () => {
    let timeMessage = time();
    if(timeMessage.hours > 6 && timeMessage.hours < 10) { 
    return 'Доброе утро!';
    } else if(timeMessage.hours > 10 && timeMessage.hours < 18) {
    return'Добрый день!';
    } else if(timeMessage.hours > 10 && timeMessage.hours < 24) {
    return'Добрый вечер!';
    } else if(timeMessage.hours > 0 && timeMessage.hours < 6) {
    return 'Доброй ночи!';
    };
};

const massageWeek = () => {
    let Me = time();
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'сцуббота'];
    let week = (days[Me.day]);
    return week;
};

const addText = () => {
    let textElement = message(),
        textElement1 = massageWeek(),
        textElement2 = time();
    document.write('<p>' + textElement + '</p>');
    document.write('<p>Сегодня: ' + textElement1 + '</p>');
    document.write('<p>Текущее время: ' + textElement2.hours + ' : ' + textElement2.minutes + ' : ' + textElement2.seconds + ' PM</p>');
    document.write('<p>До нового года осталось  ' + textElement2.days +  ' дней</p>');
};
message();
massageWeek();
addText();
});
