import * as prismic from "@prismicio/client"
import sm from "../../sm.json"

export const client = prismic.createClient(sm.apiEndpoint)