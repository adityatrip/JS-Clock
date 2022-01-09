function beforePageLoad() {
    updateDate();
    updateTime();
    setTimeout(beforePageLoad, 1000);
}

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('testid').innerHTML = h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//     if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
//     return i;
// }

updateDate = function() {
    let today = new Date();
    document.getElementById("month").innerHTML = today.getMonth() + 1;
    document.getElementById("day").innerHTML = today.getDate();
    document.getElementById("year").innerHTML = today.getFullYear();
}

updateTime = function() {
    let today = new Date();
    document.getElementById("hour").innerHTML = today.getHours();
    document.getElementById("minute").innerHTML = today.getMinutes();
    document.getElementById("second").innerHTML = today.getSeconds();
};
