const container = document.querySelector('.main-container');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const buttonContainer = document.querySelector('.button-container');

const sounds = {
    ye: new Howl({ src: ['sound/yeah-boy.mp3'] }),
    wet: new Howl({ src: ['sound/wet-fart.mp3'] }),
    ch: new Howl({ src: ['sound/chipmunks-hehehe.mp3'] }),
    qu: new Howl({ src: ['sound/quack.mp3'] }),
    ce: new Howl({ src: ['sound/censor-sound.mp3'] }),
    th: new Howl({ src: ['sound/thunder.mp3'] }),
    sm: new Howl({ src: ['sound/small-fart.mp3'] }),
    lm: new Howl({ src: ['sound/laughing-man.mp3'] }),
    gr: new Howl({ src: ['sound/guitar-riff.mp3'] }),
    nn: new Howl({ src: ['sound/nani.mp3'] }),
    omg: new Howl({ src: ['sound/ohmygod.mp3'] }),
    fi: new Howl({ src: ['sound/fight.mp3'] }),
};

const originalLabels = {
    ye: 'Yeah Boy',
    wet: 'Wet Fart',
    ch: 'Chipmunks',
    qu: 'Quack',
    ce: 'Censor',
    th: 'Thunder',
    sm: 'Quick Fart',
    lm: 'Laughting Man',
    gr: 'Guitar Riff',
    nn: 'Nani',
    omg: 'Oh My God',
    fi: 'Fight',
};

function filterAndDisplayElements() {
    const searchTerm = searchInput.value.toLowerCase();
    const buttonContainer = document.querySelector('.button-container');

    buttonContainer.innerHTML = '';

    for (const key in sounds) {
        const shouldDisplay = searchTerm === '' || key.includes(searchTerm);

        if (shouldDisplay) {
            const label = originalLabels[key];

            const newElement = `
                <div class="col">
                    <button class="playSound btn w-100 btn-outline-info text-light" style="visibility: visible;" data-sound="${key}" value="${key}" type="button">
                        ${label}
                    </button>
                </div>
            `;
            buttonContainer.insertAdjacentHTML('beforeend', newElement);
        }
    }
}

searchInput.addEventListener('input', filterAndDisplayElements);

container.addEventListener('click', function (event) {
    if (event.target.classList.contains('playSound')) {
        const soundKey = event.target.value;
        if (sounds[soundKey]) {
            sounds[soundKey].play();
        } else {
            alert("Something went wrong!");
        }
    }
});

searchButton.addEventListener('click', () => {
    filterAndDisplayElements();
});
