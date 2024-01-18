const list1 = document.querySelector(".list1");
const img1 = document.querySelector(".list1 img");

list1.addEventListener("mouseenter", function(e){
    img1.style.opacity=1;
});

list1.addEventListener("mouseleave", function(e){
    img1.style.opacity=0;
});

list1.addEventListener("mousemove", function(e){
    img1.style.left= e.x + "px";
    img1.style.top= e.y + "px";
})