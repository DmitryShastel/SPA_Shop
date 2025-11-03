import React from 'react';
import {GridRenderCellParams} from '@mui/x-data-grid';

interface ImageCellProps extends GridRenderCellParams<any> {
    handleImageClick?: (() => void) | undefined
}

export const ImageCell: React.FC<ImageCellProps> = (params) => {
    const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
        console.log('Image clicked:', params.row);
        params.handleImageClick?.()
    };

    return (
        <img
            src={params.row.images?.[0] as string}
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