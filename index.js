var recipes - {}

function updateObjectWithKeyAndValue (Object, key, value) {
  return object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(oobject, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj
}