import { FormEvent, MutableRefObject } from "react";
import * as Styled from "./styles";

interface IFormSearchProps {
  handleCheckboxChange: () => void;
  handleSearch: (event: FormEvent) => Promise<void>;
  searchInput: MutableRefObject<HTMLInputElement>;
}

export const FormSearchComponent = ({
  handleCheckboxChange,
  handleSearch,
  searchInput,
}: IFormSearchProps) => (
  <Styled.Form onSubmit={(e) => handleSearch(e)}>
    <Styled.TypeInput
      type="text"
      ref={searchInput}
      placeholder="Digite sua cidade"
      required
    />
    <Styled.TypeInput
      type="checkbox"
      id="checkbox"
      onChange={() => handleCheckboxChange()}
    />
    <button type="submit">Search</button>
  </Styled.Form>
);
