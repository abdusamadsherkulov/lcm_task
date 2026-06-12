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
    try {
        const xStr = req.query.x;
        const yStr = req.query.y;

        if (xStr === undefined || yStr === undefined) {
            return res.send('NaN');
        }

        const x = BigInt(xStr);
        const y = BigInt(yStr);

        if (x < 1n || y < 1n) {
            return res.send('NaN');
        }

        const result = lcm(x, y);
        return res.send(result.toString());

    } catch (e) {
        return res.send('NaN');
    };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running`);
});