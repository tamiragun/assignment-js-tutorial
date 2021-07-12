//Javascript file to set up and configure the ACE code editor.
//https://ace.c9.io/

//Create an Ace editor based on an HTML element with the provided ID

function createEditors(input) {
  //Create the
  var editor = ace.edit("e" + input);

  //Set theme
  editor.setTheme("ace/theme/kuroir");

  //Set programming language to javaScript
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

//Create editors for each codeblock on each page, based on their ID e1, e2, e3, etc.
let numberOfEditors = 12;
let i = 1;

while (i <= numberOfEditors) {
  try {
    createEditors(i.toString());
  } catch (e) {
    //Keep looping to the next editor;
  }
  i++;
}
