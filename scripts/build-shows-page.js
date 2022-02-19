api_key = '44207bb3-693f-4332-bf44-81855a3f337b';

//  const showsArray = [{
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA"
// },
// {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA"
// },
// {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA"
// },
// {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA"
// },
// {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA"
// },
// {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Francisco, CA"
// }
// ]

// function displayShows(array) {

// if(showsArray.length === 0){
//     return;
// }

// let counter = 0;
// const showsWrapper = document.querySelector('.shows-wrapper');

// for (const key in array) {

//     if (counter !== 0) {
//             const shows = document.createElement('section');
//             shows.classList.add('shows');
//             showsWrapper.appendChild(shows);

//             // shows container
//             const showsContainer = document.createElement('div');
//             showsContainer.classList.add('shows__container');
//             shows.appendChild(showsContainer);

//             // ul
//             const showsUlOne = document.createElement('ul');
//             showsUlOne.classList.add('shows__list');
//             showsContainer.appendChild(showsUlOne);

//             // li header
//             const showsLi = document.createElement('li');
//             showsLi.classList.add('shows__list__date', 'shows__list__date--hidden');
//             showsLi.innerText = 'DATE';
//             showsUlOne.appendChild(showsLi);

//             // li from JS for Date
//             const showsListDate = document.createElement('li');
//             showsListDate.classList.add('shows__list__date__text');
//             showsListDate.innerText = array[key].date;
//             showsUlOne.appendChild(showsListDate);

//             const showsUlTwo = document.createElement('ul');
//             showsUlTwo.classList.add('shows__list');
//             showsContainer.appendChild(showsUlTwo);

//             // li venue header
//             const showsVenue = document.createElement('li');
//             showsVenue.classList.add('shows__list__venue', 'shows__list__venue--hidden');
//             showsVenue.innerText = 'VENUE';
//             showsUlTwo.appendChild(showsVenue);

//             // li from JS for venue
//             const showsVenueList = document.createElement('li');
//             showsVenueList.classList.add('shows__list__venue__text');
//             showsVenueList.innerText = array[key].venue;
//             showsUlTwo.appendChild(showsVenueList);

//             const showsUlThree = document.createElement('ul');
//             showsUlThree.classList.add('shows__list');
//             showsContainer.appendChild(showsUlThree);

//             // li location header
//             const showsLocation = document.createElement('li');
//             showsLocation.classList.add('shows__list__location', 'shows__list__location--hidden');
//             showsLocation.innerText = 'LOCATION';
//             showsUlThree.appendChild(showsLocation);

//             // li from JS for location
//             const showsLocationList = document.createElement('li');
//             showsLocationList.classList.add('shows__list__location__text');
//             showsLocationList.innerText = array[key].location;
//             showsUlThree.appendChild(showsLocationList);

//             // btn
//             const btn = document.createElement('button');
//             btn.classList.add('btn');
//             btn.innerText = 'Buy Tickets';
//             showsContainer.appendChild(btn);

//         } else {

//             // section
//             const shows = document.createElement('section');
//             shows.classList.add('shows');
//             showsWrapper.appendChild(shows);

//             //container
//             const showsContainer = document.createElement('div');
//             showsContainer.classList.add('shows__container');
//             shows.appendChild(showsContainer)

//             // =========== DATE======================
//             //static one -> date
//             const showsListStaticOne = document.createElement('ul');
//             showsListStaticOne.classList.add('shows__list');
//             showsContainer.appendChild(showsListStaticOne);

//             const showsLi = document.createElement('li');
//             showsLi.classList.add('shows__list__date');
//             showsLi.innerText = 'DATE';
//             showsListStaticOne.appendChild(showsLi);

//             // ==========VENUE=================

//             const showsListStaticTwo = document.createElement('ul');
//             showsListStaticTwo.classList.add('shows__list');
//             showsContainer.appendChild(showsListStaticTwo);

//             const showsVenue = document.createElement('li');
//             showsVenue.classList.add('shows__list__venue');
//             showsVenue.innerText = 'VENUE';
//             showsListStaticTwo.appendChild(showsVenue);

//             //==============Location ==================
//             const showsListStaticThree = document.createElement('ul');
//             showsListStaticThree.classList.add('shows__list');
//             showsContainer.appendChild(showsListStaticThree);

//             // li location header
//             const showsLocation = document.createElement('li');
//             showsLocation.classList.add('shows__list__location');
//             showsLocation.innerText = 'LOCATION';
//             showsListStaticThree.appendChild(showsLocation);

//             const btn = document.createElement('button');
//             btn.classList.add('btn');
//             btn.innerText = 'Buy Tickets';
//             showsContainer.appendChild(btn);

//             const showsListDate = document.createElement('li');
//             showsListDate.classList.add('shows__list__date__text');
//             showsListDate.innerText = array[key].date;

//             const showsVenueList = document.createElement('li');
//             showsVenueList.classList.add('shows__list__venue__text');
//             showsVenueList.innerText = array[key].venue;

//             const showsLocationList = document.createElement('li');
//             showsLocationList.classList.add('shows__list__location__text');
//             showsLocationList.innerText = array[key].location


//             showsListStaticOne.appendChild(showsListDate);
//             showsListStaticTwo.appendChild(showsVenueList);
//             showsListStaticThree.appendChild(showsLocationList);
//         }
//     counter++;
//     }
// }

// displayShows(showsArray);



