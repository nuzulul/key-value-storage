# key-value-storage
Create data storage that uses a simple key-value method

[![NPM](https://nodei.co/npm/node-key-value-storage.png?mini=true)](https://www.npmjs.com/package/node-key-value-storage)

## Features

* ✅ 0 Dependencies
* ✅ NoSQL
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

const nkvs = new Nkvs({
	storageName:'mystorage'
})
```

## Example Usage

```javascript
import {Nkvs} from 'node-key-value-storage'

void async function main() {
	const nkvs = new Nkvs({
		storageName:'mystorage'
	})
	console.log(await nkvs.put('yes','no'))
	console.log(await nkvs.get('yes'))
	console.log(await nkvs.list())
	console.log(await nkvs.delete('yes'))
}()
```

```javascript
const {Nkvs} = require('node-key-value-storage')

void async function main() {
	const nkvs = new Nkvs({
		storageName:'mystorage'
	})
	console.log(await nkvs.put('yes','no'))
	console.log(await nkvs.get('yes'))
	console.log(await nkvs.list())
	console.log(await nkvs.delete('yes'))
}()
```

## API Reference

### Write key-value pairs

```javascript
await put(key:string,value:string)
```

### Read key-value pairs

```javascript
await get(key:string)
```

### List keys

```javascript
await list()
```

### Delete key-value pairs

```javascript
await delete(key:string)
```

## License

MIT