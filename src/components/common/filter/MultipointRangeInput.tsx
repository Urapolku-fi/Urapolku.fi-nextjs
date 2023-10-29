import styles from './multipointRangeInput.module.css';

import { useContext, useState } from 'react';
import ReactSlider from 'react-slider'; //TODO: might need to change this since the marks and track length are bugged
import FilterLabel from './FilterLabel';
import { FilterContext } from './Filter';

const MultipointRangeInput = (props: any) => {
  const [minValue, setMinValue] = useState(props.defaultValues[0]);
  const [maxValue, setMaxValue] = useState(props.defaultValues[1]);
  const [minText, setMinText] = useState(minValue);
  const [maxText, setMaxText] = useState(maxValue);
  let { filtersState, setFiltersState }: any = useContext(FilterContext);

  if (!filtersState) {
    filtersState = props.filtersState;
    setFiltersState = props.setFiltersState;
  }

  // TODO: clarify this
  const handleSliderChange = (values: any) => {
    if (typeof values[0] === 'number') {
      //comes from slider
      setMinValue(values[0]);
      setMaxValue(values[1]);
      setMinText(values[0]);
      setMaxText(values[1]);
      setFiltersState({ ...filtersState, salary: values });
    } else if (values.key === 'Enter') {
      //comes from text inputs
      const value = parseInt(values.target.value);
      if (value <= props.maxValue && value >= props.minValue) {
        if (values.target.className === styles.minText) setMinValue(value);
        else setMaxValue(value);
        setFiltersState({ ...filtersState, salary: [minValue, maxValue] });
      }
    }
  };

  return (
    <div>
      {props.label && <FilterLabel text={props.label} />}
      <div className={styles.multipointInputWrapper}>
        <ReactSlider
          className={styles.multipointSlider}
          markClassName={styles.multipointSliderMark}
          thumbClassName={styles.multipointSliderThumbContainer}
          trackClassName={styles.multipointSliderTrack}
          min={props.minValue}
          max={props.maxValue}
          marks={props.marks}
          defaultValue={props.defaultValues}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => {
            // Deleting the key prop so that it is not spread. This causes an error. - Anto
            delete props.key;

            return (
              <div key={state.index} {...props}>
                <div className={styles.multipointSlideThumbHeadsupValue}>{state.valueNow}</div>
                <div className={styles.multipointSliderThumb} />
              </div>
            );
          }}
          value={[minValue === '' ? 0 : minValue, maxValue]}
          pearling
          minDistance={250}
          onChange={handleSliderChange}
        />
        <div className={styles.multipointInputTextFields}>
          <div>
            <p>Min.</p>
            <input
              type="number"
              value={minText}
              onChange={(e) => setMinText(e.target.value)}
              className={styles.minText}
              onKeyDown={handleSliderChange}
            />
          </div>
          <div>
            <p>Max.</p>
            <input
              type="number"
              value={maxText}
              onChange={(e) => setMaxText(e.target.value)}
              className={styles.maxText}
              onKeyDown={handleSliderChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipointRangeInput;
