import fetchCookies from './KanshouMeter/fetchCookies';
import fetchMoviesUrl from './KanshouMeter/fetchMoviesUrl';
import fetchMoviesDataList from './KanshouMeter/fetchMoviesDataList';

const fs = require('fs');

async function exec() {
  const cookies = await fetchCookies();
  const Urls = await fetchMoviesUrl(cookies);
  console.log(Urls);
  const data = await fetchMoviesDataList(cookies, Urls);
  console.log(data);

  fs.writeFileSync('moviesData.json', JSON.stringify(data, null, '    '));
}

exec().then(() => {
  console.log('Fetching Movies Data completed.');
});
