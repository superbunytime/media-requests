For now this is just going to be where otherwise superfluous comments and
rapidly scribbled notes are gonna get dumped.

Frontend

Need data persistence:
both local storage, and super scuffy json database or actual database
for the purposes of scaling and since this will need to be running on
non-technical user devices, we're going with super scuffy json database.
As a technical user, some of my worst experiences have been with databases.
I do not wish them upon my enemies.

Need data validation:
make sure the links are valid youtube links, or if you expand
into other media players (spotify, soundcloud, bandcamp, apple music)
that the links are valid for one of those.

Need backup playlist functionality:
stop the current song, push it back to the top of the queue
switch to another playlist.

Need playlist shuffle functionality:
for non request queue playlists, allow shuffle/unshuffle on frontend

Backend

Will need to get the title data from Youtube's API and pipe it from backend to frontend
Connect to twitch

Add all relevant commands: !sr, !song, !wrongsong, !queue, !skip, !bansong, !unbansong

Add constraints:

!sr should return confirmation that the song (title, link) was added in reply to user
!sr should fail if the user has gone over a certain threshold of songs still in queue
!wrongsong should remove the last requested song by the user requesting it
!song should return information about the song
!queue should communicate queue if possible. this may be difficult to do since it's
a localhost browser source. May not be able to implement without great inconvenience
to end user; if that's the case, we can all live without that feature, or it could
DM the user a list of songs from the JSON datbase.
!skip should skip the current song, removing it from the list.
!bansong should ban a song from the list, preventing it from being selected
!unbansong see if you can figure out what this command should do winkyface