import { Console } from '@woowacourse/mission-utils';

const INPUT_CAR_NAME =
  '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
const NUMBER_OF_TIMES = "시도할 횟수는 몇 회인가요?"

class App {
  async play() {
    this.printGameMessage();
  }

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(INPUT_CAR_NAME);
    return playerInput.split(",").map(name => name.trim());
  }

  async printNumberOfTimes(){
    const playerInput = await Console.readLineAsync(NUMBER_OF_TIMES);
    return playerInput.map(Number);
  }

  belowThanFive(carName) {
    return carName.length <= 5;
  }
  
  isValidPlayerCarName(playerInput) {
    return playerInput.every(name => this.belowThanFive(name));

    }
  }


}

export default App;
