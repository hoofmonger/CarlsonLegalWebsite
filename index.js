const imageOne = document.querySelector('.image1');
const optionsOne = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const imageOneObserver = new IntersectionObserver (function(entries, imageOneObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsOne)


imageOneObserver.observe(imageOne)



const imageTwo = document.querySelector('.image2');
const optionsTwo = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const imageTwoObserver = new IntersectionObserver (function(entries, imageTwoObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTwo)


imageTwoObserver.observe(imageTwo)


const imageThree = document.querySelector('.image3');
const optionsThree = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const imageThreeObserver = new IntersectionObserver (function(entries, imageThreeObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsThree)

imageThreeObserver.observe(imageThree)

const imageFour = document.querySelector('.image4');
const optionsFour = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const imageFourObserver = new IntersectionObserver (function(entries, imageFourObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsFour)

imageFourObserver.observe(imageFour)

const imageFive = document.querySelector('.image5');
const optionsFive = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const imageFiveObserver = new IntersectionObserver (function(entries, imageFiveObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsFive)


imageFiveObserver.observe(imageFive)



const services = document.querySelector('.services');
const optionsServices = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const servicesObserver = new IntersectionObserver (function(entries, servicesObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsServices)


servicesObserver.observe(services)

const aboutMe = document.querySelector('.aboutMe');
const optionsaboutMe = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const aboutMeObserver = new IntersectionObserver (function(entries, aboutMeObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsaboutMe)


aboutMeObserver.observe(aboutMe)

const aboutMeText = document.querySelector('.aboutMeText');
const optionsaboutMeText = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const aboutMeTextObserver = new IntersectionObserver (function(entries, aboutMeTextObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsaboutMeText)


aboutMeTextObserver.observe(aboutMeText)


const testimonialHeader = document.querySelector('.testimonialHeader');
const optionsTestimonialHeader = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialHeaderObserver = new IntersectionObserver (function(entries, testimonialHeaderObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialHeader)


testimonialHeaderObserver.observe(testimonialHeader)

const testimonialEntryOne = document.querySelector('.testimonialOne');
const optionsTestimonialEntryOne = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialEntryOneObserver = new IntersectionObserver (function(entries, testimonialEntryOneObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialEntryOne)


testimonialEntryOneObserver.observe(testimonialEntryOne)


const testimonialEntryTwo = document.querySelector('.testimonialTwo');
const optionsTestimonialEntryTwo = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialEntryTwoObserver = new IntersectionObserver (function(entries, testimonialEntryTwoObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialEntryTwo)


testimonialEntryTwoObserver.observe(testimonialEntryTwo)



const testimonialEntryThree = document.querySelector('.testimonialThree');
const optionsTestimonialEntryThree = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialEntryThreeObserver = new IntersectionObserver (function(entries, testimonialEntryThreeObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialEntryThree)


testimonialEntryThreeObserver.observe(testimonialEntryThree)

const testimonialEntryFour = document.querySelector('.testimonialFour');
const optionsTestimonialEntryFour = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialEntryFourObserver = new IntersectionObserver (function(entries, testimonialEntryFourObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialEntryFour)


testimonialEntryFourObserver.observe(testimonialEntryFour)

const testimonialEntryFive = document.querySelector('.testimonialFive');
const optionsTestimonialEntryFive = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const testimonialEntryFiveObserver = new IntersectionObserver (function(entries, testimonialEntryFiveObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsTestimonialEntryFive)


testimonialEntryFiveObserver.observe(testimonialEntryFive)

const footer = document.querySelector('.footer');
const optionsfooter = {
  root: null,
  threshold: .25,
  rootMargin: "0px"
}
const footerObserver = new IntersectionObserver (function(entries, footerObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      console.log('not intersecting')
      entry.target.classList.add('invisible');}
   else{
     entry.target.classList.remove('invisible')
     entry.target.classList.add('animation')
     console.log(entry.target)
   }
  
  })
}, optionsfooter)


footerObserver.observe(footer)
// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
//   }
  
//   var observer = new IntersectionObserver(callback, options);

//   var imageOne = document.querySelector('.image1');
//   observer.observe(imageOne);
//   var callback = (imageOne, observer)
//   intersectionCallback(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         let elem = entry.target;
  
//         if (entry.intersectionRatio >= 0.75) {
//           intersectionCounter++;
//         }
//       }
//     });
//   });