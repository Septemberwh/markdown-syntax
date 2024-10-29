// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { I18n } from './i18n';
import { isDisplayMessages } from './utils/util';
import { registerMdToJsonCommand } from './mdToJson';
import { registerJsonToMdCommand } from './jsonToMd';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "markdown-syntax" is now active!');

	// Create a new instance of I18n
	const i18n = I18n.getInstance();
	console.log("🚀 ~ activate ~ i18n:", i18n);

	// 注册命令 "markdown-syntax.openMarkdownWithSidePreview"
	const disposable = vscode.commands.registerCommand('markdown-syntax.openMarkdownWithSidePreview', async () => {
		try {
			const locale = i18n?.getLocale() || 'en';
			// 获取 markdown.md 文件的绝对路径
			let markdownPath = path.join(context.extensionPath, 'markdown_en.md'); // 默认使用英文
			// 如果是中文环境，加载中文
			if (locale.toLowerCase().startsWith('zh')) {
				markdownPath = path.join(context.extensionPath, 'markdown.md'); // 中文
			}
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
			isDisplayMessages() && vscode.window.showErrorMessage(i18n.localize('markdown-syntax.showErrorMessage') + (error as Error).message);
		}
	});

	context.subscriptions.push(disposable);

	registerMdToJsonCommand(context); // 注册 md 转 json

	registerJsonToMdCommand(context); // 注册 json 转 md
}

// This method is called when your extension is deactivated
export function deactivate() { }
