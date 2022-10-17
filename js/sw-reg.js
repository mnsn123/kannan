      if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("An active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("https://monsoonmalabar.com/kannan/pwabuilder-sw.js", {
        scope: "https://monsoonmalabar.com/kannan/"
      })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      });
  }
}


