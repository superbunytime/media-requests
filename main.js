//template code starts here

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
    videoId: "M7lc1UVf-VE",
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
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//my code starts here

const table = document.getElementById("queue");
const tBody = document.getElementsByTagName("tbody");
const button = document.getElementById("songButton");
const songText = document.getElementById("songText");

button.addEventListener("click", function (e) {
  e.preventDefault();
  formHandler(e);
});

class Song {
  constructor(url, site, source) {
    this.url = url;
    this.site = site;
    this.source = source;
  }
}

function newSong(url, site = "youtube", source = "puppypotion") {
  return new Song(url, site, source);
}

// console.log(newSong("butts.com", "assbutt.fart", "dickgymnasium"))
//works fine

function generateSongMarkup(song) {
  //i hate working with tables lol
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = song.url;
  cell2.innerHTML = song.site;
  cell3.innerHTML = song.source;
}

generateSongMarkup(newSong("ass.net", "buttjuggle.gov", "heeheehaha"));
generateSongMarkup(newSong("hugeass.net", "buttjuggle.org", "the world"));

//alright now add a button to submit new songs.

function formHandler(event) {
  // console.log(songText.value)
//   console.log(generateSongMarkup(songText.value)); //having this uncommented adds it twice
  generateSongMarkup(newSong(songText.value));
}
