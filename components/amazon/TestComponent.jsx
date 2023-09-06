import React, { useEffect } from 'react'
const axios = require("axios");
const cheerio = require("cheerio");

const TestComponent = () => {
  const getData = () => {
    const fetchShelves = async () => {
      try {
        const response = await axios.get('https://www.amazon.com/s?crid=36QNR0DBY6M7J&k=shelves&ref=glow_cls&refresh=1&sprefix=s%2Caps%2C309');

        const html = response.data;

        const $ = cheerio.load(html);

        const shelves = [];

        $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
          const shelf = $(el)
          const title = shelf.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
          const image = shelf.find('img.s-image').attr('src')

          const link = shelf.find('a.a-link-normal.a-text-normal').attr('href')

          const reviews = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')

          const stars = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')

          const price = shelf.find('span.a-price > span.a-offscreen').text()


          let element = {
            title,
            image,
            link: `https://www.amazon.com/Never-Enough-Achievement-Culture-Toxic/dp/0593191862/?_encoding=UTF8&_ref=dlx_gate_sd_dcl_tlt_6b896955_dt&content-id=amzn1.sym.81a68cec-8afc-4296-99f7-78cf5ddc15b5&ref_=pd_gw_unk`,
            price,
          }

          if (reviews) {
            element.reviews = reviews
          }

          if (stars) {
            element.stars = stars
          }

          shelves.push(title)
        });

        return shelves;
      } catch (error) {
        throw error;
      }
    };
    fetchShelves().then((shelves) => console.log(shelves));
  }


  return (
    <div>
      <button onClick={() => getData} >click</button>
    </div>
  )
}

export default TestComponent