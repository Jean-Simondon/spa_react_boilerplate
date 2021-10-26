import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'

/**
 * Remplace un ou des objets dans un tableau par d'autre en fonction d'une clé
 *
 * @param {*} data
 * @param {*} objs
 * @param {string} key
 */
const replaceByKey = (data, objs, key) => {
  if (!objs) {
    return data
  }

  const dataCopy = cloneDeep(data)
  const objsCopy = cloneDeep(!Array.isArray(objs) ? [objs] : objs)

  for (let i = 0; i < dataCopy.length; i++) {
    const index = objsCopy.findIndex(
      (x) => get(x, key) === get(dataCopy[i], key)
    )
    if (index !== -1) {
      dataCopy[i] = objsCopy[index]
      objsCopy.splice(index, 1)
    }
  }

  return [...dataCopy, ...objsCopy]
}

export default replaceByKey
