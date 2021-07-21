import dayPlanner from '../../images/dayPlanner.png';
import eventSmash from '../../images/eventSmash.png';
import gitsiesPage from '../../images/gitsiesPage.png';
import passwordGen from '../../images/passwordGen.png';
import readmeGen from '../../images/readmeGen.png';
import weatherAPI from '../../images/weatherAPI.png';



const itemData = [
    {
        img:  dayPlanner ,
        title: 'Day Planner',
        // description: 'Daily planner for user to plan out day by the hour. Color coded so user has visual if time block is in past, present, or future. User is able to store hourly plans in local storage.',
        link: 'https://alihernandez.github.io/DayPlanner/',
        cols: 2,
    },
    {
        img:  eventSmash ,
        title: 'Event Smash (DU Bootcamp project)',
        // description: "An event-alert system using SeatGeek and TicketMaster APIs, with Moment.js. Include web audio API for onclick events. USER STORY: As an active community member I want to be able to track my events from Meetup/EventBrite and get alerts so I don't forget them.",
        link:'https://falconreid.github.io/EventSmash/index.html',
        cols: 2,
    },
    {
        img:  gitsiesPage ,
        title: "Gitsie's Coffee and Provisions",
        // description: "Web app for Gitsie's Coffee and Provisions.",
        link: 'https://gitsies-coffee.herokuapp.com/',
        cols: 2,
    },
    {
        img:  readmeGen ,
        title: 'README Generator',
        // description: 'Good README Generator.',
        link:"https://github.com/alihernandez/readmeGenerator",
        cols: 2,
    },
    {
        img:  weatherAPI ,
        title: 'Weather Forecast Web App',
        // description: 'Weather dashboard for user to search current forecast by typing city name into search bar',
        link:"https://alihernandez.github.io/WeatherAPI/",
        cols: 2,
    },
    {
        img:  passwordGen ,
        title: 'Password Generator',
        // description: 'Using functions, for loops, if/else statments generate random passwords based on user input.',
        link:"https://alihernandez.github.io/passwordGenerator/",
        cols: 2,
    },
];

export default itemData;