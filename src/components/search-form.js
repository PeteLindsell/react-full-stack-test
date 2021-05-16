import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 75%;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  line-height: 2rem;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 4px;
`;

const Button = styled.button`
  font-weight: bold;
  padding: 4px 8px;
  cursor: pointer;
`;

const SearchForm = ({ label, onChange }) => {
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onChange(searchString);
  };

  return (
    <Form onSubmit={handleSearch}>
      <Label for="search">{label}</Label>
      <Input
        id="search"
        onChange={(e) => setSearchString(e.target.value)}
        type="search"
        value={searchString}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
