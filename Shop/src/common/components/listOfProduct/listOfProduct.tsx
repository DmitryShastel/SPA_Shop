import * as React from 'react';
import {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {CustomToolbar} from "../../utils/CustomSettingsForList/CustomToolbar";
import {getColumnsWithCart} from "../../utils/CustomSettingsForList/columnsWithCart";
import {useTotalProductsQuery} from "../../../service/listOfProduct/listOfProduct.service";

const VISIBLE_FIELDS = ['avatar','id', 'name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
    // const {data, loading} = useDemoData({
    //     dataSet: 'Employee',
    //     visibleFields: [],
    //     rowLength: 100,
    // });

    const {data, isLoading : loading} = useTotalProductsQuery({
        dataSet: 'Employee',
        rowLength: 100,
    })

    console.log(data)

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 15
    })

    const initialState: any = {
        columns: {
            columnVisibilityModel: Object.fromEntries(
                data?.columns.map((col: any) => [col.field, VISIBLE_FIELDS.includes(col.field)])
            ) as Record<string, boolean>,
        },
    };

    const allColumnsWithCart = getColumnsWithCart(data.columns);


    return (
        <div style={{height: '100%', width: '100%'}}>
            <DataGrid
                rows={data.rows as any}
                columns={allColumnsWithCart}
                loading={loading}
                showToolbar
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[15, 20, 25, 50, 100]}
                slots={{toolbar: CustomToolbar}}
                disableDensitySelector={true}
                initialState={initialState}
            />
        </div>
    );
}
