var friends= require("../data/friends");

module.exports=function(app){

app.get("/api/friends",function(req,res){
    res.json(friends);
});

app.post("/api/friends",function(req,res){

    var bestMatch={
        name:"",
        photo:"",
        friendDifference:100
    };

    var userData=req.body;
    var userScores=userData.scores;

    var totalDifference;
    // loop threw friends

    for(var i=0;i<friends.length;i++){
        var currentFriend=friends[i];
        totalDifference=0;
        console.log(currentFriend.name)
            //loop threw scores araay index
        for (var j=0;j<currentFriend.scores.length;j++){
            // currentfriendscore = a\friend score array 
            var currentFriendScore=currentFriend.scores[j];
            // user input , whatever number they put in
            var currentUserScore=userScores[j];
            // makes sub from user- friendjs
            totalDifference+=Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
        }
            // must be true if value is 0 it would break,,, score can not be higher then 100
        if(totalDifference<=bestMatch.friendDifference){
            bestMatch.name=currentFriend.name;
            bestMatch.photo=currentFriend.photo;
            bestMatch.friendDifference=totalDifference;

        }
    }
    friends.push(userData);
    res.json(bestMatch);

})
}