import React from "react";
import style from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNewActivity } from "../../redux/actions";

function Form() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
  });

  const handleCheck = (e) => {
    const value = e.target.value;
    setSelectedCountries((prevSelectedCountries) => {
      if (prevSelectedCountries.includes(value)) {
        return prevSelectedCountries.filter((country) => country !== value);
      } else {
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
    window.alert('Actividad creada correctamente')
    dispatch(addNewActivity(activityCreated))

  };

  return (
    <div className={style.formContainer}>
      <div>
        <div>
          <label>Bienvenido al formulario para crear una nueva actividad</label>
          <br />
          <label>Por favor complete los datos requeridos</label>
        </div>
        <div className={style.formFields}>
          <form onSubmit={handleSubmit}>
            <div className={style.name}>
              <label>Act Name: </label>
              <br />
              <input
                name="name"
                placeholder="Activity name"
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.dificulty}>
              <label>Dificulty: </label>
              <br />
              <label>{newActivity.dificulty}</label><br />
              <input name='dificulty' type='range' min='1' max='5' step='1' onChange={handleChange}/>
            </div>
            <div className={style.duration}>
              <label>Duration: </label>
              <br />
              <input
                name="duration"
                placeholder="Hours"
                onChange={handleChange}
              ></input>
            </div>
            <div className={style.season}>
              <label>Season: </label>
              <br />
              <div className={style.seasonInputs}>
                <div>
                  <input name="season" value='Invierno' onChange={handleChange} type="radio" />
                  <label>Invierno</label>
                </div>
                <div>
                  <input name="season" value='Otoño' onChange={handleChange} type="radio" />
                  <label>Otoño</label>
                </div>
                <div>
                  <input name="season" value='Primavera' onChange={handleChange} type="radio" />
                  <label>Primavera</label>
                </div>
                <div>
                  <input name="season" value='Verano' onChange={handleChange} type="radio" />
                  <label>Verano</label>
                </div>
              </div>
            </div>
            <div className={style.countries}>
              <label>Country or Countries: </label>
              <br />
              <div>
                <label>{newActivity.countries}</label>
                <br />
              </div>
              <div name="countries" className={style.box}>
                {countries?.map((count, index) => {
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
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
