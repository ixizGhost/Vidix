// Tampilkan form upload saat klik tombol +
document.getElementById('floating-upload-btn').addEventListener('click', () => {
    const upload = document.getElementById('upload-section');
    upload.style.display = upload.style.display === 'none' ? 'block' : 'none';
});

// Saat form disubmit
document.getElementById('upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = document.getElementById('video-upload');
    const file = input.files[0];
    
    if (!file) return alert('Pilih video dulu.');
    
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.style.width = '100%';
    video.style.height = '100vh';
    video.style.objectFit = 'cover';
    video.style.scrollSnapAlign = 'start';
    
    document.getElementById('video-feed').appendChild(video);
    
    input.value = ''; // reset input
    document.getElementById('upload-section').style.display = 'none';
});