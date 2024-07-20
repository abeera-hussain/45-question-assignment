function make_album(artist_name, album_title, album_track) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (album_track !== undefined) {
        album.track = album_track;
    }
    else {
        return album;
    }
}
let album1 = make_album("ABEERA", "IF");
let album2 = make_album("JAVERIA", "BE YOURSELF", 10);
console.log(album1);
console.log(album2);
export {};
