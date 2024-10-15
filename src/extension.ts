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

	// const openMarkdownSyntax = vscode.commands.registerCommand('markdown.syntax', () => {
	// 	console.log(path.join(__dirname, 'markdown.md'));
	// 	vscode.workspace.openTextDocument(path.join(__dirname, 'markdown.md')).then(doc => {
	// 		vscode.window.showTextDocument(doc);
	// 	});
	// });

	// 注册命令 "markdown-syntax.openMarkdown"
	const disposable = vscode.commands.registerCommand('markdown-syntax.openMarkdown', async () => {
		try {
			// 获取 markdown.md 文件的绝对路径
			const markdownPath = path.join(context.extensionPath, 'markdown.md');
			await vscode.workspace.openTextDocument(markdownPath).then(doc => {
				vscode.window.showTextDocument(doc);
			});
			// // 打开 markdown 文件
			// const doc = await vscode.workspace.openTextDocument(markdownPath);
			// // 在编辑器中显示文件
			// await vscode.window.showTextDocument(doc);
		} catch (error) {
			vscode.window.showErrorMessage('无法打开 Markdown 文件: ' + (error as Error).message);
		}
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
