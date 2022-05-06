import React from "react";
import { useEffect } from 'react';
import { useGetPhotosQuery } from "../../api/photos";
import { PreLoaderTable } from './PreLoaderTable/preLoaderTable';
import GalleryTable from './GalleryTable/galleryTable';
import { getServiceData } from '../../redux/reducers/photosSlice';
import { useAppDispatch, useTypedSelector } from '../../redux/store/store';
import './gallery.css'

const Gallery = () => {
    const { data, isSuccess, isLoading } = useGetPhotosQuery();
    const dispatch = useAppDispatch()
    const serviceData = useTypedSelector((state => state.photos.data))

    useEffect(() => {
        if (isSuccess) {
            dispatch(getServiceData(data))
        }

    }, [data, isSuccess, dispatch])

    return (
        <div className="Gallery">
            {isLoading ? <PreLoaderTable />
                : isSuccess && serviceData ? <GalleryTable /> : 'Error'}
        </div>
    );
}

export default Gallery;