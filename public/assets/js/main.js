(function () {
  "use strict";

  var form = document.getElementById("new-project-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }
      var modalEl = document.getElementById("newProjectModal");
      var modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) {
        modal.hide();
      }
      form.reset();
      form.classList.remove("was-validated");
    });
  }
})();
