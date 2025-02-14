/**
  input: []
  params:
    - name: markdown
      label: Markdown
      type: string
      example: 'Hello **World**'
      description: A markdown string to render.
      value:
        - control: textbox
          value: Hello **World**
  output: [ html ]
  deps:
    - https://cdnjs.cloudflare.com/ajax/libs/showdown/2.0.0/showdown.min.js
  layout:
    - width: 300px
      height: 250px
  state: session
**/

const converter = new showdown.Converter();
html.innerHTML = converter.makeHtml(markdown);
