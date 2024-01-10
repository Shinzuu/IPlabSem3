//basic select functionality
    const pars = document.querySelector("p");
    pars.style.color = "red";
// pars = paragraph
// the code above find the first occurrence for p element with class main , and changes the color;

//to change all occurrence we need All keyword
    const parsAll = document.querySelectorAll("p.main");
    //data[i] means , every iteration changes the different data found
    for(let i=0; i < parsAll.length ; i++){
        parsAll[i].style.color = "green";
    }

//changes title element ; innerHTML to change values of html elements
    const title1 = document.querySelector("title");
    title1.innerHTML = "Welcome";

//anchor change
    let link = document.querySelector("#myLink");
    link.href = "https://www.google.com"; //changed from # to google.com

//create new elements in html
    //creating  new val
    let para = document.createElement("p"); //selecting p tags
    let nodes = document.createTextNode("This is a new content");
    para.appendChild(nodes);    //adds nodes(text) to para(element)
    //creating a place to sit
    const div1 = document.querySelector("#new_Content");
    //append function
    div1.appendChild(para); //adds para to div(section/position)

//insertBefore(new, target) appends new element before target element 
    //creating new value
    let para2 = document.createElement("p"); //selecting p tags
    let node2 = document.createTextNode("This is a new content that has been added at front");
    para2.appendChild(node2);    //adds nodes(text) to para(element)
    //create element/place for the value to place
    let element = document.querySelector(".container");
    let target = document.querySelector("#p1");
    //insert function
    element.insertBefore(para2, target);

//task: removing paragraph 4 ; select parent(1) , then child(2) .then yank child out of its parents womb(3);
    let parent = document.querySelector(".container");   //1
    let child1 = document.querySelector("#p4");  //2
    parent.removeChild(child1);     //3

//parentElement.replaceChild(newNode, oldNode) ;same as insertBefore 
//event.addEventListener(event, eventHandler) ; when you need mouse click or hover .
    const button = document.querySelector("button");
    button.addEventListener('click', onClick);

    function onClick(){
        let para3 = document.createElement("p"); //selecting p tags
        let node3 = document.createTextNode("button has been pressed");
        para3.appendChild(node3);    //adds nodes(text) to para(element)
        //create element/place for the value to place
        //creating a place to sit
        const div2 = document.querySelector("#new_Content");
        //append function
        div2.appendChild(para3); //adds para to div(section/position)

    }

//this code is for calculator:

    const addbtn = document.querySelector("button.add");
    addbtn.addEventListener('click', onClick);

    function addTwoN(x,y){
        console.log(x+y);
        return x+y;
    }
    function onClick(){
        let a = document.querySelector("#a");
        let b = document.querySelector("#b");
        let result =  addTwoN(parseInt(a), parseInt(b));
        let resultTag = document.querySelector("#result");
        resultTag.textContent = a + '+' + b + ' = ' + result;
        return result;
    }
//incomplete
    