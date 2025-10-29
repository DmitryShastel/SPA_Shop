import * as React from 'react';
import {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {CustomToolbar} from "../../utils/CustomSettingsForList/CustomToolbar";
import {getColumnsWithCart} from "../../utils/CustomSettingsForList/columnsWithCart";
import {useTotalProductsQuery} from "../../../service/listOfProduct/listOfProduct.service";
import {columns, VISIBLE_FIELDS} from "../../utils/CustomSettingsForList/customTitlesOfList";
import {useProductFilters} from "../../../features/ProductFilter/ProductFilter";


export default function BasicExampleDataGrid() {

    const {data, isLoading: loading} = useTotalProductsQuery({
        dataSet: 'Employee',
        rowLength: 100,
    })

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 15
    })

    const { filters, updateFilters } = useProductFilters();

    const handleSortModelChange = (newSortModel: any) => {
        updateFilters({ sortModel: newSortModel });
    };

    const handleFilterModelChange = (newFilterModel: any) => {
        updateFilters({ filterModel: newFilterModel });
    };

    const allColumnsWithCart = getColumnsWithCart(columns as any)

    const initialState: any = {
        columns: {
            columnVisibilityModel: Object.fromEntries(
                columns.map(col => [col.field, VISIBLE_FIELDS.includes(col.field)])
            ) as Record<string, boolean>,
        },
        sorting: {
            sortModel: filters.sortModel
        },
        filter: {
            filterModel: filters.filterModel
        }
    };

    const rows = data?.products || [];

    return (
        <div style={{height: '100%', width: '100%'}}>
            <DataGrid
                rows={rows as any}
                columns={allColumnsWithCart}
                loading={loading}
                showToolbar
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                onSortModelChange={handleSortModelChange}
                onFilterModelChange={handleFilterModelChange}
                sortModel={filters.sortModel}
                filterModel={filters.filterModel}
                pageSizeOptions={[15, 20, 25, 50, 100]}
                slots={{toolbar: CustomToolbar}}
                disableDensitySelector={true}
                initialState={initialState}
            />
        </div>
    );
}
