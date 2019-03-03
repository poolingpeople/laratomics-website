(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{174:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"create-a-new-pattern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a new Pattern")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#create-a-new-pattern-within-the-workshop"}},[t._v("Create a new pattern within the workshop")])]),s("li",[s("a",{attrs:{href:"#code-the-blade-file"}},[t._v("Code the Blade file")])]),s("li",[s("a",{attrs:{href:"#code-the-md-file"}},[t._v("Code the md file")])]),s("li",[s("a",{attrs:{href:"#code-the-scss-file"}},[t._v("Code the scss file")]),s("ul",[s("li",[s("a",{attrs:{href:"#importing-the-patterns-scss"}},[t._v("Importing the patterns.scss")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"create-a-new-pattern-within-the-workshop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-pattern-within-the-workshop","aria-hidden":"true"}},[t._v("#")]),t._v(" Create a new pattern within the workshop")]),t._v(" "),s("p",[t._v("You can create a new pattern by clicking the button at the top right corner of the workshop or by using the shortcut\n"),s("code",[t._v("c")]),t._v(". This will open the form to create a new pattern.")]),t._v(" "),s("p",[t._v("The pattern has to have a name. The name can be nested by using the dot-notation that you are familiar with the Blade\nview notation.")]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("In theory, you can nest a pattern how often you want. Though, we recommend a nesting level of 2-5.")])]),t._v(" "),s("p",[t._v("Example names for patterns:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("buttons.submit\nbuttons.cancel\n")])])]),s("p",[t._v("Or following the atomic design methodology:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("atoms.buttons.submit\norganisms.forms.signin\n")])])]),s("p",[t._v("The description is optional and can contain markdown content.")]),t._v(" "),s("p",[t._v("The workshop creates three files for each pattern (e.g. buttons.submit)")]),t._v(" "),s("ul",[s("li",[t._v("buttons/submit.blade.md")]),t._v(" "),s("li",[t._v("buttons/submit.scss")]),t._v(" "),s("li",[t._v("buttons/submit.md")])]),t._v(" "),s("p",[t._v("The scss file is automatically imported in a base scss file called pattern.scss. You have to import this file in your\napp's "),s("code",[t._v("app.scss")]),t._v(" file in order to use your pattern's stylings.")]),t._v(" "),s("p",[t._v("Now head over to your IDE and open one of the created files to start coding.")]),t._v(" "),s("h2",{attrs:{id:"code-the-blade-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-the-blade-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Code the Blade file")]),t._v(" "),s("p",[t._v("In your Blade file, you can write Blade code as usual. You can use variables, too.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"submit"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"button button-rounded"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$caption")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Make sure that you define any template variables in the front-matter part of the corresponding md file."),s("br"),t._v("\nThis also enables a certain independence from backend implementation since you can mock variable data.")])]),t._v(" "),s("h2",{attrs:{id:"code-the-md-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-the-md-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Code the md file")]),t._v(" "),s("p",[t._v("The pattern's markdown file consists of two parts:")]),t._v(" "),s("ul",[s("li",[t._v("front-matter")]),t._v(" "),s("li",[t._v("body")])]),t._v(" "),s("p",[t._v("The body simply contains the optional description.")]),t._v(" "),s("p",[t._v("The front-matter part contains the following keys and values:")]),t._v(" "),s("ul",[s("li",[t._v("status: The status of the pattern. This is either: todo, review, rejected or done. You don't have to edit this value manually. It is set via the workshop.")]),t._v(" "),s("li",[t._v("values: This key contains all variable data, that is used in the Blade template file.")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\nstatus: review\nvalues:\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    caption: Save")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Submit button")]),t._v("\nThis button can be used to submit a form.\n")])])]),s("h2",{attrs:{id:"code-the-scss-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-the-scss-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Code the scss file")]),t._v(" "),s("p",[t._v("The scss file contains the required style for this pattern.")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".button ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4CAF50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".button-rounded ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 8px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("After creating a new pattern you are redirected to the preview page of the pattern. In the beginning, this view is more or less empty unless you start coding.")]),t._v(" "),s("h3",{attrs:{id:"importing-the-patterns-scss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#importing-the-patterns-scss","aria-hidden":"true"}},[t._v("#")]),t._v(" Importing the patterns.scss")]),t._v(" "),s("p",[t._v("Make sure that you import the newly created WORKSHOP_PATTERN_PATH/patterns.scss file in your application's main app.scss file, in order to use your style definitions.")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../views/patterns/patterns'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Run "),s("code",[t._v("npm run dev")]),t._v(" to compile your frontend.")])])])}],!1,null,null,null);n.options.__file="create-pattern.md";e.default=n.exports}}]);