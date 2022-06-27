import * as date from '@/js/date'
import '@/js/addPrototype'
import isEmpty from 'lodash/isEmpty'
import * as modal from '@/js/modal'
import * as storage from '@/js/storage'
import {
  loadId,
  loadStorage,
  removeId,
  removeStorage,
  saveId,
  saveStorage,
} from '@/js/storage'

const util = {
  randomString: (maxLength = 11) => {
    return Math.random()
      .toString(36)
      .substring(2, maxLength + 2)
  },
  isEmpty,
}

export default (app, inject) => {
  const move = async (url, params = null, type) => {
    const { push, replace } = app.$router
    const moveFn = type === 'replace' ? replace : push
    const urlType = url.includes('/') ? 'path' : 'name'
    await moveFn({ [urlType]: url }, params)
  }

  inject('move', move)
  inject('date', date)
  inject('util', util)
  inject('alert', modal.alert)
  inject('confirm', modal.confirm)
  inject('prompt', modal.prompt)
  inject('saveStorage', storage.saveStorage)
  inject('loadStorage', storage.loadStorage)
  inject('removeStorage', storage.removeStorage)
  inject('saveId', storage.saveId)
  inject('loadId', storage.loadId)
  inject('removeId', storage.removeId)
}
