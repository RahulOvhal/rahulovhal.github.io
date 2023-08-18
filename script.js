//============================================ Preloading Section ==========================================

// let loader = document.getElementById("preloader");

// window.addEventListener("load", function load(){

//   loader.style.display = "none";
// })

// ============================================ Scrolling Section starts ==========================================


// -----createing Hero-section element to give ref. to scroll elm --

const heroSection = document.querySelector(".header");

// -----createing footer element to add scroll elemt after footer element--
const footerElem = document.querySelector(".section-footer");

// -----createing Scroll element to add scroll elemt after footer element--
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML=`<ion-icon name="arrow-up-circle-outline" class="scroll-top"></ion-icon>`



// const scrollTop = () =>{
//   heroSection.scrollIntoView({behavior:"smooth"});
// };

// scrollElement.addEventListener("click", scrollTop);

window.addEventListener("scroll",()=>{
  if(window.scrollY > 350){
      scrollElement.style.display = "inline-block";
  }else{
    scrollElement.style.display = "none";
  }
})

scrollElement.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

footerElem.after(scrollElement);

//============================================ Navbar Active Section ======================================


const navLi = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");

// console.log(li[0])

window.onscroll= () =>{
  let current = "";

  sections.forEach((section)=>{
    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 60){
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li)=>{
    li.classList.remove("active");

    if(li.classList.contains(current)){
      li.classList.add("active");
    }
  });
};





// ============================================ Responsive Navbar Section starts ==========================================

  const mobileNavbar = document.querySelector(".mobile-navbar-btn");
  const headerElm = document.querySelector(".header");
  
  mobileNavbar.addEventListener("click",() =>{
    headerElm.classList.toggle("active");
  })


//============================================ Navbar Hide Section ========================================
  
  let navBar = document.querySelectorAll(".navbar-link");
    
  navBar.forEach(function(a){
    
    a.addEventListener("click",()=>{
      headerElm.classList.toggle("active");

    })
  })

//============================================ Creating project filter ==========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_ele = document.querySelectorAll(".image-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked)
    
    if(!p_btn_clicked.classList.contains("p-btn")) return;

    
    p_btn.forEach((curElem) => {
        curElem.classList.remove("p-btn-active");
    });

    p_btn_clicked.classList.add("p-btn-active");

    // to get the data-btn-number From button when it was clicked.

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    // to get the approppriate images when user clicked on button 

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

        // Adding p-image-not-active class to all images by Default 
        p_img_ele.forEach((curElem) => curElem.classList.add("p-image-not-active"));

        // Removing p-image-not-active class from appropriate btn-num value images
        img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
}); 

//============================================ End Project filter ==========================================


// =====================================================================================



