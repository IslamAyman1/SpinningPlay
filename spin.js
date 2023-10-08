function shuffle(array){
    var currentIndex = array.length , 
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    [ array[currentIndex],array[randomIndex]] = [
        array[currentIndex],
        array[currentIndex],
     ];
    }
    return array;
}

function spin(){
    
    wheel.play();
 
 const box = document.getElementById('box');
 const element = document.getElementById('mainbox');
 let SelectedItem = "";


 let AC = shuffle([1890 , 2250 , 2610]);
 let camera = shuffle([1850 , 2210 , 2570]);
 let Zonk = shuffle([1770 , 2130 , 2490]);
 let ps = shuffle([1810 , 2170 , 2530]);
 let Headset = shuffle([1750 , 2110 , 2470]);
 let Drone = shuffle([1630 , 1990 , 2350]);
 let Rog = shuffle([1570 , 1930 , 2290]);

 let results = shuffle([
    AC[0],
    camera[0],
    Zonk[0],
    ps[0],
    Headset[0],
    Drone[0],
    Rog[0]
 ]);

 if(AC.includes(results[0])) SelectedItem = "لا توجد جائزه";
 if(camera.includes(results[0])) SelectedItem = "خصم 50% علي اي منتج";
 if(Zonk.includes(results[0])) SelectedItem = "خصم 10% علي اي منتج";
 if(ps.includes(results[0])) SelectedItem = "خصم 25% علي اي منتج";
 if(Headset.includes(results[0])) SelectedItem = "خصم 50% علي اي منتج";
 if(Drone.includes(results[0])) SelectedItem = "خصم 25% علي اي منتج";
 if(Rog.includes(results[0])) SelectedItem = "خصم 25% علي اي منتج";

 box.style.setProperty("transition" , "all ease 5s");
 box.style.transform = "rotate("+results[0]+ "deg)";
 element.classList.remove("animate");

 setTimeout(function(){
    element.classList.add('animate')
 }, 8000);

const resulte = document.getElementById('result');
const test = document.getElementById('test');
 setTimeout(function(){
    element.style.cssText = "display:none"
    test.classList.add('show');
    applause.play();
    resulte.innerHTML = `<div class="word">لقد حصلت علي ${SelectedItem}</div>`; 
 
 },6000);
 setTimeout(() => {
   window.location.replace("input.html");
  
 }, 12000);
 

 setTimeout(function(){
    
    box.style.setProperty("transition" , "initial")
    box.style.transform = "rotate(90deg)"
 }, 6000);

}
