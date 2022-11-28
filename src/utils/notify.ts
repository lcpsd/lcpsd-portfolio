import { toast } from "react-toastify";

export const notify = (msg: string) => toast(msg, {
    hideProgressBar: true,
    theme: "dark"
});