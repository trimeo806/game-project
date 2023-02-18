import "./App.css";
import React, { useState, useEffect } from "react";
import RenderImage from "./component/RenderImage";
import RenderAvatar from "./component/RenderAvatar";
const addItem = (total, imageName, path) => {
  for (let i = 1; i < total; i++) {
    const objectImage = {
      img: require(`./${path}/${i}.png`),
      id: `${path}${i}`,
    };
    imageName.push(objectImage);
  }
};
const imageBody = [];
addItem(18, imageBody, "component/character/body");
const imageClothing1 = [];
addItem(6, imageClothing1, "component/character/clothes/layer_1");
const imageClothing2 = [];
addItem(6, imageClothing2, "component/character/clothes/layer_2");
const imageClothing3 = [];
addItem(10, imageClothing3, "component/character/clothes/layer_3");
const imageEyes = [];
addItem(25, imageEyes, "component/character/eyes");
const imageEyeBrows = [];
addItem(16, imageEyeBrows, "component/character/eyebrows");
const imageGlasses = [];
addItem(18, imageGlasses, "component/character/accessories/glasses");
const imageHair = [];
addItem(74, imageHair, "component/character/hair");
const imageMouth = [];
addItem(25, imageMouth, "component/character/mouths");
const imageHats = [];
addItem(28, imageHats, "component/character/accessories/hats");

