export const setDataToLS = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getDataFromLS = (key: string) => JSON.parse(localStorage.getItem(key))
