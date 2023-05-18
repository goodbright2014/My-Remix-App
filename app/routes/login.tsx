import { ActionFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import LoginComponent from "~/components/LoginComponent"
import { LoginAPI } from "~/firebase/authClient"

export let action : ActionFunction = async ({request}) => {
    console.log("Form Action")
    const body = await request.formData()
    const id = String(body.get('email'))
    const password = String(body.get('password'))
    console.log( "id"+ id);
    console.log("password"+ password);
    let result = await LoginAPI(id, password)
    // TODO 
    if(result) console.log("Signed In to Linkedin!");
    else console.log("Failed to Sign In to Linkedin!");

    return redirect("/recruit");
}

export default function Login() {
    return <LoginComponent />

}