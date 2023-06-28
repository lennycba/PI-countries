import React from "react";
import style from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Validation from "./Validation";
import { addNewActivity, getActivities } from "../../redux/actions";
import note from "../../images/fondos/postit2.png";
import noteTitle from "../../images/fondos/postitTitle.png";
import postTitleBlue from '../../images/fondos/postTitleBlue.png'
function Form() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [errors, setErrors] = useState({});
  const [newActivity, setNewActivity] = useState({
    name: " ",
    dificulty: "1",
    duration: " ",
    season: " ",
  });

  const handleCheck = (event) => {
    const value = event.target.value;
    setSelectedCountries((prevSelectedCountries) => {
      if (prevSelectedCountries.includes(value)) {
        const postSelectedCountries = prevSelectedCountries.filter(
          (country) => country !== value
        );
        setErrors(Validation(newActivity, postSelectedCountries, activities));
        return postSelectedCountries;
      } else {
        setErrors(
          Validation(newActivity, [...prevSelectedCountries, value], activities)
        );
        return [...prevSelectedCountries, value];
      }
    });
  };

  const handleChange = (e) => {
    const property = e.target.name;
    let value = e.target.value;
    setNewActivity({
      ...newActivity,
      [property]: value,
    });
    setErrors(
      Validation(
        { ...newActivity, [property]: value },
        selectedCountries,
        activities
      )
    );
  };
  const activityClean = {
    name: "",
    dificulty: "1",
    duration: "",
    season: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const activityCreated = {
      name: newActivity.name,
      dificulty: newActivity.dificulty,
      duration: newActivity.duration,
      season: newActivity.season,
      countries: selectedCountries,
    };

    if (
      !Object.values(errors).length &&
      activityCreated.name !== " " &&
      activityCreated.duration !== " " &&
      activityCreated.season!== " " &&
      activityCreated.countries !== []
    ) {
      dispatch(addNewActivity(activityCreated)).then(() => {
        dispatch(getActivities());
        setNewActivity(activityClean);
        setSelectedCountries([]);
        window.alert("activity succesfully created");
      });
    } else {
      window.alert("Upss.. can't create the activity, did you miss something?");
    }
  };

  return (
    <div className={style.totalForm}>
      <div className={style.formContainer}>
        <div className={style.noteCont}>
          <img src={note} />
        </div>
        <div className={style.formDiv}>
          <div className={style.title}>
            <label>
              Welcome to the form to create a new touristic activity
            </label>
            <br />
            <label>please complete the required fields below</label>
            <img className={style.postTitleBlue} src={postTitleBlue} />
          </div>
          <div className={style.formFields}>
            <form onSubmit={handleSubmit}>
              <div className={style.name}>
                <label>Act Name: </label>
                <br />
                <input
                  value={
                    newActivity.name === "" || newActivity.name === " "
                      ? ""
                      : newActivity.name
                  }
                  name="name"
                  placeholder="Activity name"
                  onChange={handleChange}
                ></input>
                {errors.name && newActivity.name !== " " && (
                  <div className={style.bubble}>
                    {" "}
                    <p>{errors.name}</p>{" "}
                    <div>
                        <img className={style.noteTitle} src={noteTitle}/>
                      </div>
                  </div>
                )}
              </div>
              <div className={style.dificulty}>
                <label>Dificulty: </label>
                <br />
                <label>
                  {newActivity.dificulty !== "0" && newActivity.dificulty}
                </label>
                <br />
                <input
                className={style.range}
                  value={
                    newActivity.dificulty === "" ||
                    newActivity.dificulty === " "
                      ? "0"
                      : newActivity.dificulty
                  }
                  name="dificulty"
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  defaultValue={"1"}
                  onChange={handleChange}
                />
              </div>
              <div className={style.duration}>
                <label>Duration: </label>
                <br />
                <input
                  value={newActivity.duration}
                  name="duration"
                  type="number"
                  placeholder="Hours"
                  min="1"
                  onChange={handleChange}
                ></input>
                {errors.duration &&
                  newActivity.duration !== " " &&
                  !errors.name && (
                    <div className={style.bubble}>
                      {" "}
                      <p>{errors.duration}</p>{" "}
                      <div>
                        <img className={style.noteTitle} src={noteTitle}/>
                      </div>
                    </div>
                  )}
              </div>
              <div className={style.season}>
                <label>Season: </label>
                <br />
                <div className={style.seasonInputs}>
                  <div>
                    <input
                      checked={
                        newActivity.season === "" || newActivity.season === " "
                          ? false
                          : null
                      }
                      name="season"
                      value="Invierno"
                      onChange={handleChange}
                      type="radio"
                    />
                    <label>Invierno</label>
                  </div>
                  <div>
                    <input
                      checked={
                        newActivity.season === "" || newActivity.season === " "
                          ? false
                          : null
                      }
                      name="season"
                      value="Otoño"
                      onChange={handleChange}
                      type="radio"
                    />
                    <label>Otoño</label>
                  </div>
                  <div>
                    <input
                      checked={
                        newActivity.season === "" || newActivity.season === " "
                          ? false
                          : null
                      }
                      name="season"
                      value="Primavera"
                      onChange={handleChange}
                      type="radio"
                    />
                    <label>Primavera</label>
                  </div>
                  <div>
                    <input
                      checked={
                        newActivity.season === "" || newActivity.season === " "
                          ? false
                          : null
                      }
                      name="season"
                      value="Verano"
                      onChange={handleChange}
                      type="radio"
                    />
                    <label>Verano</label>
                  </div>
                  <div></div>
                </div>
                {errors.season &&
                  newActivity.season !== " " &&
                  !errors.name &&
                  !errors.duration && (
                    <div className={style.bubble}>
                      <p>{errors.season}</p>
                      <div>
                        <img className={style.noteTitle} src={noteTitle}/>
                      </div>
                    </div>
                  )}
              </div>
              <div className={style.countries}>
                <label>Country or Countries: </label>
                <br />
                <div>
                  <label>{newActivity.countries}</label>
                  <br />
                </div>
                {errors.countries &&
                  !errors.duration &&
                  newActivity.season !== " " && (
                    <div className={style.bubble}>
                      <p>{errors.countries}</p>
                      <div>
                        <img className={style.noteTitle} src={noteTitle}/>
                      </div>
                    </div>
                  )}
                <div name="countries" className={style.box}>
                  {countries
                    ?.sort((a, b) => a.name.localeCompare(b.name)) // Ordenar alfabéticamente por el nombre
                    .map((count, index) => {
                      return (
                        <div key={index}>
                          <input
                            checked={selectedCountries.includes(count.ID)}
                            value={count.ID}
                            onChange={handleCheck}
                            type="checkbox"
                          />
                          <span>{count.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
              <button className={style.formButton} type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
