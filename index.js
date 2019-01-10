import Server from './server'


Server.init().then(() => {
    console.log('server is up')
}).catch((err) => {
    console.log('err', err)
})



