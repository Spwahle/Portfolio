'use strict';

function Article (rawDataObj) {
  this.projectName = rawDataObj.projectName;
  this.description = rawDataObj.description;
  this.siteURL = rawDataObj.siteURL;
  this.repoURL = rawDataObj.repoUrl;
}


Article.all = [];

Article.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-overlay').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

// REVIEW: There are some other functions that also relate to articles across the board, rather than
// just single instances. Object-oriented programming would call these "class-level" functions,
// that are relevant to the entire "class" of objects that are Articles.

// REVIEW: This function will take the rawData, however it is provided,
// and use it to instantiate all the articles. This code is moved from elsewhere, and
// encapsulated in a simply-named function for clarity.
Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Article.fetchAll = function() {
  if (localStorage.rawData) {

    // When rawData is already in localStorage,
    // we can load it with the .loadAll function above,
    // and then render the index page (using the proper method on the articleView object).
    //TODO: What do we pass in to loadAll()?

//parsing the data to found in rawData that and loading it into local storage
    Article.loadAll(JSON.parse(localStorage.rawData));

    //TODO: What method do we call to render the index page?

    //calling initIndexPage function found in the articleView which loops through articles and appends them to #article
    articleView.initIndexPage()
  } else {

    // TODO: When we don't already have the rawData,
    // we need to retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
    // cache it in localStorage so we can skip the server call next time,
    // then load all the data into Article.all with the .loadAll function above,
    // and then render the index page.

    //grabbing JSON data
    $.getJSON('./data/data.json')
    //creating a then function promise?!?! I don't really understand this
    .then(function(data) {
    //pulling raw data from localStorage and stringify it for use to append

      localStorage.rawData = JSON.stringify(data)

    //instantiate the articles
      Article.loadAll(rawData);
      //appending to #articles again
      articleView.initIndexPage()
    })
  }
}
