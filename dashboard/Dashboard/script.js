const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

// Dados para os diferentes períodos
const data = {
    daily: {
        work: { current: "32hrs", previous: "Last Day - 36hrs" },
        play: { current: "10hrs", previous: "Last Day - 9hrs" },
        study: { current: "4hrs", previous: "Last Day - 7hrs" },
        exercise: { current: "4hrs", previous: "Last Day - 5hrs" },
        social: { current: "5hrs", previous: "Last Day - 10hrs" },
        selfCare: { current: "2hrs", previous: "Last Day - 2hrs" },
    },
    weekly: {
        work: { current: "40hrs", previous: "Last Week - 36hrs" },
        play: { current: "15hrs", previous: "Last Week - 9hrs" },
        study: { current: "10hrs", previous: "Last Week - 7hrs" },
        exercise: { current: "5hrs", previous: "Last Week - 5hrs" },
        social: { current: "8hrs", previous: "Last Week - 10hrs" },
        selfCare: { current: "7hrs", previous: "Last Week - 2hrs" },
    },
    monthly: {
        work: { current: "160hrs", previous: "Last Month - 140hrs" },
        play: { current: "60hrs", previous: "Last Month - 50hrs" },
        study: { current: "40hrs", previous: "Last Month - 30hrs" },
        exercise: { current: "20hrs", previous: "Last Month - 15hrs" },
        social: { current: "30hrs", previous: "Last Month - 20hrs" },
        selfCare: { current: "25hrs", previous: "Last Month - 10hrs" },
    },
};

function removeAtivo() {
    daily.classList.remove('ativo');
    weekly.classList.remove('ativo');
    monthly.classList.remove('ativo');
}

function updateData(period) {
    // Atualizar os valores na tela
    for (const activity in data[period]) {
        const className = activity === 'selfCare' ? 'self-care' : activity; 
        const currentElement = document.querySelector(`.${className} .item-tempo h1`);
        const previousElement = document.querySelector(`.${className} .item-tempo span`);
        
        if (currentElement && previousElement) {
            currentElement.innerHTML = data[period][activity].current;
            previousElement.innerHTML = data[period][activity].previous;
        }
    }
}

daily.addEventListener('click', () => {
    removeAtivo();
    daily.classList.add('ativo');
    updateData('daily');
});

weekly.addEventListener('click', () => {
    removeAtivo();
    weekly.classList.add('ativo');
    updateData('weekly');
});

monthly.addEventListener('click', () => {
    removeAtivo();
    monthly.classList.add('ativo');
    updateData('monthly');
});
