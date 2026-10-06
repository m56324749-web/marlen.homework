let number = +prompt("son kiriting")

for (let i = 0; i < number; i++) {
    let chess = ""
    for (let j = 0; j < number; j++) {
        if (i == 0 || i == number - 1 || j == 0 || j == number - 1 || i == j) {
            chess = chess + "⬛"
        } else {
            chess = chess + "⬜"
        }
    }
    console.log(chess)
}