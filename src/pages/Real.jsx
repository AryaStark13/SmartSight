import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";

const Gender = () => {
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [model, setModel] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);
  const [submitClicked, setSubmitClicked] = useState(false);
  const url = "http://127.0.0.1:8000/anime/";

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
      console.log(data.image);
      setGender(data.image);
      setLoadingTime(parseInt(data.loading_time));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12">
              <span className="text-color">SmartSight API</span>
              <h3 className="text-md mb-5">Real or Animated</h3>
              <div className="row">
                <div className="col-lg-8">
                  <form id="contact-form" className="contact__form form">
                    Upload Image &nbsp;
                    <FileBase64
                      type="file"
                      multiple={false}
                      className="image-upload"
                      onDone={(file) => setImage(file)}
                    />
                    {model ? (
                      <button
                        className="btn btn-main"
                        name="submit"
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setSubmitClicked(true);
                          handleSubmit();
                        }}
                      >
                        Submit
                      </button>
                    ) : (
                      <>Model is Loading...</>
                    )}
                  </form>
                  Real or Animated: <b>{gender}</b>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gender;