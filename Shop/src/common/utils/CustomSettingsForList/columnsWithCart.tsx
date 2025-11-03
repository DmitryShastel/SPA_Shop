import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {IconButton, Tooltip} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ImageCell} from "./ImageCell";

const handleAddToCart = (id: number, row: any) => {
    console.log('The stuff are added:', id, row);
};

export const getColumnsWithCart = (columns: GridColDef[], onImageClick?: (product: any) => void) => {

    return [
        ...columns.map(col => {
            if (col.field === 'image') {
                return {
                    ...col,
                    renderCell: (params: any) => (
                        <ImageCell
                            {...params}
                            handleImageClick={() => onImageClick?.(params.row)}
                        />
                    )
                };
            }
            return col;
        }),
        {
            field: 'addToCart',
            headerName: '',
            width: 80,
            align: 'center' as const,
            renderCell: (params: GridRenderCellParams) => (
                <Tooltip title="Добавить в корзину">
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleAddToCart(params?.row.id, params.row)}
                    >
                        <AddShoppingCartIcon/>
                    </IconButton>
                </Tooltip>
            ),
            sortable: false,
            filterable: false,
            hideable: false,
        },
    ];
};
