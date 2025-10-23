import * as React from 'react';
import {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import {CustomToolbar} from "../../utils/CustomSettingsForList/CustomToolbar";
import {getColumnsWithCart} from "../../utils/CustomSettingsForList/columnsWithCart";

const VISIBLE_FIELDS = ['avatar','id', 'name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export default function BasicExampleDataGrid() {
    const {data, loading} = useDemoData({
        dataSet: 'Employee',
        visibleFields: [],
        rowLength: 100,
    });

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 15
    })

    const initialState: any = {
        columns: {
            columnVisibilityModel: Object.fromEntries(
                data.columns.map(col => [col.field, VISIBLE_FIELDS.includes(col.field)])
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
