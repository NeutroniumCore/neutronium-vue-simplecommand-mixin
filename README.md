# neutronium vue simple command mixin
<p align="center"><img width="100"src="https://raw.githubusercontent.com/NeutroniumCore/neutronium-vue/master/template/src/assets/logo.png"></p>
Mixin to integrate MVVM ISimpleCommand with vue

[![Npm version](https://img.shields.io/npm/v/neutronium-vue-simple-command-mixin.svg?maxAge=2592000)](https://www.npmjs.com/package/neutronium-vue-simple-command-mixin)
[![MIT License](https://img.shields.io/github/license/NeutroniumCore/neutronium-vue-simplecommand-mixin.svg)](https://github.com/NeutroniumCore/neutronium-vue-simplecommand-mixin/blob/master/LICENSE)
[![Npm version](https://img.shields.io/npm/v/neutronium-vue-simple-command-mixin.svg?maxAge=2592000)](https://www.npmjs.com/package/neutronium-vue-simple-command-mixin)


## Usage
Provide mixin to easily integrate ISimpleCommand in vue.js using Neutronium.
Component this mixin exposes:

## Props
#### `command`
Type: `Array`<br>
Required: `true`<br>

The property corresponding to the C# command.

### `arg`
Type: `Object`<br>
Required: `false`

The argument that will be passed to command when execute is called.

## Methods
### `execute`

Call the corresponding command with the argument `arg`

## Events
### `beforeExecute`

Called before calling command execute if CanExecute is true. 

The event argument provides two properties: 
* `arg`: `Object` the command argument, 
* `cancel`: `false` set it to true to cancel the execution

### `afterExecute`

Called after calling command execute. 

The event argument is the command argument. 


## Example
Declaring buttonCommand component in a .vue file (using semantic ui):
 
```javascript
<template>
  <div class="ui button" :arg="param" @click="execute">   
    <slot></slot>  
  </div>
</template>
<script>
import comandMixin from 'neutronium-vue-simple-command-mixin'

export default {
  mixins:[comandMixin]
}
</script>

<style>
</style>
```

Using button-command:

```html
<button-command :command="compute">
	Submit
</button-command> 
```

### Installation
- Available through:
``` js
 npm install neutronium-vue-simple-command-mixin --save
```
