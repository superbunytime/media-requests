//template code starts here
//time to start tinkering with the template

//1. The <iframe> (and video player) will replace this <div> tag.

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: youtubeURLSlice,
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
//   event.target.playVideo();
//commenting that out to see if it stops autoplay and breaks nothing
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
//commented out the code that stops the video playing after 6 seconds
}
function stopVideo() {
  player.stopVideo();
}

//my code starts here

const table = document.getElementById("queue");
const tBody = document.getElementsByTagName("tbody");
const button = document.getElementById("songButton");
const songText = document.getElementById("songText");
//declaring these with let because they'll need to be dynamically updated
let youtubeURL = document.getElementsByTagName("td")[0].innerText
let youtubeURLSlice = youtubeURL.slice(youtubeURL.lastIndexOf("/") + 1)
let nowPlaying = document.getElementById("nowPlaying")

class Song {
    constructor(url, site, source) {
      this.url = url;
      this.site = site;
      this.source = source;
    }
  }

button.addEventListener("click", function (e) {
  e.preventDefault();
  formHandler(e);
});

function newSong(url, site = "youtube", source = "puppypotion") {
  return new Song(url, site, source);
}


function generateSongMarkup(song) {
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = song.url;
  cell2.innerHTML = song.site;
  cell3.innerHTML = song.source;
}


//alright now add a button to submit new songs.

function formHandler(event) {

  generateSongMarkup(newSong(songText.value));
}

//moving on to next steps
//it may be wise to do data sanitization (typecheck if the link is a valid link (youtube, etc))


//alright now get the first url in the table

function popSong(){
    //get the most recent song in the queue,
    //put it in the player
    //put it in a now playing div
    youtubeURL = document.getElementsByTagName("td")[0].innerText
    youtubeURLSlice = youtubeURL.slice(youtubeURL.lastIndexOf("/") + 1)
    nowPlaying.innerText = `The current Track is ${youtubeURL}`


    //remove it from the queue table
    //you are here ^

}

popSong()
