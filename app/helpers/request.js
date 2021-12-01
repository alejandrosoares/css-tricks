export default async function request(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then((json) => cbSuccess(json))
    .catch((error) => {
      let message = error.statusText || `No mesage error`;

      document.getElementById("main").innerHTML = `
            <div class="error">
                <p class="title">A happened one error</p>
                <p>Status: ${error.status}</p>
                <p>Message: ${message}</p>
            </div>
        `;

      document.getElementById("loader").classList.add("d-none");
    });
}
