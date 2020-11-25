import React from 'react';
import style from './EngineDataTable.module.css'

const EngineDataTable = (props) => {
    return (
        <table  width="100%" cellpadding="5" className={style.carDataTableStyle}>
            <tr>
                <td>Ячейка 3</td>
                <td>Ячейка 4</td>
            </tr>
            <tr>
                <td>Ячейка 3</td>
                <td>Ячейка 4</td>
            </tr>
            <tr>
                <td>Ячейка 3</td>
                <td>Ячейка 4</td>
            </tr>
            <tr>
                <td>Ячейка 3</td>
                <td>Ячейка 4</td>
            </tr>
            <tr>
                <td>Ячейка 3</td>
                <td>Ячейка 4</td>
            </tr>
            {/* {props.data.map((value, key) => {
                    console.log(value)
            })} */}
        </table>
    )
}

export default EngineDataTable;