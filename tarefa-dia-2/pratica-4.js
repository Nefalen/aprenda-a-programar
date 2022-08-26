let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true) {
    let PrecoA = produtoA.valor * 1.2
    console.log("O produto é internacional"; PrecoA)
}
else {
    let PrecoA = produtoA.valor * 1.12
    console.log("O produto é brasileiro"; PrecoA)
}