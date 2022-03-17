export const updateListItem = (list, newItem) => {
  const index = list.get().findIndex((item) => item.id === newItem.id)

  if (index < 0) return

  list[index].set(newItem)
}

export const deleteListItem = (list, deletedItem) => {
  const index = list.get().findIndex((item) => item.id === deletedItem.id)

  if (index < 0) return

  list[index].set(none)
}

export const removeListItem = (list, removedItemId) => {
  return parseState(list).filter((item) => item.id !== Number(removedItemId))
}

export const getListBasedOnUniqueProperty = (list, property) => {
  return [
    ...new Map(list.map((item) => [item[property], item])).values(),
  ].filter((item) => item[property] !== null)
}

export const sortListBasedOnProperty = (a, b, property, order = 'ASC') => {
  const ASC = order === 'ASC'

  if (a[property] < b[property]) {
    return ASC ? -1 : 1
  }
  if (a[property] > b[property]) {
    return ASC ? 1 : -1
  }
  return 0
}

export const getListOfUniquePropertyValues = (list, property) => {
  return [...new Set(list.map((item) => item[property]))]
}

export const checkExistanceOfPropertyValueInArray = (
  list,
  property,
  valueToCheck
) => {
  return list.some((item) => item[property]?.toLowerCase() === valueToCheck)
}

export const checkOccuranceOfPropertyValueInArray = (
  list,
  property,
  valueToCheck
) => {
  let occurance = 0
  list.forEach((item) => item[property] === valueToCheck && occurance++)
  return occurance
}

export const getIndexByPropertyValue = (list, property, value) => {
  return list.map((item) => item[property]).indexOf(value)
}
