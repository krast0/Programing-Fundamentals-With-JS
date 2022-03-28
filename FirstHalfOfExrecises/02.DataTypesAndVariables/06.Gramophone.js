function gramophone(band,album,song){

    let songDuration = 0
    let fullRotation = 2.5
    //calculate the song duration in secs
    songDuration = (band.length * album.length) * song.length / 2
    //print `The plate was rotated {rotations} times.`
    console.log(`The plate was rotated ${Math.ceil(songDuration / fullRotation)} times.`)
    //round the rotations

}
gramophone('Rammstein', 'Sehnsucht', 'Engel')