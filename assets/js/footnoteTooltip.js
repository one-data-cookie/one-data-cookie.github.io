document.addEventListener("DOMContentLoaded", function () {
  const footnoteLinks = document.querySelectorAll("a.footnote");

  footnoteLinks.forEach((link) => {
    link.addEventListener("mouseover", function (event) {
      const footnoteId = this.getAttribute("href").substring(1);
      const footnote = document.getElementById(footnoteId);
      if (footnote) {
        let tooltip = document.createElement("div");
        tooltip.classList.add("footnote-tooltip");
        
        // Clone the footnote content and remove the backlink
        let footnoteContent = footnote.cloneNode(true);
        let backlink = footnoteContent.querySelector("a[href^='#']");
        if (backlink) {
          backlink.remove();
        }
        tooltip.innerHTML = footnoteContent.innerHTML;
        
        document.body.appendChild(tooltip);

        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.display = "block";

        // Add click event listener to remove tooltip
        link.addEventListener("click", function() {
          tooltip.remove();
        });

        this.addEventListener(
          "mouseout",
          function () {
            tooltip.remove();
          },
          { once: true }
        );
      }
    });
  });
});
