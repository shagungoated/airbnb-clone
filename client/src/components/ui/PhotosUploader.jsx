import React, { useState } from 'react';

import Image from './Image';
import axiosInstance from '../../utils/axios';

const PhotosUploader = ({ addedPhotos, setAddedPhotos }) => {
  const [photoLink, setPhotoLink] = useState('');

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axiosInstance.post('/upload-by-link', {
      link: photoLink,
    });

    setAddedPhotos((prev) => {
      return [...prev, filename];
    });

    setPhotoLink('');
  };

  const uploadPhoto = async (e) => {
    const files = e.target.files;
    const data = new FormData(); // creating new form data

    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]); // adding all the photos to data