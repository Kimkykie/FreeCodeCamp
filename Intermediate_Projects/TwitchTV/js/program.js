//Run Jquery
$(document).ready(function() {
  function showAll() {

    //Initialize empty array to store users
    var following = [];
    //API to check freecodecamp streaming status
    var url = "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";

    $.getJSON(url, function(data1) {
        //Check if freecodecamp ionline or offline
        if (data1.stream === null) {
            $("#fccStatus").html("Free Code Camp is currently offline");
        } else {
            $("#fccStatus").html('Free Code Camp is currently online');
        }
    });
    //API to get users who follow freecodecamp
    var followerUrl = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels";
    //Get users that follow freecodecamp
    $.getJSON(followerUrl, function(data2) {
        for (var i = 0; i < data2.follows.length; i++) {
            //Get display names of users that follow freecodecamp and push the values to following array
            var displayName = data2.follows[i].channel.display_name;
            following.push(displayName);
        }
        //Add non existing users to the following array
        following.push('brunofin');
        following.push('comster404');
        following.push('ESL_SC2');

        //Check for online users
        function showOnline() {
            for (var i = 0; i < following.length; i++) {
                var onlineURL = "https://wind-bow.gomix.me/twitch-api/streams/" + following[i];


                $.getJSON(onlineURL).done(function(data4) {
                    if (data4.stream != null) {
                        var logo = data4.stream.channel.logo;
                        var status = data4.stream.channel.status;
                        var name = data4.stream.channel.display_name;

                        $("#followerInfo").append("<div class='row online'>" + "<div class='col-sm-4'>" +
                            "<img class='img-responsive img-circle' src='" + logo + "'>" + "</div>" +
                            "<div class='col-sm-4'>" + name + "</div>" +
                            "<div class='col-sm-4'>" + status + "</div>" + "</div></div>");
                    }
                });
            }
        }
        showOnline();

        function showOffline() {
            for (var i = 0; i < following.length; i++) {
                (function(i) {
                    var onlineURL = "https://wind-bow.gomix.me/twitch-api/streams/" + following[i];
                    var channelURL = "https://wind-bow.gomix.me/twitch-api/channels/" + following[i];

                    $.getJSON(onlineURL, function(data5) {
                        if (data5.stream == null) {
                            $.getJSON(channelURL, function(data6) {
                                if (data6.display_name != undefined) {
                                    status = "OFFLINE";
                                    logo = data6.logo;
                                    name = data6.display_name;
                                    if (logo === null) {
                                        logo = "https://s27.postimg.org/6787qor5f/no_logo.png";
                                    }
                                    $("#followerInfo").append("<div class='row offline'>" + "<div class='col-sm-4'>" +
                                        "<img class='img-responsive img-circle' src='" + logo + "'>" + "</div>" +
                                        "<div class='col-sm-4'>" + name + "</div>" +
                                        "<div class='col-sm-4'>" + status + "</div>" + "</div></div>");
                                }

                            });
                        }
                    });
                })(i);
            }
        }
        showOffline();
        function showError() {
            //Check the status of users
            for (var i = 0; i < following.length; i++) {
                var url2 = "https://wind-bow.gomix.me/twitch-api/users/" + following[i];

                $.getJSON(url2).done(function(data3) {
                    var logo;
                    var status;
                    var name;
                    //Condition will run if user is unavailable
                    if (data3.error) {
                        logo = "https://s27.postimg.org/6787qor5f/no_logo.png";
                        name = data3.message;
                        status = "User doesn't exist";

                        $("#followerInfo").append("<div class='row error'>" + "<div class='col-sm-4'>" +
                            "<img class='img-responsive img-circle' src='" + logo + "'>" + "</div>" +
                            "<div class='col-sm-4'>" + name + "</div>" +
                            "<div class='col-sm-4'>" + status + "</div>" + "</div></div>");
                    }
                });
            }
        }
        showError();
    });
  }
  showAll();

  $("#allBtn").on("click",function () {
    $(".online").html('');
    $(".offline").html('');
    $(".error").html('');
    $(".online").show();
    $(".offline").show();
    $(".error").show();
      showAll();
    });

  $("#onlineBtn").on("click",function () {
    $(".online").show();
    $(".offline").hide();
    $(".error").hide();
    showOnline();
  });

  $("#offlineBtn").on("click",function () {
    $(".offline").show();
    $(".online").hide();
    $(".error").hide();
      showOffline();
  });
});
