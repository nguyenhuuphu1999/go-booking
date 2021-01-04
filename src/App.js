// import React from 'react';
import './App.css'

import Feedbacks from './components/Feedbacks'
import Footer from './components/footer/Footer'
import React from 'react'

import Header from './components/header/Header'
import Apartments from './components/Apartments'
import NearbyLocationListItem from './components/NearbyLocationListItem'
import FamousPlaces from './components/FamousPlaces'

// import React, { useEffect, useState } from 'react'
// import apartmentApi from './api/apartmentApi'

function App() {
  // const [apartments, setApartments] = useState([])

  // useEffect(() => {
  //   const fetchApartments = async () => {
  //     try {
  //       // const params = { _page: 1, _limit: 10 };
  //       const response = await apartmentApi.getAll()
  //       console.log('Fetch products successfully: ', response)
  //       setApartments(response.data)
  //     } catch (error) {
  //       console.log('Failed to fetch product list: ', error)
  //     }
  //   }
  //   fetchApartments()
  // }, []);



  return (
    <div className="App">
      

      {/* <div className="apartments">
        {apartments.map(apartment => (
          <Apartment apartment={apartment} />
        ))}
      </div> */}

      <Header/>
      <Apartments/>
      <NearbyLocationListItem/>
      <FamousPlaces />
      

      <Feedbacks/>

      <Footer />
    </div>
  )
}

let feedbacks = [
  {
    place: 'VeeVoo Hotel',
    city: 'Vũng Tàu',
    content:
      'Nhà mình đi cùng em bé nên có ghi rõ trong phần yêu cầu đặc biệt trên GO lúc đặt phòng. Nhân viên khách sạn rất tận tình và chu đáo. Cả nhà mình đã có một kỳ nghỉ thật tuyệt, rất đáng giới thiệu cho mọi người!',
    by: 'Chị Thu, Hà Nội',
  },
  {
    place: 'Serena Nha Trang Hotel ',
    city: 'Nha Trang',
    content:
      'Tôi hoàn toàn hài lòng khi nghỉ tại Nha Trang. Cám ơn GO rất nhiều.',
    by: 'Anh Phú, Bình Định',
  },
  {
    place: 'VeeVoo Hotel',
    city: 'Vũng Tàu',
    content:
      'Nhà mình đi cùng em bé nên có ghi rõ trong phần yêu cầu đặc biệt trên GO lúc đặt phòng. Nhân viên khách sạn rất tận tình và chu đáo. Cả nhà mình đã có một kỳ nghỉ thật tuyệt, rất đáng giới thiệu cho mọi người!',
    by: 'Chị Thu, Hà Nội',
  },
]

let RoomListItems = [
  {
    id: 1,
    name: 'Studio Apartment - Maison de Gemmie Saigon',
    title: 'Toàn bộ căn hộ dịch vụ. Chủ nhà Gemmie',
    pricePerNight: '12$/đêm',
    photos:
      'https://a0.muscache.com/im/pictures/382fece9-d731-4c0c-ab2d-f45810526ac0.jpg?im_w=1200',
  },
  {
    id: 2,
    name: 'Glowing Private Room near Ben Thanh',
    title: 'Toàn bộ nhà phố. Chủ nhà Divyansh',
    pricePerNight: '15$/đêm',
    photos:
      'https://a0.muscache.com/im/pictures/miso/Hosting-39655954/original/12817cae-5fd8-4820-8711-291f6b297c3c.jpeg?im_w=1200',
  },
]

