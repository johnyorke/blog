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

  function toTitleCase(value) {
    return value
      .split(/[-_ ]+/)
      .filter(Boolean)
      .map(function (part) {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      })
      .join(" ");
  }

  function detectLanguage(container) {
    var code = container.querySelector("code");
    if (!code) {
      return "";
    }

    var dataLang = code.getAttribute("data-lang");
    if (dataLang) {
      return toTitleCase(dataLang);
    }

    var classes = (code.className || "").split(/\s+/);
    for (var i = 0; i < classes.length; i += 1) {
      if (classes[i].indexOf("language-") === 0) {
        return toTitleCase(classes[i].replace("language-", ""));
      }
    }

    var containerClasses = (container.className || "").split(/\s+/);
    for (var j = 0; j < containerClasses.length; j += 1) {
      if (containerClasses[j].indexOf("language-") === 0) {
        return toTitleCase(containerClasses[j].replace("language-", ""));
      }
    }

    return "";
  }

  function setCodeLabels() {
    var blocks = document.querySelectorAll(".prose div.highlighter-rouge, .prose figure.highlight");
    blocks.forEach(function (block) {
      var language = detectLanguage(block);
      if (language) {
        block.setAttribute("data-code-label", language);
      }
    });
  }

  setCodeLabels();
})();
