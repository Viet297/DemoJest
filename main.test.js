const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./index.html");
test('count H2',()=>{
    var countH2 = document.querySelectorAll('h2').length
    expect(countH2).toBe(20);
})
