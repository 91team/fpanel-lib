const formatSubControllerName: (
  parentControllerName: string,
  controllerName: string
) => string = (parentControllerName, controllerName) =>
  `${parentControllerName}.${controllerName}`

const parseSubControllersNames: (
  subControllerName: string
) => {
  controllerName: string
  subControllersNames: string[]
} = subControllerName => {
  const pathArray = subControllerName.split('.')
  const controllerName = pathArray.shift()

  return {
    controllerName,
    subControllersNames: pathArray.reduce(
      (prev, cur) => [
        ...prev,
        `${
          prev.length ? `${prev[prev.length - 1]}.` : `${controllerName}.`
        }${cur}`,
      ],
      []
    ),
  }
}

export { formatSubControllerName, parseSubControllersNames }
