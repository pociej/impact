Methods({
  'createArticle': function(article) {
    console.log("INSIDE OF METHOD CREATE ARTICLE");
    console.log("ARTICLE:",article);
    if(Permissions().deny('createArticle')) {
      throw 'You are not allowed to create articles';
    }
    return Articles.insert(article);
  }
});


// Functions({

//   'createArticle': function(callback, article) {
//     if(Permissions().deny('createArticle')) {
//       callback('You are not allowed to create articles');
//       return;
//     }
//     callback(false, Articles.insert(article));
//     return;
//   },

// });

