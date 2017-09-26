import Nightmare from 'nightmare';
import setCookiesForNightmare from './setCookiesForNightmare';
import getMoviesData from './getMoviesData';

async function fetchMoviesDataList(cookies, moviesUrls) {
  const nightmare = Nightmare({ show: false });
  await setCookiesForNightmare(cookies, nightmare);

  const data = [];
  /* eslint-disable no-restricted-syntax */
  for (const url of moviesUrls) {
    /* eslint-disable no-await-in-loop */
    const movieData = await getMoviesData(url, nightmare);
    data.push(movieData);
  }
  nightmare.end();
  return data;
}

export default fetchMoviesDataList;
