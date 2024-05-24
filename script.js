let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you shoud fillup box");

    }else{
        let li = document.createElement("li");
        li.innerHTML = '<input type="checkbox"> ' + inputBox.value + '<span onclick="deleteTast(this)">\u00d7</span>';
        listContainer.appendChild(li);
    }
    inputBox.value ="";
}

const deleteTast = (btn)=>{
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
}

const deletedTaskChecked = ()=>{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox =>{
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);
    })
}