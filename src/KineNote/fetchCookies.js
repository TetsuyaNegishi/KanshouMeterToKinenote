import Nightmare from 'nightmare';
import { KINENOTE_URL } from './constants';

require('dotenv').config();

export default function () {
  const nightmare = Nightmare({ show: true });
  return new Promise((resolve, reject) => {
    nightmare.goto(`${KINENOTE_URL}/main/public/home/`)
      .evaluate(() => {
        document.querySelector('#input_login_user_name').value = '';
        document.querySelector('#input_login_password').value = '';
      })
      .type('#input_login_user_name', process.env.KINENOTE_EMAIL_ADDRESS)
      .type('#input_login_password', process.env.KINENOTE_PASSWORD)
      .click('input[value="ログイン"]')
      .wait('div.member_display_name_area')
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
