// // play song 
// let container = document.querySelector(".card-row");
// let audio = new Audio();
// let currentCard = null;
// container.addEventListener("click", function(e){
//   let card = e.target.closest(".spotify-card");
//   if(!card)return;
//   let playBtn = card.querySelector(".play-btn");
//   let songSrc = card.getAttribute("data-src");
//   //agar same song chal rha hai
//   if(currentCard === card && !audio.pause){
//     audio.pause();
//     playBtn.innerHTML = '<i class="fa-solid fa-play></i>';
//     return;
//   }
//   //pehle wla reset karo
//   if(currentCard){
//     currentCard.querySelector(".play-btn").innerHTML='<i class="fa-solid fa-play></i>';
//     currentCard.classList.remove("active");
//   }
//   // Naya song play
//   audio.src = songSrc;
//   audio.play();

//   playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
//   card.classList.add("active");

//   currentCard = card;
// });

// login page 
// document.getElementById("goBtn").addEventListener("click", function(){
//   window.location.href = "login.html";
// });
// //refresh btn
// document.getElementById("refreshBtn").addEventListener("click", function(){
//   location.reload();
// });

// confirm("Welcome To Utsav Music Centre❤️")

// ye v button click krne pe kaam aata hai pr ye simple hai --------------------------
// document.getElementById("btm").addEventListener("click", function(){
//   let username = document.getElementById("username").value;

//   if(username === ""){
//     alert("Naam to daal bhai.");
//     return;
//   }
//   window.location.href = "index.html";
// });

