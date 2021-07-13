const MAX = 400;

function initiate() {
    // alert('hi');


    // progress = document.getElementById('progress');
    // media = document.getElementById('media');

    play.addEventListener('click', push);
    bar.addEventListener('click', move);
    mute.addEventListener('click', soundOff);
    volume.addEventListener('change', level);

}

function push() {
    if (!media.paused && !media.ended) {
        media.pause();
        play.value = 'Воспр.';
        clearInterval(loop);

    } else {
        media.play();
        play.value = 'Пауза';
        loop = setInterval(status, 1000);

    }
}

function status() {

    if (!media.ended) {
        size = parseInt(media.currentTime * MAX / media.duration);


        // console.log(size, media.currentTime, MAX, media.duration);

        progress.style.width = `${size}px`;
    } else {
        clearInterval(loop);
        progress.style.width = '0';
        play.value = 'Воспр.';
    }

}


function move(e) {
    if (!media.paused && !media.ended) {
        let mouseX = e.pageX - bar.offsetLeft;
        let newTime = mouseX * media.duration / MAX;
        media.currentTime = newTime;
        progress.style.width = `${mouseX}px`;
    }

}

function soundOff() {
    if (!media.muted) {
        media.muted = true;
        mute.value = 'Вкл.';
    } else {
        media.muted = false;
        mute.value = 'Звук';
    }
}

function level() {
    media.volume = volume.value;
}

addEventListener('load', initiate);