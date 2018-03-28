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
    
    var height;
    var navlist;
    var item;
    document.addEventListener('scroll', (e) => {
        height = window.innerHeight;
        navlist = document.querySelector(".nav-list");
        if (window.scrollY < height) {
            item = navlist.querySelector(".about-list-item");
            if (!item.classList.contains("active-nav-item")){
                removeActiveStatus();
                item.classList.add("active-nav-item");
                item.parentElement.classList.add("active-list-el")
            }
        } else if (window.scrollY < (height *2)){
            item = navlist.querySelector(".projects-list-item");
            if (!item.classList.contains("active-nav-item")){
                removeActiveStatus();                
                item.classList.add("active-nav-item");
                item.parentElement.classList.add("active-list-el")                
            }
        } else if (window.scrollY < (height *3)){
            removeActiveStatus();            
            item = navlist.querySelector(".skills-list-item");
            if (!item.classList.contains("active-nav-item")){
                item.classList.add("active-nav-item");
                item.parentElement.classList.add("active-list-el")                
            }
        } else if (window.scrollY < (height *4)){
            removeActiveStatus();            
            item = navlist.querySelector(".contact-list-item");
            if (!item.classList.contains("active-nav-item")){
                item.classList.add("active-nav-item");
                item.parentElement.classList.add("active-list-el")                
            }
        }

    });
    var scroll = new SmoothScroll('a[href*="#"]');
    const removeActiveStatus = () => {
        let navitems = document.querySelectorAll(".nav-list-item");
        navitems.forEach(el => {
            el.classList.remove("active-list-el");
            el.childNodes[0].classList.remove("active-nav-item");
        });
    };
});