import { useSelector, useDispatch } from 'react-redux';
import { selectedFilter, filter } from 'redux/contactSlice';
import { FilterContainer, FilterText, FilterInput } from './ContactFilter.styled';

const ContactFilter = () => {
  const filterValue = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
      <FilterContainer>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </FilterContainer>
  );
};

export default ContactFilter;