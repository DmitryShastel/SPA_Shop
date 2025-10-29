import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {GridSortModel, GridFilterModel} from '@mui/x-data-grid';

export interface FilterState {
    search: string;
    category: string;
    priceRange: [number, number];
    brand: string;
    sortModel: GridSortModel;
    filterModel: GridFilterModel,
}

export const useProductFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState<FilterState>({
        search: searchParams.get('search') || '',
        category: searchParams.get('category') || '',
        priceRange: [
            Number(searchParams.get('minPrice')) || 0,
            Number(searchParams.get('maxPrice')) || 10000
        ],
        brand: searchParams.get('brand') || '',
        sortModel: JSON.parse(searchParams.get('sortModel') || '[]'),
        filterModel: JSON.parse(searchParams.get('filterModel') || '{"items": [], "quickFilterValues": []}')
    });

    useEffect(() => {
        const params: Record<string, string> = {};

        if (filters.search) params.search = filters.search;
        if (filters.category) params.category = filters.category;
        if (filters.priceRange[0] > 0) params.minPrice = filters.priceRange[0].toString();
        if (filters.priceRange[1] < 10000) params.maxPrice = filters.priceRange[1].toString();
        if (filters.brand) params.brand = filters.brand;
        if (filters.sortModel.length > 0) params.sortModel = JSON.stringify(filters.sortModel);
        if (filters.filterModel.items && filters.filterModel.items.length > 0) {
            params.filterModel = JSON.stringify(filters.filterModel);
        }
        if ((filters.filterModel.items && filters.filterModel.items.length > 0) ||
            (filters.filterModel.quickFilterValues && filters.filterModel.quickFilterValues.length > 0)) {
            params.filterModel = JSON.stringify(filters.filterModel);
        }

        setSearchParams(params);
    }, [filters, setSearchParams]);

    const updateFilters = (newFilters: Partial<FilterState>) => {
        setFilters(prev => ({...prev, ...newFilters}));
    };

    const resetFilters = () => {
        setFilters({
            search: '',
            category: '',
            priceRange: [0, 10000],
            brand: '',
            sortModel: [],
            filterModel: {items: [], quickFilterValues: []}
        });
    };

    return {
        filters,
        updateFilters,
        resetFilters
    };
};