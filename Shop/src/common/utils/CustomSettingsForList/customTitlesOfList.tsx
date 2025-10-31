import {ImageCell} from "./ImageCell";

export const columns = [
    {
        field: 'image',
        headerName: 'Product Image',
        width: 150,
        renderCell: ImageCell
    },
    {field: 'title', headerName: 'Product Name', width: 200, flex: 1},
    {field: 'category', headerName: 'Category', width: 130},
    {field: 'price', headerName: 'Price', width: 130, type: 'number'},
    {field: 'rating', headerName: 'Rating', width: 130, type: 'number'},
    {field: 'stock', headerName: 'Stock', width: 130, type: 'number'},
    {field: 'brand', headerName: 'Brand', width: 130},
    {field: 'description', headerName: 'Description', width: 200},
];

export const VISIBLE_FIELDS = ['image', 'title', 'category', 'price', 'rating', 'stock'];