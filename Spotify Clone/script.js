
let currentSong = new Audio();
function formatTime(totalSeconds) {
    const totalSecondsInt = Math.floor(totalSeconds);
    const minutes = Math.floor(totalSecondsInt / 60);
    const seconds = totalSecondsInt % 60;

    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
}

console.log("Formatting 12 seconds:");
console.log(formatTime(12));

console.log("Formatting 75 seconds:");
console.log(formatTime(75));

console.log("Formatting 180 seconds:");
console.log(formatTime(180));

console.log("Formatting 0 seconds:");
console.log(formatTime(0));

console.log("Formatting 3661 seconds (shows it handles hours):");
console.log(formatTime(3661));
const baseUrl=window.location.origin+'/';
console.log(baseUrl)


async function getSongs() {


    let a = await fetch(`${baseUrl}songs/`)
    // let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();

    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("songs%5C")[1])

        }
    }
    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = "/songs/" + track
    if (!pause) {

        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "0:00 / --:--"


}

async function main() {
    let songs = await getSongs()
    playMusic(songs[0], true)


    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                        <img class="invert" src="music.svg" alt="">
                        <div class="info">
                            <div>${song.replaceAll("%20", " ")}</div>
                            <div>Taimoor</div>
                        </div>
                        <div class="playnow">
                            <span>Play Now</span>
                        <img class="invert" src="playsong.svg" alt=""></div> </li>`

    }
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "pause.svg"
        } else {
            currentSong.pause()
            play.src = "playsong.svg"
        }
    })
    // liseten to time update
    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";

    })
    // add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = e.offsetX / e.currentTarget.clientWidth;
        currentSong.currentTime = percent * currentSong.duration;
    })
    //add am event listener hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left="0"
    })
    //add am event for close
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left="-120%"
    })
    // add previous and next listener
previous.addEventListener("click", ()=>{
    console.log("Previous clicked")
    console.log(currentSong)
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if((index-1)>=0){
        playMusic(songs[index-1])
    }

})
next.addEventListener("click", ()=>{
    console.log("Next clicked")
    console.log(currentSong)
    let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
    if((index+1)<songs.length) {
        playMusic(songs[index+1])
    }
})

}

main() 