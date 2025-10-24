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

export const ProductCard = () => {
    const product = {
        name: 'Title of product',
        image: 'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/b2c74200-8da7-439a-95b6-9cad1aa18742-4445-dubai-img-worlds-of-adventure-tickets-02.jpeg?auto=format&w=600&q=90&fit=clip', // Замените на реальный URL изображения
        description: 'Test description Test description Test description',
        quantity: 15,
        price: '1000000$'
    };

    return (
        <Container maxWidth="sm" sx={{ py: 10,  px: 0, margin: 0 }}>
            <Card
                sx={{
                    // maxWidth: 800,
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
                        justifyContent: 'space-between',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        {product.name}
                    </Typography>
                    <Button startIcon={<ArrowBackIcon />} variant="contained" color="secondary">Back</Button>
                </Box>

                <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'cover' }}
                />

                <CardContent sx={{ p: 3 }}>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.6 }}
                    >
                        {product.description}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 2
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                                In the stock:
                            </Typography>
                            <Chip
                                label={product.quantity + ' item(s).'}
                                size="small"
                                color={product.quantity > 5 ? "success" : "warning"}
                                variant="outlined"
                            />
                        </Box>
                        <Typography variant="h6" color="primary" fontWeight="bold">
                            {product.price}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};
