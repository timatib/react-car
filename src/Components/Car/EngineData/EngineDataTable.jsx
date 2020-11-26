import React from 'react';
import style from './EngineDataTable.module.css'

const EngineDataTable = (props) => {
    return (
        <div>
            {props.data && props.data.map((value, key) => {
                if(key == props.currentEngineKey) {
                    return <table cellPadding="5" className={style.carDataTableStyle} key={key}>
                        <tbody>
                            <tr>
                                <td>Объем двигателя</td>
                                <td>{value.engine_volume}</td>
                            </tr>
                            <tr>
                                <td>Тип трансмиссии</td>
                                <td>{value.transmission}</td>
                            </tr> 
                            <tr>
                                <td>Количество цилиндров</td>
                                <td>{value.engine_cylinders}</td>
                            </tr> 
                            <tr>
                                <td>Тип поршневой группы</td>
                                <td>{value.engine_type}</td>
                            </tr> 
                            <tr>
                                <td>Индекс двигателя</td>
                                <td>{value.engine_index}</td>
                            </tr> 
                            <tr>
                                <td>Тип топлива</td>
                                <td>{value.engine_fuel_type}</td>
                            </tr> 
                            <tr>
                                <td>Мощность</td>
                                <td>{value.engine_horsepower}</td>
                            </tr> 
                            <tr>
                                <td>Нагнетатель</td>
                                <td>{value.engine_boost_type}</td>
                            </tr> 
                            <tr>
                                <td>Разгон 0-100</td>
                                <td>{value.dynamic_0_100}</td>
                            </tr> 
                            <tr>
                                <td>Разгон 100-200</td>
                                <td>{value.dynamic_100_200}</td>
                            </tr> 
                            <tr>
                                <td>Максимальная скорость</td>
                                <td>{value.dynamic_max_speed}</td>
                            </tr> 
                            <tr>
                                <td>Расход топлива</td>
                                <td>{value.fuel_consumption}</td>
                            </tr> 
                            <tr>
                                <td>Вес</td>
                                <td>{value.weight}</td>
                            </tr> 
                            <tr>
                                <td>Коробка передач</td>
                                <td>{value.gearbox.gearbox_name}</td>
                            </tr> 
                            <tr>
                                <td>Тип коробки</td>
                                <td>{value.gearbox.gearbox_type}</td>
                            </tr> 
                            <tr>
                                <td>Количество передач</td>
                                <td>{value.gearbox.gears_number}</td>
                            </tr> 
                        </tbody>
                    </table>
                }
            })}
        </div>  
    )
}

export default EngineDataTable;