import './styles.css';

'use strict';

window.onload = function() {

  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  var addButton = document.querySelector('#add-button');

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }



  function deleteElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
    }
    var storeElement = storeElements.indexOf(element);
    if (storeElement > -1) {
      storeElements.splice(storeElement, 1);
    }
  }


  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addToListButton = document.querySelector('#add-to-list-button');

  function addToListingElements() {
    var newListElement = prompt('input an element you want to add', '');
    if (newListElement !== '') {
      listingElements.push(newListElement);
    }
  }

  var sortButton = document.querySelector('#sort-button');

  function sortElements() {
    storeElements.sort();
  }


  addToListButton.onclick = function() {
    addToListingElements();
    updateUI();
  };



  addButton.onclick = function() {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };



  var deleteButton = document.querySelector('#delete-button');

  deleteButton.onclick = function() {
    var selectedOption = document.querySelector('.app option:checked');
    deleteElements(selectedOption.innerText);
    updateUI();
  };



  sortButton.onclick = function() {
    sortElements();
    updateUI();
  };
};