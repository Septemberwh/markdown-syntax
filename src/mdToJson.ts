import * as vscode from 'vscode';

export function mdTableToJson(text: string): object[] {
  const lines = text.trim().split('\n');

  // 如果不是标准 Markdown 表格格式，抛出错误
  if (lines.length < 2 || !lines[1].includes('|')) {
    throw new Error('The selected content is not a valid Markdown table.');
  }

  const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
  const rows = lines.slice(2).map(line =>
    line.split('|').map(cell => cell.trim()).filter(Boolean)
  );

  return rows.map(row =>
    headers.reduce((obj, header, index) => {
      obj[header] = row[index] || null;
      return obj;
    }, {} as Record<string, any>)
  );
}

export function registerMdToJsonCommand(context: vscode.ExtensionContext) {
  let mdToJsonCommand = vscode.commands.registerCommand('markdown-syntax.mdTableToJson', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const text = editor.document.getText(editor.selection);
      try {
        const json = mdTableToJson(text);
        const jsonString = JSON.stringify(json, null, 2);
        await vscode.env.clipboard.writeText(jsonString);
        vscode.window.showInformationMessage('JSON copied to clipboard');
      } catch (error) {
        vscode.window.showErrorMessage('Failed to convert Markdown table to JSON.');
      }
    }
  });
  context.subscriptions.push(mdToJsonCommand);
}
