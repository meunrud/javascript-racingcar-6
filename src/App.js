import { Console, MissionUtils } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constants/gameMessage';



class App {

  async play() {

  }

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAME);
    return playerInput.split(",").map(name => name.trim());
  }

  async printNumberOfTimes(){
    const playerInput = await Console.readLineAsync(GAME_MESSAGE.INPUT_NUMBER_OF_TIMES);
    return playerInput.map(Number);
  }

  belowThanFive(carName) {
    return carName.length <= 5;
  }
  
  isValidPlayerCarName(playerInput) {
    return playerInput.every(name => this.belowThanFive(name));

    }
 //게임 진행
    generateRandomNumbers(){
      return MissionUtils.Random.pickNumber(0,9);
    }
    
    moreThanFour(randomNumber){
      return randomNumber >= 4
    }
  }
  moveBy(){
    const randomNumber = this.generateRandomNumbers();
  if(this.moreThanFour(randomNumber)){
    this.position +=1;
  }  }

 


 

}

export default App;