let NearbyLocationListItems = [
  {
    detail: 'Chung cư 56 m² 1 phòng ngủ, 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1609718400&Signature=AUQBBjPbRGdIrkZvhprETh7sALVh9huXUzRg3zQxCUafyF54wCkcxddDRa0aFNzLNxGtyziZGWrPMab~y0TIkrtea~wY6cI1VKeXVt0SSIlrQJ1fscoPzBWZUBqcKLpolmUQ95lQ3Sdyhh70Ac6f4ewPrmaDf2gaQDikFUCXnAlaucjA~QZ9xIXfQxUAUZ8vpVlu2DFR~OorHZrxmYFLkDczOV2lB1VyTHG2JhTVV2XUYfBDmeWeHoa4w-VlIdBXaR~fHq0K~lOYURqs1RxJU12rVHC7u8AxGSPu9OXdmJBgPRkEQHx6UIiVWwte15WeJaqo~bGIeE5JqBpemk36eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 1, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/a071/ee60/e0c95b540db36de28e476c825a3310a7?Expires=1609718400&Signature=XIApGY7SJ41yQ1JXyFljZ-C0-aArPjLvRzt0VAs1IF~p~a2Mepr6uMuK77lIjB5anYc1DLXqhSUCFP9ICrtf6FibMP4L7AOv5z9q9o5He-qgj164TEnLAJ1uGUrDq1unwP18eVOuc-4xKG~Q3stQPA9b1ymcWX79lovnMqThLXZoI2bn~z20ZXNbkgQyCSydpFYfYdTI04VziKzEHKBcXIUXAI2Nb-CtPPiAugoNc--uAvQ5wYx04uNLvT2YtGnPdjJnoTdkCurt860aSvnXX3SUc7iIeCOJmevpFCi6ZYhqvxGGNx8t6LiBhsttgKZWtdmWWzHkzc8iFIfBmyA22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 2, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư 56 m² 1 phòng ngủ, 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1609718400&Signature=AUQBBjPbRGdIrkZvhprETh7sALVh9huXUzRg3zQxCUafyF54wCkcxddDRa0aFNzLNxGtyziZGWrPMab~y0TIkrtea~wY6cI1VKeXVt0SSIlrQJ1fscoPzBWZUBqcKLpolmUQ95lQ3Sdyhh70Ac6f4ewPrmaDf2gaQDikFUCXnAlaucjA~QZ9xIXfQxUAUZ8vpVlu2DFR~OorHZrxmYFLkDczOV2lB1VyTHG2JhTVV2XUYfBDmeWeHoa4w-VlIdBXaR~fHq0K~lOYURqs1RxJU12rVHC7u8AxGSPu9OXdmJBgPRkEQHx6UIiVWwte15WeJaqo~bGIeE5JqBpemk36eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 1, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/a071/ee60/e0c95b540db36de28e476c825a3310a7?Expires=1609718400&Signature=XIApGY7SJ41yQ1JXyFljZ-C0-aArPjLvRzt0VAs1IF~p~a2Mepr6uMuK77lIjB5anYc1DLXqhSUCFP9ICrtf6FibMP4L7AOv5z9q9o5He-qgj164TEnLAJ1uGUrDq1unwP18eVOuc-4xKG~Q3stQPA9b1ymcWX79lovnMqThLXZoI2bn~z20ZXNbkgQyCSydpFYfYdTI04VziKzEHKBcXIUXAI2Nb-CtPPiAugoNc--uAvQ5wYx04uNLvT2YtGnPdjJnoTdkCurt860aSvnXX3SUc7iIeCOJmevpFCi6ZYhqvxGGNx8t6LiBhsttgKZWtdmWWzHkzc8iFIfBmyA22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 2, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư 56 m² 1 phòng ngủ, 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1609718400&Signature=AUQBBjPbRGdIrkZvhprETh7sALVh9huXUzRg3zQxCUafyF54wCkcxddDRa0aFNzLNxGtyziZGWrPMab~y0TIkrtea~wY6cI1VKeXVt0SSIlrQJ1fscoPzBWZUBqcKLpolmUQ95lQ3Sdyhh70Ac6f4ewPrmaDf2gaQDikFUCXnAlaucjA~QZ9xIXfQxUAUZ8vpVlu2DFR~OorHZrxmYFLkDczOV2lB1VyTHG2JhTVV2XUYfBDmeWeHoa4w-VlIdBXaR~fHq0K~lOYURqs1RxJU12rVHC7u8AxGSPu9OXdmJBgPRkEQHx6UIiVWwte15WeJaqo~bGIeE5JqBpemk36eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 1, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/a071/ee60/e0c95b540db36de28e476c825a3310a7?Expires=1609718400&Signature=XIApGY7SJ41yQ1JXyFljZ-C0-aArPjLvRzt0VAs1IF~p~a2Mepr6uMuK77lIjB5anYc1DLXqhSUCFP9ICrtf6FibMP4L7AOv5z9q9o5He-qgj164TEnLAJ1uGUrDq1unwP18eVOuc-4xKG~Q3stQPA9b1ymcWX79lovnMqThLXZoI2bn~z20ZXNbkgQyCSydpFYfYdTI04VziKzEHKBcXIUXAI2Nb-CtPPiAugoNc--uAvQ5wYx04uNLvT2YtGnPdjJnoTdkCurt860aSvnXX3SUc7iIeCOJmevpFCi6ZYhqvxGGNx8t6LiBhsttgKZWtdmWWzHkzc8iFIfBmyA22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 2, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư 56 m² 1 phòng ngủ, 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/ca45/e324/82198b93d2e8913104a1ac91b8234f8f?Expires=1609718400&Signature=AUQBBjPbRGdIrkZvhprETh7sALVh9huXUzRg3zQxCUafyF54wCkcxddDRa0aFNzLNxGtyziZGWrPMab~y0TIkrtea~wY6cI1VKeXVt0SSIlrQJ1fscoPzBWZUBqcKLpolmUQ95lQ3Sdyhh70Ac6f4ewPrmaDf2gaQDikFUCXnAlaucjA~QZ9xIXfQxUAUZ8vpVlu2DFR~OorHZrxmYFLkDczOV2lB1VyTHG2JhTVV2XUYfBDmeWeHoa4w-VlIdBXaR~fHq0K~lOYURqs1RxJU12rVHC7u8AxGSPu9OXdmJBgPRkEQHx6UIiVWwte15WeJaqo~bGIeE5JqBpemk36eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 1, Hồ Chí Minh',
  },
  {
    detail: 'Chung cư studio 35 m² có 1 phòng tắm riêng ở Quận 1',
    thumbnailUrl:
      'https://s3-alpha-sig.figma.com/img/a071/ee60/e0c95b540db36de28e476c825a3310a7?Expires=1609718400&Signature=XIApGY7SJ41yQ1JXyFljZ-C0-aArPjLvRzt0VAs1IF~p~a2Mepr6uMuK77lIjB5anYc1DLXqhSUCFP9ICrtf6FibMP4L7AOv5z9q9o5He-qgj164TEnLAJ1uGUrDq1unwP18eVOuc-4xKG~Q3stQPA9b1ymcWX79lovnMqThLXZoI2bn~z20ZXNbkgQyCSydpFYfYdTI04VziKzEHKBcXIUXAI2Nb-CtPPiAugoNc--uAvQ5wYx04uNLvT2YtGnPdjJnoTdkCurt860aSvnXX3SUc7iIeCOJmevpFCi6ZYhqvxGGNx8t6LiBhsttgKZWtdmWWzHkzc8iFIfBmyA22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    address: 'Quận 2, Hồ Chí Minh',
  },
]

