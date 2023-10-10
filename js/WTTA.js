import reddit from './redditapi.js'

const flairTypes = [
    "Everybody Sucks",
    "Asshole",
    "Not the A-hole",
    "No A-holes here",
]

var currentFlair = ""
var lastPost
var url = ""

var lastGeneration = 0

// truncate text
function truncateText(text, limit) {
    const shortened = text.indexOf("", limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
  }

document.getElementById("startButton").addEventListener("click", (e) => {
    e.preventDefault();
    let now = new Date().getTime();
    if (now - lastGeneration < 60000) {
        alert(`Please wait ${Math.ceil((lastGeneration + 60000 - now) / 1000)} more seconds before getting a new senario. Sorry. Blame u/spez.`)
        return
    }

    // get search term
    currentFlair = flairTypes[Math.floor(Math.random()*flairTypes.length)]
    const searchTerm = `subreddit:amitheasshole flair:"${currentFlair}"`;
    //get sort
    const sortBy = "top";
    // get limit
    const searchLimit = 100;
    reddit.search(searchTerm, searchLimit, sortBy).then((results) => {
        let output = "";
        // loop through post
        var post = results[Math.floor(Math.random()*results.length)]

        if (!post || post == lastPost) {
            document.getElementById("results").innerHTML = `<p class="post-text" style="font-size: 18px">Sorry. Try Again</p>`
        }

        lastPost = post

        url = post.url
        document.getElementById("answer").innerHTML = `vote!`

        output = `
        <div class="post" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="post-body">
                <h2 class="post-title">${post.title}</h2>
                <h5 class="post-title">This submission was made by u/${post.author}</h5>
                <p class="post-text" style="font-size: 18px">${post.selftext}</p>
            </div>
        </div>
        `;
        lastGeneration = new Date().getTime();
        document.getElementById("results").innerHTML = output;
    });
})
var buttons = document.getElementsByClassName("judgements");
console.log(buttons)

var judge = function() {
    console.log(this)
    if (currentFlair == "") {
        document.getElementById("answer").innerHTML = `start the game first`
        return
    }
    if (this.id == currentFlair) {
        document.getElementById("answer").innerHTML = `you agree with reddit! the general public voted ${currentFlair}<br><a href="${url}" target="_blank">original post</a>`
        return
    }
    document.getElementById("answer").innerHTML = `you disagree with reddit! you voted ${this.id}, but the general public voted ${currentFlair}<br><a href="${url}" target="_blank">original post</a>`
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',judge,false);
}