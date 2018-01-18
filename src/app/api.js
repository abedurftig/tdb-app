function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

function getHeaders() {
  let token = sessionStorage.getItem("jwtToken")
  let headers = new Headers();
  headers.set('Content-Type', 'application/json')
  if (token) {
    headers.set('Authorization', token)
  }
  return headers
}

export function request(url) {

  let options = {}
  options.headers = getHeaders()

  return new Promise((resolve, reject) => {
    fetch(process.env.API_URL + "/" + url, options)
      .then(parseJSON)
      .then(response => {
        if (response.ok || response.status === 201) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject(response.json.meta.error);
      })
      .catch((error) => reject({
        networkError: error.message,
      }));
  });
}

export function del(url) {
  let options = {
    method: "DELETE",
    headers: getHeaders()
  } 
  return new Promise((resolve, reject) => {
    fetch(process.env.API_URL + "/" + url, options)
    // .then(parseJSON)
    .then(response => {
      if (response.ok) {
        return resolve(response);
      }
      // extract the error from the server's json
      return reject(response.json.meta.error);
    })
    .catch((error) => reject({
      networkError: error.message,
    }))
  })
}

export function post(url, data, rawHandler) {

  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: getHeaders()
  } 

  return new Promise((resolve, reject) => {
    fetch(process.env.API_URL + "/" + url, options)
      .then(rawResponse => {
        if (rawHandler) {
          rawHandler(rawResponse)
        }
        return parseJSON(rawResponse)
      })
      .then(response => {
        if (response.ok || response.status === 201) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject(response.json.meta.error);
      })
      .catch((error) => reject({
        networkError: error.message,
      }))
  })
}