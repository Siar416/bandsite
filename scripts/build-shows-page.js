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

const shows = document.querySelector('.shows');

function displayShows(array) {
    

for (const key in array) {

const showsTitle = document.createElement('h2');
showsTitle.classList.add('shows__title', 'shows__title--hidden');
showsTitle.innerText = 'Shows';
shows.appendChild(showsTitle);

// everying below goes inside this !!!!!!!!!
const showsContainer = document.createElement('div');
showsContainer.classList.add('shows__container');

// ul
const showsUl = document.createElement('ul');
showsUl.classList.add('shows__list');
showsContainer.appendChild(showsUl);

// li header
const showsLi = document.createElement('li');
showsLi.classList.add('shows__list__date-header', 'shows__list__date-header--hidden');
showsLi.innerText = 'DATE';
showsUl.appendChild(showsLi);

// li from JS for Date
const showsListDate = document.createElement('li');
showsListDate.classList.add('shows__list__date');
showsListDate.innerText = array[key].date;
showsUl.appendChild(showsListDate);


// li venue header
const showsVenue = document.createElement('li');
showsVenue.classList.add('shows__list__date-header', 'shows__list__date-header--hidden');
showsVenue.innerText = 'VENUE';
showsUl.appendChild(showsVenue);


// li from JS for venue
const showsVenueList = document.createElement('li');
showsVenueList.classList.add('.shows__list__date');
showsVenueList.innerText = array[key].venue;
showsUl.appendChild(showsVenueList);


// li location header
const showsLocation = document.createElement('li');
showsLocation.classList.add('shows__list__date-header', 'shows__list__date-header--hidden');
showsLocation.innerText = 'LOCATION';
showsUl.appendChild(showsLocation);


// li from JS for location
const showsLocationList = document.createElement('li');
showsLocationList.classList.add('shows__list__date');
showsLocationList.innerText = array[key].location;
showsUl.appendChild(showsLocationList);

// btn
const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'Buy Tickets';
showsContainer.appendChild(btn);



shows.appendChild(showsContainer);







//make sure everthing is appended if not showing up


}
}

displayShows(showsArray);

























