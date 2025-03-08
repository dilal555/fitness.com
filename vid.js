let back = document.getElementById('back');


back.onclick = function(){
    window.location.href = 'index.html';
}

// let vid0 = document.getElementById('vid0');
// let vid1 = document.getElementById('vid1');
// let vid2 = document.getElementById('vid2');
// let vid3 = document.getElementById('vid3');
// let vid4 = document.getElementById('vid4');
// let vid5 = document.getElementById('vid5');
// let vid6 = document.getElementById('vid6');

// vid2.onclick = function (){
//      vid0.src =  vid2. ;
// }




function changeVideo(videoSrc) {
    const videoSource = document.getElementById('videoSource');
    videoSource.src = videoSrc; // Change the source of the main video
    const mainVideo = document.getElementById('vid0');
    mainVideo.load(); // Load the new video
    mainVideo.play(); // Optionally start playing the new video
    videoSrc.pause();
}
