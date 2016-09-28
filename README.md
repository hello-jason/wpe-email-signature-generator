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

* View in browser - [http://localhost:8001/dist](http://localhost:8001/dist)

```bash
gulp connect
```

---

## Deploying

* Build project

```bash
gulp build
```

* Add files to repo, commit, and push

* Update wpeng.in/signature URL shortener
  1. In GitHub, go to the Code tab, then click Commits
  1. For the most recent commit, click the code button at the far right titled "Browse the repository at this point in the history"
  1. Navigate to `dist/index.html`, then click the "Raw" button from the toolbar
  1. Copy this URL
  1. Visit https://rawgit.com/, and paste in the URL into the uppermost field
  1. Copy the `Production` URL that is generated
  1. Log into wpeng.in WP site
  1. Edit Link named `Email Signature Generator`
  1. Change `Destination URL` to new url on your clipboard
  1. Save changes

---

## Gulp tasks

*watch* - Runs a server at [http://localhost:8001/dist](http://localhost:8001/dist). Watches for changes in src/scss/*.scss then runs build task. Useful while developing.

```bash
gulp watch
```

*build* - Master build task. Compiles SCSS, moves html/images into `dist` folder, runs autoprefixer, minifies, etc.

```bash
gulp build
```
