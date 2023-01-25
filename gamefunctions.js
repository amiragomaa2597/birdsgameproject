
///////////////////class of bird /////////////////
class Bird 
{
   constructor(folderPath="birds",direction=0, id=0) {
      this.folderPath = folderPath;
      this.id= id;
      this.imageObject=document.createElement("img");
      document.querySelector("#canvas").appendChild(this.imageObject);
      this.slide_pic();
      if ( direction == 0)
      {this.moveRight();}
      else {this.moveLeft();}
      
    }
/////////////////moving right////////////////////
 moveRight = function()
{   
    this.imageObject.style.position= 'relative';
    this.imageObject.style.left = '0px';
    let random_y = Math.floor(Math.random() * (500- 25) ) + 25;
    this.imageObject.style.top= `${random_y}px`;
    this.imageObject.style.width = "10%"; 
    let image = this.imageObject; 
    let id= setInterval (function(){
    let position_bird = parseInt(image.style.left); 
    if (position_bird < parseInt(window.innerWidth)-parseInt(image.style.width))
     {
        image.style.left = position_bird + 10 + 'px';
     }
     else 
     {
        clearInterval(id);
     }
},50);
}
///////////////////moving left/////////////////////
 moveLeft = function()
{  console.log("left");
   this.imageObject.classList.add("flip");
   this.imageObject.style.left = `${window.innerWidth}px`;
   let random_y = Math.floor(Math.random() * (500 -25) ) +25;
   this.imageObject.style.top = `${random_y}px`;
   let image = this.imageObject;
    let x =this.id = setInterval (function(){
   let position_bird = parseInt(image.style.left);
    console.log(position_bird);
    if (position_bird >= -100)
     {
        image.style.left = position_bird - 10 + 'px';
     }
     else 
     {  
      clearInterval(x);
     }
},50);
}
/////////////////slide pic///////////////////////////////
 slide_pic = function ()
{
   let i = 1;
   let folder = this.folderPath;
   let image = this.imageObject;
   let id  = setInterval (function(){
      if ( i > 9)
      {
         i = 1 ;
      }
      image.src=`${folder}/${i}.png`;
      i++;
      return id ;    
  },100); 
}

}//end of class 

window.addEventListener("load",function()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const textBox = urlParams.get('textBox')
    let shoot = document.querySelector("#shoot") ;
      shoot.style.left="0px"; 
    const select = urlParams.get('select');
    this.document.querySelector("#hi").innerText="hi "+textBox +"\nAre you ready for "+select;        
     ///////////////////Selectors/////////////////////////////
     let button = (this.document.querySelector("button"));
     this.document.querySelector("#user").innerText=textBox;
     button.onclick=function()
     {
        this.parentElement.classList.add("hideBox");
        startTheGame();
     }

      this.document.onmousemove = function (e){
      let x = e.clientX;
      let y = e.clientY;
      shoot.style.left =x-200+"px";
      shoot.style.top=y-200+"px";
   
     }

     

});











////////////////////start the game ///////////////////

const startTheGame = function()
{
   let timer =  document.querySelectorAll("label")[5] ;
   timer.innerHTML = 0;
   let sec = 0 ;
   let min = 0 ;
   let timer_id=setInterval(function () {
      sec += 1;
      if ( sec == 60)
      {
         sec = 0 ; 
         min +=1;
      }
      if ( min == 5 )
      {
         clearInterval(timer_id);
         finish();
      }
      timer.innerHTML = min + ":" + sec ;

   }, 1000);
  /* let id_game = this.setInterval(function (){
      let random_type =Math.floor(Math.random()*(1-0+1)+0);
      let random_direction = Math.floor(Math.random()*(1-0+1)+0);
      let myBird = new Bird(random_type,random_direction);  
   },100);*/

   let myBird = new Bird();
   let sebird = new Bird(); 
}
/////////////////finish game over /////////////////////
const finish=function()
{

}
