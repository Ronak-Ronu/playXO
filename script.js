console.log("welcome to Play XO")
let music = new Audio("music1.ogg")
let juke_music = document.getElementById("juke-music");
let my_svg= document.getElementById("juke-box");


let turn ="X"
let gaemover=false;


const changeTurn =()=>{
    return turn==="X"?"O":"X"
}

const checkwin = () =>
{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== ""))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " WON ";
            gaemover=true;
        }
    })
}


let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            music.play();
            checkwin();
            if(!gaemover){

                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
gaemover=false
 document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
});






Draggable.create(["#nav-bar", "#reset","#grid"], {
    bounds: document.getElementsByTagName("body"),
  });

gsap.to("#element", {
    duration:3,
    text: {
        value: "wecome to Play XO ..",
      delimiter: "",
    },
  });
  gsap.from("#info", {
    duration: 2,
    delimiter: "",
    text:""
  });
  
  Draggable.create("#juke-box", 
  {type: "rotation", 
  inertia: true,
  onDrag: function() {
  juke_music.play();
  },
  onDragEnd: function() {
     juke_music.pause();
    }
    
});