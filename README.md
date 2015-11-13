# nice-alerts
Nice Alerts for nice ppl. 

## Development Dependencies
1. Node/NPM - http://nodejs.org
2. Grunt -  http://gruntjs.com - `npm install -g grunt grunt-cli`

## Development Environment Setup
1. Clone repo into new folder
2. `cd` into folder if you aren't already there
3. `npm install`

## Other Development Info
* `grunt watch` while developing
* `grunt qa` to run acceptance tests (Karma w/ Jasmine)


## Usage
1. Include the `dist/nice-alerts.js` or `dist/nice-alerts.min.js` on you page
2. The `niceAlert` global variable (`window.niceAlert`) is exposed for your use
3. To show the default alert, simply call the method `niceAlert.show()`
4. To show an alert of your specification, please pass an options (see below) object to the niceAlert method.


## Options

### type

Type: `string`

Choices: `'info'`, `'success'`, `'warning'`, `'confirm'`, `'failure'`

Default: `'info'`


Each type has an associated icon. Functionally, they are all the same except for `'confirm'`. 
Confirm will also show two buttons for "confirming" or "denying".


### message
Type: `string`

Default: `'This is an alert!'`

The message you want to deliver or the question that you want to ask the user.


### duration
Type: `int`  

Default: `0`

The amount of time you want the alert to appear to the user before it dissapears. 
Passing 0, or nothing at all, will cause the alert to stay visible until it is closed by the user.


### closeHandler
Type: `Function`  

Default: `null`

A function that gets called any time the alert disappears.


### confirmText
Type: `String`  

Default: `'Yes'`

Text to be shown on the green confirm button. Only effective when the type option value is `'confirm'`.


### denyText
Type: `String`

Default: `'No'`

Text to be shown on the red deny button. Only effective when the type option value is `'confirm'`.


### confirmHandler
Type: `Function`  

Default: `null`

Callback to run when the confirm button is clicked.  Only effective when the type option value is `'confirm'`.


### denyHandler
Type: `Boolean`  

Default: `false`

Callback to run when the deny button is clicked.  Only effective when the type option value is `'confirm'`.


## Events

### `'nice:hidden'`
Target: `document`

Example Usage: `document.addEventListener('nice:hidden', function () { /* Stuff to do when alert is hidden */ });`

Event is fired any time the alert is hidden.


### `'nice:shown'`
Target: `document`

Example Usage: `document.addEventListener('nice:shown', function () { /* Stuff to do when alert is shown */ });`

Event is fired any time the alert appears.
