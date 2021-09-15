const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./index.html");
test('count H1',()=>{
    var countH1 = document.querySelectorAll('h1').length
    expect(countH1).toBe(4);
})
