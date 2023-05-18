import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";


export let action:ActionFunction = async ({request})=>{
    console.log("Form Action")
    let formData = await request.formData();
    let email = formData.get("email")
    console.log(email)

    return { ok: true }
}

export default function Recruit () {
    return (
        <main>
            <Form method="post">
                <h2>Hello world</h2>
                <p>Don't miss action...</p>
                
                <input type="email" name="email" placeholder="jaehyu@userplane.co.kr"></input>
                <button type="submit">Submit</button>
            
            </Form>
        </main>
    )
}