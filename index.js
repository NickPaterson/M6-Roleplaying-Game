import characterData from '/data.js'
import Character from '/Character.js'

const attackBtn = document.getElementById('attack-button')
attackBtn.addEventListener('click', attack)

let monstersArray = ['orc', 'demon', 'goblin']

function getNewMonster() {
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
   wizard.setDiceHtml()
   monster.setDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()

if(wizard.dead){
   endGame()
  }
  else if(monster.dead){
      if(monstersArray.length > 0){
         attackBtn.disabled = true
         attackBtn.style.background = '#ccc'
          setTimeout(()=>{
              monster = getNewMonster()
              render()
              attackBtn.disabled = false
              attackBtn.style.background = '#fcc02a'
          },1500)
      }
      else {
         endGame()
      }
  }
}


function endGame() {
   attackBtn.disabled = true
   attackBtn.style.background = '#ccc'
   const endMessage = wizard.health === 0 && monster.health === 0 ? 
      "No victors - all creatures are dead" :
      wizard.health > 0 ? "The Wizard Wins" :
      `The ${monster.name} is Victorious`
   const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
   setTimeout(()=>{
      document.body.innerHTML = `
          <div class="end-game">
              <h2>Game Over</h2> 
              <h3>${endMessage}</h3>
              <p class="end-emoji">${endEmoji}</p>
          </div>
          `
  }, 1500)
}
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster() 


render()



