import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {useEffect} from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <History />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function History() {

useEffect(() => {
console.log(window.history.state)
},[])

const op1 = () => {
const h = window.history
h.pushState({aiu: 3}, "what is this 1", "/a?state=1")
h.pushState({hohoge: 'fjdkas'}, "what is this 2", "/b?state=2")
h.pushState({hohoge: 'fjdkas'}, "what is this 3", "/c?state=3")
h.replaceState({kkk: false},  "what is this 3", "/a?state=4")
}

const state = () => {
console.log(window.history.state)
}

const b = () => {
window.history.back()
}
const f = () => {
window.history.forward()

}

return (
<div>

<p>
<a href="/a">a</a>
</p>
<p>
<a href="/b">b</a>
</p>
<p>
<a href="/c">c</a>
</p>

<button onClick={op1}>aiue</button>
<button onClick={state}>getstate</button>

<button onClick={b}>back</button>
<button onClick={f}>forward</button>
</div>

)
}
