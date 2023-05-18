import type { ActionFunction, LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";


export let action : ActionFunction= async ({request }) => {
    let formData = await request.formData();

    let email = formData.get("email")
    console.log(email)
    console.log(email)
    console.log(email)
}

export default function Reservation () {
    return (
        <main>
            <Form>
                <h2>Reserve Your Spot!</h2>
                <input type="email" name="email" placeholder="jaehyu@userplane.co.kr"></input>
                <button type="submit">Reserve</button>

                
            </Form>
        </main>
        
    )
}