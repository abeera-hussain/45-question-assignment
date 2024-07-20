function make_album(artist_name:string,album_title:string,album_track?:number){

    let album: {artist:string,title:string,track?:number}={
        artist:artist_name,
        title:album_title,


    }
    if(album_track !== undefined){
        album.track = album_track 
    }
    else{
        return album;
    }
}
let album1 = make_album("ABEERA","IF")    
let album2 = make_album("JAVERIA","BE YOURSELF",10)
console.log(album1);
console.log(album2);

