// const cards = document.querySelectorAll(".newCard");
// const pastelOne = document.querySelector(".pastel-one");
// const cardOne = document.querySelector(".card-one");
// const cardTwo = document.querySelector(".card-two");
// const cardThree = document.querySelector(".card-three");

// const options = { threshold: 0 };

// console.log(pastelOne);
const scrollDemo = document.querySelector(".bodymain");
const nav = document.querySelector(".nav");
console.log("scrollDemo.scrollTop", scrollDemo.scrollTop);
if (scrollDemo.scrollTop < 20) {
  nav.style.background = "rgba(30, 61, 96,01)";
} else {
  nav.style.background = "rgb(30, 61, 96)";
}
nav.addEventListener(
  "scroll",
  () => {
    console.log("scrollDemo.scrollTop", scrollDemo.scrollTop);

    console.log("scrollDemo.scrollTop", scrollDemo.scrollTop);
  },
  true
  // { passive: true }
);
nav.addEventListener("scroll", console.log("scrolled"));
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.target.classList);

//     entry.target.classList.toggle("active", entry.isIntersecting);
//     if (entry.isIntersecting) observer.unobserve(entry.target);
//   });
// }, options);

// cards.forEach((card) => {
//   observer.observe(card);
// });

const toggleBtn = document.querySelectorAll(".faq-card");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active"); //only toggles the parent node which is the '.faq-card' here
  });
});
// const observer= new IntersectionObserver((entry)=>{
//     console.log(entry[0].target)
//     entry[0].target.classList.toggle('leftin',entry.isIntersecting)
//     if(entry[0].isIntersecting) console.log('intersecting')
// },options)

// observer.observe(pastelOne)

// const moveObserverOne = new IntersectionObserver((entry) => {
//   if (entry[0].isIntersecting) {
//     entry[0].target.style.animation = `movingLeftIn 1.5s ease-out`;
//     observer.unobserve(entry[0].target);
//   }
// });

// moveObserverOne.observe(cardOne);

// const moveObserverTwo = new IntersectionObserver((entry) => {
//   if (entry[0].isIntersecting) {
//     entry[0].target.style.animation = `movingTopIn 1.5s ease-out`;
//     observer.unobserve(entry[0].target);
//   }
// });

// moveObserverTwo.observe(cardTwo);

// const moveObserverThree = new IntersectionObserver((entry) => {
//   if (entry[0].isIntersecting) {
//     entry[0].target.style.animation = `movingRightIn 1.5s ease-out`;
//     observer.unobserve(entry[0].target);
//   }
// });

// moveObserverThree.observe(cardThree);
