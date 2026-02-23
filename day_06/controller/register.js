import { readFile, writeFile } from "../utils/readFile.js";
const FILE = "../user.json";
const userRegistration = async (userDetails) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender) {
        console.log("users entries are not complete. unable to register");
        return;
    }
    const users = await readFile(FILE);
    if (users.length === 0) {
        // register
    }
    const existingUser = user.find((u)=>u.email===email);
    if(existingUser){
        console.log("Already Registered");
        return;
    }
    // register

}