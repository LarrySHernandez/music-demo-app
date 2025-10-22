const a = document.getElementsByTagName('a');
const links = Array.from(a);
const volumeInput = document.getElementById('topbar-volume-input');
const loginBtn = document.getElementById('login-btn');
const body = Array.from(document.getElementsByTagName('body'))[0];

for (let link of links) {
    link.addEventListener('click', function (e) {
        if (!link.classList.contains('logo-link') && !link.classList.contains('apple-music-link')) {
            e.preventDefault();
        }
    })
}


volumeInput.addEventListener('mousemove', () => {
    let val = volumeInput.value;
    let color = `linear-gradient(to the right, rgb(179, 179, 179) ${val}%, rgb(102, 102, 102) ${val}%)`;
    volumeInput.style.background = color;
});

document.getElementById('song-banner-zoom-btn').addEventListener('click', () => {

});


loginBtn.addEventListener('click', () => {
    //Creating Variables for the login pop up
    let grayScreen = document.createElement('div');
    let exitGrayScreenBtn = document.createElement('button');
    //adding classes to adjust styles
    exitGrayScreenBtn.classList.add('exit-gray-screen-btn');
    grayScreen.classList.add('gray-screen');
    //appending the different components together
    grayScreen.append(exitGrayScreenBtn);
    body.append(grayScreen);

    console.log('passed');
});

