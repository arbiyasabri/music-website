
    const songs = [
        { title: 'Night Changes', artist: 'One-Direction', src: 'music/One-Direction-Night-Changes.mp3' },
        { title: 'Story Of My Life', artist: 'One-Direction', src: 'music/One-Direction-Story-of-My-Life.mp3' },
        {title: 'Stay', artist: 'Blackpink', src: 'music/Stay Blackpink-(SongsPK).mp3' },
        {title: 'Bones', artist: 'Imagine-Dragons', src: 'music/Bones_320(PaglaSongs).mp3' }
    ];

    let currentSongIndex = 0;
    const audioPlayer = new Audio();

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audioPlayer.src = song.src;
        audioPlayer.title = song.title;
        audioPlayer.load();

        // Update the artist name and title in the UI
        document.getElementById('song-title').innerText = song.title;
        document.getElementById('song-artist').innerText = song.artist;
    }

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
    }

    audioPlayer.addEventListener('ended', nextSong);

    loadSong(currentSongIndex);

    document.getElementById('play-pause-btn').addEventListener('click', playPause);
    document.getElementById('next-btn').addEventListener('click', nextSong);
    document.getElementById('prev-btn').addEventListener('click', prevSong);
  

    function updatePlayPauseButton() {
        const playPauseBtn = document.getElementById('play-pause-btn');
        if (audioPlayer.paused) {
            playPauseBtn.innerHTML = '<span class="material-icons">play_arrow</span>';
        } else {
            playPauseBtn.innerHTML = '<span class="material-icons">pause</span>';
        }
    }

    function playPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
        updatePlayPauseButton();
    }

    audioPlayer.addEventListener('play', updatePlayPauseButton);
    audioPlayer.addEventListener('pause', updatePlayPauseButton);

//slider

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function updateSongSlider() {
    const songSlider = document.getElementById('song-slider');
    const currentTimeDisplay = document.getElementById('current-time');

    songSlider.value = audioPlayer.currentTime;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
}

function updateTotalTime() {
    const totalTimeDisplay = document.getElementById('total-time');
    totalTimeDisplay.textContent = formatTime(audioPlayer.duration);
}

// Add event listener to update the song slider when the time updates
audioPlayer.addEventListener('timeupdate', updateSongSlider);
// Add event listener to update the total time when the metadata is loaded
audioPlayer.addEventListener('loadedmetadata', updateTotalTime);

// Add event listener for seeking the audio when the slider is moved
const songSlider = document.getElementById('song-slider');
songSlider.addEventListener('input', function () {
    audioPlayer.currentTime = songSlider.value;
});



    





