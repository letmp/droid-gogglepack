const vscode = require("vscode");

module.exports = {
  activate,
  deactivate,
};

function activate(context) {
  // This must match the command property in the package.json
  const commandID = "droid.buildHtmlFile";
  let disposable = vscode.commands.registerCommand(commandID, buildHtmlFile);
  context.subscriptions.push(disposable);
}

function buildHtmlFile() {
  vscode.window.showInformationMessage("Hello World!");
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
  }
  //vscode.workspace.fs.readFile()
  console.log(vscode.window.activeTextEditor.document.uri.fsPath)
  console.log(vscode.extensions.getExtension("le_tmp@gmx.de.droid-lang").extensionPath)
  /*vscode.window.createTerminal(`Ext Terminal #1`);
  vscode.window.showInformationMessage('Hello World 2!');
  const terminal = vscode.window.createTerminal("Create Projet",process.env.COMSPEC)
  terminal.show();*/
  //https://typescript.hotexamples.com/examples/vscode/window/createTerminal/typescript-window-createterminal-method-examples.html
}

function deactivate() {}