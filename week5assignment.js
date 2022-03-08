class Track {
    constructor(trackNumber, trackTitle) {
        this.trackNumber = trackNumber;
        this.trackTitle = trackTitle;
    }
    describe() {
        return `${this.trackNumber}. ${this.trackTitle}`;
    }
}

class Album {
    constructor(albumTitle) {
        this.albumTitle = albumTitle;
        this.trackList = []; //here we want to list every song on a particular album
    }
}

class Collection {
    constructor() {
        this.albums = [];
        this.targetAlbum = null;
    }
    menu() {
        let option = this.albumMenuOptions();
        while (option != 5) {
            switch (option) {
                case '1':
                    this.enterAlbum();
                    break;
                case '2':
                    this.viewAlbum();
                    break;
                case '3':
                    this.removeAlbum();
                    break;
                case '4':
                    this.viewCollection();
                    break;
                default:
                    option = 5;
            }
            option = this.albumMenuOptions();
        }
        alert('You are leaving the albums menu');
    }

    albumMenuOptions() {
        return prompt(`
        1) Enter Album
        2) View Album
        3) Remove Album
        4) View Collection
        5) Exit
        `);
    }

    tracklistMenuOptions(albumContents){
        return prompt(`
            1) Add a song
            2) Remove a song
            3) Exit

            ${albumContents}
        `);
    }

    viewCollection() {
        let allAlbums = ''; 
        for (let i = 0; i < this.albums.length; i++) {
            allAlbums += i + ') ' + this.albums[i].albumTitle + '\n';
        }
        alert(allAlbums);   //all input albums should show here by index
    }

    enterAlbum() {
        let albumTitle = prompt('What is the name of the album you wish to add to your collection?');
        this.albums.push(new Album(albumTitle));
    }

    viewAlbum() {
        let index = prompt('Which album would you like to view?');
        if (index > -1 && index < this.albums.length) {
            this.targetAlbum = this.albums[index];
            let description = 'You are viewing: ' + this.targetAlbum.albumTitle + '\n';
            for (let i = 0;i < this.targetAlbum.trackList.length; i++) {
                description += this.targetAlbum.trackList[i].trackNumber + '. '   //index number next to the input data looked messy, so remember the index of the inputs.
                    + this.targetAlbum.trackList[i].trackTitle + '\n';
            }

            let option = this.tracklistMenuOptions(description);
            switch (option) {
                case '1':
                    this.addTrack();
                    break;
                case '2':
                    this.removeTrack();
            }
        }
    }

    removeAlbum() {
        let index = prompt('Which album would you like to remove from your collection?');
        if (index > -1 && index < this.albums.length) {
            this.albums.splice(index, 1);
        }
        alert('This album was removed from the collection.');
    }

    addTrack() {
        let trackNumber = prompt('What is the number of the track you wish to add to this album?');
        let trackTitle = prompt('What is the title of the song you are adding?');
        this.targetAlbum.trackList.push(new Track(trackNumber, trackTitle));
        alert('Your song was added!');
    }

    removeTrack() {
        let index = prompt('Which track would you like to remove?');
        if (index > -1 && index < this.targetAlbum.trackList.length) {
            this.targetAlbum.trackList.splice(index, 1);
        }
        alert('This song was removed from the album.');
    }
}

let collection = new Collection();
collection.menu();



/* for testing only
=====================
Mastodon - Leviathan:
1.	"Blood and Thunder" (featuring Neil Fallon)	3:48
2.	"I Am Ahab"	2:45
3.	"Seabeast"	4:15
4.	"Ísland"	3:26
5.	"Iron Tusk"	3:03
6.	"Megalodon"	4:22
7.	"Naked Burn"	3:42
8.	"Aqua Dementia" (featuring Scott Kelly)	4:10
9.	"Hearts Alive"	13:39
10.	"Joseph Merrick" (instrumental) */