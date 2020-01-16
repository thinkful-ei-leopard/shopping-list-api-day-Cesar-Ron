const items = [];
let error = null;
let hideCheckeditems = false;

const setError = function(error) {
  this.error = error;
};

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function(id, newData){
  const target = this.findById(id); 
  console.log(`target ${target}`);
  Object.assign(target, newData);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  error,
  setError,
  findAndUpdate,
  addItem,
  findAndDelete,
  toggleCheckedFilter
};