import fetchCookies from './KanshouMeter/fetchCookies';
import fetchMoviesUrl from './KanshouMeter/fetchMoviesUrl';
import fetchMoviesDataList from './KanshouMeter/fetchMoviesDataList';

async function exec() {
  const cookies = await fetchCookies();
  const Urls = await fetchMoviesUrl(cookies);
  console.log(Urls);
  const data = await fetchMoviesDataList(cookies, Urls);
  console.log(data);
}

exec().then(() => {
  console.log('Fetching Movies Data completed.');
});
