// Added 6 songs to the array
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Dancing in the Moonlight", artist: "King Harvest", genre: "Rock" },
    { title: "September", artist: "Earth, Wind & Fire", genre: "R&B" },
    { title: "Don't Stop Believin'", artist: "Journey", genre: "Rock" },
    { title: "Le Freak", artist: "Chic", genre: "R&B" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Pop" }

]

;


// Added the Guardians to the Object

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Rock",
    "Groot": "Pop",
    "Rocket": "R&B"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
   //Playlist Object 
   const playlists = {};
    // Below Iterate over each Guardian and filter songs based on genres
   for (const [guardian, genre] of Object.entries(guardians)) {
    playlists[guardian] = songs.filter(song => song.genre === genre);
}
displayPlaylists(playlists)
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);

// Function to display the playlists
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists');
   
    // Iterate over the playlists object
    for (const [guardian, playlist] of Object.entries(playlists)) {
        // Create a section for each guardian's playlist
        const section = document.createElement('section');
        const title = document.createElement('h2');
        title.textContent = `${guardian}'s Playlist`;
        section.appendChild(title);

        // I Created a list for the songs
        const ul = document.createElement('ul');
        playlist.forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} by ${song.artist}`;
            ul.appendChild(li);
        });
        section.appendChild(ul);

        // Append the section to the playlists div
        playlistsDiv.appendChild(section);
    }
}
