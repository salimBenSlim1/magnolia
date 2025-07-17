import { getCookie } from "h3";
export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'token')
    return {
        authenticated: !!token,
    }
})