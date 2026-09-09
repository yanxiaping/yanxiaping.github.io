document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 轮播逻辑
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots b, .slider-dots i');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let current = 0;

function showSlide(index){
  if(index >= slides.length) index = 0;
  if(index < 0) index = slides.length -1;
  current = index;

  slides.forEach((s,i)=>{
    s.classList.toggle('active', i === current);
  });
  dots.forEach((d,i)=>{
    d.classList.toggle('active', i === current);
  })
}

nextBtn.addEventListener('click',()=>{
  showSlide(current + 1);
})
prevBtn.addEventListener('click',()=>{
  showSlide(current -1);
})
dots.forEach(dot=>{
  dot.addEventListener('click',()=>{
    const idx = Number(dot.dataset.index);
    showSlide(idx);
  })
})