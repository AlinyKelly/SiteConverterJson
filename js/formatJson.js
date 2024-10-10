// Initialize CodeMirror
const editor = CodeMirror(document.getElementById("editor"), {
  mode: "application/json",  // Set the mode to JSON for syntax highlighting
  theme: "default",  // You can change the theme to other available CodeMirror themes
  lineNumbers: true,  // Display line numbers
  lineWrapping: true,  // Wrap long lines
  autoCloseBrackets: true,  // Automatically close brackets
  foldGutter: true,  // Enable code folding
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],  // Add fold markers
  readOnly: true  // Make the editor read-only after formatting
});

// Function to format JSON
function formatJson() {
  let jsonString = document.getElementById('jsonInput').value;

  // Remove \" from the string
  jsonString = jsonString.replace(/\\"/g, '"').replace(/\]"/g, ']').replace(/\"\$\"\: \"\[/g, '"$": [');

  try {
    // Parse and format JSON
    let jsonObject = JSON.parse(jsonString);
    let formattedJson = JSON.stringify(jsonObject, null, 4);

    // Set formatted JSON in CodeMirror editor
    editor.setValue(formattedJson);
  } catch (e) {
    editor.setValue('Invalid JSON: ' + e.message);
  }
}

// Attach the formatJson function to the button
document.getElementById('formatBtn').addEventListener('click', formatJson);