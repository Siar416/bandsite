const commentArray = [
    {
        name: "Connor Walton",
        time: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Letus appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        time: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        time: "12/20/2020",
        comment: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
    }
];



   

// trying a loop below
// --reminder-- need to change let into const - most secure to less secure

const comments = document.querySelector(".comments-added");

    function displayComment() {

    

    for(let key in commentArray) {
        

    // this is the main container
    const divContainer = document.createElement('div');
    divContainer.classList.add('comments-added__section');
    comments.appendChild(divContainer);

    //trying div for name and date
    const flexDiv = document.createElement('div');
    flexDiv.classList.add('comments__div');
    divContainer.appendChild(flexDiv);

    // image of avatar
    const image = document.createElement('img');
    image.classList.add('comments-added__avatar');
    // divContainer.appendChild(image);
    flexDiv.appendChild(image);
  
   

    // name
    const name = document.createElement('p');
    name.innerText = commentArray[key].name;
    name.classList.add('comments-added__name');
    // divContainer.appendChild(name);
    flexDiv.appendChild(name);
    

    // date/time
    const time = document.createElement('p');
    time.innerText = commentArray[key].time;
    time.classList.add('comments-added__date');
    // divContainer.appendChild(time);
    flexDiv.appendChild(time);

    // comment body
    const actualComment = document.createElement('p');
    actualComment.innerText = commentArray[key].comment;
    actualComment.classList.add('comments-added__body');
    divContainer.appendChild(actualComment);
    

    comments.appendChild(divContainer);
    
        }
    }
    displayComment();


    // shorten date
    const date = new Date();
    const newDate = date.toLocaleDateString('en-US');
  
    const mainForm = document.getElementById('mainForm');


    /////// form submit

    mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formName = e.target.name.value;
    const formComment = e.target.comment.value;
    const formTime = newDate;
    const comments = document.querySelector(".comments-added");

    if(formName && formComment !== "") {
    
    // const formInput = {};

    //  formInput.name = e.target.name.value;
    //  formInput.comment = e.target.comment.value;
    //  formInput.time = newDate;
  
  

 
     // this is the main container
    const divContainer = document.createElement('div');
    divContainer.classList.add('comments-added__section');
    comments.appendChild(divContainer);


     //trying div for name and date
     const flexDiv = document.createElement('div');
     flexDiv.classList.add('comments__div');
     divContainer.appendChild(flexDiv);


    // image of avatar
    const image = document.createElement('img');
    image.classList.add('comments-added__avatar');
    // divContainer.appendChild(image);
    flexDiv.appendChild(image);


    // name
    const name = document.createElement('p');
    // name.innerText = formInput.name;
    name.innerText = formName;
    name.classList.add('comments-added__name');
    // divContainer.appendChild(name);
    flexDiv.appendChild(name);


    // date/time
    const time = document.createElement('p');
    //  time.innerText = formInput.time;
   time.innerText = formTime;
    time.classList.add('comments-added__date');
    // divContainer.appendChild(time);
    flexDiv.appendChild(time);

    divContainer.appendChild(flexDiv);

 
    // comment body
    const actualComment = document.createElement('p');
    // actualComment.innerText = formInput.comment;
    actualComment.innerText = formComment;
    actualComment.classList.add('comments-added__body');
    divContainer.appendChild(actualComment);
    
    
        comments.appendChild(divContainer);
        comments.insertBefore(divContainer, comments.childNodes[0]);
        
    }  

    
    

   

    
    

    



    // reset the form
     e.target.name.value = '';
     e.target.comment.value = '';


});




























//     submit.addEventListener('submit', (e) => {
//         e.preventDefault();

//     let formComments = {};

//     formComments.name = e.target.name.value;
//     // formComments.comment = e.target.comment.value;

//     let comments = document.querySelector(".comments-added");
//     let divContainer = document.createElement('div');
//     divContainer.classList.add('comments-added__section');
//     comments.appendChild(divContainer);

//     let image = document.createElement('img');
//     image.classList.add('comments-added__avatar');
//     divContainer.appendChild(image);

//     let name = document.createElement('p');
//     name.innerText = formComments.name;
//     name.classList.add('comments-added__name');
//     divContainer.appendChild(name);

//     // dont have a way to get time from form
//     // let time = document.createElement('p');
//     // time.innerText = commentArray[key].time;
//     // time.classList.add('comments-added__date');
//     // divContainer.appendChild(time);

//     let actualComment = document.createElement('p');
//     actualComment.innerText = formComments.comment;
//     actualComment.classList.add('comments-added__body');
//     divContainer.appendChild(actualComment);
// });
 
