// Re-wrote function to pull data from db
function displayShows(response) {

    if(response.data.length === 0){
        return;
    }
    
    let counter = 0;
    const showsWrapper = document.querySelector('.shows-wrapper');
    
    for (const key in response.data) {
    
        if (counter !== 0) {
                const shows = document.createElement('section');
                shows.classList.add('shows');
                showsWrapper.appendChild(shows);
    
                // shows container
                const showsContainer = document.createElement('div');
                showsContainer.classList.add('shows__container');
                shows.appendChild(showsContainer);
    
                // ul
                const showsUlOne = document.createElement('ul');
                showsUlOne.classList.add('shows__list');
                showsContainer.appendChild(showsUlOne);
    
                // li header
                const showsLi = document.createElement('li');
                showsLi.classList.add('shows__list__date', 'shows__list__date--hidden');
                showsLi.innerText = 'DATE';
                showsUlOne.appendChild(showsLi);
    
                // li from JS for Date
                const showsListDate = document.createElement('li');
                showsListDate.classList.add('shows__list__date__text');
                // showsListDate.innerText = array[key].date;
                showsListDate.innerText = new Date(Number(response.data[key].date)).toDateString();
              
                showsUlOne.appendChild(showsListDate);
    
                const showsUlTwo = document.createElement('ul');
                showsUlTwo.classList.add('shows__list');
                showsContainer.appendChild(showsUlTwo);
    
                // li venue header
                const showsVenue = document.createElement('li');
                showsVenue.classList.add('shows__list__venue', 'shows__list__venue--hidden');
                showsVenue.innerText = 'VENUE';
                showsUlTwo.appendChild(showsVenue);
    
                // li from JS for venue
                const showsVenueList = document.createElement('li');
                showsVenueList.classList.add('shows__list__venue__text');
                // showsVenueList.innerText = array[key].venue;
                showsVenueList.innerText = response.data[key].place;
                showsUlTwo.appendChild(showsVenueList);
    
                const showsUlThree = document.createElement('ul');
                showsUlThree.classList.add('shows__list');
                showsContainer.appendChild(showsUlThree);
    
                // li location header
                const showsLocation = document.createElement('li');
                showsLocation.classList.add('shows__list__location', 'shows__list__location--hidden');
                showsLocation.innerText = 'LOCATION';
                showsUlThree.appendChild(showsLocation);
    
                // li from JS for location
                const showsLocationList = document.createElement('li');
                showsLocationList.classList.add('shows__list__location__text');
                // showsLocationList.innerText = array[key].location;
                showsLocationList.innerText = response.data[key].location;
                showsUlThree.appendChild(showsLocationList);
    
                // btn
                const btn = document.createElement('button');
                btn.classList.add('btn');
                btn.innerText = 'Buy Tickets';
                showsContainer.appendChild(btn);
    
            } else {
    
                // section
                const shows = document.createElement('section');
                shows.classList.add('shows');
                showsWrapper.appendChild(shows);
    
                //container
                const showsContainer = document.createElement('div');
                showsContainer.classList.add('shows__container');
                shows.appendChild(showsContainer)
    
                // =========== DATE======================
                //static one -> date
                const showsListStaticOne = document.createElement('ul');
                showsListStaticOne.classList.add('shows__list');
                showsContainer.appendChild(showsListStaticOne);
    
                const showsLi = document.createElement('li');
                showsLi.classList.add('shows__list__date');
                showsLi.innerText = 'DATE';
                showsListStaticOne.appendChild(showsLi);
    
                // ==========VENUE=================
    
                const showsListStaticTwo = document.createElement('ul');
                showsListStaticTwo.classList.add('shows__list');
                showsContainer.appendChild(showsListStaticTwo);
    
                const showsVenue = document.createElement('li');
                showsVenue.classList.add('shows__list__venue');
                showsVenue.innerText = 'VENUE';
                showsListStaticTwo.appendChild(showsVenue);
    
                //==============Location ==================
                const showsListStaticThree = document.createElement('ul');
                showsListStaticThree.classList.add('shows__list');
                showsContainer.appendChild(showsListStaticThree);
    
                // li location header
                const showsLocation = document.createElement('li');
                showsLocation.classList.add('shows__list__location');
                showsLocation.innerText = 'LOCATION';
                showsListStaticThree.appendChild(showsLocation);
    
                const btn = document.createElement('button');
                btn.classList.add('btn');
                btn.innerText = 'Buy Tickets';
                showsContainer.appendChild(btn);
    
                const showsListDate = document.createElement('li');
                showsListDate.classList.add('shows__list__date__text');
                // showsListDate.innerText = array[key].date;
                showsListDate.innerText = new Date(Number(response.data[key].date)).toDateString();
    
                const showsVenueList = document.createElement('li');
                showsVenueList.classList.add('shows__list__venue__text');
                // showsVenueList.innerText = array[key].venue;
                showsVenueList.innerText = response.data[key].place;
    
                const showsLocationList = document.createElement('li');
                showsLocationList.classList.add('shows__list__location__text');
                // showsLocationList.innerText = array[key].location
                showsLocationList.innerText = response.data[key].location
    
    
                showsListStaticOne.appendChild(showsListDate);
                showsListStaticTwo.appendChild(showsVenueList);
                showsListStaticThree.appendChild(showsLocationList);
            }
        counter++;
        }
    }

axios.get('https://project-1-api.herokuapp.com/showdates/?api_key=44207bb3-693f-4332-bf44-81855a3f337b')
.then(response => {
    console.log(response);
    displayShows(response);
})
