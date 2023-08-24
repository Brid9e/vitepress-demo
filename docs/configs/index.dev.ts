const fs = require('fs');
const path = require('path');


// 递归获取文件夹下所有子文件夹的内容
function getFolderContents(folderPath, result) {
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const itemPath = path.join(folderPath, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      // 如果子文件夹下存在index.vue，则以子文件夹的名字为key
      if (fs.existsSync(path.join(itemPath, 'index.vue'))) {
        result[ item ] = fs.readFileSync(path.join(itemPath, 'index.vue'), 'utf8');
      } else {
        // 递归处理子文件夹
        getFolderContents(itemPath, result);
      }
    } else {
      // 使用文件名（省略后缀）为key，文件内容为value
      const fileName = path.parse(item).name;
      result[ fileName ] = fs.readFileSync(itemPath, 'utf8');
    }
  });
}

const folderPath = '../examples'; // 你的文件夹路径
const result = {};

getFolderContents(folderPath, result);

// 将结果导出为一个 TypeScript 模块
const outputFileContents = `export default ${JSON.stringify(result, null, 2)};\n`;

const outputFilePath = './generatedContents.ts'; // 生成的文件路径
fs.writeFileSync(outputFilePath, outputFileContents);

console.log(`文件内容已写入 ${outputFilePath}`);