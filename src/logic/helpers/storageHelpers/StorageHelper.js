const StorageHelper = {
  getStorageType(type) {
    return type === 'local' ? window.localStorage : window.sessionStorage
  },

  get(key, type = 'local') {
    let storage = this.getStorageType(type)
    return JSON.parse(storage.getItem(key))
  },

  set(key, value, type = 'local') {
    let storage = this.getStorageType(type)
    storage.setItem(key, JSON.stringify(value))
  },

  remove(key, type = 'local') {
    let storage = this.getStorageType(type)
    storage.removeItem(key)
  },

  clear(type = 'local') {
    let storage = this.getStorageType(type)
    storage.clear()
  },
}

export default StorageHelper
