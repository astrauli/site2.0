document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".my-name").classList.add("animate-from-left");
    document.querySelectorAll(".project").forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            let video = e.currentTarget.getElementsByTagName('video');
            video[0].play(2);
        });
        el.addEventListener('mouseleave', (e) => {
            let video = e.currentTarget.getElementsByTagName('video');
            video[0].pause();
        });
    })
    document.querySelectorAll(".project-skills").forEach(el => {
        el.addEventListener('click', (e) => {
             let currentProject = e.currentTarget.nextSibling.nextSibling;
             let skillContainer = currentProject.querySelector(".skill-set");
             if(skillContainer.classList.contains("slide-bottom")) {
                 skillContainer.classList.remove("slide-bottom");
             } else {
                 skillContainer.classList.add("slide-bottom")
             }
        });
    });
    document.querySelectorAll(".chatapp-project").forEach(el => {
        el.addEventListener('click', (e) => {
            console.log(e.currentTarget.parentElement)
            let disclaimer = e.currentTarget.parentElement.querySelector(".disclaimer");
            if(disclaimer.classList.contains("slide-bottom")) {
                disclaimer.classList.remove("slide-bottom");
            } else {
                disclaimer.classList.add("slide-bottom");
            }
        });
    });
});