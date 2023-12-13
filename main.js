const targets = document.querySelectorAll(".target");
const progress = document.querySelector(".progress");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let counter = 1;

next.addEventListener("click", () => {
    counter++;

    
    console.log(counter); //for check 
    update();
})
prev.addEventListener("click", () => {
    counter--;

    
    console.log(counter); //for check
    update();
})



function update(){
    targets.forEach((e, index) => {
        if(index < counter){
            e.classList.add('selected');
        } 
        else {
            e.classList.remove('selected')
        }
    })

    const selected = document.querySelectorAll(".selected");

     


    // progress.style.width = (selected.length -1) * 100   / (targets.length -1)  + '%';
    progress.style.width = (selected.length -1) * 100   / (targets.length -1)  + '%';
    


    if(counter === 1){
        prev.disabled = true;
    } else if(counter === targets.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}
