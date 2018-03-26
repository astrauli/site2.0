document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".my-name").classList.add("animate-from-left");
    document.querySelectorAll(".project").forEach(el => {
        el.addEventListener('click', (e) => {
            console.log(e.currentTarget)
            let video = e.currentTarget.getElementsByTagName('video');
            console.log(video)
            if (video[0].paused) {
                video[0].play();
            } else {
                video[0].pause();
            }
        });
    })
});