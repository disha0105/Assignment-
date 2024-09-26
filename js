<!DOCTYPE html>
<html>
<head>
  <title>Matrix Assignment</title>
</head>
<body>

  <h2>Matrix Input</h2>
  <label for="rows">Rows:</label>
  <input type="number" id="rows" min="1"> 
  <label for="cols">Columns:</label>
  <input type="number" id="cols" min="1"> 
  <button onclick="generateMatrix()">Generate Matrix</button>

  <div id="matrixContainer"></div>

  <button onclick="findLeftRight()">Find Left and Right Values</button>
  <p>Left Value: <span id="leftValue"></span></p>
  <p>Right Value: <span id="rightValue"></span></p>

  <script>
    function generateMatrix() {
      let rows = parseInt(document.getElementById("rows").value);
      let cols = parseInt(document.getElementById("cols").value);

      let matrixContainer = document.getElementById("matrixContainer");
      matrixContainer.innerHTML = "";

      let table = document.createElement("table");
      for (let i = 0; i < rows; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
          let cell = document.createElement("td");
          let input = document.createElement("input");
          input.type = "number";
          input.oninput = function() { validateInput(this); };
          cell.appendChild(input);
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
      matrixContainer.appendChild(table);
    }

    function validateInput(input) {
      input.value = input.value.replace(/[^0-9]/g, "");
    }

    function findLeftRight() {
      let max = -Infinity;
      let left = 0;
      let right = 0;

      let table = document.getElementById("matrixContainer").querySelector("table");
      for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
          let value = parseInt(table.rows[i].cells[j].querySelector("input").value);
          if (value > max) {
            max = value;
            left = j > 0 ? parseInt(table.rows[i].cells[j - 1].querySelector("input").value) : null;
            right = j < table.rows[i].cells.length - 1 ? parseInt(table.rows[i].cells[j + 1].querySelector("input").value) : null;
          }
        }
      }

      document.getElementById("leftValue").textContent = left;
      document.getElementById("rightValue").textContent = right;
    }
  </script>

</body>
</html>
