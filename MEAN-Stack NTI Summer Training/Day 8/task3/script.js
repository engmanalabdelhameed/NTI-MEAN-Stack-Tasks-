
const URL = "https://jsonplaceholder.typicode.com/posts";
const postForm = document.getElementById("postForm");
const resultContainer = document.getElementById("resultContainer");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titleInput").value.trim();
  const body = document.getElementById("bodyInput").value.trim();

  if (!title || !body) {
    alert("Please fill in both fields");
    return;
  }

  console.log("[1] Form data:", { title, body });

  const xhr = new XMLHttpRequest();
  console.log("[2] Created XMLHttpRequest instance");

  xhr.open("POST", URL, true);
  console.log("[3] open('POST', url) called");

  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8"); // meta data
  console.log("[4] Content-Type header set to JSON");

  xhr.addEventListener("load", () => {
    console.log("[load] status =", xhr.status);

    if (xhr.status >= 200 && xhr.status < 300) {
      const newPost = JSON.parse(xhr.responseText);
      console.log("    Success! Server response:", newPost);

      resultContainer.innerHTML += `
        <div class="card shadow-sm mb-3">
          <div class="card-body">
            <h5 class="card-title">${newPost.title}</h5>
            <p class="card-text">${newPost.body}</p>
            <span class="badge bg-primary">Post ID: ${newPost.id}</span>
          </div>
        </div>
      `;
    } else {
      console.error("    Failed with status:", xhr.status);
      resultContainer.innerHTML =
        '<div class="alert alert-danger">Failed to add post.</div>';
    }
  });

  xhr.addEventListener("error", () => {
    console.error("[error] Network problem");
    resultContainer.innerHTML =
      '<div class="alert alert-danger">Network error.</div>';
  });

  const payload = { title, body, userId: 1 };
  xhr.send(JSON.stringify(payload));
  console.log("[5] send() called with payload:", payload);
});


