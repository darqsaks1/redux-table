import React from "react";
import "./tableRow.css";
import { IPhotosServer } from '../../../../ts/types/types'
import { removeDataItem } from '../../../../redux/reducers/photosSlice'
import { useAppDispatch } from '../../../../redux/store/store';

interface Item {
    item: IPhotosServer,
    key: number
}
const TableRow = ({ item }: Item) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td> {item.title}</td>
                <td> {item.albumId}</td>
                <td> <img src={item.url} alt='url' /></td>
                <td> <img src={item.thumbnailUrl} alt='url' /></td>
                <td className='delete-item' onClick={() => dispatch(removeDataItem(item.id))}> X </td>

            </tr>
        </>
    );
}
export default TableRow;