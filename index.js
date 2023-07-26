const Queue = require('bull')
const sendMail = require('./sendMail')
const connection = {
    host: 'localhost',
    port: 6379
}
let userData = 'a'
const myQueue = new Queue('myQueue', { redis: connection })
// module.exports = async function sendNotification(userData){
    myQueue.process(async (job) => {
        console.log('Processing job with data:', job.data);
        return sendNotification(job.data)
    })
    
    function sendNotification(data) {
        return new Promise(async (resolve) => {
            await sendMail(data)
            console.log('Work completed for job with data:', data);
            resolve();
        })
    }
    
    const sampleDelay = 1000
    const tenDaysInMilliseconds = 10 * 24 * 60 * 60 * 1000;
    if (sampleDelay < tenDaysInMilliseconds) {
        myQueue.add({ userData }, { delay: sampleDelay })
    
    }
// }
