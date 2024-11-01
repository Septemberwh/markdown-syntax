# Markdown 语法

---

> GitHub Flavored Markdown, 简称 [GFW](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)。  
> Markdown Preview Enhanced, 简称 [MPE](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)。

---

## 标题

```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

# 这是一级标题

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

```markdown
自定义标题样式 (MPE)：
### 这个标题有 2 个 classes {.class1 .class2}
```

标题有 2 个 classes {.class1 .class2} [test.md#2](./test.md#2)

---

## 字体

|#|语法|效果|快捷键|
|---|----|:---:|:---:|
|1|`*斜体1*`|*斜体1*|`Command`+`I` (Mac) or `Ctrl`+`I` (Windows/Linux)|
|2|`_斜体2_`|*斜体2*|
|3|`**粗体1**`|**粗体1**|`Command`+`B` (Mac) or `Ctrl`+`B` (Windows/Linux)|
|4|`__粗体2__`|**粗体2**|
|5|`***斜粗体1***`|***斜粗体1***|
|6|`___斜粗体2___`|***斜粗体2***|
|7|`***~~斜粗体删除线1~~***`|***~~斜粗体删除线1~~***|
|8|`~~***斜粗体删除线2***~~`|~~***斜粗体删除线2***~~|
|9|`*可以 **组合** 这些符号*`|*可以 **组合** 这些符号*|
|10|`这是一个 ~~删除线~~`|这是一个 ~~删除线~~|
|11|`<font color="#ff79aa">有颜色的文字1 (no GFM)</font>`|<font color="#ff79aa">有颜色的文字1 (no GFM)</font>|
|12|`<span style="color:#ff79aa">有颜色的文字2 (no GFM)</span>`|<span style="color:#ff79aa">有颜色的文字2 (no GFM)</span>|
|13|`==这是标记的文字 (MPE)==`|==这是标记的文字 (MPE)==|
|14|`下标<sub>文本</sub>在此。`|下标<sub>文本</sub>在此。|
|15|`上标<sup>文本</sup>在此。`|上标<sup>文本</sup>在此。|
|16|`30^th^`|30^th^ (MPE)|
|17|`H~2~O`|H~2~O (MPE)|

> GitHub 上的 Markdown 渲染不支持通过标准 Markdown 或 HTML 标签直接改变字体颜色。

---

## 引用

```markdown
> 这是引用的内容
>> 这是引用的内容
>>>>>>>>>> 这是引用的内容
```

> 这是引用的内容
>> 这是引用的内容
>>>>>>>>>> 这是引用的内容

## 颜色模型 (GFM)

> GitHub: 仅在问题、拉取请求和讨论中支持颜色的可视化。

```markdown
The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

The background color is `#ffffff` for light mode and `#000000` for dark mode.

|Color|Example|
|----|:---:|
|HEX|`#0969DA`|
|RGB|`rgb(9, 105, 218)`|
|HSL|`hsl(212, 92%, 45%)`|

## 分割线

```text
--- 连字符
---- 多个连字符
*** 星号
***** 多个星号
___ 下划线
```

---

## 图片

```markdown
![图片alt](图片地址 ''图片title'')

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加

![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "区块链")
![知乎头像][zhihu-avatar] 
[![知乎头像][zhihu-avatar]][zhihu]
<img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="描述文本" width="40" height="40"> -- 控制图片的大小
```

|#|语法|效果|
|---|----|:---:|
|1| `![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "区块链")` | ![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "区块链") |
|2| `![知乎头像][zhihu-avatar]` | ![知乎头像][zhihu-avatar] |
|3| `[![知乎头像][zhihu-avatar]][zhihu]` | [![知乎头像][zhihu-avatar]][zhihu] |
|4| `<img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="描述文本" width="40" height="40">` | <img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="描述文本" width="40" height="40"> |

> • width 和 height 属性可以使用像素值（如 40px）或百分比（如 50%）。  
> • 在 GitHub 上，使用 `<img>`标签可以成功调整图片的大小。  
> • 请注意，使用标准的 Markdown 语法 `![alt text](url)` 插入图片时，无法直接控制大小。如果需要调整大小，必须使用 HTML。  

> 本文 `[zhihu-avatar]` `[zhihu]` URL标识符都放置于文末  
> `[zhihu]: https://www.zhihu.com/people/septwong "我的知乎，欢迎关注"`

