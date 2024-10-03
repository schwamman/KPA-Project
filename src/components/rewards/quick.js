const crypto = require('crypto');
const items = [];
let tier = 1;

for (let i = 0; i < 150; i++) {
  if (tier > 15) {
    tier = 1;
  }
  items.push({
    "tier": tier,
    "name": "placeholder product " + (i + 1),
    "image": "",
    "points": Math.floor(Math.random() * 100)
  });
  tier += 1;
}

console.log(JSON.stringify(items, null, 2));
