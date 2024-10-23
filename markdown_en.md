# Markdown Syntax

---

> GitHub Flavored Markdown: [GFW](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)。  
> Markdown Preview Enhanced: [MPE](https://shd101wyy.github.io/markdown-preview-enhanced/#/)。

---

## Headings

```markdown
# A first-level heading
## A second-level heading
### A third-level heading
#### A four-level heading
##### A fifth-level heading
###### A six-level heading
```

# A first-level heading

## A second-level heading

### A third-level heading

#### A four-level heading

##### A fifth-level heading

###### A six-level heading

```markdown
Customize title style (MPE)：
### This title has 2 classes {.class1 .class2}
```

The title has 2 classes {.class1 .class2} [test.md#2](./test.md#2)

---

## Styling text

|#|Example|Output|Keyboard shortcut|
|---|----|:---:|:---|
|1|`*italic 1*`|*italic 1*|`Command`+`I` (Mac) or `Ctrl`+`I` (Windows/Linux)|
|2|`_italic 2_`|*italic 2*|
|3|`**bold 1**`|**bold 1**|`Command`+`B` (Mac) or `Ctrl`+`B` (Windows/Linux)|
|4|`__bold 2__`|**bold 2**|
|5|`***italic bold 1***`|***italic bold 1***|
|6|`___italic bold 2___`|***italic bold 2***|
|7|`***~~italic bold strikethrough 1~~***`|***~~italic bold strikethrough 1~~***|
|8|`~~***italic bold strikethrough 2***~~`|~~***italic bold strikethrough 2***~~|
|9|`*You can **combine** these symbols*`|*You can **combine** these symbols*|
|10|`This is a ~~strikethrough~~`|This is a ~~strikethrough~~|
|11|`<font color="#ff79aa">Colored text 1 (no GFM)</font>`|<font color="#ff79aa">有Colored text 1 (no GFM)</font>|
|12|`<span style="color:#ff79aa">Colored text 2 (no GFM)</span>`|<span style="color:#ff79aa">Colored text 2 (no GFM)</span>|
|13|`==This is the marked text (MPE)==`|==This is the marked text (MPE)==|
|14|`subscript<sub>text</sub>here`|subscript<sub>text</sub>here|
|15|`superscript<sup>text</sup>here`|superscript<sup>text</sup>here|
|16|`30^th^`|30^th^ (MPE)|
|17|`H~2~O`|H~2~O (MPE)|

> Markdown rendering on GitHub does not support directly changing font colors through standard Markdown or HTML tags.

---

## Quoting text

```markdown
> Text that is not a quote
>> Text that is not a quote
>>>>>>>>>> Text that is not a quote
```

> Text that is not a quote
>> Text that is not a quote
>>>>>>>>>> Text that is not a quote

## Supported color models

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

## Images

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

## Links

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

## Lists

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

## Tables

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

## Quoting code

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

## Custom anchors

其实呢，每一个标题都是一个锚点，和HTML的锚点（`#`）类似，比如我们

|语法|效果|
|---|---|
|`[回到标题](#标题)`|[回到标题](#标题)|
|`<a id="custom-anchor">custom-anchor</a>`|<a id="custom-anchor">custom-anchor</a>|

🔥注意：标题中的英文字母都被转化为**小写字母**了, 并且将**空格**替换为**短横线（-）**。

---

## Title Number (MPE)

```markdown
### My Great Heading {#customId}
```

### Heading Number Example {#10}

Jump to other files example [test.md#1](./test.md#1)

---

## Diff Highlight

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

## Task lists

- [ ] 待完成
- [x] 已完成
- [ ] ~~未完成~~

---

## Folding content

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

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

---

## Emoji

```markdown
@octocat :+1: This PR looks great - it's ready to merge! :shipit:
```
@octocat :+1: This PR looks great - it's ready to merge! :shipit:

> For a full list of available emoji and codes, see [the Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

---

## Website and email address

- 未使用方括号，您的Markdown处理器也会自动将其转换为链接。
- 要将URL或电子邮件地址快速转换为链接，请将其括在尖括号中。

网址：<http://www.example.com>

邮箱地址：<test@example.com>

如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接。

`http://www.example.com`

---

## Definition List (MPE)

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

---

## Flow Chart

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

## Abbreviation (MPE)

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

## Alerts (GFM)

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

## Hiding content with comments

You can tell GitHub to hide content from the rendered Markdown by placing the content in an HTML comment.

```markdown
<!-- This content will not appear in the rendered Markdown -->
```

---

## Ignoring Markdown formatting

You can tell GitHub to ignore (or escape) Markdown formatting by using \ before the Markdown character.

```markdown
Let's rename \*our-new-project\* to \*our-old-project\*.
```

Let's rename \*our-new-project\* to \*our-old-project\*.

---

## Badge

绘制徽章，首选就是 [shields.io](https://shields.io/)  具体语法去官网探索。

```text
https://img.shields.io/badge/{左半部分标签}-{右半部分标签}-{右半部分颜色}
```

![Author](https://img.shields.io/badge/Author-Septemberwh-blue.svg)
[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/septwong.markdown-syntax?color=brightgreen&label=Visual%20Studio%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=septwong.markdown-syntax)
![Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/septwong.markdown-syntax)&nbsp;
![Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/septwong.markdown-syntax)&nbsp;
![Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/septwong.markdown-syntax)&nbsp;
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/Septemberwh/markdown-syntax/main/LICENSE)&nbsp;
<a href="https://github.com/Septemberwh/markdown-syntax">
    <img alt="markdown-syntax Repo stars" src="https://img.shields.io/github/stars/Septemberwh/markdown-syntax">
</a>

其次有些第三方平台也提供方便的徽章，比如 [gitter.im](https://gitter.im)：

[![Join the chat at https://gitter.im/guodongxiaren/README](https://badges.gitter.im/guodongxiaren/README.svg)](https://gitter.im/guodongxiaren/README?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Star History

star历史可以使用这个网站 [star-history.com](https://star-history.com/) or [github star-history](https://github.com/star-history/star-history)

```markdown
Septemberwh/markdown-syntax -- github账号/项目名称

[![Star History Chart](https://api.star-history.com/svg?repos=Septemberwh/markdown-syntax&type=Date)](https://star-history.com/#Septemberwh/markdown-syntax&Date)
```

[![Star History Chart](https://api.star-history.com/svg?repos=Septemberwh/markdown-syntax&type=Date)](https://star-history.com/#Septemberwh/markdown-syntax&Date)

---

<!-- 复用资源： -->
[zhihu-avatar]: https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c "知乎头像"
[zhihu]: https://www.zhihu.com/people/septwong "我的知乎，欢迎关注"
