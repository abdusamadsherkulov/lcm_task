const express = require('express');
const app = express();

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function lcm(x, y) {
    x = BigInt(x);
    y = BigInt(y);

    let g = gcd(x,y);
    return (x * y / g).toString();
}

app.get('/abdusamadsherkulov_gmail_com', (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (
        !Number.isInteger(x) ||
        !Number.isInteger(y) ||
        x < 1 ||
        y < 1
    ) {
        return res.send('NaN');
    }

    return res.send(lcm(x, y));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running`);
});