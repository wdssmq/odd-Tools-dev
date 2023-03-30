interface Option {
    price: string
    number: string
}

// 数组
export const unit = (rows: any, option = {
    price: "price",
    number: "number"
} as Option) => {
    const unitHandler = {
        get(target: any, key: string, receiver: any) {
            return Reflect.get(target, key, receiver);
        },
        set(target: any, key: string, receiver: any) {
            /* 相关逻辑 */
            const data = target.map((item: any) => {
                const price = item[option.price];
                const number = item[option.number];
                item.unit = (price / number).toFixed(2);
                return item;
            })
            return Reflect.set(data, key, receiver);
        }
    }
    return new Proxy(rows, unitHandler)
}

// 对象
export const unitByObject = (obj: any, option = {
    price: "price",
    number: "number"
} as Option) => {
    const price = obj[option.price];
    const number = obj[option.number];
    obj.unit = (price / number).toFixed(2);
    return obj;
}

export default unit([], { price: "price", number: "number" })