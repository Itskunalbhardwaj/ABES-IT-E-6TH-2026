import { readFile } from "../utils/readFile.js";
const FILE = "../user.json";
const userLogin = async (userDetail) => {
    const { email, password } = userDetail;

    const users = await readFile(FILE);
    if (users.length === 0) {
        console.log("user is not existing");
        return;
    }

    const user = users.filter((u) => u.email === email);
    if (user.length === 0) {
        console.log("user is not existing");
        return;
    }

}