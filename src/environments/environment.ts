// export const environment = {
//     apiUrl: "http://localhost:8080/api"
// };

const protocol = window.location.protocol;
const hostname = window.location.hostname;
const port = window.location.port || '8080'; // fallback if port not provided

export const environment = {
  apiUrl: `${protocol}//${hostname}:${port}/api`
};
