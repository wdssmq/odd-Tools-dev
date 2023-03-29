interface Option {
    price:string
    number:string
}


const unit = (rows: any ,option = {
    price:"price",
    number:"number"
} as Option) =>{
    const p = new Proxy(rows, {
        get(){

        },
        // 这段报错 
        set(){

        }
    }) as ProxyConstructor


}


export default unit