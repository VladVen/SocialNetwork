let subscribers = [] as SubscriberType[]

let webSocket: WebSocket

const closeHandler = () => {
    setTimeout(createChanel, 3000)
}
const sendHandler = (event: MessageEvent) => {
    const parse = JSON.parse(event.data);
    subscribers.forEach(e => e(parse))
};

function createChanel() {
    webSocket?.removeEventListener('close', closeHandler)
    webSocket?.close()
    webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    webSocket?.addEventListener('close', closeHandler)
    webSocket?.addEventListener('message', sendHandler)
}


export const chatApi = {
    start() {
        createChanel()
    },
    stop() {
        subscribers = []
        webSocket?.addEventListener('close', closeHandler)
        webSocket?.addEventListener('message', sendHandler)
        webSocket?.close()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(e => e !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(e => e !== callback)
    },
    sendMessage(message: string) {
        webSocket?.send(message)
    }
}

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
    message: string
    photo: string | null
    userId: number
    userName: string
}