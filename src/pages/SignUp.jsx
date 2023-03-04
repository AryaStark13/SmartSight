import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const [setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [values, setValues] = useState({
    username: "",
    email: "",
    name: "",
    age: "",
    gender: "",
    bio: "",
    profile: "",
    phone: "",
    college: "",
    interests: "",
    password: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
      email: data.get("email"),
    });
    createacc();
  };

  async function createacc() {
    try {
      let result = await fetch("http://127.0.0.1:8000/onboarding/register/", {
        method: "POST",
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          name: values.name,
          age: values.age,
          gender: values.gender,
          bio: values.bio,
          profile: values.profile,
          phone: values.phone,
          college: values.college,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      if (result.token) {
        Swal.fire("Signed in Successfully!", "success");
        history("/home");
      } else {
        Swal.fire("Oops!!", "Some error while signup", "error");
      }
    } catch (error) {
      console.log("Error" + error);
      setLoading(false);
    }
  }
  return (
    <div>
      {/* <form className="mt-5 mb-5 login-input" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="username"
            label="Username"
            name="username"
            value={values.username}
            onChange={handleChanges}
            autoComplete="name"
            autoFocus
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            id="email"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChanges}
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            label="Password"
            id="password"
            value={values.password.trim()}
            onChange={handleChange("password")}
            autoComplete="current-password"
            required
          />
        </div>
        <button
          className="btn btn-primary text-uppercase"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Sign in
        </button>
      </form>
      <p className="mt-5 login-form__footer">
        Already have an account?
        <Link to="/login" className="text-primary">
          Log In
        </Link>
        now
      </p> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10">
            <div className="contact-form bg-dark">
              <h1 className="text-white add-letter-space mb-5">
                Create Your Account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="needs-validation"
                novalidate
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="firstName" className="text-black-300">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Username"
                        id="username"
                        label="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChanges}
                        autoComplete="name"
                        autoFocus
                        required
                      />
                      <p className="invalid-feedback">
                        Your username is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="email" className="text-black-300">
                        E-Mail Address
                      </label>
                      <input
                        type="email"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Email"
                        id="email"
                        label="Email Address"
                        name="email"
                        value={values.email}
                        onChange={handleChanges}
                        autoComplete="email"
                        required
                      />
                      <p className="invalid-feedback">
                        Your email is required!
                      </p>
                    </div>
                  </div>
                  <div className="right col-lg-6">
                    <div className="form-group mb-4 pb-2 avatar">
                      {previewImage ? (
                        <img src={previewImage} alt="preview" />
                      ) : (
                        <>
                          <label>Upload Image</label>
                          <input
                            type="file"
                            className="form-control shadow-none"
                            placeholder="Choose your Image"
                            accept="image/*"
                            name="Image"
                            onChange={handleImageUpload}
                          />
                        </>
                      )}
                    </div>
                  </div>b 
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="age" className="text-black-300">
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="20"
                        id="age"
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleChanges}
                        autoComplete="Age"
                        autoFocus
                        required
                      />
                      <p className="invalid-feedback">Your Age is required!</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="gender" className="text-black-300">
                        Gender
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Gender"
                        id="gender"
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleChanges}
                        autoComplete="gender"
                        autoFocus
                        required
                      />
                      <p className="invalid-feedback">
                        Your Gender is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-5">
                      <label for="message" className="text-black-300">
                        Your bio
                      </label>
                      <textarea
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Lorem Ipsum is simply dummy text of the printing and..."
                        id="bio"
                        label="Bio"
                        name="bio"
                        value={values.bio}
                        onChange={handleChanges}
                        autoComplete="bio"
                        autoFocus
                        required
                      ></textarea>
                      <p className="invalid-feedback">Bio is required!</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="firstName" className="text-black-300">
                        Your Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Phone Number"
                        name="phone"
                        label="phone"
                        id="phone"
                        value={values.phone}
                        onChange={handleChanges}
                        autoComplete="phone"
                        required
                      />
                      <p className="invalid-feedback">
                        Your phone is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="college" className="text-black-300">
                        Your College
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="College"
                        name="college"
                        label="College"
                        id="college"
                        value={values.college}
                        onChange={handleChanges}
                        autoComplete="college"
                        required
                      />
                      <p className="invalid-feedback">
                        Your College is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="interests" className="text-black-300">
                        Your Interests
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="Interests"
                        name="interests"
                        label="Interests"
                        id="interests"
                        value={values.interests}
                        onChange={handleChanges}
                        autoComplete="interests"
                        required
                      />
                      <p className="invalid-feedback">
                        Your Interests is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-5">
                      <label for="password" className="text-black-300">
                        Your Password
                      </label>
                      <input
                        type="password"
                        className="form-control bg-transparent rounded-0 border-bottom shadow-none pb-15 px-0"
                        placeholder="College"
                        name="password"
                        label="password"
                        id="password"
                        value={values.password.trim()}
                        onChange={handleChange("password")}
                        autoComplete="password"
                        required
                      />
                      <p className="invalid-feedback">
                        Your password is required!
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-sm btn-primary">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
