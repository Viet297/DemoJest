const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./index.html");
test('count H1',()=>{
    expect(document.querySelectorAll('h1').length).toBe(3);
})