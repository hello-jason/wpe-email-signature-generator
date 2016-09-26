# WP Engine Email Signature Generator

URL: http://wpeng.in/signature

## Instructions for use

1. Type your information into the form on the left, and it will generate your email signatures on the right.
1. Copy the contents inside the square of the signature you want to use into your desired email program.

![Instructional GIF](https://raw.githubusercontent.com/hello-jason/wpe-email-signature-generator/master/src/images/WP-GIF-CopyEmailSignature-v01.gif)

*Note:* some email programs (like Nylas N1) have issues when pasting HTML. Use the raw HTML tab to grab the source code directly.

## Known Issues

1. Type into any optional field (phone numbers, twitter), then erase your text. The raw HTML for that thing is still in the generated output, just hidden.

---

## Setup for development

* Clone repo

* Install node dependencies

```bash
npm install
```
* Build project

```bash
gulp build
```

* View in browser - http://localhost:8001/dist

```bash
gulp connect
```

### Gulp tasks

*watch* - Runs a server at http://localhost:8001/dist. Watches for changes in src/scss/*.scss then runs build task. Useful while developing.

```bash
gulp watch
```

*build* - Compiles SCSS, moves html/images into `dist` folder

```bash
gulp build
```
