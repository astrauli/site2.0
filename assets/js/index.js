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
        } else {
            console.log("whale whale whale")
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

jsPlumb.ready(function() {
    //setup total
    let draggables = document.querySelectorAll(".draggable");
    let horizontalOffset = 0;
    let verticalOffset = 0;
    draggables.forEach(el => {
        if(horizontalOffset > (window.innerWidth * 0.76)) {
            horizontalOffset = 0;
            verticalOffset = verticalOffset + 80;
        }
        el.style.left = horizontalOffset + 10 + 'px'
        horizontalOffset = horizontalOffset + 200;
        if (verticalOffset !== 0) {
            el.style.top = verticalOffset + 90 + 'px';
        }
    });

    let languagesInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    });
    let languages = document.querySelectorAll(".language");
    let languageTitle = document.querySelector(".language-title");
    languagesInstance.draggable(languages);
    languagesInstance.draggable(languageTitle);
    for(let i = 0; i < languages.length; i++) {
        languagesInstance.connect({
            source: languageTitle, 
            target: languages[i], 
            detachable:false
        });
    }

    let frameworkInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]
    })
    let framework = document.querySelectorAll(".framework");
    let libraries = document.querySelectorAll(".library");
    let fAndL = Array.from(framework).concat(Array.from(libraries));
    let frameworkTitle = document.querySelector(".framework-title");
    frameworkInstance.draggable(fAndL);
    frameworkInstance.draggable(frameworkTitle);
    for(let i = 0; i < fAndL.length; i++) {
        frameworkInstance.connect({
            source: frameworkTitle, 
            target: fAndL[i], 
            detachable:false
        });
    }

    let databaseInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let database = document.querySelectorAll(".database");
    let databaseTitle = document.querySelector(".database-title");
    databaseInstance.draggable(database);
    databaseInstance.draggable(databaseTitle);
    for(let i = 0; i < database.length; i++) {
        databaseInstance.connect({
            source: databaseTitle, 
            target: database[i], 
            detachable:false
        });
    }

    let ormInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let orm = document.querySelectorAll(".orm");
    let ormTitle = document.querySelector(".orm-title");
    ormInstance.draggable(orm);
    ormInstance.draggable(ormTitle);
    for(let i = 0; i < orm.length; i++) {
        ormInstance.connect({
            source: ormTitle, 
            target: orm[i], 
            detachable:false
        });
    }

    let conceptInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let concept = document.querySelectorAll(".concept");
    let conceptTitle = document.querySelector(".concept-title");
    conceptInstance.draggable(concept);
    conceptInstance.draggable(conceptTitle);
    for(let i = 0; i < concept.length; i++) {
        conceptInstance.connect({
            source: conceptTitle, 
            target: concept[i], 
            detachable:false
        });
    }

    let hostingInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]
    })
    let hosting = document.querySelectorAll(".hosting");
    let hostingTitle = document.querySelector(".hosting-title");
    hostingInstance.draggable(hosting);
    hostingInstance.draggable(hostingTitle);
    for(let i = 0; i < hosting.length; i++) {
        hostingInstance.connect({
            source: hostingTitle, 
            target: hosting[i], 
            detachable:false
        });
    }

    let testingInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let testing = document.querySelectorAll(".testing");
    let testingTitle = document.querySelector(".testing-title");
    testingInstance.draggable(testing);
    testingInstance.draggable(testingTitle);
    for(let i = 0; i < testing.length; i++) {
        testingInstance.connect({
            source: testingTitle, 
            target: testing[i], 
            detachable:false
        });
    }

    let bundlerInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let bundler = document.querySelectorAll(".bundler");
    let bundlerTitle = document.querySelector(".bundler-title");
    bundlerInstance.draggable(bundler);
    bundlerInstance.draggable(bundlerTitle);
    for(let i = 0; i < bundler.length; i++) {
        bundlerInstance.connect({
            source: bundlerTitle, 
            target: bundler[i], 
            detachable:false
        });
    }

    let workflowInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let workflow = document.querySelectorAll(".workflow");
    let workflowTitle = document.querySelector(".workflow-title");
    workflowInstance.draggable(workflow);
    workflowInstance.draggable(workflowTitle);
    for(let i = 0; i < workflow.length; i++) {
        workflowInstance.connect({
            source: workflowTitle, 
            target: workflow[i], 
            detachable:false
        });
    }

    let statemanagementInstance = jsPlumb.getInstance({
        PaintStyle:{ 
            strokeWidth:1, 
            stroke:"#01a1dd",
          },
          Connector:[ "Bezier", { curviness: 10 } ],
          Endpoint:[ "Dot", { radius:2 } ],
          EndpointStyle : { fill: "#01a1dd"  },
          Anchor : [ 'BottomCenter', 'TopCenter' ]          
    })
    let statemanagement = document.querySelectorAll(".statemanagement");
    let statemanagementTitle = document.querySelector(".statemanagement-title");
    statemanagementInstance.draggable(statemanagement);
    statemanagementInstance.draggable(statemanagementTitle);
    for(let i = 0; i < statemanagement.length; i++) {
        statemanagementInstance.connect({
            source: statemanagementTitle, 
            target: statemanagement[i], 
            detachable:false
        });
    }


});