interface People {
    id: number | string,
    name: string,
    exercise?: boolean
}

// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];
// Array de strings
let frutas: string[] = ["maçã", "banana", "laranja"];
// Array com tipo boolean
let booleanos: Array<boolean> = [true, false, true];
// array sem tipo definido
let varios: Array<any> = [true, 'Fabio', 34]
// array do tipo objeto People
let userArrays: Array<People> = []

userArrays.push(
    {
        id: 2,
        name: 'Qlq nome',
    }
)

userArrays.push(
    {
        id: "3",
        name: 'Outro Nome',
    }
)

console.log(userArrays)