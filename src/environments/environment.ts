// export const environment = {
//     apiUrl: "http://localhost:8080/api"
// };

const protocol = window.location.protocol;
const hostname = window.location.hostname;
let port;

if (port != null) {
    port = ':' + window.location.port;
}


export const environment = {
  apiUrl: `${protocol}//${hostname}${port}/api`
};
