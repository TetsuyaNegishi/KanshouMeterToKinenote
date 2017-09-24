import { KANSHOU_METER_URL } from './constants';

function getMyPageUrl(cookies, nightmare) {
  return new Promise((resolve, reject) => {
    nightmare
      .goto(KANSHOU_METER_URL)
      .wait('#navi_top_link_2')
      .evaluate(() => document.querySelector('div.navi_box:nth-of-type(3) > a').href)
      .then((myPageURL) => {
        console.log('getMyPageUrl success');
        resolve(myPageURL);
      })
      .catch(() => {
        console.log('getMyPageUrl error');
        reject();
      });
  });
}

export default getMyPageUrl;
