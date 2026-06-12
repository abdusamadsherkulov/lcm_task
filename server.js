const express = require('express');
const app = express();

function gcd(a, b) {
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

// strict natural number check (VERY IMPORTANT)
function isValidNatural(str) {
    return /^[1-9]\d*$/.test(str);
}

app.get('/abdusamadsherkulov_gmail_com', (req, res) => {
    const xStr = req.query.x;
    const yStr = req.query.y;

    // must exist
    if (!xStr || !yStr) {
        return res.send('NaN');
    }

    // must be natural numbers ONLY
    if (!isValidNatural(xStr) || !isValidNatural(yStr)) {
        return res.send('NaN');
    }

    // safe conversion (no crash possible now)
    const x = BigInt(xStr);
    const y = BigInt(yStr);

    const result = lcm(x, y);

    return res.send(result.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});