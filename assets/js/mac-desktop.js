(function () {
  var windows = Array.prototype.slice.call(document.querySelectorAll("[data-window]"));
  var clock = document.getElementById("menu-clock");
  var zBase = 20;

  function raiseWindow(target) {
    zBase += 1;
    windows.forEach(function (win) {
      win.classList.remove("is-active");
    });
    target.classList.add("is-active");
    target.style.zIndex = String(zBase);
  }

  windows.forEach(function (win, index) {
    win.style.zIndex = String(zBase + index);
    win.addEventListener("mousedown", function () {
      raiseWindow(win);
    });
  });

  function updateClock() {
    if (!clock) {
      return;
    }
    var now = new Date();
    clock.textContent = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  updateClock();
  window.setInterval(updateClock, 30000);
})();
