import {GridToolbar} from "@mui/x-data-grid";
import * as React from "react";
import {Badge, Box, IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router";

interface CustomToolbarProps {
    cartItemsCount: number;
}

export const CustomToolbar = ({cartItemsCount}: CustomToolbarProps) => {

    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart', {replace: true})
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 1,
            borderBottom: '1px solid',
            borderColor: 'divider',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <Box sx={{flex: 1}}>
                <GridToolbar
                    csvOptions={{disableToolbarButton: true}}
                    printOptions={{disableToolbarButton: true}}
                />
            </Box>
            <Box>
                <IconButton
                    color="primary"
                    onClick={handleCartClick}
                    title={`Корзина (${cartItemsCount} товаров)`}
                >
                    <Badge badgeContent={cartItemsCount} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Box>
        </Box>
    );
};
