import * as vscode from 'vscode';
import { I18n } from './i18n';

const i18n = I18n.getInstance();

function padText(text: string, width: number): string {
  const padding = width - text.length;
  const leftPad = Math.floor(padding / 2);
  const rightPad = padding - leftPad;
  return ' '.repeat(leftPad) + text + ' '.repeat(rightPad);
}

function formatRow(row: string[], columnWidths: number[]): string {
  return '| ' + row.map((cell, i) => padText(cell, columnWidths[i])).join(' | ') + ' |';
}

export function jsonToMdTable(json: object[]): string {
  // 如果不是 JSON格式，抛出错误
  if (!Array.isArray(json)) {
    throw new Error(i18n.localize('markdown-syntax.jsonToMd.json_error'));
  }

  const headers = Object.keys(json[0]);
  const rows = json.map((obj: Record<string, any>) => headers.map(header => String(obj[header] || '')));

  // 计算每一列的最大宽度
  const columnWidths = headers.map((header, i) =>
    Math.max(header.length, ...rows.map(row => row[i].length))
  );

  // 生成表格的标题行、分隔符和数据行
  const headerRow = formatRow(headers, columnWidths);
  const separatorRow = '| ' + columnWidths.map(width => '-'.repeat(width)).join(' | ') + ' |';
  const dataRows = rows.map(row => formatRow(row, columnWidths));

  return [headerRow, separatorRow, ...dataRows].join('\n');
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
        vscode.window.showInformationMessage(i18n.localize('markdown-syntax.jsonToMd.copied'));
      } catch (error) {
        vscode.window.showErrorMessage(i18n.localize('markdown-syntax.jsonToMd.failed'));
      }
    }
  });
  context.subscriptions.push(jsonToMdCommand);
}

