
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() { //this makes a callback to the YT
  console.log(YT.Player)
  player = new YT.Player("player", {
    height: "195",
    width: "320",
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
let youtubeURL = document.getElementsByTagName("td")[0].innerText;
let youtubeURLSlice = youtubeURL.slice(youtubeURL.lastIndexOf("/") + 1);
let nowPlaying = document.getElementById("nowPlaying");

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

function generateSongMarkup(song, index = -1) {
  let row = table.insertRow(index);

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

function popSong() {
  //get the most recent song in the queue, pit it in the player, now playing div
  let requester = document.getElementsByTagName("td")[2].innerText;
  let originPlatform = document.getElementsByTagName("td")[1].innerText;
  nowPlaying.innerHTML = `The current Track is <a href="${youtubeURL}">${youtubeURL}</a>, requested by ${requester} platform: ${originPlatform}`;
  //this will look funky if it's from backup playlist
  table.deleteRow(1);
  //this creates a data peristency problem for later, unless you preserve the platform data.
  //that sounds like a future problem for future me.
  return new Song(youtubeURL, originPlatform, requester);
}

function unpopSong(song) {
  generateSongMarkup(poppedSong, 1);
  //need to remove the popped song from the now playing section too.
  nowPlaying.innerHTML = "context menu :D";
  //need to write a function to update the youtube player and call it in the unpop song function
}

function updatePlayer() {
//   console.log(youtubePlayer.h.g.videoId);
//   let videoId = youtubePlayer.h.g.videoId
  // player.clearVideo();
  //player.clearVideo() doesn't work and the documentation for it is actually impossible to find
  //however, you can set the songId to an empty string to achieve the desired effect.
  //as an aside, you can use the player object to get the title, for the contextual data on the player display
  //probably thumbnail too.

  //why is it returning the youtube player, but calling it "Or"
  //that does not make any sense and i think i have brain damage now
  //I SEE YOU. console.log(player.h.g.videoId);

  //wait, why don't i just hide the player,
  //update the value of videoId
  //and unhide the player?

  //updating the value of videoId is what i'm struggling with, isn't it?
  //anyway we need to construct an entirely new player object if we wanna do this smart.
  //stepping away from updatePlayer function to first create a player function;
  //the update player function will just update the view
  //the player spawner will create a new youtube player element

  //let's just destroy the element, update the youtube url id, and remake it.
}



let poppedSong = popSong();
//this needs to be at the bottom, or at least not at the top, due to scope error i haven't figured out yet

const myTimeout = setTimeout(() => {
  updatePlayer(player);
}, 3000);

// const myTimeout = setTimeout( () => {unpopSong((poppedSong))}, 5000);

console.log(YT.Player)