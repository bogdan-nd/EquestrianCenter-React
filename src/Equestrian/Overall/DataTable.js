import React from 'react'
import {Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components"
import AddDataToTable from "./AddDataToTable";


const MyTrainingTable = styled(Table)`
  //margin-top: 70px;
  background: #DCE5D7;
`;


export default function DataTable({title, rows}) {
    return (
        <MyTrainingTable striped bordered hover>
            <thead>
            {title.map(columnName => {
                    return (<AddDataToTable dataRow={columnName}/>)
                }
            )}

            </thead>

            <tbody>
            {rows.map(training => {
                    return (<AddDataToTable dataRow={training}/>)
                }
            )}
            </tbody>

        </MyTrainingTable>
    )
}