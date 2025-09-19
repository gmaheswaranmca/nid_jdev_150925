import axios from "axios";
import {  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([
        /*{id:'a01', name: 'vivo y21', description:"best camera phone",
         category:"mobile", 
         tags:"mobile, electronics, smartphone, android phone",
         stock:10, price:23000},
        {id:'a02', name: 'samsung 41" TV', description:"high resolution smart tv",
         category:"electronics", 
         tags:"electronics, smarttv",
         stock:5, price:18000}*/
    ]);
     const navigate = useNavigate();
    const loadProductList = async () => {
        if(!confirm('Are you sure to delete?')) {
            return
        }

        const baseUrl = 'http://localhost:8081';
        
        const token = localStorage.getItem("token");
        
        const headers = {"headers" :{"Authorization":`Bearer ${token}`}}
        try {
            const response = await axios.get(`${baseUrl}/products/all`, headers);
            const queriedProducts = response.data;
            setProducts(queriedProducts);
        } catch(error) {
            alert('Not Authorized')
            localStorage.removeItem("token")
            navigate("/admin/login");
            return 
        }
        
    }

    useEffect(() => {
        if(localStorage.getItem("token") == null) {
            navigate("/admin/login");
            return;
        }   
        loadProductList();
    },[]);


    const handleDeleteProduct = async (id) => {
        const baseUrl = 'http://localhost:8081';
        
        const token = localStorage.getItem("token");
        
        const headers = {"headers" :{"Authorization":`Bearer ${token}`}}
        try {
            const response = await axios.delete(`${baseUrl}/products/admin/${id}`, headers);
            loadProductList();
        } catch(error) {
            alert('Not Authorized')
            localStorage.removeItem("token")
            navigate("/admin/login");
            return 
        }
    }
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
                            <th></th>
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
                            <td>
                                <a href={"/admin/edit/" + product.id} className="btn btn-warning">Edit</a>
                                <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}