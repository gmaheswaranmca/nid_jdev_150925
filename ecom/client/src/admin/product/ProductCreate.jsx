export default function ProductCreate() {
    return (
        <>
            <h3>Create Product</h3>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Cateogory</label>
                        <input type="text" className="form-control" id="category" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tags" className="form-label">Tags</label>
                        <input type="text" className="form-control" id="tags" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input type="text" className="form-control" id="stock" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price" />
                    </div>

                    <button type="submit" className="btn btn-primary">Create Product</button>
                </form>
            </div>
        </>
    )
}