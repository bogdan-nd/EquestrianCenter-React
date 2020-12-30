import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AddDataToTable({dataRow}) {
    return (
        <tr>
            {dataRow.map(data => {
                return (
                    <th>
                        {data}
                    </th>
                )
            })}
        </tr>
    )
}