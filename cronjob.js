//const { exec } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CronJob = require('cron').CronJob;

function sh() {
  return new Promise(function (resolve, reject) {
    exec("npm run mochatest", (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

async function main() {
  try {
    let { stdout, stderr } = await sh();
    console.log('stderr', stderr);
    let count = 1;
    for (let line of stdout.split('\n')) {
      console.log(`${count}: ${line}`);
      count++;
    }
    
  } catch (error) {
    console.log(error);
    
  }
}


const job = new CronJob('0 */2 * * * *', main, null, true, 'America/Los_Angeles');

job.start();