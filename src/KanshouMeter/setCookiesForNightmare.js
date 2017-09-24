import { KANSHOU_METER_URL } from './constants';

function setCookiesForNightmare(cookies, nightmare) {
  return new Promise((resolve, reject) => {
    nightmare
      .goto(KANSHOU_METER_URL)
      .cookies.set(cookies)
      .refresh()
      .wait('#navi_top_link_2')
      .then(() => {
        console.log('setCookies success');
        resolve();
      })
      .catch((error) => {
        console.error('setCookies failed:', error);
        reject();
      });
  });
}

export default setCookiesForNightmare;
