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
  setOrderNumberVisibilit('hidden');
  initAboutSection();
  loadCities();
};

function initAboutSection() {
  var question = document.querySelector('#contact_question');
  question.addEventListener('click', function() {
    setOrderNumberVisibilit('hidden');
  });

  var comment = document.querySelector('#contact_comment');
  comment.addEventListener('click', function() {
    setOrderNumberVisibilit('hidden');
  });

  var issue = document.querySelector('#contact_order_issue');
  issue.addEventListener('click', function() {
    setOrderNumberVisibilit('visible');
  });
}

function setOrderNumberVisibilit(visibility) {
  document.querySelector('#order_numner_container').style.visibility = visibility;
}

function loadCities() {
  var datalist = document.querySelector('.list_of_cities');

  for (var i = 0; i < cities.length; i++) {
    var option = createOption(cities[i]);
    datalist.appendChild(option);
  }
}

function createOption(city) {
  var option = document.createElement('option');
  option.value = city.city;
  return option;
}

function validate() {
  var message = '';
  var isValidNameResult = isValidName();
  var isEmailEmptyResult = isEmailEmpty();
  var isValidEmailResult = isValidEmail();
  var isEmptyPostalCodeResult = isEmptyPostalCode();
  var isValidCityResult = isValidCity();
  var isValidPostalCodeResult = isValidPostalCode();
  var isValidOrderNumberResult = isValidOrderNumber() || !isOrderNumberVisible();
  var isValidMessageResult = isValidMessage();

  if (!isValidNameResult) message += '- Name field cannot be empty\n';

  if (isEmailEmptyResult) message += '- Email field cannot be empty\n';
  else if (!isValidEmailResult)
    message += '- Email must be in a valid format i.e. person@sample.com\n';

  if (!isValidCityResult) message += '- City field cannot be empty\n';

  if (isEmptyPostalCodeResult) message += '- Postal code field cannot be empty\n';
  else if (!isValidPostalCodeResult) message += '- Enter a valid postal code i.e. L1P 0C2\n';

  if (!isValidOrderNumberResult) message += '- Order Number field cannot be empty\n';

  if (!isValidMessageResult) message += '- Message field cannot be empty\n';

  if (isEmptyString(message) == false) {
    showErrorMessage(message);
    return false;
  }

  return true;
}

function isValidName() {
  var name = document.getElementById('name').value;
  return !isEmptyString(name);
}

function isEmailEmpty() {
  var email = document.getElementById('email').value;
  return isEmptyString(email);
}

function isValidEmail() {
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var name = document.getElementById('email').value;
  var result = emailRegex.test(name);
  return result;
}

function isValidCity() {
  var city = document.getElementById('city').value;
  return !isEmptyString(city);
}

function isEmptyPostalCode() {
  var postalCode = document.getElementById('postal_code').value;
  return isEmptyString(postalCode);
}

function isValidPostalCode() {
  const postalRegex = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[- ]{0,1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
  var postalCode = document.getElementById('postal_code').value;
  var postalResult = postalRegex.test(postalCode);
  return postalResult;
}

function isValidOrderNumber() {
  var orderNumber = document.querySelector('#order_number').value;
  return !isEmptyString(orderNumber);
}

function isValidMessage() {
  var message = document.querySelector('#message').value;
  return !isEmptyString(message);
}

function isEmptyString(str) {
  if (!str || 0 === str.trim().length) {
    return true;
  }
  return false;
}

function isOrderNumberVisible() {
  return document.querySelector('#order_numner_container').style.visibility == 'visible';
}

function showErrorMessage(text) {
  alert(text);
}
