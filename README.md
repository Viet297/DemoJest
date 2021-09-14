# DemoJest
cách down jest: npm install --save-dev jest
1.tạo file jest.config.js để khai báo environment
module.exports = {
    testEnvironment: "jsdom",
}
2.tạo file main.test.js:
const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./index.html");//lấy code từ file index.html

//test điều kiện
test('count',()=>{
    expect(document.querySelectorAll('h2').length).toBe(21);
})
