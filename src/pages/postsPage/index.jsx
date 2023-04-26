import Post from '../../widgets/Post'
import React from 'react'

const Posts = () => {

    const posts = [
        {
            _id : "1",
            userId : "1",
            firstName : "deeksha.jain",
            lastName : "sankonatti",
            description : "my source of inspiration!",
            location : "Bangalore",
            picturePath : "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000_960_720.jpg",
            userPicturePath:"https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000_960_720.jpg",
            likes : 100,
            comments : 32
        },
        {
            _id : "2",
            userId : "2",
            firstName : "sammed.sankonatti",
            lastName : "sankonatti",
            description : "live the moment!",
            location : "New york, USA",
            picturePath : "https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            userPicturePath:"https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            likes : 500,
            comments : 45
        },
        {
            _id : "3",
            userId : "3",
            firstName : "sammed.sankonatti",
            lastName : "sankonatti",
            description : "mind blowing view!",
            location : "New york, USA",
            picturePath : "https://c4.wallpaperflare.com/wallpaper/655/901/296/tower-block-uae-united-arab-emirates-cotton-candy-wallpaper-preview.jpg",
            userPicturePath:"https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            likes : 1045,
            comments : 312
        },
        {
            _id : "4",
            userId : "4",
            firstName : "marvel.studios",
            lastName : "sankonatti",
            description : "The endgame",
            location : "New york, USA",
            picturePath : "https://c4.wallpaperflare.com/wallpaper/535/901/196/the-avengers-avengers-endgame-avengers-endgame-iron-man-marvel-comics-hd-wallpaper-preview.jpg",
            userPicturePath:"https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            likes : 1045,
            comments : 312
        },
        {
            _id : "5",
            userId : "5",
            firstName : "marvel.studios",
            lastName : "sankonatti",
            description : "Hawkeye the Modern karna",
            location : "New york, USA",
            picturePath : "https://c4.wallpaperflare.com/wallpaper/472/143/808/hawkeye-marvel-comics-the-avengers-jeremy-renner-wallpaper-preview.jpg",
            userPicturePath:"https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            likes : 1045,
            comments : 312
        },
        {
            _id : "6",
            userId : "6",
            firstName : "marvel.studios",
            lastName : "sankonatti",
            description : "Best finisher on a mission",
            location : "New york, USA",
            picturePath : "https://c4.wallpaperflare.com/wallpaper/202/872/883/thanos-marvel-cinematic-universe-the-avengers-avengers-infinity-war-wallpaper-preview.jpg",
            userPicturePath:"https://c4.wallpaperflare.com/wallpaper/301/256/1013/dubai-city-lights-8k-uae-wallpaper-preview.jpg",
            likes : 1045,
            comments : 312
        }
    ]

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
    })=> (
        <Post key={_id}
          postId={_id}
          postUserId={userId}
          name={`${firstName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
          comments={comments} 

        />
        )
      )}
    </>
  )
}

export default Posts