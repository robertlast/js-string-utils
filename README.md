# string-utils *0.1.0*

> Utilities for dealing with strings.


### capitalize.js


#### capitalize(str) 

Returns the given string with first letter capitalized and the rest lowercase.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to be capitalize. | &nbsp; |




##### Returns


- `string`  Capitalized string.




### is-date.js


#### isDate(val) 

Does the given string represent a date?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The string value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-empty.js


#### isEmpty(val) 

Is the given value an empty string or undefined?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-false.js


#### isFalse(val) 

Is the given value false (boolean)?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-null.js


#### isNull(val) 

Is the given value null?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-number.js


#### isNumber(val) 

Is the given value a number?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### is-true.js


#### isTrue(val) 

Is the given value true (boolean)?




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| val | `string`  | The value to check. | &nbsp; |




##### Returns


- `boolean`  




### parse.js


#### parse(str) 

Converts a string to a non-string value if possible. 
Can be used as a reviver function for JSON.parse.
e.g. converts 'true'->true, 'null'->null, '3'->3.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | - The string to convert. | &nbsp; |




##### Returns


- `boolean` `number` `Date` `string`  




### title-case.js


#### toTitleCase(str) 

Returns the given string in title case (capitalize first letter of each word).




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| str | `string`  | The string to format. | &nbsp; |




##### Returns


- `string`  Formatted string.




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
