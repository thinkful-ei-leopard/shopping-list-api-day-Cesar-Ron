const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ron';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({ name });
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}
/*
    @params updateData will be an OBJECT 
    the object should be passed as {property : value} */
function updateItem(id, updateData) {
  const newData = JSON.stringify( updateData );
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newData
  });
}

export default {
  getItems,
  createItem,
  updateItem
};
