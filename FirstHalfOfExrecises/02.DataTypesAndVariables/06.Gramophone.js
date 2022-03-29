<<<<<<< HEAD
function gramophone(band,album,song){

    let songDuration = 0
    let fullRotation = 2.5
    //calculate the song duration in secs
    songDuration = (band.length * album.length) * song.length / 2
    //print `The plate was rotated {rotations} times.`
    console.log(`The plate was rotated ${Math.ceil(songDuration / fullRotation)} times.`)
    //round the rotations

}
=======
function gramophone(band,album,song){

    let songDuration = 0
    let fullRotation = 2.5
    //calculate the song duration in secs
    songDuration = (band.length * album.length) * song.length / 2
    //print `The plate was rotated {rotations} times.`
    console.log(`The plate was rotated ${Math.ceil(songDuration / fullRotation)} times.`)
    //round the rotations

}
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
gramophone('Rammstein', 'Sehnsucht', 'Engel')