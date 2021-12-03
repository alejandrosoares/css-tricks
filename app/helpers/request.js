import showLoader from "./loader.js";

function messageError(error){
  /*
    Show message error if happened error in request
    @param: object
  */
 
  let message = error.statusText || `No message error`;

  document.getElementById("main").innerHTML = `
        <div class="error">
            <p class="title">A happened one error</p>
            <p>Status: ${error.status}</p>
            <p>Message: ${message}</p>
        </div>
    `;

 showLoader(false);
}

export default async function request(props){
  /*
    Send request
    @param: object - with url and call back function.
  */

  let { url, cbSuccess, options } = props;

  await fetch(url, options)
    .then( response =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then( json => cbSuccess(json) )
    .catch( error => messageError(error));
}
