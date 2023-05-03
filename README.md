<p align="center">
  <!-- <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a> -->
</p>

<h1 align="center">Biee-ui</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/bieefilled/library.svg)](https://github.com/bieefilled/library/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/bieefilled/library.svg)](https://github.com/bieefilled/library/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A React Ui Library
    <br>
</p>

## overview <a name = "getting_started"></a>

React Ui library with Various reusable components.

<!-- ## 🧐 Overview <a name = "about"></a> -->
## Installation

```javascript
npm install biee-ui
```

## Usage

creating buttons

```java

import {Button} from 'biee-ui'

export const yourComponent=()=>{

return (

<Button name="Submit" type="submit" onclick={()=>{alert("clicked")}}/>

)
}
```

-Advance Button customization

| Style |  Descriptions |
| :--------------:|:--------------:|
| variant    | "default", "primary", "success"  |
|style       |  tailwind-css styles  |

## ContactForm

The ContactForm returns an object to access it you need to create a state and pass the as seen in the example below

```java
import React, {useState} from 'react'
import {ContactForm} from 'biee-ui'

export const yourComponent=()=>{

const [data, setData]=useState({});

function FormData(e){
  setData(e);
}

return (

<ContactForm formData={Formdata}/>

)
}
```

## Inputs

```java
import React, {useState} from 'react'
import {Input} from 'biee-ui'

export const yourComponent=()=>{

const [data, setData]=useState({});

function inputData(e){
  setData(e.target.value);
}

return (

<Input type="text" name="full name" onchange={(e)=>{inputData}} label="Username"/>
<Input type="text" name="" onchange={(e)=>{inputData}} textarea label="message"/>


)
}
```

-Advance input customization

| Style |  Descriptions |
| :--------------:|:--------------:|
| name    | String  |
|style       |  tailwind-css styles  |
| onChange    | Function  |
|value       |  String  |
| textarea    | by default is false |
|label       |  String  |
