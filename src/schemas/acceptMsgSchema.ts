import { z } from "zod";

export const acceptMsgSchema = z.object({
    acceptMsgs : z.boolean()
})
    