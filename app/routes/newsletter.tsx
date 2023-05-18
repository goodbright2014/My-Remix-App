
import type { ActionFunction, LinksFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
//import stylesUrl from "~/styles/Newsletter.css"; 

// export const links: LinksFunction = () => [
//     { rel: "stylesheet", href: stylesUrl },
//   ];
  
export let action: ActionFunction = async ({request})=>{
    console.log("Form Action")
    let formData = await request.formData()
    let email = formData.get("email")
    console.log(email)
    return { ok: true }
};


export default function Newsletter () {
    return (
        <main>
            <Form method="post">
                <h2 className="text-6xl font-bold  text-blue-600">Newsletter Subsctibe !</h2>
                <p>Don't miss any actions...</p>
                <fieldset>
                    <input type="email" name="email" placeholder="jaehyu@userplane.co.kr"></input>
                    <button type="submit">Subscribe</button>
                </fieldset>
            </Form>
        </main>
    )
}