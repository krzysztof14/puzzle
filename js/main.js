const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); 
       
    // Fires as soon as the user starts dragging an item - This is where we can define the drag data
    // elem.addEventListener("drag", drag); // Fires when a dragged item (element or text selection) is dragged
    // elem.addEventListener("dragend", dragEnd); // Fires when a drag operation ends (such as releasing a mouse button or hitting the Esc key) - After the dragend event, the drag and drop operation is complete
    
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
    elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
    elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
    elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
});

function dragStart(event) {
    
    event.dataTransfer.setData("text", event.target.id);
    // event.target.classList.toggle("d1new");
     // or "text/plain" but just "text" would also be fine since we are not setting any other type/format for data value
}

//Events fired on the drop target

function dragEnter(event) {
    event.preventDefault();
    }

function dragOver(event) {
 event.preventDefault(); 
    }


function dragLeave(event) {
event.preventDefault();
    }


let number = 0;


function drop(event) {
    event.preventDefault(); 
    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    const finalResult = draggableElementData === droppableElementData;
    if(finalResult) {
        const draggableElement = document.getElementById(draggableElementData);
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("draggable", "false");
        event.target.insertAdjacentHTML("afterbegin", `<img class="${draggableElementData} draggable">`);
        
        var audio = new Audio('../images/klik.mp3');
        audio.play();
        
       number++
        if (number > 8) {
            var audio = new Audio('../images/aplaus.mp3');
            audio.play();
            clearInterval(idI)}
            
    console.log(number);
       
    }
}

const btnTime = document.querySelector('.push_button');
const panel = document.querySelector('.panel');

let time = 0;
let active = false;
let idI;

const timer = () => {
 if (!active) {
  active = !active
  btnTime.textContent = 'Pauza';
  idI = setInterval(start, 10);
 } else {
  active = !active
  btnTime.textContent = 'Start';
  clearInterval(idI)
 }
}

const start = () => {
         time++;
 panel.textContent = (time / 100).toFixed(2);

}


btnTime.addEventListener('click', timer);







