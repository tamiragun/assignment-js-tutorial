//Select editor
var editor = ace.edit("editor");

//Set theme
editor.setTheme("ace/theme/kuroir");

//Set programming language
editor.session.setMode("ace/mode/javascript");

//Run code
//Thanks to: https://www.youtube.com/watch?v=foQ8MjEvsJQ
const executeCodeBtn = document.querySelector(".editor__run");
executeCodeBtn.addEventListener("click", () => {
  //Get input from the code editor
  const userCode = editor.getValue();

  //Run the user code
  try {
    new Function(userCode)();
  } catch (e) {
    console.error(e);
  }
});

//Clear code
//Thanks to: https://www.youtube.com/watch?v=foQ8MjEvsJQ
const resetCodeBtn = document.querySelector(".editor__reset");
resetCodeBtn.addEventListener("click", () => {
  //Clear the editor
  editor.setValue("");
});
