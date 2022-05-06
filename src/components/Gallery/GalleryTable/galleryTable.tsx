import React, { useEffect, useState } from "react";
import { getInitialData, updateInitalData, sortByAlbumId } from '../../../redux/reducers/photosSlice'
import { useAppDispatch, useTypedSelector } from '../../../redux/store/store'
import TableRow from './TableRow/tableRow'

const GalleryTable = () => {
    
    const [state, setState] = useState(1)
    const data = useTypedSelector((state => state.photos.data))
    const dispatch = useAppDispatch()
    const ref = React.useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (data) {
            dispatch(getInitialData(data.slice(0, 30)))
        }
    }, [data, dispatch])
    const inputValue: string | number | undefined = ref.current?.value || 1
    useEffect(() => {
        setState(+inputValue)
    }, [inputValue])
    const galleryData = useTypedSelector((state => state.photos.initialData))

    const onUpdateData = () => {
        dispatch(updateInitalData())
    }

    const onSortByAlbumId = () => {
        state && dispatch(sortByAlbumId(+inputValue))
    }
    return (
        <>
            <div className='container_input'>
                <h2>Album Id</h2>
                <input ref={ref || 1} type='number' />
                <div className='button_update' onClick={() => onSortByAlbumId()}>Search</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>albumId</th>
                        <th>Img</th>
                        <th>thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {galleryData && galleryData.map((item: any, index: number) => {
                        return <TableRow item={item} key={index} />
                    })}
                </tbody>
            </table>

            <div className='button_update' onClick={() => onUpdateData()}>
                CLICK ON ME
            </div>

        </>
    )
}

export default GalleryTable