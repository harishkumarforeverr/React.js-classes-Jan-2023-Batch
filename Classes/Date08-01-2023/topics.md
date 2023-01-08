# topics

h1 and div and ol and li p, b, span, br, title, textarea, a and h1 tag difference, img, table,iframe, html, input, button,html,body,head,script tag, antd component and

# html
  
The <html> tag represents the root of an HTML document. The <html> tag is the container for all other HTML elements (except for the <!DOCTYPE> tag). Note: You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

# What is body tag in HTML?

The <body> tag defines the document's body. The <body> element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. Note: There can only be one <body> element in an HTML document.

# footer

The <footer> tag defines a footer for a document or section. A <footer> element typically contains: authorship information. copyright information.

# head

The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. Metadata is data about the HTML document. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.

# script tag

The <script> tag is used to embed a client-side script (JavaScript). The <script> element either contains scripting statements, or it points to an external script file through the src attribute. Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.

# title

The <title> tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

# h1 tag

The <h1> to <h6> tags are used to define HTML headings. <h1> defines the most important heading. <h6> defines the least important heading. Note: Only use one <h1> per page - this should represent the main heading/subject for the whole page.

# p element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

# div

The <div> tag defines a division or a section in an HTML document. The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript. The <div> tag is easily styled by using the class or id attribute. Any sort of content can be put inside the <div> tag!



# What is the input tag in HTML?

The <input> tag specifies an input field where the user can enter data. The <input> element is the most important form element. The <input> element can be displayed in several ways, depending on the type attribute. The different input types are as follows: <input type="button">

# What is the button tag in HTML?

The <button> tag in HTML is used to define the clickable button. <button> tag is used to submit the content. The images and text content can use inside <button> tag. Different browsers use different default types for <button>. Buttons can be styled using CSS.

# What is IMG tag in HTML?

The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image. The <img> tag has two required attributes: src - Specifies the path to the image.

# textarea

The <textarea> tag defines a multi-line text input control. The <textarea> element is often used in a form, to collect user inputs like comments or reviews.

# a tag

Definition and Usage. The <a> tag defines a hyperlink, which is used to link from one page to another. The most important attribute of the <a> element is the href attribute, which indicates the link's destination. By default, links will appear as follows in all browsers: An unvisited link is underlined and blue.

# b

The <b> tag specifies bold text without any extra importance.

# br

The <br> tag inserts a single line break. The <br> tag is useful for writing addresses or poems. The <br> tag is an empty tag which means that it has no end tag.

# ol

The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical. The <li> tag is used to define each list item. Tip: Use CSS to style lists.

# ul

The <ul> tag defines an unordered (bulleted) list. Use the <ul> tag together with the <li> tag to create unordered lists. Tip: Use CSS to style lists. Tip: For ordered lists, use the <ol> tag.

# li

The <li> tag defines a list item. The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>). In <ul> and <menu>, the list items will usually be displayed with bullet points. In <ol>, the list items will usually be displayed with numbers or letters.

# span

The <span> tag is an inline container used to mark up a part of a text, or a part of a document. The <span> tag is easily styled by CSS or manipulated with JavaScript using the class or id attribute. The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.

# Block-level Elements(height, weight, margin,padding)

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Two commonly used block elements are: <p> and <div>.

The <p> element defines a paragraph in an HTML document.

The <div> element defines a division or a section in an HTML document.

# Inline Elements(no height, no weight and no margin top and bottom)

An inline element does not start on a new line.

An inline element only takes up as much width as necessary.

This is a <span> element inside a paragraph.

# Inline Block Elements(height, weight, margin,padding)

The display value of inline-block works similarly to inline with one exception: the height and width of that element become modifiable.

The display: inline-block Value
Compared to display: inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.

# Inline elements:

respect left & right margins and padding, but not top & bottom
cannot have a width and height set
allow other elements to sit to their left and right.
see very important side notes on this here.

# Block elements:

respect all of those
force a line break after the block element
acquires full-width if width not defined

# Inline-block elements:

allow other elements to sit to their left and right
respect top & bottom margins and padding
respect height and width

# andt Button sample demo


# iframe

The <iframe> tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document. Tip: Use CSS to style the <iframe> (see example below). Tip: It is a good practice to always include a title attribute for the <iframe> .