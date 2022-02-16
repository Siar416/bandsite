const api_key = '44207bb3-693f-4332-bf44-81855a3f337b';

// const commentArray = [
//     {
//         name: "Connor Walton",
//         time: "02/17/2021",
//         comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Letus appreciate this for what it is and what it contains."
//     },
//     {
//         name: "Emilie Beach",
//         time: "01/09/2021",
//         comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {
//         name: "Miles Acosta",
//         time: "12/20/2020",
//         comment: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
//     }
// ];




axios.get('https://project-1-api.herokuapp.com/comments/?api_key=44207bb3-693f-4332-bf44-81855a3f337b')
.then(response => {
    // console.log(response.data);

            for(let i = 0; i < response.data.length; i++) {
                // console.log(response.data[i]);

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
            flexDiv.appendChild(image);

            // name
            const name = document.createElement('p');
            name.innerText = response.data[0].name;
            name.classList.add('comments-added__name');
            flexDiv.appendChild(name);

            // date/time
            const time = document.createElement('p');
            time.innerText = response.data[0].timestamp;
            time.classList.add('comments-added__date');
            flexDiv.appendChild(time);

            // comment body
            const actualComment = document.createElement('p');
            actualComment.innerText = response.data[0].comment;
            actualComment.classList.add('comments-added__body');
            divContainer.appendChild(actualComment);



            }
})


const comments = document.querySelector(".comments-added");

    function displayComment() {

        for(const key in commentArray) {
        
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
        flexDiv.appendChild(image);
  
       // name
        const name = document.createElement('p');
        name.innerText = commentArray[key].name;
        name.classList.add('comments-added__name');
        flexDiv.appendChild(name);
    
        // date/time
        const time = document.createElement('p');
        time.innerText = commentArray[key].time;
        time.classList.add('comments-added__date');
        flexDiv.appendChild(time);

        // comment body
        const actualComment = document.createElement('p');
        actualComment.innerText = commentArray[key].comment;
        actualComment.classList.add('comments-added__body');
        divContainer.appendChild(actualComment);
    
        comments.appendChild(divContainer);
    
        }
    }
    // ------commented out function so doesnt run-----
        // displayComment();

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
            flexDiv.appendChild(image);

            // name
            const name = document.createElement('p');
            name.innerText = formName;
            name.classList.add('comments-added__name');
            flexDiv.appendChild(name);


            // date/time
            const time = document.createElement('p');
            time.innerText = formTime;
            time.classList.add('comments-added__date');
            flexDiv.appendChild(time);

            divContainer.appendChild(flexDiv);

 
            // comment body
            const actualComment = document.createElement('p');
            actualComment.innerText = formComment;
            actualComment.classList.add('comments-added__body');
            divContainer.appendChild(actualComment);
    
    
            comments.appendChild(divContainer);
            comments.insertBefore(divContainer, comments.childNodes[0]);
   
    }       
formValidation(e);

});

// simple form validation
function formValidation(e) {
    const nameValidation = document.getElementById('nameValidate');
    const commentValidation = document.getElementById('commentValidate');
    if(nameValidation.value === '') {
        nameValidation.style.borderColor = '#d22d2d';
    }
    if(commentValidation.value === '') {
        commentValidation.style.borderColor = '#d22d2d';
    } 
    else {
        e.target.name.value = '';
        e.target.comment.value = '';
    }
}
