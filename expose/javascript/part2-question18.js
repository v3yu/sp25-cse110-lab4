let d = new Date();
setInterval(() => {
    let time = d.toLocaleTimeString();
    console.log(time);
    d = new Date();
}, 1000);