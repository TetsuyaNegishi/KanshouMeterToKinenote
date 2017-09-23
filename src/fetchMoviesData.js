import fetchCookies from './KanshouMeter/fetchCookies';

async function exec() {
  const cookies = await fetchCookies();
  console.log(cookies);
}

exec();
