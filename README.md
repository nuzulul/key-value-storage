# key-value-storage
Create data storage that uses a simple key-value method

[![NPM](https://nodei.co/npm/key-value-storage.png?mini=true)](https://www.npmjs.com/package/key-value-storage)

## Features

* ✅ 0 Dependencies
* ✅ NoSQL
* ✅ Lightwight

## Demo

[https://codesandbox.io/p/devbox/nodejs-key-value-storage-lk3g7f](https://codesandbox.io/p/devbox/nodejs-key-value-storage-lk3g7f)

## Installation

```javascript
npm install key-value-storage
```

## Initialization

```javascript
//ES Modules import style
import {Kvs} from 'key-value-storage'

//CommonJS import style
const {Kvs} = require('key-value-storage')

const kvs = new Kvs({
	storageName:'mystorage'
})
```

## Example Usage

```javascript
import {Kvs} from 'key-value-storage'

void async function main() {
	const kvs = new Kvs({
		storageName:'mystorage'
	})
	console.log(kvs._storageName)
	console.log(await kvs.put('yes','no'))
	console.log(await kvs.get('yes'))
	console.log(await kvs.list())
	console.log(await kvs.delete('yes'))
}()
```

```javascript
const {Kvs} = require('key-value-storage')

void async function main() {
	const kvs = new Kvs({
		storageName:'mystorage'
	})
	console.log(kvs._storageName)
	console.log(await kvs.put('yes','no'))
	console.log(await kvs.get('yes'))
	console.log(await kvs.list())
	console.log(await kvs.delete('yes'))
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