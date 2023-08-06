import * as cheerio from "cheerio";
import Unirest from "unirest";

import { elemSelector, userAgent } from "../utils/constants.mjs";

// function to scrap amazon product page
export const scrapProductData = async (req, res) => {
  const { productId } = req.params;

  try {
    // creating url for getting product page
    const productURL = `https://www.amazon.com/dp/${productId}`;

    // requesting product page from amazon server using axios
    const response = await Unirest.get(productURL).headers(userAgent);
    const htmlRawPageData = response.body;
    const productDetails = extractDetails(htmlRawPageData);
    productDetails.id = productId;

    res.status(200).json({
      msg: "Amazon scraper route hit.",
      productDetails,
    });
  } catch (error) {
    throw error;
  }
};

// function to extract text details out-of fetched raw html page data
const extractDetails = (rawData) => {
  const details = {
    title: "",
    price: "",
  };

  // loading raw data in cheerio
  const $ = cheerio.load(rawData);

  // extracting text of title element
  $(elemSelector.title).each((i, el) => (details.title = $(el).text().trim()));

  // extracting text of price element
  $(elemSelector.price).each((i, el) => (details.price = $(el).first().text()));

  // returning details
  return details;
};
