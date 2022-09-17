const cards = document.querySelectorAll('.newCard')
const pastelOne = document.querySelector('.pastel-one')
const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const cardThree = document.querySelector('.card-three')

const options={threshold:0}

    console.log(pastelOne)

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        console.log(entry.target.classList)

            entry.target.classList.toggle( 'active',entry.isIntersecting)
            if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    
},options)

cards.forEach(card => {
    observer.observe(card)
})


// const observer= new IntersectionObserver((entry)=>{
//     console.log(entry[0].target)
//     entry[0].target.classList.toggle('leftin',entry.isIntersecting)
//     if(entry[0].isIntersecting) console.log('intersecting')
// },options)

// observer.observe(pastelOne)


const moveObserverOne = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
      entry[0].target.style.animation = `movingLeftIn 1.5s ease-out`;
      observer.unobserve(entry[0].target)
    } 
});

moveObserverOne.observe(cardOne);

const moveObserverTwo = new IntersectionObserver((entry) => {
    if (entry[0].isIntersecting) {
      entry[0].target.style.animation = `movingTopIn 1.5s ease-out`;
      observer.unobserve(entry[0].target)

    }
});

moveObserverTwo.observe(cardTwo);

const moveObserverThree = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
      entry[0].target.style.animation = `movingRightIn 1.5s ease-out`;
      observer.unobserve(entry[0].target)
    } 
});

moveObserverThree.observe(cardThree);