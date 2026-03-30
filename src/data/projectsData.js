import freshmarket11 from "../assets/Freshmarket-shop11.webm";
import freshmarket2 from "../assets/freshmarket2.webp"
import freshmarket3 from "../assets/freshmarket3.webp"
import freshmarket4 from "../assets/freshmarket4.webp"
import vacation from "../assets/vacation-project.webp";
import vacation1 from "../assets/vacation-project1.webp";
import vacation2 from "../assets/vacation-project2.webp";
import vacation3 from "../assets/vacation-project3.webp";
import todo from "../assets/todo-list.webm";
import todolist2 from "../assets/todolist2.webp";
import todolist3 from "../assets/todolist3.webp";
import csv_parser from '../assets/csv-parser3.webm'
import csv_parser2  from '../assets/csv-parser2.webm'
import weather_project from '../assets/weather-project.webm'
import pixaImages from '../assets/pixaImage.webm'



export const projects = [
      {
        id: 1,
        title: "PixaImage - Full Stack Gallery",
        description:"Developed a full stack project built with Node.js, Express, React (Vite), and Redux Toolkit. The project aims to display and manage a collection of photos with pagination, sorting, caching, and a user-friendly interface. The project follows a a layered architecture approach to separate concerns and improve maintainability.",
        images: [{ src: pixaImages, type: "video" }],
        live: 'https://pixaimage.onrender.com/',
        repository: 'https://github.com/ronM3/pixaImage-react-node'
      },
      {
        id: 2,
        title: "Weatherwise Forecast",
        description:"Developed weather forecast app using HTML5 Geolocation, OpenWeatherMap,Weatherbit APIs and Vanilla-javascript, with a user-friendly UI, responsive design,dynamic background, 7-day forecast, and data caching for optimized performance.The project follows a Module Revealing Architecture pattern for clear code organization and modularity.",
        images: [{ src: weather_project, type: "video" }],
        live: 'https://weatherwise.onrender.com/',
        repository: 'https://github.com/ronM3/Wether-Forecast-vanila-javascript'
      },
      {
        id: 3,
        title: "Freshmarket shop",
        description:
          "e commerce shop build with angular & rxjs, Backend: Node.js, Express, bcrypt, mysql. Frontend: Angular, RxJs, Reactive forms, CSS/Bootstrap, file upload feature and error handler.",
        user: 'Demo User: got@gmail.com Password: 123456',
        images: [
          { src: freshmarket11, type: "video" },
          { src: freshmarket2, type: "image", width: 1200, height: 563 },
          { src: freshmarket3, type: "image", width: 1200, height: 564 },
          { src: freshmarket4, type: "image", width: 1917, height: 902 },
        ],
        live: 'https://freshmarketapp.herokuapp.com/',
        repository: 'https://github.com/ronM3/Freshmarket-shop'
      },
      {
        id: 4,
        title: "Ultimate Vacations",
        description:
          "Vacations Tagging system, login to watch vacations offers, tag them and watch how many followers each one has, every change in the system is in real time using Socket.IO. this project built with React, Node.js, and mySql",
          user: 'Demo User: tony, Password: 123456',
          images: [
            { src: vacation, type: "image", width: 693, height: 326 },
            { src: vacation2, type: "image", width: 1200, height: 564 },
            { src: vacation1, type: "image", width: 1200, height: 564 },
            { src: vacation3, type: "image", width: 1918, height: 900 },
          ],
          live: 'https://uvacations.herokuapp.com/',
          repository: 'https://github.com/ronM3/vacations-client'
      },
      {
        id: 5,
        title: "Customizable Do List",
        description:
          "A Friendly and customizable To-Do List where you can add, delete or edit tasks built with Vanilla JavaScript, HTML, CSS, Bootstrap. Project is also mobile responsive and dark mode available also using external libraries.",
          images: [
            { src: todo, type: "video" },
            { src: todolist2, type: "image", width: 693, height: 326 },
            { src: todolist3, type: "image", width: 1200, height: 564 },
          ],
          live: 'https://customtodo.onrender.com/',
          repository: 'https://github.com/ronM3/Customizable-To-Do-List'
      },
      {
        id: 6,
        title: "Node.js - CSV Parser",
        description:
          "API endpoint that parses and processes CSV files line by line as array of arrays, API endpoint that requires data from a given api using specific id and return a CSV file with the data. Project built with Node.js, express also added persistent caching for API and custom error handler.",
          images: [
            { src: csv_parser2, type: "video" },
            { src: csv_parser, type: "video" },
          ],
          repository: 'https://github.com/ronM3/Node.js-csv-reader'
      },
]
