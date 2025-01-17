import {
  CategoriesStateProps,
  GenresStateProps,
  NavigatesStateProps
} from '../pages/Home'

type ActiveButtonHome =
  | CategoriesStateProps
  | GenresStateProps
  | NavigatesStateProps

type ActiveButton = ActiveButtonHome

export class Utils {
  static activeButton<ActiveButton>(
    buttons: ActiveButton,
    currentButton: string
  ): ActiveButton {
    let newButtons = {} as ActiveButton

    Object.keys(buttons).map(buttonName => {
      if (buttonName === currentButton) {
        newButtons = {
          ...buttons,
          [currentButton]: true
        }
      } else {
        newButtons = {
          ...buttons,
          [Object.keys(buttons)[0]]: false,
          [buttonName]: false,
          [currentButton]: true
        }
      }
    })

    return newButtons
  }
}
