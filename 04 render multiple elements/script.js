import { createRoot } from "react-dom/client"
import './style.css'

function Card({title, brand, image, price }) {
    return (
        <div className="card">
            <img src={image} alt="nature" />
            <div className="card-content">
                <h3>{title}</h3>
                <p><b>{brand}</b></p>
                <p>${price}</p>
                {/* <p>{`$${price}`}</p> */}
            </div>
        </div>
    )
}

fetch('https://dummyjson.com/products/search?q=phone')
    .then(res => res.json())
    .then((data) => {
        // const container2 = data.products.map((product) => {
        //     return Card(product.id, product.title, product.brand, product.thumbnail, product.price)

        // })
        // root.render(<div className="container">{container2}</div>)

        root.render(
            <div className="container2">
                {data.products.map((product) => {
                    return (<Card
                        key={product.id}
                        title={product.title}
                        image={product.thumbnail}
                        price={product.price}
                    />)
                })}
            </div>)
    })


const root = createRoot(document.querySelector('#root'))
