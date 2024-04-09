let todoArray=[];
//rendder fun
function renderFun(){
    const divElement=document.querySelector('.div-block-js');
    let list='';
    //use for loop for the generate <p> tag to display the NAME and DATE and DELETE button in a line 
    for(let i=0;i<todoArray.length;i++){
    //it will <P> tag for every iterartion and display
    //after every genaration of <p> it will added to list for the display all in body of page after loop
    const name=todoArray[i].name;
    const date=todoArray[i].date;
    list+=`<div class="name-div-style">${name}</div>
           <div class="date-div-style">${date}</div>
           <button onclick="deleteFun(${i})" class="delete-button-style">Delete
           </button>`;
}
//after loop end it will display all the tags in display which added to div tag
divElement.innerHTML=list;
}
function deleteFun(i){
todoArray.splice(i,1);
renderFun();
}


//adding to array
function addTodo(){
    //selecting the buttons of input list and date
    const todoElement=document.querySelector('.input-todo-js');
    const dateElement=document.querySelector('.input-date-js');
    //by the buttons extracting the values using .value(.notation)
    //then storing the values in const variables NAME and DATE
    const name=todoElement.value;
    const date=dateElement.value;
    //now the stored variables will be pushed to the array as object by shorthand method(short-cut)
    todoArray.push({name,date})
    //after pushing the input will be make as empty for next new to list enter by the user
    todoElement.value='';
    console.log(todoArray);
    //now selecting the div block for the generate the html tags inside by using DOM
    renderFun();
    
}