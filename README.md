# Movie Discovery Website

Created a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. Consumed data from the TMDB API.

Try Code Here: https://movie-discovery-webapp-six.vercel.app/


# Movie Discovery Web Application

## Project Overview

This repository contains a Movie Discovery Web Application built using React. The application allows users to search for movies, view details about them, and save their favorite movies. It consumes data from the TMDB API.

## User Interface

The application features a responsive and visually appealing user interface designed to replicate the Figma design provided in the task. The top 10 movies are listed on the homepage, displayed in a grid layout with their movie posters. Each card component displays the movie title and release date.

## Movie Search

The application implements a search feature that allows users to search for movies by title. It displays search results, including movie posters, titles, and release dates. A loading indicator is shown while fetching search results.

## Movie Details

When navigating to `/movies/:id` route (where `id` is the movie's ID), users can view the movie details page. It displays the following information:

- Title
- Release Date
- Runtime
- Overview

## API Integration

The application consumes the TMDB API to fetch movie data. 

## Error Handling

The application implements error handling to display meaningful error messages to users in case of API failures or other issues.

## Submission

To access the frontend application, you can visit [Movie Discovery WebApp]([https://movie-discovery-webapp-six.vercel.app/]).

### Running the Project Locally

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```
   
3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000` to view the application.

### Code Organization and Documentation

The code is well-organized and documented to ensure clarity and maintainability.

If you have any questions or encounter any issues while setting up or using the application, please feel free to contact me!

Thank you for reviewing this Movie Discovery Web Application!
