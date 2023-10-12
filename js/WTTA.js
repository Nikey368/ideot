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
function acronyms(text) {
    let output = text
    if (document.getElementById("autoacronym").checked) {
        output = output.replaceAll(/am i the asshole/gi,"AITA")
        output = output.replaceAll(/would i be the asshole/gi,"WIBTA")
    } else {
        output = output.replaceAll(/AITA[H]{0,1}/gi,"Am I The Asshole")
        output = output.replaceAll(/WIBTA[H]{0,1}/gi,"Would I Be The Asshole")
    }
    return output
  }

function removeDigits(x, n){ return (x-(x%Math.pow(10, n)))/Math.pow(10, n) }

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

        let postDate = new Date(post.created_utc*1000)

        output = `
        <div class="post" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div class="post-body">
                <h2 class="post-title">${acronyms(post.title)}</h2>
                <h5 class="post-title">This submission was made by u/${acronyms(post.author)} on ${postDate.toDateString() + " " +("0" + postDate.getHours()).slice(-2) + ":" + ("0" + postDate.getMinutes()).slice(-2)}</h5>
                <h6 class="post-title">situation id ${post.created_utc}</h6>
                <p class="post-text" style="font-size: 18px">${acronyms(post.selftext)}</p>
            </div>
        </div>
        `;
        lastGeneration = new Date().getTime();
        document.getElementById("results").innerHTML = output;
    });
})
var buttons = document.getElementsByClassName("judgements");

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

document.getElementById("autoacronym").addEventListener('click',function(e) {
    if (e.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    document.getElementById("results").innerHTML = acronyms(document.getElementById("results").innerHTML);
    if (document.getElementById("autoacronym").hasClass("toggleon")) {
        document.getElementById("autoacronym").removeAttr("checked"); //uncheck
        document.getElementById("autoacronym").removeClass("toggleon");  //toggle off
        // do stuff ,,,
    } else {
        document.getElementById("autoacronym").attr("checked","checked");
        document.getElementById("autoacronym").addClass("toggleon");
        // do other stuff
    }
    e.preventDefault();
});

let situationid = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
    let mostrecent = now - 74800000;
    let leastrecent = now - 96400000;
      
    // Output the result in an element with id="demo"
    document.getElementById("situationid").innerHTML = `situation id range = (${removeDigits(leastrecent,3)} to ${removeDigits(mostrecent,3)})`
}, 1000 );
situationid()