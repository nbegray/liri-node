var keys = require("./keys.js");
require("dotenv").config();
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var axios = require('axios')
var command = process.argv[2];
var input = process.argv.splice(3).join(' ');



if( command == 'spotify-this'){
    spotify.search({ type: 'track', query: input }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var base = data.tracks.items[0];
      console.log("Song name : " + base.name); 
      console.log("Preview URl : " + base.preview_url)
      console.log("Artist name: " + base.artists[0].name)
      console.log("Album name: " + base.album.name)
      });
      
} else if ( command == "concert-this"){
    var url = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    axios.get(url).then(function(data){
        console.log("Name of Venue: " + data.data[0].venue.name)
        console.log("Venue Location: " + data.data[0].venue.city)
        console.log("Date of Event: " + data.data[0].datetime)

    })

    console.log("do something with bands")
}else if ( command == "movie-this"){
    var url = "http://www.omdbapi.com/?t=" + input + "&apiKey=trilogy"
    axios.get(url).then(function(data){
        console.log("Title of the movie:" + data.data.Title)
        console.log("Year movie released:" + data.data.Year)
        console.log("IMDB Rating:" + data.data.imdbRating)
        console.log("Rotten Tomatoes Rating: " + data.data.Ratings[1].Value)
        console.log("Country Produced:" + data.data.Country)
        console.log("Language of the movie:" + data.data.Language)
        console.log("Plot of the movie:" + data.data.Plot)
        console.log("Title of the movie:" + data.data.Actors)
    })
}
