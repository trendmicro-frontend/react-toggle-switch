# react-toggle-switch [![build status](https://travis-ci.org/trendmicro-frontend/react-toggle-switch.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-toggle-switch) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-toggle-switch/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-toggle-switch?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-toggle-switch.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-toggle-switch/)

React Toggle Switch

Demo: https://trendmicro-frontend.github.io/react-toggle-switch

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-toggle-switch](https://github.com/trendmicro-frontend/react-toggle-switch):

  ```
  npm install --save react @trendmicro/react-toggle-switch
  ```

2. At this point you can import `@trendmicro/react-toggle-switch` and its styles in your application as follows:

  ```js
  import ToggleSwitch from '@trendmicro/react-toggle-switch';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
  ```

## Usage

### Uncontrolled Component

```js
<ToggleSwitch
    checked
    ref={(node) => {
        this.toggleSwitch = node;
    }}
/>
```

You can get the value of the checked attribute:

```js
console.log(this.toggleSwitch.checked);
// => true
```

### Controlled Component

```js
<ToggleSwitch
    checked={this.state.checked}
    onChange={(event) => {
        this.setState({ checked: !this.state.checked });
    }}
/>
```

## API

### Properties

<table>
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Type</th>
      <th align="left">Default</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>checked</td>
      <td>boolean</td>
      <td>false</td>
      <td></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>boolean</td>
      <td>false</td>
      <td></td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>function</td>
      <td></td>
      <td>A callback fired when toggling checked state.</td>
    </tr>
    <tr>
      <td>size</td>
      <td>One of:<br>'large'<br>'lg'<br>'small'<br>'sm'</td>
      <td>'lg'</td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
