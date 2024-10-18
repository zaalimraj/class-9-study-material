function toggleFolder(folderId) {
    const folders = document.querySelectorAll('.subject-content');
    folders.forEach(folder => {
        if (folder.id === folderId) {
            folder.style.display = folder.style.display === 'block' ? 'none' : 'block';
        } else {
            folder.style.display = 'none'; // Close other folders
        }
    });
}

function showVideo(videoId) {
    const videoContainer = document.getElementById(videoId);
    if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
        videoContainer.innerHTML = `
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/sample-video-url" frameborder="0" allowfullscreen></iframe>
        `;
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
        videoContainer.innerHTML = ''; // Clear video iframe when hidden
    }
}

window.onload = function() {
    // Set default state: all folders and videos hidden
    const folders = document.querySelectorAll('.subject-content');
    folders.forEach(folder => {
        folder.style.display = 'none';
    });

    const videos = document.querySelectorAll('.video-container');
    videos.forEach(video => {
        video.style.display = 'none';
    });
};
