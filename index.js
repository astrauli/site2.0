document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".my-name").classList.add("animate-from-left");
    document.querySelectorAll(".project").forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            let video = e.currentTarget.getElementsByTagName('video');
            video[0].play();
        });
        el.addEventListener('mouseleave', (e) => {
            let video = e.currentTarget.getElementsByTagName('video');
            video[0].pause();
        });
    })
});