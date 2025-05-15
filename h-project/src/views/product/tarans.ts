const transChannel = new BroadcastChannel('product')

function sendMsg(msg:any){
    transChannel.postMessage(msg);
}

function getMsg(func:Function){
    const handler = (e:any)=>{
        func && func(e.data)
    }
    transChannel.addEventListener("message",handler)
    return (()=>{
        transChannel.removeEventListener("message",handler);
    })
}


export {
    sendMsg,
    getMsg
}