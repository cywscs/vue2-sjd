const http = require('http');


// 创建 HTTP 服务器
const server = http.createServer((request, response) => {
    // 设置响连接request.url = '/pagedList'
    request.url = '/pagedList'

    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 将响应正文写入响应主体
    // 返回一个数组
    const tabledata = [
        {
            scode: '2016-05-02',
            sname: '王小虎',
            sno: '上海市普陀区金沙江路 1518 弄',
            classes: '上海市普陀区金沙江路 1518 弄',
            Times: '上海市普陀区金沙江路 1518 弄',
        }, {
            scode: '2016-05-02',
            sname: '王小虎222',
            sno: '上海市普陀区金沙江路 1518 弄',
            classes: '上海市普陀区金沙江路 1518 弄',
            Times: '上海市普陀区金沙江路 1518 弄',
        }, {
            scode: '2016-05-02',
            sname: '王',
            sno: '上海市普陀区金沙江路 1518 弄',
            classes: '上海市普陀区金沙江路 1518 弄',
            Times: '上海市普陀区金沙江路 1518 弄',
        }, {
            scode: '2016-05-02',
            sname: 'zhang',
            sno: '上海市普陀区金沙江路 1518 弄',
            classes: '上海市普陀区金沙江路 1518 弄',
            Times: '上海市普陀区金沙江路 1518 弄',
        }]
    response.end(JSON.stringify(tabledata));
    // 结束响应
    response.end();
});

// 监听端口号为 8000 的请求
server.listen(8082);

console.log('Server running at http://127.0.0.1:8082/');
