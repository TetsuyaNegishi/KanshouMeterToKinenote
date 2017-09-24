import fetchCookies from './KanshouMeter/fetchCookies';
import fetchMoviesUrl from './KanshouMeter/fetchMoviesUrl';

async function exec() {
  const cookies = await fetchCookies();
  const Urls = await fetchMoviesUrl(cookies);
  console.log(Urls);
}

exec().then(() => {
  console.log('Fetching Movies Data completed.');
});