---

## 超链接

```markdown
[超链接名](超链接地址 "超链接title")
title可加可不加

[百度](http://baidu.com "百度")
[我的知乎][zhihu] -- zhihu: 复用，放文章末尾
[test.md](./test.md) -- 本地 url
```

|#|语法|效果|
|---|----|:---:|
|1|`[百度](http://baidu.com "百度")`|[百度](http://baidu.com "百度")|
|2|`[我的知乎][zhihu]`|[我的知乎][zhihu]|
|3|`[test.md](./test.md)`|[test.md](./test.md)|

---

## 列表

`无序列表`： - + * 任何一种都可以

```markdown
- 列表内容
+ 列表内容
* 列表内容

🔥注意：- + * 跟内容之间都要有一个空格
```

- 列表内容

- 列表内容

- 列表内容

`有序列表`：数字加点

```markdown
1. 列表内容
2. 列表内容
3. 列表内容

🔥注意：序号跟内容之间要有空格
```

1. 列表内容
2. 列表内容
3. 列表内容

`列表嵌套`：上一级和下一级之间敲三个空格即可

```markdown
- 一级序列
  - 二级序列
  - 二级序列
```

- 一级序列
  - 二级序列
  - 二级序列

---

## 表格

连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。

```markdown
| 表头 | 表头  | 表头 |
| ---- | :---: | ---: |
| 内容 | 内容  | 内容 |
| 内容 | 内容  | 内容 |

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
- 两边加：表示文字居中
- 右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

| 姓名 | 技能  | 排行 |
| ---- | :---: | ---: |
| 刘备 |  哭   | 大哥 |
| 关羽 |  打   | 二哥 |
| 张飞 |  骂   | 三弟 |

```markdown
表格居中

<div align="center">

| 表头1 | 表头2|
| ---------- | -----------|
| 表格单元 | 表格单元 |
| 表格单元 | 表格单元 |

</div>
```

---

## 代码

`单行代码`：代码之间分别用一个反引号包起来

```javascript
 `代码内容`
```

`代码块`：代码之间分别用三个反引号(```)包起来，且两边的反引号单独占一行

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

`代码块 class` (MPE) : 给你的代码块设置 `class`

```javascript {.class1, class2}
// ```javascript {.class1, class2}
function add(x, y) {
  return x + y
}
```

`代码行数` (MPE) : 代码块显示行数，添加 `line-numbers` class 就可以了。

```javascript {.line-numbers}
// ```javascript {.line-numbers}
function add(x, y) {
  return x + y
}
```

`高亮代码行数` (MPE) : 添加 `highlight`

```javascript {highlight=1}
// ```javascript {highlight=1}
function add(x, y) {
  return x + y
}
```

```javascript {highlight=1-2}
// ```javascript {highlight=1-2}
function add(x, y) {
  return x + y
}
```

```javascript {highlight=[1-2, 4, 10-12]}
// ```javascript {highlight=[1-2, 4, 10-12]}
function add(x, y) {
  let z = x * y
  return x + y + z
}
```

---

## 锚点

其实呢，每一个标题都是一个锚点，和HTML的锚点（`#`）类似，比如我们

