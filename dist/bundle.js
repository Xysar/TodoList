(() => {
  "use strict";
  const e = document.getElementById("content");
  (() => {
    const t = document.createElement("div");
    t.setAttribute("id", "header"),
      (t.innerText = "Todo List"),
      e.appendChild(t);
  })();
})();
