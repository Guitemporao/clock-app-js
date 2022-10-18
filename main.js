function clockTime() {
    setInterval(() => {
        const dateTime = new Date();
        const hours = dateTime.getHours();
        const min = dateTime.getMinutes();
        const sec = dateTime.getSeconds();
        const session = document.getElementById('session')

        const amOrpm = (12 <= hours) ? 'PM' : 'AM'
        session.innerHTML = amOrpm

        document.getElementById('hours').innerHTML = hours;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;
    }, 1000)
}

clockTime()