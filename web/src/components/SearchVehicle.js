import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import {vehicleStore} from "../stores/VehicleStore";
import React from "react";

export function SearchVehicle() {
    const columns = [{
        dataField: 'brand',
        text: 'Vehicle Brand',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }, {
        dataField: 'name',
        text: 'Vehicle Name',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }, {
        dataField: 'price',
        text: 'Vehicle Price',
        sort: true,
        filter: textFilter(),
        headerFormatter: priceFormatter
    }];
    const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
    }];

    return (
        <BootstrapTable
            keyField="id"
            data={ vehicleStore.vehicles }
            columns={ columns }
            filter={ filterFactory() }
            defaultSorted={ defaultSorted }
        />
    );

}

function priceFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
        <div style={ { display: 'flex', flexDirection: 'column' } }>
            { filterElement }
            { column.text }
            { sortElement }
        </div>
    );
}