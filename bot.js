import axios, * as others from "axios";
import { createRequire } from "module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createServer } from 'node:http';
import { Server } from "socket.io";
const require = createRequire(import.meta.url);
const tmi = require("tmi.js");
const fs = require("fs");
const dotenv = require("dotenv");
const { Client, MusicClient } = require("youtubei");
const express = require("express");
const ExpressError = require("./expressError.cjs");

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

//moving the website to a public folder
//and the line below this, fixed the MIME type issue.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

dotenv.config();
const token = process.env.TMI_TOKEN;

//commands to write
//sr, song, wrongsong, skip, next, removesong, queue (how?)(dm user the queue??)(maybe don't have that feature), volume, playlist, bansong

const mods = ["sussybnuuy", "nekyua", "puppypotion", "rad_butte", "puppyforce"]; //define a list of moderator usernames as strings

// Define configuration options
const opts = {
  identity: {
    username: "puppyforce",
    password: `${token}`,
  },
  channels: ["puppypotion"],
  // need to be modded in order to send messages
};

// Create a client with our options
const client = new tmi.client(opts);

client.on("message", async (channel, tags, message, self) => {
  if (self) {
    return;
  }
  console.log(`${channel}: ${tags["display-name"]}: ${message}`);

  if (message.startsWith("!sr")) {
    //write the code to search youtube for the url or search param
    //split the string starting with everything after !sr
    //query youtube API, return the first result
    //searching for the exact youtube link gives you the right video
    //so you don't need to write more code to validate whether
    //it's a search term or exact url or url fragment
    //include logic for failed youtube api search
    //and banned songs

    //we'll be putting express route code here

    //express post route goes here
    //why don't i just put in on a javascript object
    client.say(
      channel,
      `@${tags["display-name"]}, attempting to add ${message.slice(
        4
      )} to the queue; youtube URL: YOUTUBE_URL`
    );
  }
  if (message.startsWith("!song")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for song now playing`
    );
  }
  if (message.startsWith("!wrongsong")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for wrong song`
    );
  }
  if (message.startsWith("!skip")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for skip`
    );
  }
  if (message.startsWith("!next")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for next`
    );
  }
  if (message.startsWith("!removesong")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for remove song`
    );
  }
  if (message.startsWith("!queue")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for queue`
    );
  }
  if (message.startsWith("!volume")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for volume`
    );
  }
  if (message.startsWith("!playlist")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for playlist`
    );
  }
  if (message.startsWith("!bansong")) {
    //write the code to search youtube for the url or search param
    client.say(
      channel,
      `@${tags["display-name"]}, placeholder message for banning a song`
    );
  }
});

client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

//okay so good news; now in theory, you can just cram all the express code in here.
//because someone upstairs fixed package import require conflict commonjs module
//nightmare nightmare nightmare nightmare but this time in your favor

//EXPRESS CODE STARTS HERE MAYBE

app.listen(3000, function () {
  console.log(`app on port 3000`);
});

//honestly i wasn't expecting that to work.
