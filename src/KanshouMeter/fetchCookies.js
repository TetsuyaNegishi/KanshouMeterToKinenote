import Nightmare from 'nightmare';
import { KANSHOU_METER_URL } from './constants';

require('dotenv').config();

export default function () {
  const nightmare = Nightmare();
  return new Promise((resolve, reject) => {
    nightmare.goto(`${KANSHOU_METER_URL}/login`)
      .type('input[name="mail"]', process.env.KANSHOU_METER_EMAIL_ADDRESS)
      .type('input[name="password"]', process.env.KANSHOU_METER_PASSWORD)
      .click('input[value=" ロ グ イ ン "]')
      .wait('#navi_top_link_2')
      .cookies.get()
      .end()
      .then((cookies) => {
        console.log('Login success');
        resolve(cookies);
      })
      .catch((error) => {
        console.error('Login failed:', error);
        reject();
      });
  });
}