let famousPlaces = [
  {
    title: 'Ha Noi',
    image_url:
      'https://s3-alpha-sig.figma.com/img/7680/0c47/3d054b907951e5b2a564e2428f81003d?Expires=1609718400&Signature=D1Em0DrOqtYakPSeWIj7mvoYvMnNA5HOfAp3XGBDgjHPncPTgqkDdr84qTsVZvlIyCLLPWQ5JjKUd0kaQnKqWN6mRuVD71oXX5FrBluVmLqvROwlbAjrIlI-wYICva3bvqxpC04EAAfMU4JM7-kzTWszT5D7rGiNAhYeDcoT9~ubMVO5ZZbabV7p0AqzwBsXIklPwU~KDR~WVpSqbDOqUgujt~vcwWcY~fad4S46lDtHjemrkO39Z3Lrl96v5K~ytuugV1KSBXd12oTFK9PNGtuB3m~fM6OSp-yjvOHCQetUfSoD4etghkaZ3OdEhPIHhobum5wgG0YgPEUkleP4Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: 'Ha Long',
    image_url:
      'https://s3-alpha-sig.figma.com/img/92c7/1914/b75209b31e3555d9baa2bb362c785ca4?Expires=1609718400&Signature=diTg7dEkAuD~TY5rAslt2FqPdC5zQGjreLetaBqtYsQft63JNuZQjoIouphlcUc~aQCKsKkSnNHZPH46Bdgp1dBPCEJK697Ds3t5KPJ4u8XC1aqZClWP9nfl~k8qW1UQtcnHDUhkPNolkrnefUMtypNLH~5rTttqb~f7g-bMWn4cRbrHuAP~zEzDBon7KjkkMHdDMOCKTyV7ZCJ~yOkLW51Ig2rhLNODN1dVkaCWOD-ryZdU9lWtbrRxl4KnD1ycg8BsbnLzrEILALjTqG7jHN~ed-iU-jelyZWytvHz-6JNYxhMzrd7jjpU1rN-klqH3JAaHcj~oUc3XzGIcjlTrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    title: 'Ha Noi',
    image_url:
      'https://s3-alpha-sig.figma.com/img/7680/0c47/3d054b907951e5b2a564e2428f81003d?Expires=1609718400&Signature=D1Em0DrOqtYakPSeWIj7mvoYvMnNA5HOfAp3XGBDgjHPncPTgqkDdr84qTsVZvlIyCLLPWQ5JjKUd0kaQnKqWN6mRuVD71oXX5FrBluVmLqvROwlbAjrIlI-wYICva3bvqxpC04EAAfMU4JM7-kzTWszT5D7rGiNAhYeDcoT9~ubMVO5ZZbabV7p0AqzwBsXIklPwU~KDR~WVpSqbDOqUgujt~vcwWcY~fad4S46lDtHjemrkO39Z3Lrl96v5K~ytuugV1KSBXd12oTFK9PNGtuB3m~fM6OSp-yjvOHCQetUfSoD4etghkaZ3OdEhPIHhobum5wgG0YgPEUkleP4Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },

  {
    title: 'Ha Long',
    image_url:
      'https://s3-alpha-sig.figma.com/img/92c7/1914/b75209b31e3555d9baa2bb362c785ca4?Expires=1609718400&Signature=diTg7dEkAuD~TY5rAslt2FqPdC5zQGjreLetaBqtYsQft63JNuZQjoIouphlcUc~aQCKsKkSnNHZPH46Bdgp1dBPCEJK697Ds3t5KPJ4u8XC1aqZClWP9nfl~k8qW1UQtcnHDUhkPNolkrnefUMtypNLH~5rTttqb~f7g-bMWn4cRbrHuAP~zEzDBon7KjkkMHdDMOCKTyV7ZCJ~yOkLW51Ig2rhLNODN1dVkaCWOD-ryZdU9lWtbrRxl4KnD1ycg8BsbnLzrEILALjTqG7jHN~ed-iU-jelyZWytvHz-6JNYxhMzrd7jjpU1rN-klqH3JAaHcj~oUc3XzGIcjlTrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
]

export default App
