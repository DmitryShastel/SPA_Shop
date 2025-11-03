import React from 'react';
import {Box, Card, CardContent, CardMedia, Chip, Container, Fade, Modal, Typography} from '@mui/material';
import Button from '@mui/material/Button';


interface ProductModalProps {
    product?: any;
    open: boolean;
    onClose: () => void;
}

export const ProductModal = ({ open, onClose, product }: ProductModalProps) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Fade in={open}>
                <Container maxWidth="sm" sx={{
                    py: 10,
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none'
                }}>
                    <Card
                        sx={{
                            width: '65vw',
                            height: '60vh',
                            margin: '0 auto',
                            boxShadow: 3,
                            borderRadius: 2,
                            backgroundColor: 'background.paper'
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
                                onClick={onClose}
                            >X</Button>
                        </Box>

                        <CardMedia
                            component="img"
                            height="200"
                            image={product?.images[0] as string}
                            alt={product?.title}
                            sx={{objectFit: 'cover'}}
                        />

                        <CardContent sx={{p: 3}}>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{mb: 2, lineHeight: 1.6}}
                            >
                                {product?.title}
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
                                        label={product?.stock + ' item(s).'}
                                        size="small"
                                        variant="outlined"
                                    />
                                </Box>
                                <Typography variant="h6" color="primary" fontWeight="bold">
                                    {product?.price + ' $'}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Fade>
        </Modal>
    );

}
