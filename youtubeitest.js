const { Client, MusicClient } = require("youtubei");
// or for TS / ES6
import { Client, MusicClient } from "youtubei";

const youtube = new Client();
const music = new MusicClient();

// const run = async () => {
// 	const videos = await youtube.search("Never gonna give you up", {
// 		type: "video", // video | playlist | channel | all
// 	});

// 	console.log(videos.items.length); // 20
// 	const nextVideos = await videos.next(); // load next page
// 	console.log(nextVideos.length); // 18-20, inconsistent next videos count from youtube
// 	console.log(videos.items.length); // 38 - 40

// 	// you can also pass the video URL
// 	const video = await youtube.getVideo("dQw4w9WgXcQ");

// 	const channelVideos = await video.channel.videos.next();
// 	const channelPlaylists = await video.channel.playlists.next();

// 	// you can also pass the playlist URL
// 	const playlist = await youtube.getPlaylist("UUHnyfMqiRRG1u-2MsSQLbXA");
// 	console.log(playlist.videos.items.length); // first 100 videos;
// 	let newVideos = await playlist.videos.next(); // load next 100 videos
// 	console.log(playlist.videos.items.length); // 200 videos;
// 	await playlist.videos.next(0); // load the rest videos in the playlist

// 	// search using music client
// 	const shelves = await music.search("Never gonna give you up");
// 	console.log(shelves);
// };

// run();

// console.log(await youtube.search("HyqK2Tsujho"))

let res = await youtube.search("HyqK2Tsujho") //dougdoug video

await console.log(res.items[0].title)

await console.log(`youtu.be/${res.items[0].id}`)

await console.log(res.items[0].thumbnails[0])

// alright now get the youtube link/title/thumbnail for the first search result

//coolgood. throw some error handling on it, and you're golden on youtube search stuff