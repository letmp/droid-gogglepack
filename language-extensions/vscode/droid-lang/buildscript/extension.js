const vscode = require("vscode");
//const fs = require('fs');
const path = require('path');

module.exports = {
  activate,
  deactivate,
};

function activate(context) {
  const commandID = "droid.buildHtmlFile";  // This must match the command property in the package.json
  let disposable = vscode.commands.registerCommand(commandID, buildHtmlFile);
  context.subscriptions.push(disposable);
}

function buildHtmlFile() {
  vscode.window.showInformationMessage("Building html file for your droid patch");
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
  }
  const extensionPath = vscode.extensions.getExtension("modman.droid-lang").extensionPath
  const filePath = vscode.window.activeTextEditor.document.uri.fsPath
  const targetPath = path.join(path.dirname(filePath),path.basename(filePath, '.ini') + ".html")
  
  // start build scripts
  const terminal = vscode.window.createTerminal("DroidTerminal")
  // vscode.window.createTerminal("DroidTerminal",process.env.COMSPEC)
  if(process.platform === "win32") {
    terminal.sendText("powershell -Executionpolicy Bypass -File " + extensionPath + "/buildscript/scripts/build_win.ps1 " + filePath + " "  + targetPath + " " + extensionPath + "/buildscript/webapp/droid.html")
  }
  else if (process.platform === "darwin") { //macos
    terminal.sendText(extensionPath + "/buildscript/scripts/build_osx.sh " + filePath + " "  + targetPath + " " + extensionPath + "/buildscript/webapp/droid.html")
  }
  else if (process.platform === "linux") { //macos and linux
    terminal.sendText(extensionPath + "/buildscript/scripts/build_linux.sh " + filePath + " "  + targetPath + " " + extensionPath + "/buildscript/webapp/droid.html")
  } 
  terminal.show();
}

function deactivate() {}