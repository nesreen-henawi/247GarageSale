/*********************************************************************************
 * WEB222 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Nisrein Hinnawi   Student ID: 130223183    Date: 7/8/2020
 *
 ********************************************************************************/

/* Add any JavaScript you need to this file. */

window.onload = function() {
  loadCategories();
};
/**
 * load the main categories of the garage items
 */
function loadCategories() {
  var content = document.querySelector('.main_cats_content');
  var row1 = createRow();
  var row2 = createRow();
  for (var i = 0; i <= cats.length; i++) {
    var card = createCard(cats[i]);
    if (i < 3) {
      row1.appendChild(card);
      content.appendChild(row1);
    } else if (i >= 3 && i < 6) {
      row2.appendChild(card);
      content.appendChild(row2);
    }
  }
}

function createCard(catergory) {
  var column = document.createElement('div');
  column.className = 'column';

  var card = document.createElement('div');
  card.className = 'card';
  var image = createImage(catergory.image);

  var ref = createHref('browse.html#' + catergory.catId);

  card.appendChild(image);
  card.appendChild(createCatHeader(catergory.catName));

  ref.appendChild(card);

  column.appendChild(ref);

  return column;
}

function createCatHeader(text) {
  var header = document.createElement('h3');
  var headerText = document.createTextNode(text);
  header.appendChild(headerText);
  return header;
}

function createRow() {
  var row = document.createElement('div');
  row.className = 'row';
  return row;
}

function createImage(imageSrc) {
  var cellImage = document.createElement('img');
  cellImage.onerror = function() {
    this.style.display = 'none';
  };
  cellImage.src = imageSrc;
  cellImage.className = 'cat_image';

  return cellImage;
}

function createHref(address) {
  var ref = document.createElement('a');
  ref.href = address;

  return ref;
}
