import * as vscode from 'vscode';
import * as path from 'path';

export class I18n {
  private static instance: I18n;
  private bundle: any;
  private readonly locale: string;

  private constructor() {
    // 获取 VS Code 当前语言设置
    this.locale = vscode.env.language;
    this.loadLocaleBundle();
  }

  public static getInstance(): I18n {
    if (!I18n.instance) {
      I18n.instance = new I18n();
    }
    return I18n.instance;
  }

  private loadLocaleBundle() {
    try {
      // 根据当前语言加载对应的语言包
      const extensionPath = vscode.extensions.getExtension('SeptWong.markdown-syntax')?.extensionPath || '';

      // 默认使用英文语言包
      let bundlePath = path.join(extensionPath, 'package.nls.json');

      // 如果是中文环境，加载中文语言包
      if (this.locale.toLowerCase().startsWith('zh')) {
        bundlePath = path.join(extensionPath, 'package.nls.zh-cn.json');
      }

      this.bundle = require(bundlePath);
    } catch (error) {
      console.error('Failed to load locale bundle:', error);
      this.bundle = {};
    }
  }

  public localize(key: string, ...args: string[]): string {
    let message = this.bundle[key] || key;

    // 支持参数替换，例如: "Hello {0}!" -> "Hello World!"
    if (args.length > 0) {
      args.forEach((arg, index) => {
        message = message.replace(`{${index}}`, arg);
      });
    }

    return message;
  }
}