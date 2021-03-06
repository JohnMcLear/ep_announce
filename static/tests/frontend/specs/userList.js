describe('test the user list updates when users join/update or leave', function () {
  before(function (done) {
    helper.newPad({
      padPrefs: {'ep_announce-enabled': true},
      cb() {
        helper.waitFor(() => {
          chrome$ = helper.padChrome$;
          return chrome$ && chrome$('#ep_announce-enabled').length === 1;
        }, 1000).done(done);
      },
    });
    this.timeout(60000);
  });

  it('updates the user list on user join/update', function (done) {
    const chrome$ = helper.padChrome$;

    chrome$.window.ep_announce.updateUserIdList = done;

    chrome$.window.ep_announce.userJoinOrUpdate(null, {userInfo: {userId: 1000}}, () => {});
  });

  it('updates the user list one user leave', function (done) {
    const chrome$ = helper.padChrome$;

    chrome$.window.ep_announce.updateUserIdList = done;

    chrome$.window.ep_announce.userLeave(null, {userInfo: {userId: 1000}}, () => {});
  });
});
