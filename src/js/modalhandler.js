function popuphandler(flag) {
  if (flag) {
    document.getElementById("popup").classList.remove("hidden");
  } else {
    document.getElementById("popup").classList.add("hidden");
  }
}

function modalValidation(els) {
  let validate = els.form.checkValidity();

  els.form.addEventListener("submit", (e) => e.preventDefault(), true);

  if (!validate) els.submit.click();

  return validate;
}
