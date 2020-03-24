function getDataOfClass(elementClass) {
  console.log(elementClass);

  return document.querySelector("." + elementClass).getAttribute("placeholder");
}
