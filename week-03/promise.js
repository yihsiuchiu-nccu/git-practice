function doJob(job, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let now = new Date();
            resolve(`完成工作 ${job} at ${now.toISOString()}`);
        }, time);
    });
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();

async function main() {
    console.log(`開始工作 at ${now.toISOString()}`);
    // write your code here
    // 以下是使用範例
    console.log(await doJob('刷牙', 1000));
    console.log(await doJob('吃早餐', 3000));
    console.log(await doJob('寫作業', 1000));
    console.log(await doJob('吃午餐', 2000));
}

main();