'use strict';
import menu from '../menu.json';
import menuItem from '../menuItem.hbs';
import refs from './refs.js';
const menues = menu.reduce((acc, elem) => {
  return (acc += menuItem(elem));
}, '');
refs.menu.insertAdjacentHTML('beforeend', `${menues}`);
