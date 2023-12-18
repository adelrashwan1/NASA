let img = document.querySelector(`.img`);
function plans(plan){
    img.src = plan;
}
let imgs = document.querySelector(`.img1`);
function foods(food){
    imgs.src = food;
}
function addComment() {
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value.trim();

    if (commentText !== '') {
        var commentsList = document.getElementById('comments-list');
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';

        var deleteButton = document.createElement('span');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = 'DELETE';
        deleteButton.onclick = function () {
            commentsList.removeChild(commentDiv);
        };

        commentDiv.innerHTML = commentText;
        commentDiv.appendChild(deleteButton);

        commentsList.appendChild(commentDiv);

        commentInput.value = '';
    }
}