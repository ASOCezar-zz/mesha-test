import React, { FormEvent, MutableRefObject, useRef, useState } from "react";
import * as Styled from "./styles";

interface IFormSearchProps {
  setQuerySystem: React.Dispatch<
    React.SetStateAction<"myLocalization" | "city" | "coordenates" | "zipCode">
  >;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setGeographicValue: React.Dispatch<
    React.SetStateAction<{ lat: string; long: string }>
  >;
  geographicValue: { lat: string; long: string };
  handleSearch: (event: FormEvent) => Promise<void>;
  option: MutableRefObject<HTMLInputElement>;
}

export const FormSearchComponent = ({
  setQuerySystem,
  handleSearch,
  setSearchValue,
  setGeographicValue,
  geographicValue,
  option,
}: IFormSearchProps) => {
  const latInput = useRef<HTMLInputElement>(null);
  const longInput = useRef<HTMLInputElement>(null);

  const [opened, setOpened] = useState<{
    openedCity: boolean;
    openedCoordenates: boolean;
    openedZipCode: boolean;
  }>({
    openedCity: false,
    openedCoordenates: false,
    openedZipCode: false,
  });

  const handleType = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const handlers = {
      typeLatitude: () => {
        const newGeoValue = geographicValue;
        newGeoValue.lat = target.value;
        setGeographicValue(newGeoValue);
      },
      typeLongitude: () => {
        const newGeoValue = geographicValue;
        newGeoValue.long = target.value;
        setGeographicValue(newGeoValue);
      },
    };

    if (target.id !== "typeLatitude" && target.id !== "typeLongitude") {
      setSearchValue(target?.value);
    } else {
      handlers[target.id]();
    }
  };

  function handleCheckboxChange(
    value: "myLocalization" | "city" | "coordenates" | "zipCode"
  ) {
    const openedInput = {
      openedCity: false,
      openedCoordenates: false,
      openedZipCode: false,
    };

    const checkBoxChange = {
      city: () => {
        openedInput.openedCity = true;
      },
      coordenates: () => {
        openedInput.openedCoordenates = true;
      },
      zipCode: () => {
        openedInput.openedZipCode = true;
      },
      myLocalization: () => {
        openedInput.openedCity = false;
        openedInput.openedCoordenates = false;
        openedInput.openedZipCode = false;
      },
    };

    checkBoxChange[value]();
    setOpened(openedInput);

    setQuerySystem(value);
  }

  return (
    <Styled.Form onSubmit={(e) => handleSearch(e)}>
      <Styled.Label>
        <Styled.Checkbox
          ref={option}
          type="radio"
          name="checkbox"
          value="myLocalization"
          onChange={() => handleCheckboxChange("myLocalization")}
        />
        Usar sua localização
      </Styled.Label>

      <Styled.Wrapper opened={opened}>
        <Styled.Label>
          <Styled.Checkbox
            ref={option}
            type="radio"
            name="checkbox"
            value="city"
            onChange={() => handleCheckboxChange("city")}
          />
          Pesquisar pelo nome da cidade
        </Styled.Label>
        <div className="inputs">
          <Styled.TypeInput
            placeholder="Digite o nome da sua cidade"
            id="typeCity"
            onChange={(event) => handleType(event)}
          />
        </div>
      </Styled.Wrapper>

      <Styled.Wrapper opened={opened}>
        <Styled.Label>
          <Styled.Checkbox
            ref={option}
            type="radio"
            name="checkbox"
            value="coordenates"
            onChange={() => handleCheckboxChange("coordenates")}
          />
          Pesquisar por coordenadas geográficas (latitude e longitude)
        </Styled.Label>
        <div className="inputs">
          <Styled.TypeInput
            placeholder="Digite a latitude"
            id="typeLatitude"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleType(event)
            }
            ref={latInput}
          />
          <Styled.TypeInput
            placeholder="Digite a longitude"
            id="typeLongitude"
            ref={longInput}
            onChange={(event) => handleType(event)}
          />
        </div>
      </Styled.Wrapper>

      <Styled.Wrapper opened={opened}>
        <Styled.Label>
          <Styled.Checkbox
            ref={option}
            type="radio"
            name="checkbox"
            value="zipCode"
            onChange={() => handleCheckboxChange("zipCode")}
          />
          Pesquisar por ZIP Code
        </Styled.Label>
        <div className="inputs">
          <Styled.TypeInput
            placeholder="Digite o ZIP Code"
            id="typeZip"
            onChange={(event) => handleType(event)}
          />
        </div>
      </Styled.Wrapper>
      <Styled.SubmitButton type="submit">Buscar</Styled.SubmitButton>
    </Styled.Form>
  );
};
