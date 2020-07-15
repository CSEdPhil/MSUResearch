'use strict';

var researchLinks = document.getElementsByClassName('gs_rt');
// build collection of link ids
var linkIDs = [];
var i = 0;
for (i = 0; i < researchLinks.length; i++) {
	linkIDs.push(researchLinks[i].getElementsByTagName('a')[0].id);
}
var linkHref = '';
for (i = 0; i < linkIDs.length; i++) {
	linkHref = document.getElementById(linkIDs[i]).href;
	var url1 = linkHref.substr(0,linkHref.indexOf('/',8));
	var url2 = linkHref.substr(linkHref.indexOf('/',8));
	var url3 = url1.concat('.proxy2.cl.msu.edu',url2);
	document.getElementById(linkIDs[i]).href = url3;
}