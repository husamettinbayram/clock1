

setInterval(setClock, 1000);

const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function setClock() {
    const currentDate = new Date();
    // buradaki Date bir constructor ve currentDate adlı değişkene bu anın değerini atıyor.
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = currentDate.getMinutes() / 60;
    const hoursRatio = currentDate.getHours() / 12;

    setRotation(hourHand,hoursRatio, '--rotateHour');
    setRotation(minuteHand,minutesRatio, '--rotateMinute');
    setRotation(secondHand,secondsRatio, '--rotateSecond');
}
setClock();
function setRotation  (element ,rotationRatio, X) {
    element.style.setProperty(X, rotationRatio*360);

}


// bunu çağırıyoruz ki sayfa yükler yüklemez başlasın çalışmaya. interval olan bundan sonra gelecek
// bunu başa yazdığımda -sayfanın başına- çalışmadı hatta sayfanın çalışmasını engelledi


// const currentDate = new Date();
// buradaki Date bir constructor ve currentDate adlı değişkene bu anın değerini atıyor.
// const secondsRatio = currentDate.getSeconds() / 60;
// const minutesRatio = currentDate.getMinutes() / 60;
// const hoursRatio = currentDate.getHours() / 60;
// document.write(secondsRatio ,"<br>");
// document.write(minutesRatio, "<br>");
// document.write(hoursRatio, "<br>");
// document.write(currentDate, "<br>");
