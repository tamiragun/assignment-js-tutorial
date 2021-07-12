function createEditors(input) {
  //Select editor
  var editor = ace.edit("e" + input);

  //Set theme
  editor.setTheme("ace/theme/kuroir");

  //Set programming language
  editor.session.setMode("ace/mode/javascript");

  //Run code
  //Thanks to: https://www.youtube.com/watch?v=foQ8MjEvsJQ
  const executeCodeBtn = document.querySelector("#br" + input);
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
  const resetCodeBtn = document.querySelector("#bc" + input);
  resetCodeBtn.addEventListener("click", () => {
    //Clear the editor
    editor.setValue("");
  });
}

//createEditors("editor");

let numberOfEditors = 12;
let i = 1;

while (i <= numberOfEditors) {
  try {
    createEditors(i.toString());
  } catch (e) {
    //keep looping to the next editor;
  }
  i++;
}
