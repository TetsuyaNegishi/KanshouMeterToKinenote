import Nightmare from 'nightmare';
import setCookiesForNightmare from './setCookiesForNightmare';
import getMyPageUrl from './getMyPageUrl';

function getUrlListfromVideoList(videolistUrl, nightmare) {
  return new Promise((resolve, reject) => {
    nightmare
      .goto(videolistUrl)
      .wait('#navi_top_link_2')
      .evaluate(() => Array.from(document.querySelectorAll('div.book > a:first-child')).map(a => a.href))
      .then((urlList) => {
        resolve(urlList);
      })
      .catch(() => {
        console.log('getUrlListfromVideoList error');
        console.log(`videolistUrl:${videolistUrl}`);
        reject();
      });
  });
}

async function fetchMoviesUrl(cookies) {
  const nightmare = Nightmare({ show: false });
  await setCookiesForNightmare(cookies, nightmare);
  const myPageURL = await getMyPageUrl(cookies, nightmare);

  let urlList = [];
  let page = 1;
  let newUrlList;
  /* eslint-disable no-await-in-loop */
  do {
    newUrlList = await getUrlListfromVideoList(`${myPageURL}/videolist&p=${page}`, nightmare);
    urlList = [...urlList, ...newUrlList];
    page += 1;
  } while (newUrlList.length !== 0);
  return urlList;
}

export default fetchMoviesUrl;
