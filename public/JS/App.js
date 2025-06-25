let username;

do {
    username = prompt("enter your name");
} while (!username);

const textarea = document.querySelector("#textarea");
const submitbtn = document.querySelector("#submitbtn");
// Fix selector to select the existing comment-list div
const comment_box = document.querySelector(".comment-list");

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let comment = textarea.value;

    if (!comment) {
        return
    }

    postcomment(comment);
    // Clear textarea after posting
    textarea.value = '';
})

function postcomment(comment) {
    let data = {
        username: username,
        comment: comment,
        time : Date.now()
    }
    appendTo(data);
}

function appendTo(data) {
    // Create a new comment-box div and append to existing comment-list
    let markup = `<div class="comment-box">
                        <div class="comment-author fw-bold">${data.username}</div>
                        <div class="comment-text">
                            ${data.comment}
                        </div>
                        <div class="comment-meta text-muted mt-2">
                            <i class="bi bi-clock"></i> ${time}
                        </div>
                    </div>`;
    comment_box.innerHTML += markup; 
}