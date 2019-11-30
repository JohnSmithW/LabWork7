'use strict';


import './styles.css';

import './lodash.min.js';


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

    var storeSelectHTML = _.template(' <select size="10" class="store-select">\
    <% storeItems.forEach(function(item) { %>\
      <option><%-item%></option>\
    <% }); %>\
  </select>')({
      storeItems: storeElements
    });

    var listingSelectHTML = _.template(' <select size="10" class="listing-select">\
    <% listingItems.forEach(function(item) { %>\
      <option><%-item%></option>\
    <% }); %>\
  </select>')({
      listingItems: listingElements
    });

    storeSelect.innerHTML = storeSelectHTML;
    listingSelect.innerHTML = listingSelectHTML;
  }

  updateUI();



  var addToListButton = document.querySelector('#add-to-list-button');

  function addToListingElements() {
    var newListElement = window.prompt('input an element you want to add', '');
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