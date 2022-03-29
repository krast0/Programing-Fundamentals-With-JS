function songsExcercise(arrayOfSongs){
    let numberOfSongs = arrayOfSongs.shift()
    let typeSong = arrayOfSongs.pop()

    class Song{
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }
    let songs = []
    for (let i = 0; i < arrayOfSongs.length; i++) {
       let [type,name,time] = arrayOfSongs[i].split('_')
        let song = new Song(type,name,time)
        songs.push(song)
        
    }
        
    
    if(typeSong === 'all'){
        songs.forEach((i) => console.log(i.name))
    }else{
        let fillterd = songs.filter((i) => i.type === typeSong);
        fillterd.forEach((i) => console.log(i.name))
            
            }

        

}
songsExcercise([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )