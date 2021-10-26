/**
 * Détermine si le model correspondant à l'id passé est une extension
 *
 * @param {*} models
 * @param {string} odooId
 */
const isExtension = (models, odooId) => {
  if (!odooId) {
    return false
  }

  const model = models.find((m) => m.odooId.toString() === odooId.toString())
  if (!model) {
    return false
  }

  return model.category === 'extension'
}

export default isExtension
