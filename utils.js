function getDiceRollArray(diceCount) {  
    return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6) + 1)  
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => `<div class="placeholder-dice"></div>`).join('')
}

function getPercentage(maxHealth, remainHealth) {
    return Math.floor((remainHealth / maxHealth) * 100)
}


export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}