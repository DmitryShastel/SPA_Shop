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


export const ProductCard = () => {
    const navigate = useNavigate()

    const handleCartBack = () => {
        navigate('/listOfProduct', {replace: true})
    };

    const {data} = useGetCartQuery(1)

    return (
        <Container maxWidth="sm" sx={{py: 10, px: 0, margin: 0}}>
            <Card
                sx={{
                    width: '95vw',
                    height: '70vh',
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
                        textAlign: 'center'
                    }}
                >
                    <Button
                        startIcon={<ArrowBackIcon/>}
                        variant="contained"
                        color="secondary"
                        onClick={handleCartBack}
                    >Back</Button>
                    <Typography
                        variant="h5"
                        component="h1"
                        fontWeight="bold"
                        sx={{ marginLeft: 3 }}
                    >
                        {'Title of product'}
                    </Typography>
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

                    <Button
                        sx={{
                            marginLeft: 'auto',
                            marginTop: 10,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        variant="outlined"
                        color="info"
                        onClick={handleCartBack}
                    >Place order</Button>

                </CardContent>
            </Card>
        </Container>
    );
};
