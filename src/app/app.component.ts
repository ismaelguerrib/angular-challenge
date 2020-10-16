import { Component } from '@angular/core'
import { GameConsole } from './game-console.interface'
import { GameConsoleService } from './services/game-console.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular Challenge'
  timesMoreFun = 4

  gameConsoles: GameConsole[] = this.gameConsoleService.list()
  mostSoldGameConsole: GameConsole
  lessSoldGameConsole: GameConsole


  constructor(private gameConsoleService: GameConsoleService) {
    let mostSoldGameConsole = null;
    let lessSoldGameConsole = null;
    var gameConsole1 = [this.gameConsoles[0].name, this.gameConsoles[0].sales2017 + this.gameConsoles[0].sales2018];
    var gameConsole2 = [this.gameConsoles[1].name, this.gameConsoles[1].sales2017 + this.gameConsoles[1].sales2018];
    var gameConsole3 = [this.gameConsoles[2].name, this.gameConsoles[2].sales2017 + this.gameConsoles[2].sales2018];


    function sortByMostSold() {
      if (gameConsole1.slice(1) > gameConsole2.slice(1) && gameConsole1.slice(1) > gameConsole3.slice(1))
        mostSoldGameConsole = gameConsole1[0];

      else if (gameConsole2.slice(1) > gameConsole1.slice(1) && gameConsole2.slice(1) > gameConsole3.slice(1))
        mostSoldGameConsole = gameConsole2[0];

      else mostSoldGameConsole = gameConsole3[0];
    }
    sortByMostSold()
    console.log(mostSoldGameConsole)

    function sortByLessSold() {
      if (gameConsole1.slice(1) < gameConsole2.slice(1) && gameConsole1.slice(1) < gameConsole3.slice(1))
        lessSoldGameConsole = gameConsole1[0];

      else if (gameConsole2.slice(1) < gameConsole1.slice(1) && gameConsole2.slice(1) < gameConsole3.slice(1))
        lessSoldGameConsole = gameConsole2[0];

      else mostSoldGameConsole = gameConsole3[0];
    }
    sortByLessSold()
    console.log(lessSoldGameConsole)
  }

}
