import React, { FormEvent, MutableRefObject, useEffect, useRef } from "react";
import * as Styled from "./styles";

interface IFormSearchProps {
  setQuerySystem: React.Dispatch<
    React.SetStateAction<"myLocalization" | "city" | "coordenates" | "zipCode">
  >;
  setSearchValue: React.Dispatch<React.SetStateAction<string | string[]>>;
  handleSearch: (event: FormEvent) => Promise<void>;
  option: MutableRefObject<HTMLInputElement>;
}

export const FormSearchComponent = ({
  setQuerySystem,
  handleSearch,
  setSearchValue,
  option,
}: IFormSearchProps) => {
  const latInput = useRef<HTMLInputElement>(null);
  const longInput = useRef<HTMLInputElement>(null);

  const handleType = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  // const handleGeo = (event: React.FormEvent<HTMLInputElement>) => {
  //   if (latInput.current !== null && longInput.current !== null) {
  //     const coordenates = [latInput.current.value, longInput.current.value];
  //     if (coordenates[0] !== undefined && coordenates[1] !== undefined) {
  //       setSearchValue(coordenates);
  //     }
  //   }
  // };

  function handleCheckboxChange(
    value: "myLocalization" | "city" | "coordenates" | "zipCode"
  ) {
    setQuerySystem(value);
  }

  return (
    <Styled.Form onSubmit={(e) => handleSearch(e)}>
      <label>
        <Styled.Checkbox
          ref={option}
          type="radio"
          name="checkbox"
          value="myLocalization"
          onChange={() => handleCheckboxChange("myLocalization")}
        />
        Usar sua localização
      </label>
      <label>
        <Styled.Checkbox
          ref={option}
          type="radio"
          name="checkbox"
          value="city"
          onChange={() => handleCheckboxChange("city")}
        />
        Pesquisar pelo nome da cidade
      </label>
      <Styled.TypeInput
        placeholder="Digite o nome da sua cidade"
        id="typeCity"
        onChange={(event) => handleType(event)}
      />
      <label>
        <Styled.Checkbox
          ref={option}
          type="radio"
          name="checkbox"
          value="coordenates"
          onChange={() => handleCheckboxChange("coordenates")}
        />
        Pesquisar por coordenadas geográficas (latitude e longitude)
      </label>
      <Styled.TypeInput
        placeholder="Digite a latitude"
        id="typeLatitude"
        onChange={(event) => handleType(event)}
        ref={latInput}
      />
      <Styled.TypeInput
        placeholder="Digite a longitude"
        id="typeLongitude"
        ref={longInput}
        onChange={(event) => handleType(event)}
      />
      <label>
        <Styled.Checkbox
          ref={option}
          type="radio"
          name="checkbox"
          value="zipCode"
          onChange={() => handleCheckboxChange("zipCode")}
        />
        Pesquisar por ZIP Code
      </label>
      <Styled.TypeInput
        placeholder="Digite o ZIP Code"
        id="typeZip"
        onChange={(event) => handleType(event)}
      />
      <button type="submit">Search</button>
    </Styled.Form>
  );
};
