document.addEventListener("DOMContentLoaded", function () {
  const footnoteLinks = document.querySelectorAll("a.footnote");

  footnoteLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const footnoteId = this.getAttribute("href").substring(1);
      const footnote = document.getElementById(footnoteId);
      if (!footnote) return;

      // Create and append the tooltip
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

      // Position and show
      const rect = this.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.bottom + window.scrollY}px`;
      tooltip.style.display = "block";

      // Remove tooltip on link click
      link.addEventListener("click", function () {
        tooltip.remove();
      });

      // Function to remove if pointer is outside BOTH link and tooltip
      function handleLeave(e) {
        if (
          !link.contains(e.relatedTarget) &&
          !tooltip.contains(e.relatedTarget)
        ) {
          tooltip.remove();
        }
      }

      // Listen for mouseout on both link and tooltip
      link.addEventListener("mouseout", handleLeave);
      tooltip.addEventListener("mouseout", handleLeave);
    });
  });
});
