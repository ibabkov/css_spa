(function() {
  const templates = document.getElementsByTagName('template');

  if (templates) {
    for (const template of templates) {
      const refs = document.querySelectorAll(
        `[data-template-id=${template.id}]`
      );

      for (const ref of refs) {
        ref.appendChild(template.content.cloneNode(true));
      }
    }
  }
  document.body.style.visibility = "visible";
  document.body.style.opacity = '1';
})();
