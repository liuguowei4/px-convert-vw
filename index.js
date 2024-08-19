const fs = require("fs")
const path = require('path');

// 读取文件
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) { reject(err) }
            else { resolve(data) }
        })
    })
}

// 写入文件
function writeFile(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, 'utf8', (err) => {
            if (err) { reject(err) }
            else { resolve() }
        })
    })
}

// 替换文件字符
try {
    var packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
    var config = packageJson.config
    // 读取
    readFile(config.path).then(data => {
        // 替换
        var updated = data.replace(/\d+px/g, find => {
            var number = parseInt(find)
            if (number <= 1) {
                return find
            }
            return `${(number / config.divisor * 100).toFixed(4)}${config.replace}`
        })
        // 写回文件
        writeFile(config.path, updated).then(() => {
            console.log(`px已替换为${config.replace}`)
        })
    })
} catch (err) {
    console.error(`替换错误：${err}`)
}
