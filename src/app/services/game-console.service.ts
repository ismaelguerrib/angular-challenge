import { Injectable } from '@angular/core'
import { GameConsole } from '../game-console.interface'

@Injectable({
  providedIn: 'root'
})
export class GameConsoleService {
  list(): GameConsole[] {
    return [
      {
        name: 'Playstation 4',
        sales2017: 20,
        sales2018: 18,
        averageWeekSales2018: 3,
        averageWeekSales2019: 1.3,
      },
      {
        name: 'X Box One',
        sales2017: 7.62,
        sales2018: 6.96,
        averageWeekSales2018: 4.2,
        averageWeekSales2019: 2.4,
      },
      {
        name: 'Switch',
        sales2017: 0,
        sales2018: 16.33,
        averageWeekSales2018: 1,
        averageWeekSales2019: 2,
      }
    ]
  }
}
