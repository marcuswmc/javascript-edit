function searchAnime(year) {
  return new Promise((resolve, reject) => {
    const myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.jikan.moe/v4/top/anime')
    myRequest.responseType = 'json' 
    myRequest.send()

    myRequest.onload = function() {
      const animes = myRequest.response.data
      const filteredAnimes = animes.filter((anime) => anime.year === year)
      resolve(filteredAnimes.length === 0 ? `Nenhum anime encontrado para o ano de ${year}` : filteredAnimes)
    }

    myRequest.onerror = function() {
      reject('Erro ao buscar animes')
    }
  })
}

searchAnime(2008)
.then((result) => result.map((anime) => `Título: ${anime.title}`))
.catch((error) => console.error(error))
  
  