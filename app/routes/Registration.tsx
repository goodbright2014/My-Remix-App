import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";




export let action: ActionFunction = async ({request})=>{
    let formData = await request.formData()
    let email = formData.get("email")
    console.log(email)
    return { ok: true }
};

export default function Registration () {

    return (
        <main>

            <Form method="post">
                <h2> Registration!</h2>
                <p> Don't miss actions</p>
                <fieldset>
                    <input type="email" name="email" placeholder="jaehyu@userplane.co.kr" />
                    <button type="submit">Submit</button>
                </fieldset>
            </Form>
        </main>


    )
}