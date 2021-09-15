Husky là một gói JavaScript cho phép bạn chạy một số mã trong các phần khác nhau của quy trình làm việc git của bạn. Husky tận dụng các hook để cho phép bạn chạy thành công các sự kiện git khác nhau như pre-commit.

1.Down về husky bằng lệnh: npx husky-init && npm install

2.Ở file package.json thêm đoạn code:

"husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test"
    }
  },

3.Thử git commit -m 'commit'.Nếu như điều kiện và bạn dùng jest để thử nghiệm là sai thì sẽ báo lỗi ở terminal.Nếu điều kiện đúng thì sẽ hoàn thành lệnh git commit

Tìm hiểu thêm ở https://typicode.github.io/husky/#/