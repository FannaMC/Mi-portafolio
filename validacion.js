//Haz tú validación en javascript acá
document.querySelector('form')
  .addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries (
      new FormData(e.target)
    )
  })