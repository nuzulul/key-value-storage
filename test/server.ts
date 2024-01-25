import {Nkvs} from './../src/node-key-value-storage'

void async function main() {

	const nkvs = new Nkvs({
		storageName:'mystorage'
	})
	console.log(nkvs._storageName)
	console.log(await nkvs.put('yes','no'))
	console.log(await nkvs.get('yes'))
	console.log(await nkvs.delete('yes'))
	console.log(await nkvs.get('yes'))
	console.log(await nkvs.put('yes1','no1'))
	console.log(await nkvs.list())
}()
