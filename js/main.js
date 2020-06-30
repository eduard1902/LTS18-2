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
        if(hours < 10)
            hours = "0" + hours;
        if(minutes < 10)
            minutes = "0" + minutes;
        if(seconds < 10)
            seconds = "0" + seconds;
    let str = hours + ":" + minutes + ":" + seconds; 
    
    console.log(str);
        return{seconds, minutes, hours, day, days, str};
}

const message = () => {
    let timeMessage = time();
    if(timeMessage.hours > 6 && timeMessage.hours < 10) { 
    return 'Доброе утро!';
    } else if(timeMessage.hours > 10 && timeMessage.hours < 18) {
    return'Добрый день!';
    } else if(timeMessage.hours > 10 && timeMessage.hours < 24) {
    return'Добрый вечер!';
    } else {
    return 'Доброй ночи!';
    };
};

const massageWeek = () => {
    let Me = time();
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let week = (days[Me.day]);
    return week;
};

const addText = () => {
    let textElement = message(),
        textElement1 = massageWeek(),
        textElement2 = time();
    document.write('<p>' + textElement + '</p>');
    document.write('<p>Сегодня: ' + textElement1 + '</p>');
    //document.write(`<p>Текущее время:   ${textElement2.str}  PM</p>`);
    
    let element2 = document.createElement('div');
                    document.body.appendChild(element2);
                    element2.innerHTML = `Текущее время: ${textElement2.str} PM`;
            
    document.write('<p>До нового года осталось  ' + textElement2.days +  ' дней</p>');
//
          
};
message();
massageWeek();
addText();

});
