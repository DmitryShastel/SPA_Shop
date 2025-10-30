import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {IconButton, Tooltip} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const handleAddToCart = (id: number, row: any) => {
    console.log('The stuff are added:', id, row);
};

export const getColumnsWithCart = (baseColumns: GridColDef[]): GridColDef[] => {
    return [
        ...baseColumns,
        {
            field: 'addToCart',
            headerName: '',
            width: 80,
            align: 'center',
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