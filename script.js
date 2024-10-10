    function generateMatrix() {
            const rows = parseInt(document.getElementById('rows').value);
            const cols = parseInt(document.getElementById('cols').value);
            const container = document.getElementById('matrix-container');
            container.innerHTML = ''; 

            if (rows > 0 && cols > 0) {
                const table = document.createElement('table');
                for (let i = 0; i < rows; i++) {
                    const tr = document.createElement('tr');
                    for (let j = 0; j < cols; j++) {
                        const td = document.createElement('td');
                        const input = document.createElement('input');
                        input.type = 'number';
                        input.className = 'matrix-input';
                        td.appendChild(input);
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }
                container.appendChild(table);
            }
        }

        function findMaxValue() {
            const inputs = document.querySelectorAll('.matrix-input');
            let matrix = [];
            let max = -Infinity;
            let maxRow = -1;
            let maxCol = -1;

            inputs.forEach((input, index) => {
                const row = Math.floor(index / document.getElementById('cols').value);
                const col = index % document.getElementById('cols').value;
                const value = parseInt(input.value);

                if (!matrix[row]) {
                    matrix[row] = [];
                }

                matrix[row][col] = value;

                if (value > max) {
                    max = value;
                    maxRow = row;
                    maxCol = col;
                }
            });

            
            let leftValue = null;
            let rightValue = null;

            if (maxCol > 0) {
                leftValue = matrix[maxRow][maxCol - 1];
            }

            if (maxCol < matrix[0].length - 1) {
                rightValue = matrix[maxRow][maxCol + 1];
            }

            const resultText = `Max Value: ${max}, Left Value: ${leftValue ?? 'None'}, Right Value: ${rightValue ?? 'None'}`;
            document.getElementById('result').innerText = resultText;
        }

        // Reload the page
        function reloadPage() {
            location.reload();
        }

     
  
