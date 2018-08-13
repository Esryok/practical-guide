// ==UserScript==
// @name         Catherine Foundling
// @namespace    https://practicalguidetoevil.wordpress.com/
// @match        https://practicalguidetoevil.wordpress.com/*
// @version      1.0
// @description  Yes, I am salty
// @author       Esryok
// @grant        none
// @run-at       document-ready
// @downloadUrl  https://raw.githubusercontent.com/Esryok/practical-guide/master/catherine-foundling.user.js
// ==/UserScript==

(function() {
    'use strict';
    var comments = document.getElementsByClassName("comment-body");
    for (var comment of comments) {
        var author = comment.getElementsByClassName("comment-author")[0].innerText;
        var content = comment.getElementsByClassName("comment-content")[0];
        var commentParagraphs = content.getElementsByTagName("p");

        // skip the last one, which is used for comment likes
        for (var i = 0; i < commentParagraphs.length - 1; i++) {
            var paragraph = commentParagraphs[i];
            var text = paragraph.innerText;
            // Some of you actually use "chat" correctly. Only strip out greater forms of Evil.
            text = text.replace(/Chath?e?rine/gi, "Catherine");
            if (author == "daegone823") {
                // the OG monster, there shall be no chat
                text = text.replace(/Chat/g, "Cat");
            }
            paragraph.innerText = text;
        }
    }
})();