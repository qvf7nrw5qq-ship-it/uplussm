// 슬라이드 배너
let slideIndex = 0;
const slides = document.querySelectorAll(".slider__slide");
const track = document.getElementById("sliderTrack");

function showSlide(index){
  if(index >= slides.length){
    slideIndex = 0;
  }
  if(index < 0){
    slideIndex = slides.length -1;
  }
  track.style.transform = "translateX(-"+slideIndex*100+"%)";
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide(){
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(()=>{
  slideIndex++;
  showSlide(slideIndex);
},4000);

// 전화 팝업
const modal = document.getElementById("callModal");

function openModal(){
  modal.classList.add("open");
}

function closeModal(){
  modal.classList.remove("open");
}

document.getElementById("btnCallTop")?.addEventListener("click",openModal);
document.getElementById("btnCallHero")?.addEventListener("click",openModal);
document.getElementById("btnCallBottom")?.addEventListener("click",openModal);
document.getElementById("btnCallFab")?.addEventListener("click",openModal);

document.getElementById("modalClose")?.addEventListener("click",closeModal);
document.getElementById("modalX")?.addEventListener("click",closeModal);

// 위로가기 버튼
document.getElementById("btnTop")?.addEventListener("click",()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});

// 스크롤 애니메이션
const reveals = document.querySelectorAll(".reveal");

function reveal(){
  const windowHeight = window.innerHeight;

  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 80){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll",reveal);
reveal();
