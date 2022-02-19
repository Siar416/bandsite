const apiKey = '?api_key=44207bb3-693f-4332-bf44-81855a3f337b';
const showsUrl = 'https://project-1-api.herokuapp.com/showdates/';


function displayShows(response) {

    if(response.data.length === 0){
        return;
    }
    
    let counter = 0;
    const showsWrapper = document.querySelector('.shows-wrapper');
    
    for (const key in response.data) {
    
        if (counter !== 0) {

            document.querySelectorAll('.shows__container').forEach(item => {
                item.addEventListener('click', () => {
                    console.log('clicked')
                })
            })




                const shows = document.createElement('section');
                shows.classList.add('shows');
                showsWrapper.appendChild(shows);
    
                // shows container
                const showsContainer = document.createElement('div');
                showsContainer.classList.toggle('shows__container', 'active');
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
                showsContainer.classList.toggle('shows__container', 'active');
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
                showsListDate.innerText = new Date(Number(response.data[key].date)).toDateString();
    
                const showsVenueList = document.createElement('li');
                showsVenueList.classList.add('shows__list__venue__text');
                showsVenueList.innerText = response.data[key].place;
    
                const showsLocationList = document.createElement('li');
                showsLocationList.classList.add('shows__list__location__text');
                showsLocationList.innerText = response.data[key].location
    
                // appends
                showsListStaticOne.appendChild(showsListDate);
                showsListStaticTwo.appendChild(showsVenueList);
                showsListStaticThree.appendChild(showsLocationList);
            }
        counter++;
        }
    }
axios.get(showsUrl+apiKey)
.then(response => {
    displayShows(response);
})
.catch(err => {
    console.log('Sorry, unable to retrieve data');
})



