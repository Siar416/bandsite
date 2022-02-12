const showsArray = [{
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA"
},
{
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA"
},
{
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"
},
{
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"
},
{
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"
},
{
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"
}
]

const showsWrapper = document.querySelector('.shows-wrapper');

function displayShows(array) {
    

for (const key in array) {


const shows = document.createElement('section');
shows.classList.add('shows');
showsWrapper.appendChild(shows);


/// this will be static
// const showsTitle = document.createElement('h2');
// showsTitle.classList.add('shows__title', 'shows__title--hidden');
// showsTitle.innerText = 'Shows';
// shows.appendChild(showsTitle);

// everying below goes inside this !!!!!!!!!
const showsContainer = document.createElement('div');
showsContainer.classList.add('shows__container');
shows.appendChild(showsContainer);


// ul
const showsUlOne = document.createElement('ul');
showsUlOne.classList.add('shows__list');
showsContainer.appendChild(showsUlOne);

// li header
const showsLi = document.createElement('li');
showsLi.classList.add('shows__list__date');
showsLi.innerText = 'DATE';
showsUlOne.appendChild(showsLi);

// li from JS for Date
const showsListDate = document.createElement('li');
showsListDate.classList.add('shows__list__date__text');
showsListDate.innerText = array[key].date;
showsUlOne.appendChild(showsListDate);


const showsUlTwo = document.createElement('ul');
showsUlTwo.classList.add('shows__list');
showsContainer.appendChild(showsUlTwo);

// li venue header
const showsVenue = document.createElement('li');
showsVenue.classList.add('shows__list__venue');
showsVenue.innerText = 'VENUE';
showsUlTwo.appendChild(showsVenue);


// li from JS for venue
const showsVenueList = document.createElement('li');
showsVenueList.classList.add('shows__list__venue__text');
showsVenueList.innerText = array[key].venue;
showsUlTwo.appendChild(showsVenueList);


const showsUlThree = document.createElement('ul');
showsUlThree.classList.add('shows__list');
showsContainer.appendChild(showsUlThree);


// li location header
const showsLocation = document.createElement('li');
showsLocation.classList.add('shows__list__location');
showsLocation.innerText = 'LOCATION';
showsUlThree.appendChild(showsLocation);


// li from JS for location
const showsLocationList = document.createElement('li');
showsLocationList.classList.add('shows__list__location__text');
showsLocationList.innerText = array[key].location;
showsUlThree.appendChild(showsLocationList);

// btn
const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Buy Tickets';
showsContainer.appendChild(btn);














}
}

displayShows(showsArray);

























