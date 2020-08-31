const simple = require('simple-git');
const readline = require('readline');

const git = simple();

git.diffSummary().then(
  (diffSummary) => {
    const files = [];
    diffSummary.files.forEach(
      (item) => {
        files.push(item.file);
      },
    );
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    console.log(`
    您此次提交修改了文件：${files.join('，')},
    请仔细确认文件变动是否正常！
    `);
    rl.question('please input (Y/N)', (answer) => {
      const ans = ['y', 'Y'];
      if (!ans.includes(answer)) {
        console.log('请您仔细检查修改的文件，确定后可再次提交！');
        process.exit(1);
      } else {
        console.log('ok, 自测完毕，您可以继续提交了~');
        process.exit(0);
      }
    });
  },
);