|语法|效果|
|---|---|
|`[回到标题](#标题)`|[回到标题](#标题)|
|`<a id="custom-anchor">custom-anchor</a>`|<a id="custom-anchor">custom-anchor</a>|

🔥注意：标题中的英文字母都被转化为**小写字母**了, 并且将**空格**替换为**短横线（-）**。

---

## 标题编号 (MPE)

```markdown
### My Great Heading {#customId}
```

### 标题编号示例 {#10}

跳转其他文件示例 [test.md#1](./test.md#1)

---

## diff高亮

`+`: 添加  
`-`: 删除  
`!`: 修改  
`#`: 行号  

```diff
+ 人闲桂花落，
- 夜静春山空。
! 月出惊山鸟，
# 时鸣春涧中。
```

---

## 任务列表

- [ ] 待完成
- [x] 已完成
- [ ] ~~未完成~~

---

## 折叠内容

<details>
<summary>菜单</summary>

菜单内容

Want to try different model sizes and configurations?

```bash
python train.py --actor-model facebook/opt-66b --reward-model facebook/opt-350m --deployment-type multi_node
```

| Model Size (A100-80g)            | Step 1 | Step 2 | Step 3 | Total |
| -------------------------------- | ------ | ------ | ------ | ----- |
| Actor: OPT-66B  Reward: OPT-350M | 82mins | 5mins  | 7.5hr  | 9hr   |

</details>

---

## 脚注

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

---

## Emoji 表情

去露营了！ :tent: 很快回来。

真好笑！ :joy:

---

## 网址和电子邮件地址

- 未使用方括号，您的Markdown处理器也会自动将其转换为链接。
- 要将URL或电子邮件地址快速转换为链接，请将其括在尖括号中。

网址：<http://www.example.com>

邮箱地址：<test@example.com>

如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接。

`http://www.example.com`

---

## 定义列表 (MPE)

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

---

## 图像

### Mermaid

Markdown Preview Enhanced 使用 [mermaid](https://github.com/mermaid-js/mermaid) 来渲染流程图和时序图。

- `mermaid` 代码块中的内容将会渲染 [mermaid](https://github.com/mermaid-js/mermaid) 图像。
- 查看 [mermaid](https://mermaid-js.github.io/mermaid/) 文档 了解更多如果创建图形。

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

---

## 缩略 (MPE)

```text
*[HTML]: Hyper Text Markup Language  
*[W3C]: World Wide Web Consortium  
The HTML specification  
is maintained by the W3C.  
```

*[HTML]: Hyper Text Markup Language  
*[W3C]: World Wide Web Consortium  
The HTML specification  
is maintained by the W3C.  

---

## 警报 (GFM)

```markdown
> [!NOTE]
> This is a note.

> [!TIP]
> This is a tip.

> [!IMPORTANT]
> This is important.

> [!WARNING]
> This is a warning.

> [!CAUTION]
> This is a caution.
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

---

## 隐藏有评论的内容

您可以通过在 HTML 评论中加入内容来指示 GitHub 隐藏渲染的 Markdown 中的内容。

```markdown
<!-- This content will not appear in the rendered Markdown -->
```

---

## 忽略 Markdown 格式

通过在 Markdown 字符前面输入 \，可指示 GitHub 忽略 Markdown 格式（或对其进行转义）。

```markdown
Let's rename \*our-new-project\* to \*our-old-project\*.
```

Let's rename \*our-new-project\* to \*our-old-project\*.

---

## 徽章

绘制徽章，首选就是 [shields.io](https://shields.io/)  具体语法去官网探索。

```text
https://img.shields.io/badge/{左半部分标签}-{右半部分标签}-{右半部分颜色}
```

![Author](https://img.shields.io/badge/Author-septwong-blue.svg)
[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/septwong.markdown-syntax?color=brightgreen&label=Visual%20Studio%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=septwong.markdown-syntax)
![Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/septwong.markdown-syntax)&nbsp;
![Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/septwong.markdown-syntax)&nbsp;
![Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/septwong.markdown-syntax)&nbsp;
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/septwong/markdown-syntax/main/LICENSE)&nbsp;
<a href="https://github.com/septwong/markdown-syntax">
    <img alt="markdown-syntax Repo stars" src="https://img.shields.io/github/stars/septwong/markdown-syntax">
</a>

其次有些第三方平台也提供方便的徽章，比如 [gitter.im](https://gitter.im)：

[![Join the chat at https://gitter.im/septwong/README](https://badges.gitter.im/septwong/README.svg)](https://gitter.im/septwong/README?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## star历史

star历史可以使用这个网站 [star-history.com](https://star-history.com/) or [github star-history](https://github.com/star-history/star-history)

```markdown
septwong/markdown-syntax -- github账号/项目名称

[![Star History Chart](https://api.star-history.com/svg?repos=septwong/markdown-syntax&type=Date)](https://star-history.com/#septwong/markdown-syntax&Date)
```

[![Star History Chart](https://api.star-history.com/svg?repos=septwong/markdown-syntax&type=Date)](https://star-history.com/#septwong/markdown-syntax&Date)

---

<!-- 复用资源： -->
[zhihu-avatar]: https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c "知乎头像"
[zhihu]: https://www.zhihu.com/people/septwong "我的知乎，欢迎关注"
