function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(" ")[0];
        let age = arr[i].split(" ")[1];;
        let newCat = new Cat(name, age);
        console.log(`${newCat.name}, age ${age} says Meow`);
    }

}
cats(['Mellow 2', 'Tom 5']);