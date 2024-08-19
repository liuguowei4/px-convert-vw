# px单位转为vw
<blockquote>一个可以将px转换为vw的小js，平常工作中自适应经常有这种要求</blockquote>

## 使用方法
### 单位调整
如果有单位方面的调整，比如转换vw要转换%，可以在 package.json 文件中 config 下的 replace 变量调整
### 计算调整
如果有计算方面的调整，比如屏幕是1366，可以在 package.json 文件中 config 下的 divisor 变量调整
### 运行代码
在 package.json 文件中 config 下的 path 变量调整文件路径，不调整默认为example.css
<code>node index.py</code>path
