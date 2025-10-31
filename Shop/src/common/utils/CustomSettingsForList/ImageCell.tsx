import React from 'react';
import {GridRenderCellParams} from '@mui/x-data-grid';

interface Product {
    id: number;
    title: string;
    images: string[];
    category: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    description: string;
}

export const ImageCell: React.FC<GridRenderCellParams<any>> = (params) => {
    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        console.log('Image clicked:', params.row);
    };

    return (
        <img
            src={params.row.images?.[0]}
            alt="Product"
            style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '4px',
                cursor: 'pointer',
            }}
            onClick={handleImageClick}
        />
    );
};