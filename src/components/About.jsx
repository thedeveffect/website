import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import girl from "../assets/girl.jpeg"
export default function About() {
  return (
    <div>
      <div class="about-container">
        <div class="about-cont1">
          <h1>Welcome to the Dev Effect</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vehicula lacus sit amet velit euismod, non placerat arcu bibendum.
            Nulla facilisi. Sed sed sem urna. Integer nec justo eget felis
            ultricies fermentum. Mauris at sapien vel sapien lacinia vulputate.
            Curabitur euismod libero ut nunc sodales, non commodo dolor laoreet.
          </p>
        </div>
        <div class="about-cont2">
          <img src={girl} alt="" class="about-img" />
        </div>
      </div>
    </div>
  );
}
