import {Kvs} from './../src/key-value-storage'

void async function main() {

	const kvs = new Kvs({
		storageName:'mystorage'
	})
	console.log(kvs._storageName)
	console.log(await kvs.put('yes','no'))
	console.log(await kvs.get('yes'))
	console.log(await kvs.delete('yes'))
	console.log(await kvs.get('yes'))
	console.log(await kvs.put('yes1','no1'))
	console.log(await kvs.list())
}()
