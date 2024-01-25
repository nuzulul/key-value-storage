import fs from 'fs'

export class Kvs{

	_dataDirName:string
	_storageName:string
	_storageDir:string
	
	public constructor({
		dataDirName = "data",
		storageName
	}:{
		dataDirName?:string,
		storageName:string
	}){
		if(!this.isAlphanumeric(dataDirName))this.showError('dataDir must be Alphanumeric')
		if(!this.isAlphanumeric(storageName))this.showError('namespace must be Alphanumeric')
		this._dataDirName = "./"+dataDirName
		this._storageName = storageName
		this._storageDir = ''
		this.setupstorageDir()
	}

	private isAlphanumeric(str:string) {
	  return /^[a-zA-Z0-9]+$/.test(str);
	}
	
	private showError(msg:string = 'Error'){
		throw new Error(msg)
	}
	
	private async setupstorageDir(){
		this._storageDir = this._dataDirName+'/'+this._storageName
		this.makeDir(this._storageDir)
	}
	
	private async makeDir(dir:string){
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        })
      }
	}
	
	public async put(key:string,value:string){
		return new Promise((resolve) => {
			if(!this.isAlphanumeric(key))this.showError('Key must be Alphanumeric')
			const keyFilePath = this._storageDir+'/'+key
			fs.writeFile(keyFilePath, value,(err)=>{
				if (err) {throw err}else{resolve('success')}
			});
		})
	}
	
	public async get(key:string){
		return new Promise((resolve) => {
			if(!this.isAlphanumeric(key))this.showError('Key must be Alphanumeric')
			const keyFilePath = this._storageDir+'/'+key
			if (fs.existsSync(keyFilePath)){
			  fs.readFile(keyFilePath,(err,data)=>{
				if (err) {throw err}else{resolve(data.toString('utf8', 0, data.length))}
			  });
			} else {
			  resolve(null)
			}
		})
	}

	public async delete(key:string){
		return new Promise((resolve) => {
			if(!this.isAlphanumeric(key))this.showError('Key must be Alphanumeric')
			const keyFilePath = this._storageDir+'/'+key
			if (fs.existsSync(keyFilePath)){
			  fs.unlink(keyFilePath,(err)=>{
				if (err) {throw err}else{resolve('success')}
			  });
			} else {
			  resolve(null)
			}
		})
	}
	
	public async list(){
		return new Promise((resolve) => {
			  fs.readdir(this._storageDir,(err,files)=>{
				if (err) {throw err}else{
					let result = {
						keys:files,
						complete:true
					}
					resolve(result)
				}
			  });
		})
	}
}
