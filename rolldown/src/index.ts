(function () {
  htmx.defineExtension("error", {
    onEvent(name, evt) {
      console.log("test");
    },
  });
})();
