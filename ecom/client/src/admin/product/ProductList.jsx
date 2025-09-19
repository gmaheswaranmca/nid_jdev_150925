import { useState } from "react"

export default function ProductList() {
    const [products, setProducts] = useState([
        {id:'a01', name: 'vivo y21', description:"best camera phone",
         category:"mobile", 
         tags:"mobile, electronics, smartphone, android phone",
         stock:10, price:23000},
        {id:'a02', name: 'samsung 41" TV', description:"high resolution smart tv",
         category:"electronics", 
         tags:"electronics, smarttv",
         stock:5, price:18000}
    ]);
    return (
        <>
            <h3>List of Products</h3>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope="col">category</th>
                            <th scope="col">stock</th>
                            <th scope="col">price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (<tr>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                        </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}