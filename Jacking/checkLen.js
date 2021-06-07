// check the character lenght and provide feedback on limited character count used
var tweet = prompt("Enter your tweet: ");

var TWEET_CHAR = 280;
var tweetCount = tweet.length;
var unusedChars = (TWEET_CHAR - tweetCount);

if(tweetCount > TWEET_CHAR ) {
    unusedChars = unusedChars * -1;  // retrun a positive number
    alert("Your tweet contained " + tweetCount + " characters. You have " + unusedChars + " to many.");
}
else {
    alert("Your tweet contained " + tweetCount + " characters. You have " + unusedChars + " left.");
}
