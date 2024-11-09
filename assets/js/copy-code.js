// Based on https://www.aleksandrhovhannisyan.com/blog/jekyll-copy-to-clipboard/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre").forEach(function (preBlock) {
    // Create a button element
    var button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    // Add click event listener to the button
    button.addEventListener("click", function () {
      var code = preBlock.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(
        function () {
          button.innerText = "Copied!";
          setTimeout(function () {
            button.innerText = "Copy";
          }, 2000);
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
    });

    // Insert the button at the top-right corner of the pre block
    preBlock.style.position = "relative";
    button.style.position = "absolute";
    button.style.top = "10px";
    button.style.right = "10px";
    preBlock.appendChild(button);
  });
});
