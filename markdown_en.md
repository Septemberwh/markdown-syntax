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
|---|----|:---:|:---:|
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

## Supported color models (GFM)

> GitHub：The visualization of the color is only supported in issues, pull requests, and discussions.

```markdown
The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

The background color is `#ffffff` for light mode and `#000000` for dark mode.

|Color|Example|
|----|:---:|
|HEX|`#0969DA`|
|RGB|`rgb(9, 105, 218)`|
|HSL|`hsl(212, 92%, 45%)`|


## Divider

```text
--- hyphen
---- multiple hyphens
*** asterisk
***** multiple asterisks
___ underline
```

---

## Images

<!-- The image alt is the text displayed below the image, which is equivalent to an explanation of the content of the image.  
The image title is the title of the image, which displays the content when the mouse hovers over the image. The title can be added or not. -->

```markdown
![alt text](url "title")  
![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "blockchain")
![Zhihu avatar][zhihu-avatar] 
[![Zhihu Avatar][zhihu-avatar]][zhihu]
<img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="description text" width="40" height="40"> -- Control the size of images
```

|#|Example|Output|
|---|----|:---:|
|1| `![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "blockchain")` | ![blockchain](https://upload-images.jianshu.io/upload_images/6860761-fd2f51090a890873.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/550/format/webp "blockchain") |
|2| `![Zhihu avatar][zhihu-avatar]` | ![Zhihu avatar][zhihu-avatar] |
|3| `[![Zhihu avatar][zhihu-avatar]][zhihu]` | [![Zhihu avatar][zhihu-avatar]][zhihu] |
|4| `<img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="description text" width="40" height="40">` | <img src="https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c" alt="description text" width="40" height="40"> |

<!-- > • The width and height attributes can use pixel values (such as 40px) or percentages (such as 50%).  
> • On GitHub, using the `<img>` tag can successfully resize images.  
> • Please note that when inserting images using the standard Markdown syntax `![alt text](url)`, the size cannot be directly controlled. If resizing is required, HTML must be used.  

> The URL identifiers for `[zhihu-avatar]` and `[zhihu]` in this article are placed at the end of the text.  
> `[zhihu]: https://www.zhihu.com/people/septwong "My Zhihu, welcome to follow"` -->

---

## Links

```markdown
[alt text](url "title")
Title can be added or omitted

[Baidu](http://baidu.com "Baidu")
[My Zhihu][zhihu] -- zhihu: Reuse, put at the end of the article
[test.md](./test.md) -- local url
```

|#|Example|Output|
|---|----|:---:|
|1|`[Baidu](http://baidu.com "Baidu")`|[Baidu](http://baidu.com "Baidu")|
|2|`[My Zhihu][zhihu]`|[My Zhihu][zhihu]|
|3|`[test.md](./test.md)`|[test.md](./test.md)|

---

## Lists

`Unordered list`:

```markdown
- List Content
+ List Content
* List Content
```

- List Content

- List Content

- List Content

`Ordered List`:

```markdown
1. List Content
2. List Content
3. List Content
```

1. List Content
2. List Content
3. List Content

`List nesting`:

```markdown
- First level sequence
  - Secondary sequence
  - Secondary sequence
```

- First level sequence
  - Secondary sequence
  - Secondary sequence

---

## Tables

Add a colon to the left, right, or both sides of the hyphen（:），Align the text in the column to the left, right, or center.

```markdown
| Head | Head | Head |
| ---- | :---: | ---: |
| Content | Content  | Content |
| Content | Content  | Content |
```

<!-- 第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
- 两边加：表示文字居中
- 右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略 -->

| Name | Skill  | Ranking |
| ---- | :---: | ---: |
| Liu Bei |  Cry   | 1 |
| Guan Yu |  Strike   | 2 |
| Zhang Fei |  Scold  | 3 |

```markdown
Center the table

<div align="center">

| Head | Head |
| ---------- | -----------|
| Cell | Cell |
| Cell | Cell |

</div>
```

---

## Quoting code

`Single line code`:

```javascript
 `Code Content`
```

`Code block`:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

`Code block` (MPE) : `class`

```javascript {.class1, class2}
// ```javascript {.class1, class2}
function add(x, y) {
  return x + y
}
```

`Lines of code` (MPE) : `line-numbers`

```javascript {.line-numbers}
// ```javascript {.line-numbers}
function add(x, y) {
  return x + y
}
```

`Highlighted code lines` (MPE) : `highlight`

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

Each title is an anchor point (``#``).

|Example|Output|
|---|---|
|`[Return to Headings](#headings)`|[Return to Headings](#headings)|
|`<a id="custom-anchor">custom-anchor</a>`|<a id="custom-anchor">custom-anchor</a>|

🔥Tips：All English letters in the title are converted to lowercase letters and spaces are replaced with short horizontal lines.

---

## Title Number (MPE)

```markdown
### My Great Heading {#customId}
```

### Heading Number Example {#10}

Jump to other files example [test.md#1](./test.md#1)

---

## Diff Highlight

`+`: Add  
`-`: Delete  
`!`: Modify  
`#`: Line number  

```diff
+ In the morning，
- In the afternoon,
! In the evening,
# In the night
```

---

## Task lists

- [ ] To be completed
- [x] Completed
- [ ] ~~Incomplete~~

---

## Folding content

<details>
<summary>Menu</summary>

Menu content

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

- Without using square brackets, your Markdown processor will automatically convert it into a link.
- To quickly convert a URL or email address into a link, please enclose it in angle brackets.

URL：<http://www.example.com>

e-mail address：<test@example.com>

If you do not want the URL to be automatically linked, you can remove the link by representing the URL as code with back quotes.

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

[mermaid](https://github.com/mermaid-js/mermaid) : Rendering flowcharts and timing diagrams.

[mermaid document](https://mermaid-js.github.io/mermaid/)

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

Draw badges: [shields.io](https://shields.io/)

```text
https://img.shields.io/badge/{left text}-{right text}-{right color}
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

Others: [gitter.im](https://gitter.im)：

[![Join the chat at https://gitter.im/guodongxiaren/README](https://badges.gitter.im/guodongxiaren/README.svg)](https://gitter.im/guodongxiaren/README?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Star History

star history website: [star-history.com](https://star-history.com/) or [github star-history](https://github.com/star-history/star-history)

```markdown
Septemberwh/markdown-syntax -- github account/project name

[![Star History Chart](https://api.star-history.com/svg?repos=Septemberwh/markdown-syntax&type=Date)](https://star-history.com/#Septemberwh/markdown-syntax&Date)
```

[![Star History Chart](https://api.star-history.com/svg?repos=Septemberwh/markdown-syntax&type=Date)](https://star-history.com/#Septemberwh/markdown-syntax&Date)

---

<!-- Reuse resources： -->
[zhihu-avatar]: https://pica.zhimg.com/91d97c65727a03b5ac9f59cd2c701c7d_l.jpg?source=32738c0c "Zhihu avatar"
[zhihu]: https://www.zhihu.com/people/septwong "My Zhihu, welcome to follow"
