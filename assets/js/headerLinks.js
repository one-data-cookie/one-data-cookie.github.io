  // Based on https://remarkablemark.org/blog/2020/04/04/jekyll-heading-anchor-links/#example
  
document
  .querySelector(".note-page-section") // Selector for the post body
  .querySelectorAll("h1, h2, h3, h4, h5, h6")
  .forEach(function (heading) {
    if (heading.id) {
      heading.innerHTML =
        '<a href="#' + heading.id + '">' + heading.innerText + "</a>";
      heading.innerHTML += '<span class="anchor-icon">#</span>';
    }
  });
