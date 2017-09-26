import Nightmare from 'nightmare';
import setCookiesForNightmare from './setCookiesForNightmare';
import getMoviesData from './getMoviesData';

async function fetchMoviesDataList(cookies, moviesUrls) {
  const nightmare = Nightmare({ show: false });
  await setCookiesForNightmare(cookies, nightmare);

  const datas = [];
  /* eslint-disable no-restricted-syntax */
  for (const url of moviesUrls) {
    /* eslint-disable no-await-in-loop */
    const data = await getMoviesData(url, nightmare);
    datas.push(data);
  }
  nightmare.end();
}

export default fetchMoviesDataList;
