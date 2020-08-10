/*********************************************************************************
 * WEB222 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Nisrein Hinnawi   Student ID: 130223183    Date: 7/8/2020
 *
 ********************************************************************************/

window.onload = function() {
  if (window.location.hash) {
    var catId = window.location.hash.substring(1);
    setPageTitle(catId);
    loadItems(catId);
  }
};

function setPageTitle(catId) {
  var category = getCategory(catId);
  var title = document.querySelector('#header_h2');
  title.innerHTML = category.catName;
}

function loadItems(catId) {
  var content = document.querySelector('.main_items_content');

  var catItems = items.filter(function(item) {
    return (
      item.category.filter(function(cat) {
        return cat == catId;
      }).length >= 1
    );
  });

  const rowCount = 3;
  var start = 0;
  var end = rowCount;
  while (start <= rowCount) {
    var slice = catItems.slice(start, end);
    var itemsRow = createItemsRow(slice);
    content.appendChild(itemsRow);

    start = end;
    end = end + rowCount;
  }
}

function createItemsRow(items) {
  var row = createRow();
  var len = items.length;
  for (var i = 0; i < len; i++) {
    var card1 = createCard(items[i]);
    row.appendChild(card1);
  }
  return row;
}

function createRow() {
  var row = document.createElement('div');
  row.className = 'row';
  return row;
}

function createCard(item) {
  var column = document.createElement('div');
  column.className = 'item';

  var card = document.createElement('div');
  card.className = 'card';

  var image = createItemImage(item.images[0]);

  image.alt = 0;
  image.addEventListener('click', function() {
    var len = item.images.length;

    var next = (Number(image.alt) + 1) % len;
    image.src = item.images[next];
    image.alt = next;
  });

  var container = document.createElement('div');
  container.appendChild(image);

  card.appendChild(container);
  card.appendChild(createItemDetails(item));

  column.appendChild(card);

  return column;
}

function createItemImage(imageSrc) {
  var cellImage = document.createElement('img');
  cellImage.onerror = function() {
    this.style.display = 'none';
  };
  cellImage.src = imageSrc;
  cellImage.className = 'item_image';

  return cellImage;
}

function createItemDetails(item) {
  var table = document.createElement('table');

  var tblBody = document.createElement('tbody');
  var row1;
  if (item.price > 0) {
    row1 = createTableHeaderRow(item.title, '$' + item.price, 'th_price');
  } else {
    row1 = createTableHeaderRow(item.title, 'FREE!', 'th_price_free');
  }
  var row2 = createTableRow('Description', item.description);
  var row3 = createTableRow('Brand', item.brand);

  var catText = '';
  var len = item.category.length;

  for (var i = 0; i < len; i++) {
    if (i < len - 1) {
      catText += getCategory(item.category[i]).catName + ', ';
    } else {
      catText += getCategory(item.category[i]).catName;
    }
  }

  var row4 = createTableRow('Category', catText);
  var row5 = createTableRow('Condition ', condition[item.condition]);

  tblBody.appendChild(row1);
  tblBody.appendChild(row2);
  tblBody.appendChild(row3);
  tblBody.appendChild(row4);
  tblBody.appendChild(row5);

  table.appendChild(tblBody);

  return table;
}

function getCategory(catId) {
  var category = cats.find(function(cat) {
    return cat.catId == catId;
  });

  return category;
}

function createTableHeaderRow(text1, text2, texts_css) {
  var row = document.createElement('tr');
  var element1 = getThElement(text1);
  var element2 = getThElement(text2);
  element2.className = texts_css;

  row.appendChild(element1);
  row.appendChild(element2);

  return row;
}

function createTableRow(text1, text2) {
  var row = document.createElement('tr');
  var element1 = getTdElement(text1);
  var element2 = getTdElement(text2);

  row.appendChild(element1);
  row.appendChild(element2);

  return row;
}

function getThElement(text) {
  var cell = document.createElement('th');
  var cellText = document.createTextNode(text);
  cell.appendChild(cellText);
  return cell;
}

function getTdElement(text) {
  var cell = document.createElement('td');
  var cellText = document.createTextNode(text);
  cell.appendChild(cellText);
  return cell;
}
