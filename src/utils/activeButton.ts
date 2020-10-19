import { CategoriesProps, GenresProps, NavigatesProps } from '../pages/Home'

type ActiveButtonHome = CategoriesProps | GenresProps | NavigatesProps

type ActiveButton = ActiveButtonHome

export function activeButton<ActiveButton>(
  buttons: ActiveButton,
  currentButton: string
): ActiveButton {
  let filterButtons = {} as ActiveButton

  Object.keys(buttons).map(buttonName => {
    if (buttonName === currentButton) {
      filterButtons = {
        ...buttons,
        [currentButton]: true
      }
    } else {
      filterButtons = {
        ...buttons,
        all: false,
        [buttonName]: false,
        [currentButton]: true
      }
    }
  })

  return filterButtons
}