document.getElementById("mobile").addEventListener("click",function(){
  let a = prompt("Enter Your Mobile Number:");
  if(a === ""){
    alert("Number to daal numbariya😡.")
  }else if(a<11){
    alert("Padhai likhi pe thora dhyan do. Phir de daal")
  }
  
  else{
    alert("Your Mobile Number is Verify✅")
  }
  
})
// login animation -------
window.addEventListener("DOMContentLoaded", function(){
  //logo fade + scale
  anime({
    targets: '.logo',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 5000,
    easing: 'easeOutExpo'
  })
  anime({
    targets: '.login-page',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.another',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.signup',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
});
//animation------------
// window.addEventListener("load", function(){

//   anime.timeline()
  
//   // Logo fade + zoom
//   .add({
//     targets: '.netflix-style',
//     opacity: [0,1],
//     scale: [0.8,1.1],
//     duration: 1200,
//     easing: 'easeOutExpo'
//   })

//   // Glow build
//   .add({
//     targets: '.netflix-style',
//     textShadow: [
//       '0 0 0px #1db954',
//       '0 0 25px #1db954'
//     ],
//     duration: 800,
//     easing: 'easeInOutSine'
//   })

//   // Slight zoom
//   .add({
//     targets: '.netflix-style',
//     scale: [1.1,1],
//     duration: 600,
//     easing: 'easeOutQuad'
//   })

//   // Screen fade up
//   .add({
//     targets: '#intro',
//     opacity: [1,0],
//     duration: 800,
//     easing: 'easeInOutQuad',
//     complete: function(){
//       document.getElementById("intro").style.display = "none";
//       document.body.style.overflow = "auto";

//       anime({
//         targets: '#logincontent',
//         opacity: [0,1],
//         duration: 800,
//         easing: 'easeOutExpo'
//       });
//     }
//   });

// });
// animation 22222222---
// window.addEventListener("load", function(){

//   anime.timeline()

//   // Letter by letter reveal
//   .add({
//     targets: '.netflix-style span',
//     opacity: [0,1],
//     translateY: [50,0],
//     scale: [0.8,1],
//     delay: anime.stagger(200),   // 🔥 Letter by letter
//     duration: 800,
//     easing: 'easeOutExpo'
//   })

//   // Glow effect
//   .add({
//     targets: '.netflix-style span',
//     textShadow: [
//       '0 0 0px #1db954',
//       '0 0 25px #1db954'
//     ],
//     duration: 600,
//     easing: 'easeInOutSine'
//   })

//   // Slight zoom
//   .add({
//     targets: '.netflix-style',
//     scale: [1,1.05],
//     duration: 500,
//     easing: 'easeOutQuad'
//   })

//   // Fade out intro
//   .add({
//     targets: '#intro',
//     opacity: [1,0],
//     duration: 800,
//     easing: 'easeInOutQuad',
//     delay: 500,
//     complete: function(){
//       document.getElementById("intro").style.display = "none";
//       document.body.style.overflow = "auto";

//       anime({
//         targets: '#logincontent',
//         opacity: [0,1],
//         duration: 800,
//         easing: 'easeOutExpo'
//       });
//     }
//   });

// });
// netflix type animation 
window.addEventListener("load", function(){

  anime.timeline()

  // 1️⃣ Letter by letter appear
  .add({
    targets: '.netflix-style span',
    opacity: [0,1],
    translateY: [50,0],
    delay: anime.stagger(150),
    duration: 700,
    easing: 'easeOutExpo'
  })

  // 2️⃣ Letters shrink + fade
  .add({
    targets: '.netflix-style',
    scale: [1,0.6],
    opacity: [1,0],
    duration: 800,
    easing: 'easeInOutExpo'
  })

  // 3️⃣ Icon pop in
  .add({
    targets: '.icon-circle',
    opacity: [0,1],
    scale: [0,1],
    duration: 800,
    easing: 'easeOutExpo'
  })

  .add({
  // 💥 Blast expand
  targets: '.icon-circle',
  scale: [1, 3],
  opacity: [1, 0],
  duration: 600,
  easing: 'easeOutExpo'
})

.add({
  // 🎵 Music icon reveal
  targets: '.music-icon',
  opacity: [0, 1],
  scale: [0.5, 1.2],
  duration: 600,
  easing: 'easeOutBack'
})

.add({
  // Slight settle
  targets: '.music-icon',
  scale: [1.2, 1],
  duration: 400,
  easing: 'easeOutExpo'
})
.add({
  // 💥 Blast expand
  targets: '.music-icon',
  scale: [1, 3],
  opacity: [1, 0],
  duration: 300,
  easing: 'easeOutExpo'
})
.add({
  // 🎵 Music icon reveal
  targets: '.head-icon',
  opacity: [0, 1],
  scale: [0.5, 1.2],
  duration: 500,
  easing: 'easeOutBack'
})

.add({
  // Slight settle
  targets: '.head-icon',
  scale: [1.2, 1],
  duration: 600,
  easing: 'easeOutExpo'
})
.add({
  // 💥 Blast expand
  targets: '.head-icon',
  scale: [1, 3],
  opacity: [1, 0],
  duration: 500,
  easing: 'easeOutExpo'
})
  

  // 5️⃣ Fade out intro
  .add({
    targets: '#intro',
    opacity: [1,0],
    delay: 600,
    duration: 600,
    easing: 'easeInOutQuad',
    complete: function(){
      document.getElementById("intro").style.display = "none";
      document.body.style.overflow = "auto";

      anime({
        targets:'#logincontent',
        opacity:[0,1],
        duration:600,
        easing:'easeOutExpo'
      });
    }
  });

});

// animation of page change -------------
document.getElementById("btm").addEventListener("click", function(){

  let username = document.getElementById("username").value;

  if(username.trim() === ""){
    alert("Enter username first");
    return;
  }
  //overflow ko visible kro
  document.getElementById("tearOverlay").style.display = "block";

  anime.timeline({
    complete: function(){
      window.location.href = "main.html";  // 🔥 Next page
    }
  })

  .add({
    targets: '#tearOverlay .left',
    translateX: ['0%', '-100%'],
    duration: 900,
    easing: 'easeInOutExpo'
  })

  .add({
    targets: '#tearOverlay .right',
    translateX: ['0%', '100%'],
    duration: 900,
    easing: 'easeInOutExpo'
  }, '-=900');

});
//sign up-----------------------------------------
window.addEventListener("DOMContentLoaded", function(){
  //logo fade + scale
  anime({
    targets: '.signlogo',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 5000,
    easing: 'easeOutExpo'
  })
  anime({
    targets: '.sign-page',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.signbutton',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.log_in',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
  anime({
    targets: '.foot',
    opacity: [0, 1],
    translateY: [40, 0],
    delay: 500,
    duration: 900,
    easing: 'easeOutExpo'
  });
});

function goIntro(){
  window.location.href = "utsav.html"
}
function gointro(){
  window.location.href = "signup.html"
}
function ongo(){
  window.location.href = "index.html"
}
function prem(){
  window.location.href = "vPremium.html"
}
function supp(){
  window.location.href = "support.html"
}
function download(){
  window.location.href = "download.html"
}
