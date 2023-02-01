# topics

class and className,color,background ,css selectors,
margin,
padding,
position,
flex,
grid ,
text-align,
css box model,
zindex,
negative margin,
important,

# border

The CSS border properties allow you to specify the style, width, and color of an element's border.

# width

Definition and Usage
The height property sets the height of an element.

If height is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified height, it will overflow. How the container will handle the overflowing content is defined by the overflow property.

Note: The min-height and max-height properties override the height property.

# height

Definition and Usage
The width property sets the width of an element.

The width of an element does not include padding, borders, or margins!

Note: The min-width and max-width properties override the width property.

# overflow

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary

# text alignment

Definition and Usage
The text-align property specifies the horizontal alignment of text in an element.

div {
text-align: center;
}

div {
text-align: left;
}

div {
text-align: right;
}

div {
text-align: justify;
}

# min width

Definition and Usage
The min-width property defines the minimum width of an element.

If the content is smaller than the minimum width, the minimum width will be applied.

If the content is larger than the minimum width, the min-width property has no effect.

Note: This prevents the value of the width property from becoming smaller than min-width.

# max width

Definition and Usage
The max-width property defines the maximum width of an element.

If the content is larger than the maximum width, it will automatically change the height of the element.

If the content is smaller than the maximum width, the max-width property has no effect.

Note: This prevents the value of the width property from becoming larger than max-width. The value of the max-width property overrides the width property.

# What are Pseudo-classes? and hover and focus

A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

a:link {
color: #FF0000;
}

/_ visited link _/
a:visited {
color: #00FF00;
}

/_ mouse over link _/
a:hover {
color: #FF00FF;
}

/_ selected link _/
a:active {
color: #0000FF;
}

# What are Pseudo-Elements?

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element
a:nth-child(1) and first-child

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

# @media screen

CSS3 Introduced Media Queries
Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.

Media queries can be used to check many things, such as:

width and height of the viewport
width and height of the device
orientation (is the tablet/phone in landscape or portrait mode?)
resolution
Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).
