import React from "react";
import "./Profile.scss";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
export default function Profile() {
  const profilePics = [
    {
      image:
        "https://3.bp.blogspot.com/-3CUdiw4DoQU/V3tWGGh-DBI/AAAAAAAAeog/I_-GuSn0R4YP2rfGKt8x4XfvSyYS6j-FwCLcB/s1600/philippines_filipino_art.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/e9/c8/67/e9c8679c8914db7f62216b46050f46a8.jpg",
    },
    {
      image:
        "https://i.pinimg.com/736x/05/f0/c0/05f0c03964c415ab6ed58e1bf47479a2.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/b2/cd/34/b2cd340ec2c6a4e7500a70a0d9f08fe9.png",
    },
    {
      image:
        "https://previews.123rf.com/images/katyau/katyau1508/katyau150800022/43223884-perfil-de-la-hermosa-mujer-africana-dibujado-a-mano-ilustraci%C3%B3n-%C3%A9tnica-.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/85/38/d1/8538d19fb6b9700c795ac672e664ed34.png",
    },
    {
      image:
        "https://3.bp.blogspot.com/-3CUdiw4DoQU/V3tWGGh-DBI/AAAAAAAAeog/I_-GuSn0R4YP2rfGKt8x4XfvSyYS6j-FwCLcB/s1600/philippines_filipino_art.jpg",
    },
    {
      image:
        "https://i.pinimg.com/originals/e9/c8/67/e9c8679c8914db7f62216b46050f46a8.jpg",
    },
    {
      image:
        "https://i.pinimg.com/736x/05/f0/c0/05f0c03964c415ab6ed58e1bf47479a2.jpg",
    },
  ];
  return (
    <div>
      <div className="superiorProfile">
        <div className="heading">
          <div className="topheader">
            <div className="topheader__name">
              <h3>Justice Warrior</h3>
              <ArrowDropDownCircleOutlinedIcon className="outlinedIcon"></ArrowDropDownCircleOutlinedIcon>
            </div>

            <SettingsOutlinedIcon></SettingsOutlinedIcon>
          </div>
          <div className="profileInfo">
            <div className="profileInfo__imageDiv">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3xD8e9RhlcqwUE2zbrJTNbNW1yf8wf0EtQ&usqp=CAU"
                className="profileInfo__image"
                alt="imageProfile"
              ></img>
            </div>
            <div className="profileInfo__data">
              <h3>9</h3>
              <p className="profileInfo__greyTitle">Posts</p>
            </div>
            <div className="profileInfo__data">
              <h3>23.4K</h3>
              <p className="profileInfo__greyTitle">Supporters</p>
            </div>
            <div className="profileInfo__data">
              <h3>15.3K</h3>
              <p className="profileInfo__greyTitle">Supported</p>
            </div>
          </div>
        </div>
        <div className="profileInfo2">
          <h4 className="profileInfo2__data2">Justice | Web developer</h4>
          <p className="profileInfo2__greyTitle">
            This is the admin profile of the mock app
          </p>
        </div>
      </div>
      <div className="bottomProfile">
        {profilePics.map((image, index) => (
          <div key={index} className="imagesProfileDiv">
            <img
              src={image.image}
              className="imagesProfile"
              alt="imagesProfile"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
