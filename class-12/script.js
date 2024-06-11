const getAnimes = async (year) => {
  const response = await fetch('https://api.jikan.moe/v4/top/anime')
  const data = await response.json()
  const filteredAnimes = data.data.filter((anime) => anime.year === year)
  filteredAnimes.length === 0 
  ? console.log(`Nenhum anime encontrado para o ano de ${year}`) 
  : filteredAnimes.map((anime) => console.log(anime.title, anime.year));

}

getAnimes(2008)
