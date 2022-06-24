//process.env.REACT_APP_API_URL

export const fetchBannerData = async () => {
    const bannerData = await fetch('http://localhost:3000' + '/banners').then((res) => res.json()).then((result) => result)
    return bannerData;
}

export const fetchCategoryData = async () => {
    const categoryData = await fetch('http://localhost:3000' + '/categories').then((res) => res.json()).then((result) => result)
    return categoryData;
}

export const fetchProductData = async () => {
    const productData = await fetch('http://localhost:3000' + '/products').then((res) => res.json())
    return productData;
}

export const addToCartServer = async (product) => {
    const result = await fetch('http://localhost:3000' + '/addToCart',{
        method:'POST',
        body: {
            productId: product.id
        }
    }).then(res => res.json()).catch(error => error);
    return result;
}