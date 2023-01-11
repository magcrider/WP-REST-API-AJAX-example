(function ($) {
  if (rpc_vars.eventStatus === "live") {
    $.ajax({
      url:
        rpc_vars.root +
        "jet-cct/event_attendee_list/?userid=" +
        rpc_vars.userID +
        "&eventid=" +
        rpc_vars.postID,
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("X-WP-Nonce", rpc_vars.nonce);
      },
    }).done(function (response) {
      // console.log(response.length, response);
      if (response.length == 0) {
        $.ajax({
          url: rpc_vars.root + "jet-cct/event_attendee_list/",
          method: "POST",
          beforeSend: function (xhr) {
            xhr.setRequestHeader("X-WP-Nonce", rpc_vars.nonce);
          },
          data: {
            userid: rpc_vars.userID,
            eventid: rpc_vars.postID,
          },
        }).done(function (response) {
          // console.log("CREATED:", response);
        });
      }
    });
  }
})(jQuery);
