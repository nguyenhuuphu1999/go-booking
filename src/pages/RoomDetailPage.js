import Navbar from '../components/header/Navbar'
import ApartmentDetail from '../components/apartment_detail/ApartmentDetail'
import Policies from '../components/apartment_detail/Policies'
import Feedbacks from '../components/apartment_detail/Feedbacks'

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchDetail } from '../store/detail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RoomDetailPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams()

  useEffect(() => { 
    dispatch(fetchDetail(id)) 
  }, [dispatch, id])

  const photos = useSelector(state => state.detail.apartmentPhotos)
  const apartment = useSelector(state => state.detail.apartment)
  const feedbackList = useSelector(state => state.detail.comment)
  // debugger;

  return (
    <div>
      <Navbar />
      <ApartmentDetail {...apartment} {...photos} />
      <Policies />
      <Feedbacks feedbackList={feedbackList}/>
    </div>
  )
}

export default RoomDetailPage
