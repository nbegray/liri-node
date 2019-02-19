# LIRI Bot

### Overview

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Functionality of LIRI

1. LIRI will search the Spotify API for songs

2. LIRI will search the Bands in Town API for concerts

3. LIRI will search the OMDB API for movies.

4. The LIRI app will also have the functionality to take user input and search the API of choice (spotify, bands in town or OMDB) to retrieve the desired user information.

The application is run out of BASH command-line platform application from a javascript code base. 

### Running LIRI in BASH Command-Line:
When running LIRI commands for each section should be entered in this way to allow the application to run successfully:

1. Spotify API - to search the spotify API for song names, enter " node liri spotify-this <song name>. If necessary, enter the name of the artist as well to narrow the search.

2. Bands in Town API - to search the Bands in Town API for concert information , enter " node liri concert-this <artist name>. 

3. OMDB API - to search the OMDB API for movie information , enter " node liri movie-this <movie name>. 

Additional functionality has been added with a "do-what-it-says" command where the application will pull information from the random.txt file and return the artist information in the terminal. This can be updated with any API to expand functionality for future product development. 

