import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require("fs/promises");
const { Client, MusicClient } = require("youtubei");
const youtube = new Client();

async function build_song(str) {
  let res_arr = [];
  let data = await youtube.search(str)
  let thumbnail = data.items[0].thumbnails[0];
  let title = data.items[0].title;
  let url = `youtu.be/${data.items[0].id}`;
  res_arr.push(thumbnail, title, url)
  return res_arr
}

console.log(await build_song("HyqK2Tsujho")) //now returns the results i need


async function get_songs(file) {
  let song_list = await fs.readFile(file).then((data) => {
    return data;
  });
  let s = JSON.parse(song_list);
  let song_arr = [];
  for (let i = 0; i < s.length; i++) {
    song_arr.push(s[i]);
  }

  return song_arr;
}

async function set_songs(file) {}

async function current_song(file) {}

async function pop_song(file) {
  //used for the !skip command
}

async function wrong_song(file) {}

async function next_song(file) {
  //get the next song playing; may be superfluous
}

async function remove_song(file) {
  //remove a specific song from the playist; accepts a youtube url
}

async function queue(file) {
  //whispers a list of the songs in the queue to a user; may be superfluous
}

async function volume(file) {
  //adjust the volume of the current song; default value is 100,
  //accepts a vallue of 0 to 100
}

async function playlist(file) {
  //returns the url for the playlist if not regular song requests
  //may be superfluous
}

async function backup_playlist_toggle(file) {
  //function called in the background if the last song from the requests queue
  //is played and the queue empties, or for if a song gets added to the queue
  //and the player needs to switch from the backup playlist back to the queue
}

async function ban_song(file) {}
