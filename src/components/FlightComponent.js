import React from 'react';
import ReactTable from "react-table";
import Moment from 'moment';
import "react-table/react-table.css";
import timeOptions from "../timeOptions.json"

const FlightComponent = (props) =>
  <ReactTable
    data={props.flights}
    filterable
    columns={[
      {
        Header: "Time",
        accessor: "time",
        Cell: ({ value }) => (Moment(value).format("HH:mm")),
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id;
          return row[id] !== undefined && filter.value !== 'All' ? String(filter.value) === String(Moment(row[id]).format("HH:mm")) : true
        },
        Filter: ({ filter, onChange }) =>
          <select className="w-100" name="country" onChange={event => onChange(event.target.value)} value={filter ? filter.value : 'All'}>
            {timeOptions.time.map((to) => {
              return <option key={to} value={to}>{to}</option>;
            })}
          </select>
      },
      {
        Header: "Expected",
        accessor: "expected_time",
        Cell: ({ value }) => (value ? Moment(value).format("HH:mm") : ""),
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id;
          return row[id] !== undefined && filter.value !== 'All' ? String(filter.value) === String(Moment(row[id]).format("HH:mm")) : true
        },
        Filter: ({ filter, onChange }) =>
          <select className="w-100" name="country" onChange={event => onChange(event.target.value)} value={filter ? filter.value : 'All'}>
            {timeOptions.time.map((to) => {
              return <option key={to} value={to}>{to}</option>;
            })}
          </select>
      },
      {
        Header: "Airline",
        accessor: "airline",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
        }
      },
      {
        Header: "Destination",
        accessor: "destination",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
        }
      },
      {
        Header: "Status",
        accessor: "status",
        filterMethod: (filter, row) => {
          const id = filter.pivotId || filter.id
          return (row[id] !== undefined) && (row[id] !== null) ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : false
        }
      }
    ]}
    defaultPageSize={10}
    className="-striped -highlight"
  />

export default FlightComponent;