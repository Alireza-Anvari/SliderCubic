
let container=document.querySelectorAll(".container");
let thumbnailItems=document.querySelectorAll(".thumbnailItems");
let titleContainer=document.querySelector(".titleContainer");
let restInterval;
let rotate=0;
 let index=0;
//  console.log(index)

 let titleRotate=0;
restInterval=setInterval(moveCubic,3000)
thumbnailItems[index].classList.add("activeThumbnails")
 function moveCubic(){
    thumbnailItems.forEach((item)=>{item.classList.remove("activeThumbnails")})
  if(index>=3)
  {
    index=-1
  }
 rotate+=90;
 titleRotate-=90;


 ;index+=1
container.forEach((element,ind)=>{;setTimeout(()=>{element.style.transform = `rotateY(${rotate}deg)`;},ind*300);titleContainer.style.transform=`rotateX(${titleRotate}deg)`;thumbnailItems[index].classList.add("activeThumbnails")}) 
//  console.log(index)
}

thumbnailItems.forEach((item,ind)=>{item.addEventListener("click",()=>{clearInterval(restInterval);
thumbnailItems.forEach((item)=>{item.classList.remove("activeThumbnails")})


if(ind<index && rotate>270){

rotate=rotate-(90*(index-ind));
titleRotate=titleRotate+(90*(index-ind));
// titleRotate=-(90*ind);
index=ind
console.log("index if",index)

}
else{
  rotate=rotate+(90*(ind-index));
  titleRotate=titleRotate-(90*(ind-index));

index=ind
console.log("index else",index)


}

thumbnailItems[index].classList.add("activeThumbnails")



container.forEach((element,ind)=>{setTimeout(()=>{element.style.transform = `rotateY(${rotate}deg)`;},ind*100);titleContainer.style.transform=`rotateX(${titleRotate}deg)`;    }) 

;restInterval=setInterval(()=>{;moveCubic()},3000)})})



function selectSlide(){




}
