import React from "react";
import "./checkboxgroup.css";

function CheckboxGroup() {
  return (
    <div>
      <p>Preferences</p>
      <ol>
        <div>
          <input type="checkbox" id="chk1" /> <span for="chk1">Option 1</span>
        </div>
        <div>
          <input type="checkbox" id="chk2" /> <span for="chk2">Option 2</span>
        </div>
        <div>
          <input type="checkbox" id="chk3" /> <span for="chk3">Option 3</span>
        </div>
        <div>
          <input type="checkbox" id="chk4" /> <span for="chk4">Option 4</span>
        </div>
      </ol>
    </div>
  );
}

export default CheckboxGroup;
