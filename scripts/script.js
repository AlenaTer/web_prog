function watch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("watch").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout("watch()", 1000);
}

(function () {
    window.onload = function page_load_time() {
        let page_load_time = (window.performance.timing.loadEventStart -
            window.performance.timing.navigationStart) / 1000;
        document.getElementById("page_load_time").innerText = page_load_time.toString() + " секунд"
    }
})()