import * as vscode from 'vscode';

export function jsonToMdTable(json: object[]): string {
  const headers = Object.keys(json[0]);
  const separator = headers.map(() => '---').join(' | ');
  const headerRow = headers.join(' | ');

  const rows = json.map(obj =>
    headers.map(header => (obj as any)[header] || '').join(' | ')
  );

  return [headerRow, separator, ...rows].join('\n');
}

export function registerJsonToMdCommand(context: vscode.ExtensionContext) {
  let jsonToMdCommand = vscode.commands.registerCommand('markdown-syntax.jsonToMdTable', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const text = editor.document.getText(editor.selection);
      try {
        const json = JSON.parse(text);
        const mdTable = jsonToMdTable(json);
        await vscode.env.clipboard.writeText(mdTable);
        vscode.window.showInformationMessage('JSON converted to Markdown table and copied to clipboard.');
      } catch (error) {
        vscode.window.showErrorMessage('Failed to convert JSON to Markdown table.');
      }
    }
  });
  context.subscriptions.push(jsonToMdCommand);
}

