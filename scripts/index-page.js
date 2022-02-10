let commentArray = [
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


    //     <img class="comments-added__avatar" /> done
    //   <div class="comments-added__section">
    //       <p class="comments-added__name">Connor Walton</p>
    //     <div>
    //         <p class="comments-added__date">02/17/2021</p>
    //     </div>
    //       <p class="comments-added__body">
    //         This is art. This is inexplicable magic expressed in the purest way,
    //         everything that makes up this majestic work deserves reverence. Let
    //         us appreciate this for what it is and what it contains.
    //       </p>
    //   </div>
   

// trying a loop below
// --reminder-- need to change let into const - most secure to less secure

    (function displayComment() {

    let comments = document.querySelector(".comments-added");

    for(let key in commentArray) {

    // this is the main container
    let divContainer = document.createElement('div');
    divContainer.classList.add('comments-added__section');
    comments.appendChild(divContainer);

    // image of avatar
    let image = document.createElement('img');
    image.classList.add('comments-added__avatar');
    divContainer.appendChild(image);

    // name
    let name = document.createElement('p');
    name.innerText = commentArray[key].name;
    name.classList.add('comments-added__name');
    divContainer.appendChild(name);

    // date/time
    let time = document.createElement('p');
    time.innerText = commentArray[key].time;
    time.classList.add('comments-added__date');
    divContainer.appendChild(time);

    // comment body
    let actualComment = document.createElement('p');
    actualComment.innerText = commentArray[key].comment;
    actualComment.classList.add('comments-added__body');
    divContainer.appendChild(actualComment);


    comments.appendChild(divContainer);
        }
    })();

    let date = new Date();

    // shorten date
    let newDate = date.toLocaleDateString('en-US');
  
const mainForm = document.getElementById('mainForm');

mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formInput = {};

    formInput.name = e.target.name.value;
    formInput.time = newDate;
    formInput.comment = e.target.comment.value;
    // console.log(formInput);

    commentArray.push(formInput);
})




























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
 
















