// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-syntax" is now active!');

	// 注册命令 "markdown-syntax.openMarkdownWithSidePreview"
	const disposable = vscode.commands.registerCommand('markdown-syntax.openMarkdownWithSidePreview', async () => {
		try {
			// 获取 markdown.md 文件的绝对路径
			const markdownPath = path.join(context.extensionPath, 'markdown.md');
			// 打开 markdown 文件
			const doc = await vscode.workspace.openTextDocument(markdownPath);
			// 在编辑器中显示文件
			await vscode.window.showTextDocument(doc, {
				viewColumn: vscode.ViewColumn.Active, // 在当前活动窗口中打开新 Tab
				preserveFocus: true // 保持焦点在之前的文件上
			});
			// 打开 markdown.md 的预览，在右侧拆分窗口中显示
			await vscode.commands.executeCommand(
				'markdown.showPreviewToSide',
				doc.uri
			);
		} catch (error) {
			vscode.window.showErrorMessage('Unable to open Markdown file: ' + (error as Error).message);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
