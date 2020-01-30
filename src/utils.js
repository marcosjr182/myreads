
export const transformBooks = (books) => {
  return books.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {})
}


export const fixSearchResults = (allBooks, searchResults) => {
  return searchResults.map((result) => {
    const oldBook = allBooks[result.id];
    return {
      ...result,
      shelf: ((oldBook && oldBook.shelf) || 'none')
    }
  })
}
