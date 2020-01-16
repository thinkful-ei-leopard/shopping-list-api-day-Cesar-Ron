import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from './api';
import store from './store';

const main = function () {

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

    
  shoppingList.bindEventListeners();
  shoppingList.render();


  /* Even though thiscall runs first, since its Asynchronous, it actually
   gets output after the api.getItems() call at the bottom of the page (not the one inside this then block).
   This is because they are both Asynchronous, and the api.getItems(); call (ONE GET) gets resolved faster 
   than our api.createItems(api.getItems) which is a POST and a GET */
  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });

  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(`GET ITEMS ${res}`));
};



$(main);