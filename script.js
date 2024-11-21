const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const story = [
    {
        text: "Você está em uma floresta densa. Ouve um barulho à sua esquerda.",
        choices: [
            { text: "Investigar o barulho", next: 1 },
            { text: "Ignorar e seguir em frente", next: 2 }
        ]
    },
    {
        text: "Você se aproxima e encontra um cervo. Ele foge rapidamente.",
        choices: [
            { text: "Tentar seguir o cervo", next: 3 },
            { text: "Voltar para o caminho", next: 2 }
        ]
    },
    {
        text: "Você continua andando e encontra um rio.",
        choices: [
            { text: "Tentar atravessar o rio", next: 4 },
            { text: "Seguir ao longo do rio", next: 5 }
        ]
    },
    {
        text: "Você segue o cervo e descobre uma clareira mágica.",
        choices: [
            { text: "Explorar a clareira", next: 6 },
            { text: "Voltar para a floresta", next: 2 }
        ]
    },
    {
        text: "Você atravessa o rio e se sente refrescado. Mas algo se mexe na água...",
        choices: [
            { text: "Investigar a água", next: 7 },
            { text: "Correr de volta", next: 2 }
        ]
    },
    {
        text: "Você segue o rio e encontra uma vila abandonada.",
        choices: [
            { text: "Explorar a vila", next: 6 },
            { text: "Retornar para a floresta", next: 2 }
        ]
    },
    {
        text: "Você encontrou um tesouro escondido! Parabéns!",
        choices: []
    },
    {
        text: "Você se depara com uma criatura mágica que oferece um desejo. O que você deseja?",
        choices: [
            { text: "Riquezas", next: 6 },
            { text: "Poder", next: 6 }
        ]
    }
];

function startAdventure() {
    showStory(0);
}

function showStory(index) {
    storyElement.innerText = story[index].text;
    choicesElement.innerHTML = '';

    story[index].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

startAdventure();