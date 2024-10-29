import * as vscode from 'vscode';
import { I18n } from './i18n';

const i18n = I18n.getInstance();

export function mdTableToJson(text: string): object[] {
  const lines = text.trim().split('\n');

  // 如果不是标准 Markdown 表格格式，抛出错误
  if (lines.length < 2 || !lines[1].includes('|')) {
    throw new Error(i18n.localize('markdown-syntax.mdToJson.md_error'));
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
        vscode.window.showInformationMessage(i18n.localize('markdown-syntax.mdToJson.copy'));
      } catch (error) {
        vscode.window.showErrorMessage(i18n.localize('markdown-syntax.mdToJson.failed'));
      }
    }
  });
  context.subscriptions.push(mdToJsonCommand);
}
