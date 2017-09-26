function getMoviesData(url, nightmare) {
  return new Promise((resolve, reject) => {
    nightmare
      .goto(url)
      .wait('#navi_top_link_2')
      .evaluate(() => {
        function filterDate(dom, firstSee = true) {
          if (firstSee) {
            const year = dom.querySelector('#read_date_y > option:first-child').value;
            const month = dom.querySelector('#read_date_m > option:first-child').value;
            const day = dom.querySelector('#read_date_d > option:first-child').value;
            return { year, month, day };
          }
          const year = dom.querySelector('select[name=read_date_y] > option:first-child').value;
          const month = dom.querySelector('select[name=read_date_m] > option:first-child').value;
          const day = dom.querySelector('select[name=read_date_d] > option:first-child').value;
          return { year, month, day };
        }

        const title = document.querySelector('#title').innerHTML;
        const firstSeeDate = filterDate(document.querySelector('div.book_edit_area > form:first-child'));
        const dates = Array.from(document.querySelectorAll('div.reread_box > form:first-child')).map(dom => filterDate(dom, false));
        dates.unshift(firstSeeDate);
        return { title, dates };
      })
      .then((urlList) => {
        console.log(urlList);
        resolve(urlList);
      })
      .catch((error) => {
        console.log('getMoviesData error:');
        console.log(error);
        reject();
      });
  });
}

export default getMoviesData;
