import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
// import CircularIndeterminate from "./CircularIndeterminateComponent";

// TODO: Add example images to test

const Home = () => {
  const [image, setImage] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [model, setModel] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);
  // const [imageList, setImageList] = useState([]);
  const url = "http://127.0.0.1:8000/api/";

  const optionsPOST = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: image.base64 }),
  };

  useEffect(() => {
    fetch(url)
      .then((response) => {
        setModel(true);
      })
      .catch((error) => console.log(error, "model has not loaded"));

    // importImages(require.context('../../../Assets/low', false, /\.(png|jpe?g|svg)$/));
  }, []);

  const handleSubmit = () => {
    if (!image) {
      alert("Please upload an image");
      return;
    }
    callApi();
  };

  const callApi = async () => {
    try {
      const res = await fetch(url, optionsPOST);
      const data = await res.json();
      console.log(data);
      setUpdatedImage(data.image);
      setLoadingTime(parseInt(data.loading_time));
      // setSubmitClicked(false);
    } catch (error) {
      alert(error);
    }
  };

  // const importImages = (r) => {
  //   r.keys().map((item, index) => { setImageList.push(r(item)); });
  // };

  return (
    <div>
      <div>
        <h1>Low Light Image Enhancement Using Deep Learning</h1>
        <br />
        <div>
          <form className="form">
            Upload Image &nbsp;
            <FileBase64
              type="file"
              multiple={false}
              className="image-upload"
              onDone={(file) => setImage(file)}
            />
            {model ? (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setSubmitClicked(true);
                  handleSubmit();
                }}
              >
                Submit
              </button>
            ) : (
              <>
                Model is Loading...
                {/* <CircularIndeterminate /> */}
              </>
            )}
          </form>
        </div>
        <br />
        <div>
          {loadingTime ? (
            <h3>Image has been enhanced in {loadingTime} seconds</h3>
          ) : null}
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ paddingRight: "10px" }}>
            {image ? (
              <>
                <h1>Original Image</h1>
                <img
                  className="original image"
                  src={image.base64}
                  alt="original"
                  // height={500}
                  // width={500}
                />
                <br />
              </>
            ) : null}
          </div>
          <div style={{ paddingLeft: "10px" }}>
            
          </div>
        </div>
      </div>

      {/* <div>
        <h1>Example Images to test</h1>
        <div className="example-images">
          {
            imageList.map((image, index) => {
              return (
                <div key={index} className="example-image">
                  <img src={image} alt="example" />
                </div>
              );
            })
          }
        </div>
      </div> */}
    </div>
  );
};

export default Home;