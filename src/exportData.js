import fetchCookies from './KineNote/fetchCookies';

async function exec() {
  const cookies = await fetchCookies();
  console.log(cookies);
}

exec().then(() => {
  console.log('Fetching Movies Data completed.');
});
