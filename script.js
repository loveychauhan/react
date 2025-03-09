import React, { createElement } from "react"
import  {createRoot} from  'react-dom/client'

const h2 = <h2>hello world</h2>
const node = document.querySelector('#root')
const root = createRoot(node)
root.render(h2)
console.log('hello')

