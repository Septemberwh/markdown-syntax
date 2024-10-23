import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';
import { I18n } from '../i18n';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});

suite('I18n Test Suite', () => {
	test('Localization should work', () => {
			const i18n = I18n.getInstance();
			
			// 测试基本翻译
			assert.strictEqual(
					i18n.localize('button.confirm'),
					vscode.env.language.startsWith('zh') ? '确认' : 'Confirm'
			);

			// 测试带参数的翻译
			const localizedString = i18n.localize('info.welcome');
			assert.ok(localizedString.length > 0);
	});
});
