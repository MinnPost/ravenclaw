/* Ravenclaw JS */

(function() {

  var translations = {
    haveyoureadthecodeofconductanddoyouagreetofollowit: 'conduct',
    othercommentsorquestions: 'comments',
    titleoftalk: 'title',
    youremail: 'email',
    yourname: 'name',
    yourphonenumber: 'phone'
  };

  Tabletop.init({
    key: '18rCcVEVf5Gn2TA65IjncGKDc_TnXOrveuvkFgjTTPz4',
    callback: renderTalks,
    simpleSheet: true
  });

  function renderTalks(talks, tabletop) {

    // Translate
    talks = _.map(talks, function(t, ti) {
      _.each(translations, function(n, o) {
        if (!_.isUndefined(t[o])) {
          t[n] = t[o];
        }
      });

      return t;
    });

    // Ensure conduct is read
    talks = _.filter(talks, function(t, ti) {
      return (t.conduct.toLowerCase() === 'yes');
    });

    // Render template
    $('.talk-list').html(_.template($('#talk-list-template').html(), {
      talks: talks
    }))
  }
})();
