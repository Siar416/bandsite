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
   

    // this is the Main DIV
    let comments = document.querySelector(".comments-added");



    function displayComment() {

        //IMG 
        let img = document.createElement('img');
        img.classList.add('comments-added__avatar');
        comments.appendChild(img);

        // DIV
        let commentsAddedSection = document.createElement('div');
        commentsAddedSection.classList.add('comments-added__section');
        
        // NAME
        let commentsAddedName = document.createElement('p');
        commentsAddedName.classList.add('comments-added__name');
        commentsAddedName.innerText = commentArray[0].name;

        // P tag for Date
        let div = document.createElement('div');
        let commentsAddedDate = document.createElement('p');
        commentsAddedDate.classList.add('comments-added__date');
        commentsAddedDate.innerText = commentArray[0].time;

        // Comments body
        let commentsAddedBody = document.createElement('p');
        commentsAddedBody.classList.add('comments-added__body');
        commentsAddedBody.innerText = commentArray[0].comment;
        

  


    
        
        






        // appending below
        commentsAddedSection.appendChild(commentsAddedName);    
        div.appendChild(commentsAddedDate);
        comments.appendChild(commentsAddedSection);
        comments.appendChild(commentsAddedDate);
        commentsAddedSection.appendChild(commentsAddedBody);
      
    }

    displayComment();
















// //this is the main div
// let comments = document.querySelector(".comments-added");







// function displayComment(array) {

//     let comments = document.querySelector(".comments-added");


//     for (let key in commentArray) {
        

//         let img = document.createElement('img');
//         img.classList.add('comments-added__avatar');
//         comments.appendChild(img);

        
//         let commentDiv = document.createElement('div');
//         commentDiv.classList.add('comments-added__section');
    
    
//         let commentsPtag = document.createElement('p');
//         commentsPtag.classList.add('comments-added__name');
//         commentsPtag.innerText = commentArray[key]['name'];
    
//         let dateDiv = document.createElement('div');
//         let pDate = document.createElement('p');
//         pDate.classList.add('comments-added__date');
//         pDate.innerText = commentArray[key]['time'];
//         dateDiv.appendChild(pDate);
        

//         commentDiv.appendChild(commentsPtag);
//         comments.appendChild(commentDiv);
//         commentDiv.appendChild(dateDiv);
       
        
        





//     }
 




//     //created the img and appended it


//     let commentDiv = document.createElement('div');
//     commentDiv.classList.add('comments-added__section');


//     let commentsPtag = document.createElement('p');
//     commentsPtag.classList.add('comments-added__name');
  

//     commentDiv.appendChild(commentsPtag);
//     comments.appendChild(commentDiv);

  
// };

// displayComment();

