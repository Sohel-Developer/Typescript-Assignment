
##  What are some differences between interfaces and types in TypeScript?

When I first started learning TypeScript, I found both `interface` and `type` confusing because they looked so similar. But after using both, I learned they have different use cases.

###  Interface
- Used to describe the structure of an object.
- Can be extended (inherited).
- Mostly used when working with classes or object shapes.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  jobTitle: string;
}

const employee: Employee = {
  name: "Sohel",
  age: 23,
  jobTitle: "Frontend Developer"
};

```

###  Type
- Can also describe objects, but is more flexible.
- Can use union (`|`), intersection (`&`), and primitives.
- Better when you need complex types.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  jobTitle: string;
};

const employee: Employee = {
  name: "Shazid",
  age: 30,
  jobTitle: "Backend Developer"
};
```

###  Summary

| Feature       | Interface | Type     |
|---------------|-----------|----------|
| Extends       |  Yes      | Yes      |
| Unions        |  No       |  Yes     |
| Intersections |  No       |  Yes     |
| Flexibility   | Medium    | High     |

---



##  What is the use of the `keyof` keyword in TypeScript?

`keyof` was tricky at first, but it’s super useful when you want to get the keys of an object type as a union.

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductKeys = keyof Product; // 'id' | 'name' | 'price'

function testKey(key: ProductKeys) {
  console.log(`Accessing key: ${key}`);
}

testKey("id");    //  Works
testKey("price"); //  Works
// testKey("stock"); //  Error: 'stock' is not a key of Product
```

### Why it's useful:
- Avoids mistakes when using object keys.
- Makes code safer and smarter.
- Helps when working with dynamic keys in generic functions.

---

