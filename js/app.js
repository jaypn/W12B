function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId:1
    };
    
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==201){
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4){console.log("loading")}
        else {console.log("Failure")
        }
    }
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts",true);
    ajax.setRequestHeader("content-type","application/json");
    ajax.send(JSON.stringify(tweetData));

}
let tweetButton = document.getElementById("tweet-submit");
tweetButton = addEventListener("click", sendTweet)



function updateTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId:1
    };




let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4){console.log("loading")}
        else {console.log("Failure")
        }
    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1",true);
    ajax.setRequestHeader("content-type","application/json");
    ajax.send(JSON.stringify(tweetData));

}

updateTweet();


function deleteTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId:1
    };




let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4){console.log("loading")}
        else {console.log("Failure")
        }
    }
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1",true);
    ajax.setRequestHeader("content-type","application/json");
    ajax.send();

}

deleteTweet();


function getTweets(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let posts = JSON.parse(this.responseText);
        
            for(i =0; i < posts.length; i++){ 
                let allTweets = document.getElementById("tweets");
                allTweets.innerHTML += "<h4>" + posts[i].title + "</h4>";

                let allTweetsbody = document.getElementById("tweets");
                allTweetsbody.innerHTML += "<p>" +posts[i].body + "</p>";

            }

        } else if(this.readyState !=4){
            console.log("loading");
        }else { 
            console.log("Failure")
        }
    }

    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
    
    ajax.send();
}
getTweets();