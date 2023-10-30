import { Console, MissionUtils } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constants/gameMessage.js';
import Car from './car.js';
import Game from './game.js';

class App {
  async play() {
    const playerNames = await this.printGameMessage();
    const times = await this.printNumberOfTimes();

    const cars = playerNames.map((name) => new Car(name));
    const racingGame = new Game(cars);
    Console.print('실행 결과');

    racingGame.race(times);

    const winners = racingGame.getWinners();
    Console.print(winners);
  }

  async printNumberOfTimes() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_NUMBER_OF_TIMES,
    );
    const numberOfTimes = playerInput.split('').map(Number);
    return numberOfTimes[0];
  }

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_CAR_NAME,
    );
    const playerCarName = this.toArray(playerInput);
    return playerCarName;
  }

  toArray(input) {
    this.input = input;
    if (!this.includeSemiColon(input)) {
      throw new Error('[ERROR] 이름은 쉼표로 구분되어야 합니다.');
    }
    const names = input.split(',').map((name) => name.trim());
    if (!this.isValidNameFormat(names)) {
      throw new Error('[ERROR] 이름은 5자를 넘을 수 없습니다.');
    }
    return names;
  }

  belowThanFive(carName) {
    this.carName = [];
    for (let i = 0; i < carName.length; i++) {
      if (carName[i].length > 5) {
        throw new Error('[ERROR] 이름은 5자를 넘을 수 없습니다.  ');
      }
    }
  }

  isValidNameFormat(names) {
    return names.every((name) => name.length <= 5);
  }

  includeSemiColon(input) {
    return input.includes(',');
  }
}

const app = new App();
app.play();

export default App;
