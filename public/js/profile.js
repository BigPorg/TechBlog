const newFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector("#post-title").value.trim();
    const postContent = document.querySelector("post-content").value.trim();

    if (postTitle && postContent) {
        const response = await fetch("/api/post", {
            method: "POST",
            body: JSON.stringify({ postTitle, postContent }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/profile")
        } else {
            alert("Failed to make blog post.");
        }
    }
};

const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
        const id = event.target.getAttribute("data-id");

        const response = await fetch(`/api/post/${id}`, {
            method: "DELETE",
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to remove blog post.");
        }
    }
};


const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute("data-id") && event.target.id === "update-btn") {
        const id = event.target.getAttribute("data-id");
        const title = document.querySelector(`#title-${id}`).value.trim();
        const content = document.querySelector(`#blog-${id}`).value.trim();
        const response = await fetch(`api/blogs/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.ok) {
            document.location.replace("/profile")
        } else {
            alert("Failed to make update post.");
        }
    }
};

document
    .querySelector("#btnNew")
    .addEventListener("click", newFormHandler);

document
    .querySelector(".delete-list")
    .addEventListener("click", deleteButtonHandler);

document
    .querySelector(".post-list")
    .addEventListener("click", updateButtonHandler);