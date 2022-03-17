const urlCleaner = (url) => {
  const regexExp = /[^a-zA-Z0-9 ]/g

  return url.toLowerCase().replaceAll(regexExp, '').replaceAll(' ', '-')
}
