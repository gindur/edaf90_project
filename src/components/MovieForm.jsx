import React, { useState } from 'react';
import Select from 'react-select';
import ReactSlider from 'react-slider';
import Filter from "../model/filter.mjs";


function MovieForm({filter, setFilter, formOptions, updateSelectedMovies}) {
    console.log(formOptions);
    const genreOptions = formOptions.genres.genres.map((genre) => {
        return { value: genre.id, label: genre.name };
    });

    const languageOptions = formOptions.languages.map((language) => {
        return { value: language.iso_639_1, label: language.english_name };
    });
    //logos can be found at https://www.themoviedb.org/t/p/original/{logo_path}
    const streamingOptions = formOptions.providers.results.map((service) => {
        return { value: service.provider_id, label: service.provider_name };
    });

    // **Preselect Thriller, Drama for genres**
    const preselectedGenres = genreOptions.filter(option =>
        option.label === 'Thriller' || option.label === 'Drama'
    );

    // **Preselect English for language**
    const preselectedLanguage = languageOptions.find(option => option.label === 'English');

    // **Preselect Netflix and HBO for streaming services**
    const preselectedServices = streamingOptions.filter(option =>
        option.label === 'Netflix' || option.label === 'Max'
    );

    const [selectedGenres, setSelectedGenres] = useState(preselectedGenres);
    const [selectedLanguage, setSelectedLanguage] = useState(preselectedLanguage);
    const [yearRange, setYearRange] = useState([1921, 2024]);
    const [selectedService, setSelectedService] = useState(preselectedServices);
    const handleGenreChange = (selected) => {
        setSelectedGenres(selected);
        const genreIds = selected.map(value => value["value"]);
        setFilter(filter.setGenre(genreIds));
        updateSelectedMovies()
    };

    const handleLanguageChange = (selected) => {
        setSelectedLanguage(selected);
        setFilter(filter.setLanguage(selected["value"]));
        updateSelectedMovies()
    };

    const handleServiceChange = (selected) => {
        setSelectedService(selected);
        const serviceIds = selected.map(value => value["value"]);
        setFilter(filter.setProvider(serviceIds));
        updateSelectedMovies()
    };

    const handleSliderChange = (values) => {
        setYearRange(values);
        setFilter(filter.setYear(values[0], values[1]));
        updateSelectedMovies()
    };

  return (
    <div className="form-container">
        <div className="form-container-inner">
            <h2 className="secondary-color">Let the wheel decide 🍿</h2>
            <div className='dropdown-container'>
                <p>1. What genres do you like?</p>
                <Select
                    isMulti
                    options={genreOptions}
                    value={selectedGenres}
                    onChange={handleGenreChange}
                    placeholder="Search and select genres..."
                />  
            </div>

            <div className='dropdown-container'>
                <p>2. What language do you know?</p>
                <Select
                    options={languageOptions}
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    placeholder="Select a language..."
                />
            </div>

            <div>
                <p className="pb-3">3. Between what years should the movie be released?</p>
                <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                min={1921}
                max={2024}
                value={yearRange}
                onChange={handleSliderChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                pearling
                minDistance={1}
                renderThumb={(props, state) => (
                    <div {...props}>
                    <div className="thumb-label">{state.valueNow}</div>
                    <div className="thumb" />
                    </div>
                )}
                renderTrack={(props, state) => {
                    const isActive = state.index === 1;
                    return (
                    <div
                        {...props}
                        style={{
                        ...props.style,
                        backgroundColor: isActive ? '#F5C519' : '#fff',
                        height: '10px',
                        }}
                    />
                    );
                }}
                />
        </div>

            <div className='dropdown-container'>
                <p>4. What streaming services do you have access to?</p>
                <Select
                isMulti
                options={streamingOptions}
                value={selectedService}
                onChange={handleServiceChange}
                placeholder="Select a streaming service..."
                />
            </div>
        </div>
    </div>
  );
}

export default MovieForm;