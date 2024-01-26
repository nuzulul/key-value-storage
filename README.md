# node-key-value-storage
Create data storage that uses a simple key-value method

[![NPM](https://nodei.co/npm/node-key-value-storage.png?mini=true)](https://www.npmjs.com/package/node-key-value-storage)
[![npm version](https://badge.fury.io/js/node-key-value-storage.svg)](https://www.npmjs.com/package/node-key-value-storage)

## Features

* ✅ 0 Dependencies
* ✅ NoSQL Database
* ✅ Lightwight

## Demo

[https://codesandbox.io/p/devbox/nodejs-key-value-storage-lk3g7f](https://codesandbox.io/p/devbox/nodejs-key-value-storage-lk3g7f)

## Installation

```javascript
npm install node-key-value-storage
```

## Initialization

```javascript
//ES Modules import style
import {Nkvs} from 'node-key-value-storage'

//CommonJS import style
const {Nkvs} = require('node-key-value-storage')

const db = await Nkvs.init({
	storageName:'mystorage'
})
```

## Example Usage

```javascript
import {Nkvs} from 'node-key-value-storage'

void async function main() {
	const db = await Nkvs.init({
		storageName:'mystorage'
	})
	
	console.log(await db.put('yes','no'))
	console.log(await db.get('yes'))
	console.log(await db.list())
	console.log(await db.delete('yes'))
}()
```

```javascript
const {Nkvs} = require('node-key-value-storage')

void async function main() {
	const db = await Nkvs.init({
		storageName:'mystorage'
	})
	
	console.log(await db.put('yes','no'))
	console.log(await db.get('yes'))
	console.log(await db.list())
	console.log(await db.delete('yes'))
}()
```

## API Reference

### Init Parameters

```javascript
await init({
	dataDirName?:string,
	storageName:string 
})
```
* dataDirName =  (Optional) Alphanumeric name of data directory (default = 'data')
* storageName = (Required) Alphanumeric name of storage

### Write key-value pairs

```javascript
await put(key:string,value:string)
```
The put() method returns a Promise that you should await on to verify a successful update which resolves with a boolean :
* true = Update successful
* false = Update failed
### Read key-value pairs

```javascript
await get(key:string)
```
The get() method returns a promise you can await on to get the value which resolves with:
* null = The key is not found
* data = Get the value successful
* false = Get the value failed

### List keys

```javascript
await list()
```
Use a list operation to view all the keys that live in a given storage, return a promise which resolves with an object:
* keys = Array of keys
* complete = True if operation complete

### Delete key-value pairs

```javascript
await delete(key:string)
```

To delete a key-value pair, call the delete() method, return a promise which resolves with:
* null = The key is not found
* true = Delete successful
* false = Delete failed

## License

MIT