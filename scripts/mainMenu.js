document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.opt');
    const sound = document.getElementById('selection-sound');

    options.forEach(option => {
        option.addEventListener('mouseenter', () => {
            option.querySelector('.pointer').style.display = 'block';
            sound.currentTime = 0;
            sound.play();
        });

        option.addEventListener('mouseleave', () => {
            option.querySelector('.pointer').style.display = 'none';
        });
    });

    const playButton = document.querySelector('.play');
    const closeButton = document.querySelector('.close-save-loader');
    const saveLoader = document.querySelector('.save-loader');

    playButton.addEventListener('click', () => {
        saveLoader.classList.add('show');
    });

    closeButton.addEventListener('click', () => {
        saveLoader.classList.remove('show');
    });
});
