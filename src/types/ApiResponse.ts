import { Message } from "../model/user";

// benifit is now we get a message and a boolean for sure in the API Response, but on the other hand, we also provide suggestions for the other two fields and also keep the type safe !
export interface ApiResponse {
    success : boolean
    message : string
    isAcceptMessage? : boolean
    messages? : Array<Message>
}