import React, { useEffect } from "react";

export default function BuyMeACoffee() {
  // const
  useEffect(() => {
    const script = document.createElement("script");
    const div = document.getElementById("supportByBMC");
    script.setAttribute(
      "src",
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    );
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "kirak");
    script.setAttribute(
      "data-description",
      "Support me by buying me a coffee!"
    );
    script.setAttribute("data-color", "#befed6");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.onload = function () {
      var evt = document.createEvent("Event");
      evt.initEvent("DOMContentLoaded", false, false);
      window.dispatchEvent(evt);
    };

    div.appendChild(script);
  }, []);

  return <div id="supportByBMC"></div>;
}
