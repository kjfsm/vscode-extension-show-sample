// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-extension-show-sample" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-information-message",
      () => {
        vscode.window.showInformationMessage("showInformationMessage");
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-error-message",
      () => {
        vscode.window.showErrorMessage("showErrorMessage");
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-warning-message",
      () => {
        vscode.window.showWarningMessage("showWarningMessage");
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-input-box",
      () => {
        vscode.window.showInputBox({ prompt: "showInputBox" }).then((value) => {
          vscode.window.showInformationMessage("showInputBox " + value);
        });
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-open-dialog",
      () => {
        vscode.window
          .showOpenDialog({ title: "showOpenDialog" })
          .then((value) => {
            if (value === undefined) {
              vscode.window.showInformationMessage("showOpenDialog undefined");
            } else {
              vscode.window.showInformationMessage(value.toString());
            }
          });
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-quick-pick",
      () => {
        vscode.window
          .showQuickPick(["a", "b", "c", "d", "e"], {
            placeHolder: "showQuickPick",
          })
          .then((value) => {
            if (value === undefined) {
              vscode.window.showInformationMessage("showQuickPick undefined");
            } else {
              vscode.window.showInformationMessage("showQuickPick " + value);
            }
          });
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-save-dialog",
      () => {
        vscode.window
          .showSaveDialog({ title: "showSaveDialog" })
          .then((value) => {
            if (value === undefined) {
              vscode.window.showInformationMessage("showSaveDialog undefined");
            } else {
              vscode.window.showInformationMessage("showSaveDialog " + value);
            }
          });
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-text-document",
      () => {
        // vscode.window.showTextDocument();
      }
    ),
    vscode.commands.registerCommand(
      "vscode-extension-show-sample.show-workspace-folder-pick",
      () => {
        vscode.window
          .showWorkspaceFolderPick({ placeHolder: "showWorkspaceFolderPick" })
          .then((value) => {
            if (value === undefined) {
              vscode.window.showInformationMessage(
                "showWorkspaceFolderPick undefined"
              );
            } else {
              vscode.window.showInformationMessage(
                "showWorkspaceFolderPick " + value
              );
            }
          });
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
