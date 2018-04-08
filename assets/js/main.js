(function() {
  var modal, modalCloseButton, modalOpenButton, modalWindow;

  modal = document.querySelector('#modal');
  modalOpenButton = document.querySelector("#modal-open-button");
  modalCloseButton = document.querySelector('#modal-close-button');

  modalOpenButton.onclick = function() {
    return modal.style.display = "block";
  };

  modalCloseButton.onclick = function() {
    return modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      return modal.style.display = "none";
    }
  };

}).call(this);
