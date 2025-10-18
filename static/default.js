const a = document.getElementsByTagName('a');
const links = Array.from(a);
const volumeInput = document.getElementById('topbar-volume-input');


for (let link of links) {
    link.addEventListener('click', function (e) {
        if (!link.classList.contains('logo-link')) {
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