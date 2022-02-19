const apiKey = '?api_key=44207bb3-693f-4332-bf44-81855a3f337b';
const commentsUrl = 'https://project-1-api.herokuapp.com/comments/';

axios.get(commentsUrl+apiKey)
    .then(response => {
     displayComment(response)
    })
    .catch(err => {
    console.log('Sorry, unable to retrieve data');
})


function displayComment(response) {

        // sorting response
        response.data.sort((x, y) => {
        return y.timestamp - x.timestamp
     })

        // set the comments section to empty string
        const comments = document.querySelector(".comments-added");
        comments.innerText = '';

        for(let i = 0; i < response.data.length; i++) {

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
        name.innerText = response.data[i].name;
        name.classList.add('comments-added__name');
        flexDiv.appendChild(name);

        // date/time
        const time = document.createElement('p');
        time.innerText = new Date(response.data[i].timestamp).toLocaleDateString();
        time.classList.add('comments-added__date');
        flexDiv.appendChild(time);

        // comment body
        const actualComment = document.createElement('p');
        actualComment.innerText = response.data[i].comment;
        actualComment.classList.add('comments-added__body');
        divContainer.appendChild(actualComment);
    }
}

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
    return false;
}

function formPost(name, comment) {
    let newPost = {
        name: name,
        comment: comment
    }

    axios.post(commentsUrl+apiKey, newPost)
        .then(() => {
        axios.get(commentsUrl+apiKey)
        .then(response => {
            displayComment(response)
        })
    })
    .catch(err => {
        console.log('Sorry, unable to retrieve data');
    })
}

const mainForm = document.getElementById('mainForm');
mainForm.addEventListener("submit", (e) => {
    e.preventDefault()
    formValidation(e);

    let name = e.target.name.value;
    let comment = e.target.comment.value;

    if(name && comment) {
        formPost(name, comment)  
    }
    // reset the form    
    document.getElementById('mainForm').reset();
})



    
