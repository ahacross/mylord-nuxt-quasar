export const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const loadStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
export const removeStorage = (key) => {
  return localStorage.removeItem(key)
}
export const saveId = (id) => {
  saveStorage('mid', id)
}
export const loadId = () => {
  return loadStorage('mid')
}
export const removeId = () => {
  removeStorage('mid')
}