function App() {
  const [imageBodyState, setImageBodyState] = useState({
    img: window.localStorage.getItem("imageBodyState")
      ? JSON.parse(window.localStorage.getItem("imageBodyState")).img
      : "",
    id: window.localStorage.getItem("imageBodyState")
      ? JSON.parse(window.localStorage.getItem("imageBodyState")).id
      : "",
  });

  const [imageClothing1State, setImageClothing1State] = useState({
    img: window.localStorage.getItem("imageClothing1State")
      ? JSON.parse(window.localStorage.getItem("imageClothing1State")).img
      : "",
    id: window.localStorage.getItem("imageClothing1State")
      ? JSON.parse(window.localStorage.getItem("imageClothing1State")).id
      : "",
  });
  const [imageClothing2State, setImageClothing2State] = useState({
    img: window.localStorage.getItem("imageClothing2State")
      ? JSON.parse(window.localStorage.getItem("imageClothing2State")).img
      : "",
    id: window.localStorage.getItem("imageClothing2State")
      ? JSON.parse(window.localStorage.getItem("imageClothing2State")).id
      : "",
  });
  const [imageClothing3State, setImageClothing3State] = useState({
    img: window.localStorage.getItem("imageClothing3State")
      ? JSON.parse(window.localStorage.getItem("imageClothing3State")).img
      : "",
    id: window.localStorage.getItem("imageClothing3State")
      ? JSON.parse(window.localStorage.getItem("imageClothing3State")).id
      : "",
  });
  const [imageMouthState, setImageMouthState] = useState({
    img: window.localStorage.getItem("imageMouthState")
      ? JSON.parse(window.localStorage.getItem("imageMouthState")).img
      : "",
    id: window.localStorage.getItem("imageMouthState")
      ? JSON.parse(window.localStorage.getItem("imageMouthState")).id
      : "",
  });
  const [imageEyesState, setImageEyesState] = useState({
    img: window.localStorage.getItem("imageEyesState")
      ? JSON.parse(window.localStorage.getItem("imageEyesState")).img
      : "",
    id: window.localStorage.getItem("imageEyesState")
      ? JSON.parse(window.localStorage.getItem("imageEyesState")).id
      : "",
  });
  const [imageGlassesState, setImageGlassesState] = useState({
    img: window.localStorage.getItem("imageGlassesState")
      ? JSON.parse(window.localStorage.getItem("imageGlassesState")).img
      : "",
    id: window.localStorage.getItem("imageGlassesState")
      ? JSON.parse(window.localStorage.getItem("imageGlassesState")).id
      : "",
  });
  const [imageEyeBrowsState, setImageEyeBrowsState] = useState({
    img: window.localStorage.getItem("imageEyeBrowsState")
      ? JSON.parse(window.localStorage.getItem("imageEyeBrowsState")).img
      : "",
    id: window.localStorage.getItem("imageEyeBrowsState")
      ? JSON.parse(window.localStorage.getItem("imageEyeBrowsState")).id
      : "",
  });
  const [imageHairState, setImageHairState] = useState({
    img: window.localStorage.getItem("imageHairState")
      ? JSON.parse(window.localStorage.getItem("imageHairState")).img
      : "",
    id: window.localStorage.getItem("imageHairState")
      ? JSON.parse(window.localStorage.getItem("imageHairState")).id
      : "",
  });
  // const [imageHatsState, setImageHatsState] = useState({
  //   img: JSON.parse(window.localStorage.getItem("imageHatsState")).img,
  //   id: JSON.parse(window.localStorage.getItem("imageHatsState")).id,
  // });
  const handleChange = (imageItemState, setItemState, e) => {
    setItemState({
      ...imageItemState,
      img: e.target.src,
      id: e.target.id,
    });
  };

  function getRandomInt(max) {
    max = Math.floor(max);

    return Math.floor(Math.random() * max);
  }
  const randomize = () => {
    setImageBodyState({
      ...imageBodyState,
      img: imageBody[getRandomInt(17)].img,
    });
    setImageClothing1State({
      ...imageClothing1State,
      img: imageClothing1[getRandomInt(4)].img,
    });
    setImageClothing2State({
      ...imageClothing2State,
      img: imageClothing2[getRandomInt(4)].img,
    });
    setImageClothing3State({
      ...imageClothing3State,
      img: imageClothing3[getRandomInt(8)].img,
    });
    setImageMouthState({
      ...imageMouthState,
      img: imageMouth[getRandomInt(23)].img,
    });
    setImageEyesState({
      ...imageEyesState,
      img: imageEyes[getRandomInt(23)].img,
    });
    setImageGlassesState({
      ...imageGlassesState,
      img: imageGlasses[getRandomInt(16)].img,
    });
    setImageEyeBrowsState({
      ...imageEyeBrowsState,
      img: imageEyeBrows[getRandomInt(14)].img,
    });
    setImageHairState({
      ...imageHairState,
      img: imageHair[getRandomInt(72)].img,
    });
    // setImageHatsState({
    //   ...imageHatsState,
    //   img: imageHats[getRandomInt(27)].img,
    // });
  };
  useEffect(() => {
    window.localStorage.setItem(
      "imageBodyState",
      JSON.stringify(imageBodyState)
    );
  }, [imageBodyState]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageClothing1State",
      JSON.stringify(imageClothing1State)
    );
  }, [imageClothing1State]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageClothing2State",
      JSON.stringify(imageClothing2State)
    );
  }, [imageClothing2State]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageClothing3State",
      JSON.stringify(imageClothing3State)
    );
  }, [imageClothing3State]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageMouthState",
      JSON.stringify(imageMouthState)
    );
  }, [imageMouthState]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageEyesState",
      JSON.stringify(imageEyesState)
    );
  }, [imageEyesState]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageEyeBrowsState",
      JSON.stringify(imageEyeBrowsState)
    );
  }, [imageEyeBrowsState]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageHairState",
      JSON.stringify(imageHairState)
    );
  }, [imageHairState]);
  // useEffect(() => {
  //   window.localStorage.setItem(
  //     "imageHatsState",
  //     JSON.stringify(imageHatsState)
  //   );
  // }, [imageHatsState]);
  useEffect(() => {
    window.localStorage.setItem(
      "imageGlassesState",
      JSON.stringify(imageGlassesState)
    );
  }, [imageGlassesState]);

  return (
    <div className="App">
      <header>
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
      </header>
      <div className="avatar-group">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <RenderAvatar
                imageItemState={imageBodyState}
                zIndex={0}
                className={"body-state"}
              />
              {/* Mai code tiếp chỗ này */}
              <RenderAvatar
                imageItemState={imageClothing1State}
                zIndex={1}
                className={"clothing-1-state"}
              />
              <RenderAvatar
                imageItemState={imageClothing2State}
                zIndex={1}
                className={"clothing-2-state"}
              />
              <RenderAvatar
                imageItemState={imageClothing3State}
                zIndex={1}
                className={"clothing-3-state"}
              />
              <RenderAvatar
                imageItemState={imageMouthState}
                zIndex={2}
                className={"mouth-state"}
              />

              <img
                src={require(`./component/character/noses/1.png`)}
                alt=""
                style={{ zIndex: "2" }}
                className="nose"
              />

              <RenderAvatar
                imageItemState={imageEyesState}
                zIndex={2}
                className={"mouth-state"}
              />
              <RenderAvatar
                imageItemState={imageGlassesState}
                zIndex={3}
                className={"glasses-state"}
              />
              <RenderAvatar
                imageItemState={imageEyeBrowsState}
                zIndex={4}
                className={"glasses-state"}
              />
              {/* <RenderAvatar
                imageItemState={imageHatsState}
                zIndex={7}
                className={"hats-state"}
              /> */}
              <RenderAvatar
                imageItemState={imageHairState}
                zIndex={6}
                className={"hair-state"}
              />
            </div>
            <div className="button-randomize">
              <button
                className="button text-center"
                onClick={() => randomize()}
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div>
          <RenderImage
            name={"Body"}
            imageName={imageBody}
            handleImageItemState={(e) => {
              handleChange(imageBodyState, setImageBodyState, e);
            }}
          />
          <RenderImage
            name={"Eyes"}
            imageName={imageEyes}
            handleImageItemState={(e) => {
              handleChange(imageEyesState, setImageEyesState, e);
            }}
          />
          <RenderImage
            name={"Hair"}
            imageName={imageHair}
            handleImageItemState={(e) => {
              handleChange(imageHairState, setImageHairState, e);
            }}
          />
          <RenderImage
            name={"Mouth"}
            imageName={imageMouth}
            handleImageItemState={(e) => {
              handleChange(imageMouthState, setImageMouthState, e);
            }}
          />
          <RenderImage
            name={"EyeBrows"}
            imageName={imageEyeBrows}
            handleImageItemState={(e) => {
              handleChange(imageEyeBrowsState, setImageEyeBrowsState, e);
            }}
          />
          <RenderImage
            name={"Glasclses"}
            imageName={imageGlasses}
            handleImageItemState={(e) => {
              handleChange(imageGlassesState, setImageGlassesState, e);
            }}
          />
          <RenderImage
            name={"Clothing (L1)"}
            imageName={imageClothing1}
            handleImageItemState={(e) => {
              handleChange(imageClothing1State, setImageClothing1State, e);
            }}
          />
          <RenderImage
            name={"Clothing (L2)"}
            imageName={imageClothing2}
            handleImageItemState={(e) => {
              handleChange(imageClothing2State, setImageClothing2State, e);
            }}
          />
          <RenderImage
            name={"Clothing (L3)"}
            imageName={imageClothing3}
            handleImageItemState={(e) => {
              handleChange(imageClothing3State, setImageClothing3State, e);
            }}
          />
          {/* <RenderImage
            name={"Hats"}
            imageName={imageHats}
            handleImageItemState={(e) => {
              handleChange(imageHatsState, setImageHatsState, e);
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
