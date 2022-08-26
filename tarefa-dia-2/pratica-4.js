let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

If (produtoA.internacional == true) { 
    let preco = produtoA.valor * 1.20
    console.log("O produto é internacional")
    console.log(preco)
} else {
    let preco = produtoA.valor * 1.12
    console.log("O produto é nacional")
    console.log(preco)
    }  