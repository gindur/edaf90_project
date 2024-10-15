import React, { useState } from 'react';
import Select from 'react-select';
import ReactSlider from 'react-slider';
import Filter from "../model/filter.mjs";


function MovieForm({filter, setFilter, formOptions, updateSelectedMovies}) {
    const genreOptions = formOptions.genres.map((genre) => {
        return { value: genre.id, label: genre.name };
    });

    const languageOptions = formOptions.languages.map((language) => {
        return { value: language.iso_639_1, label: language.english_name };
    });
    //logos can be found at https://www.themoviedb.org/t/p/original/{logo_path}
    const streamingOptions = formOptions.providers.map((service) => {
        return { value: service.provider_id, label: service.provider_name };
    });

    const [selectedGenres, setSelectedGenres] = useState(filter.params["with_genres"]);
    const [selectedLanguage, setSelectedLanguage] = useState(filter.params["language"]);
    const [yearRange, setYearRange] = useState([filter.params["release_date.gte"].label, filter.params["release_date.lte"].label]);
    const [selectedService, setSelectedService] = useState(filter.params["with_watch_providers"]);
    const handleGenreChange = (selected) => {
        setSelectedGenres(selected);
        setFilter(filter.setGenre(selected));
        updateSelectedMovies()
    };

    const handleLanguageChange = (selected) => {
        setSelectedLanguage(selected);
        setFilter(filter.setLanguage(selected));
        updateSelectedMovies()
    };

    const handleServiceChange = (selected) => {
        setSelectedService(selected);
        const serviceIds = selected.map(value => value);
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
                <p>2. What language should be spoken?</p>
                <Select
                    options={languageOptions}
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    placeholder="Select a language..."
                />
            </div>

            <div>
                <p className="pb-3">3. When should the movie be released?</p>
                <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                min={1910}
                max={2024}
                value={yearRange}
                onAfterChange={handleSliderChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                pearling
                minDistance={1}
                renderThumb={(props, state) => {
                    const {key, ...restProps} = props;
                    return (
                        <div key={key} {...restProps}>
                        <div className="thumb-label">{state.valueNow}</div>
                        <div className="thumb" />
                        </div>
                    );
                }}
                renderTrack={(props, state) => {
                    const isActive = state.index === 1;
                    const {key, ...restProps} = props;
                    return (
                    <div
                        key={key}
                        {...restProps}
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
                <p>4. What streaming services do you have?</p>
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