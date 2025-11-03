import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {IconButton, Tooltip, Box} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ImageCell} from "./ImageCell";
import {ProductCounter} from "../../components/productCounter/ProductCounter";
import {useState} from "react";

export const getColumnsWithCart = (
    columns: GridColDef[],
    onImageClick?: (product: any) => void,
    onAddToCart?: (count: number) => void
) => {
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
            width: 180,
            align: 'center' as const,
            renderCell: (params: GridRenderCellParams) => {
                const [showCounter, setShowCounter] = useState(false);
                const [count, setCount] = useState(1)

                const handleAddToCart = () => {
                    if(showCounter){
                        console.log('Add to cart with count:', count, 'Product:', params.row)
                        onAddToCart?.(count)
                        setShowCounter(false)
                        setCount(1)
                    } else{
                        setShowCounter(true);
                    }
                };

                const increaseCount = () => {
                    setCount(count + 1)
                }

                const decreaseCount = () => {
                    if (count > 1) {
                        setCount(count - 1)
                    }
                }

                return (
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Tooltip title="Add to Cart">
                            <IconButton
                                color="primary"
                                size="small"
                                onClick={handleAddToCart}
                            >
                                <AddShoppingCartIcon/>
                            </IconButton>
                        </Tooltip>

                        {showCounter && (
                            <ProductCounter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
                        )}
                    </Box>
                );
            },
            sortable: false,
            filterable: false,
            hideable: false,
        },
    ];
};