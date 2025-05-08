function formateString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (const arr of arrays) {
        result.push(...arr)
    }
    return result;

}





function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}








interface Product {
    name: string;
    price: number;
}


function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, product) => (product.price > max.price ? product : max));
}






enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"))
            } else {
                resolve(n * n)
            }
        }, 1000)
    })
}



