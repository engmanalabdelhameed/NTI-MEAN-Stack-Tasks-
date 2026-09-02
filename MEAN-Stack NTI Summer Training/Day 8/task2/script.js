const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
    
xhr.addEventListener("load", () => {
  console.log("[load] event fired. status =", xhr.response);
});

xhr.addEventListener("error", () => {
  console.log("[error] Network problem — request never reached the server.",xhr.statusText );
});

xhr.send();
