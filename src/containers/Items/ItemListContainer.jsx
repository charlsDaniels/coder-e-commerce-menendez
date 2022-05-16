import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from "../../components/Items/ItemList";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const products = await new Promise((resolved, rejected) => {
                setTimeout(() => {
                    resolved([
                        {
                            id: '1',
                            title: "Camisa tiger",
                            description: "Camisa atigrada de material seda",
                            price: "$5.600",
                            pictureUrl: "/images/camisa-tiger.jpg"
                        },
                        {
                            id: '2',
                            title: "Camisa negra",
                            description: "Camisa negra de algodón",
                            price: "$3.500",
                            pictureUrl: "/images/camisa-negra.jpg"
                        },
                        {
                            id: '3',
                            title: "Camisa Hawaiana",
                            description: "Camisa hawaiana de seda",
                            price: "$3.900",
                            pictureUrl: "/images/camisa-hawaiana.jpg"
                        }
                    ]
                    )
                }, 2000)
            })
            setProducts(products)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress />
            </Backdrop>

            {products &&
                <Box sx={{ display: 'flex' }}>
                    <ItemList items={products} />
                </Box>
            }
        </Box>
    )
}

export default ItemListContainer;
