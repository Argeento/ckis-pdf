import "./style.scss";
import { PageFlip } from "page-flip";

function calculateA4Dimensions() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const a4Ratio = 1 / 1.414;

  const doublePageRatio = a4Ratio;

  let bookWidth, bookHeight;

  bookHeight = viewportHeight * 0.95;
  bookWidth = bookHeight * doublePageRatio;

  if (bookWidth > viewportWidth * 0.95) {
    bookWidth = viewportWidth * 0.95;
    bookHeight = bookWidth / doublePageRatio;
  }

  return {
    width: Math.floor(bookWidth),
    height: Math.floor(bookHeight),
  };
}

// Initialize PageFlip with calculated dimensions
const dimensions = calculateA4Dimensions();

const pageFlip = new PageFlip(document.getElementById("book"), {
  width: dimensions.width,
  height: dimensions.height,
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));
