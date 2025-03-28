import { getProductsFetch } from '@/app/service/getProducts'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import Products from './products'


// eslint-disable-next-line @next/next/no-async-client-component
const ProductWrapper = async () => {
    const client = new QueryClient()
    await client.prefetchQuery({
        queryKey: ["products"],
        queryFn: () => getProductsFetch({})
    })
    const hydrateClient = dehydrate(client)
    return (
        <HydrationBoundary state={hydrateClient}>
            <Products />
        </HydrationBoundary>
    )
}

export default ProductWrapper