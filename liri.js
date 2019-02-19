var keys = require("./keys.js");
require("dotenv").config();
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var axios = require('axios')
var moment = require('moment')
var command = process.argv[2];
var input = process.argv.splice(3).join(' ');
var fs = require("fs");



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
        console.log("Venue Location: " + data.data[0].venue.city + ", "+ data.data[0].venue.region) 
        var dateEvent = data.data[0].datetime;
        var dateEventConv = moment(dateEvent).format("MM/DD/YY");
        console.log("Date of Event: " + dateEventConv)
        
        

    })


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
fs.readFile("random.txt","utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  else if(command === "do-what-it-says"){
    // We will then print the contents of data
    console.log(data)
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
    spotify.search({ type: 'track', query: data }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var base = data.tracks.items[0];
      console.log("Song name : " + base.name); 
      console.log("Preview URl : " + base.preview_url)
      console.log("Artist name: " + base.artists[0].name)
      console.log("Album name: " + base.album.name)
      });
    
          

    
        


   
  }

  });