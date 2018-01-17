/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {Promise}           The request promise
 */
export function request(url, options) {

  if (options === undefined) {
    options = {}
    options.headers = new Headers()
  }
  options.headers.set('Authorization', sessionStorage.getItem("jwtToken"))

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

export function post(url, data, rawHandler) {

  let token = sessionStorage.getItem("jwtToken")

  let headers = new Headers();
  headers.set('Content-Type', 'application/json')
  if (token) {
    headers.set('Authorization', token)
  }

  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers
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