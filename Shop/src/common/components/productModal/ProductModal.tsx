import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Container
} from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useGetCartQuery} from "../../../service/cart/cart.service";
import {useNavigate} from "react-router";


export const ProductModal = () => {
    const navigate = useNavigate()

    const handleCartBack = () => {
        console.log('test')
    };

    const {data} = useGetCartQuery(1)

    return (
        <Container maxWidth="sm" sx={{
            py: 10,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh'
        }}>
            <Card
                sx={{
                    width: '65vw',
                    height: '60vh',
                    margin: '0 auto',
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h1"
                        fontWeight="bold"
                        sx={{ marginLeft: 3 }}
                    >
                        {'Description of product'}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleCartBack}
                    >X</Button>
                </Box>

                <CardMedia
                    component="img"
                    height="200"
                    image={data?.products[0].thumbnail}
                    alt={data?.products[0].title}
                    sx={{objectFit: 'cover'}}
                />

                <CardContent sx={{p: 3}}>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{mb: 2, lineHeight: 1.6}}
                    >
                        {data?.products[0].title}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 2
                        }}
                    >
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                            <Typography variant="body2" color="text.secondary">
                                In the stock:
                            </Typography>
                            <Chip
                                label={data?.products.length + ' item(s).'}
                                size="small"
                                variant="outlined"
                            />
                        </Box>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                            {data?.total + ' $'}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};
