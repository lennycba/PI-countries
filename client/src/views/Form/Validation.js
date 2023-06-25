const onlyText =/^[A-Za-z\s]*$/;


export default function Validation (inputs,selectedCountries,activities){
    const errors = {};
    //validaciones para el nombre
    const repeated = activities?.find(act => act.name === inputs.name)
    if (repeated?.name) {errors.name = 'there is a previously created activity with the same name'}
    if(inputs.name.length < 1) {errors.name = 'Name is required'}
    if(inputs.name.length > 27){errors.name = 'Name is too large'}
    if(!onlyText.test(inputs.name)) {errors.name = 'Name only admits words'}
    //validaciones para la duracion
    if (inputs.duration === '') {errors.duration = 'Duration is required'}
    else if(inputs.duration < 1) {errors.duration = 'Duration must be a positive number'}
    //validaciones para la estación
    if(inputs.season.length < 1) {errors.season = 'Choose one'}

    //validacion para countries
    if(selectedCountries?.length < 1) {errors.countries = 'you must select at least one country'}

    return errors;
}