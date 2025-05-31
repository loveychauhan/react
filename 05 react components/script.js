import React from "react";
import { createRoot } from "react-dom/client";
import './style.css';
import axios from "axios";

const root = createRoot(document.querySelector('#root'))

function Card({ title, price, image, brand }) {
    // const {title, price, image, brand} = props;
    return (
        <section>
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{brand}</p>
                <p>{price}</p>
            </div>
        </section>

    )
}


// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data.products)
//         root.render(
//             <div className="container">
//                 {data.products.map((product) => {
//                     return (
//                         <Card
//                             key={product.id}
//                             title={product.title}
//                             brand={product.brand}
//                             price={product.price}
//                             image={product.thumbnail}
//                         />
//                     )
//                 })}
//             </div>)
//     })

axios('https://dummyjson.com/products')
    .then((res) => {
        const container = res.data.products.map((product) => {
            return <Card
                key={product.id}
                title={product.title}
                brand={product.brand}
                price={product.price}
                image={product.thumbnail}
            />
        })
        root.render(<div className="container">{container}</div>)
    })

// root.render(
//     <div className="container">
//       {data.products.map((product) => {
//         return (
//           <Card
//             key={product.id}
//             title={product.title}
//             brand={product.brand}
//             price={product.price}
//             image={product.thumbnail}
//           />
//         )
//       })}
//     </div>
//   )

// console.log(
//     React.createElement(Card, {
//         title: 'iphone 13',
//         brand: 'iphone',
//         price: '600',
//     })
// )

// root.render(React.createElement(Card, {
//     price: '$600',
//     title: 'iphone 13',
//     brand: 'iphone',
// }))

// root.render(<Card title="iphone 13" brand="iphone" price={`$${890}`} />)