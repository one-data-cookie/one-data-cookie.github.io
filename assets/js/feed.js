// MIT License
// Copyright (c) 2020 Raghuveer S, Hiran Venugopalan
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
// File: feed.html
// Author Raghuveer S, Hiran Venugopalan
//
// This file contains the markup for the context menu thingy you see when you right
// click on the post titles on the home page.

// feed.js
function filterUsingCategory(selectedCategory) {
    var id = 0;
    var elements = document.querySelectorAll('.note-cards');
    
    elements.forEach(function(element) {
        id++;
        var postDiv = document.getElementById(id);
        if (postDiv) {
            var categoryData = postDiv.getAttribute('categories');
            // Remove quotes if they exist
            categoryData = categoryData.replace(/^"(.*)"$/, '$1');
            
            if (selectedCategory === 'all') {
                postDiv.style.display = 'block';
            } else {
                postDiv.style.display = (categoryData === selectedCategory) ? 'block' : 'none';
            }
        }
    });

    // Update the active button
    var buttons = document.querySelectorAll('button[id]');
    buttons.forEach(function (button) {
        button.classList.remove('is-filtered');
        if (button.getAttribute('id') === selectedCategory) {
            button.classList.add('is-filtered');
        }
    });

    // Update the URL without causing a page reload
    var newURL = window.location.origin + window.location.pathname;
    if (selectedCategory != 'all') {
        newURL += '?category=' + encodeURIComponent(selectedCategory);
    }
    window.history.pushState({ path: newURL }, '', newURL);
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20')) || null;
}

document.addEventListener("DOMContentLoaded", function () {
    var selectedCategory = getURLParameter('category');
    if (!selectedCategory) {
        filterUsingCategory('all');
    } else {
        filterUsingCategory(selectedCategory);
    }
});
