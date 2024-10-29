import * as vscode from 'vscode';

// 是否显示消息
export function isDisplayMessages() {
  const config = vscode.workspace.getConfiguration('markdown-syntax');
  const displayMessages = config.get<boolean>('displayMessages', true); // 默认启用消息提示
  return displayMessages;
}