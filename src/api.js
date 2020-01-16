const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Ron';

function listApiFetch(...args) {
  let error = null;
  return fetch(...args)
    .then(resp => {
      if(!resp.ok) { //Valid HTTP response, but non-2XX status
        error = {code: resp.status};
      }
      return resp.json();
    })
    .then(data => {
      if(error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
}
function getItems() {
  return listApiFetch(`${BASE_URL}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({ name });
  return listApiFetch(`${BASE_URL}/items`, {
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
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newData
  });
}

function deleteItem (id) {
  return listApiFetch(BASE_URL + '/items/' + id, {
    method: 'DELETE'
  });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
