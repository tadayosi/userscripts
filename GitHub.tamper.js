// ==UserScript==
// @name         GitHub
// @namespace    https://github.com/tadayosi/userscripts
// @version      1.0
// @description  GitHub extension
// @author       Tadayoshi Sato
// @match        https://github.com/*/issues/*
// @match        https://github.com/*/pull/*
// @match        https://github.com/*/commit/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  var jbossBase = 'https://issues.jboss.org/browse/';
  var jbossRegex = /ENTESB-\d+|ENTMQ-\d+|PATCH-\d+|OSFUSE-\d+/g;
  var jbossLink = '<a target="_blank" href="' + jbossBase + '$&">$&</a>';

  var apacheBase = 'https://issues.apache.org/jira/browse/';
  var apacheRegex = /CAMEL-\d+|CXF-\d+|KARAF-\d+|AMQ-\d+|SM-\d+/g;
  var apacheLink = '<a target="_blank" href="' + apacheBase + '$&">$&</a>';

  var replace = function (i, title) {
    var replaced = title.innerHTML
      .replace(jbossRegex, jbossLink)
      .replace(apacheRegex, apacheLink);
    title.innerHTML = replaced;
    console.log(i, replaced.trim());
  };

  $('.js-issue-title').each(replace);
  $('.commit-title').each(replace);

  /*
  var comments = $('.js-comment-body');
  $.each(comments, function (i, comment) {
    console.log(i, comment.innerText);
  });
  */

})();
