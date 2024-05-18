import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { Container } from "../../components/Container";
import { ContainerForm, ScrollForm } from "./style";
import { cepMasked, cepUnMasked } from "../../Utils/stringFunctions";
import { Text } from "react-native";
import api from "../../Services/Service";

export const HomeScreen = () => {
  const [cep, setCep] = useState("");

  const [data, setData] = useState({
    district: "",
    street: "", //bairro
    city: "", //cidade
    state: "",
    stateShortname: "",
  });

  const getLocation = async () => {
    try {
      const response = await api.get("/" + cepUnMasked(cep));

      setData(response.data.result);
    } catch (error) {
      console.warn("Não foi possível encontrar esse cep.");
    }
  };

  return (
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          editable={true}
          placeholder={"Cep..."}
          keyType="numeric"
          maxLength={9}
          textLabel={"informe o cep"}
          editTable={true}
          fieldValue={cep}
          onChangeText={(e) => setCep(cepMasked(e))}
          onEndEditing={getLocation}
        />

        <BoxInput
          fieldValue={data.street}
          placeholder={"Logradouro..."}
          textLabel={"Logradouro"}
        />

        <BoxInput
          fieldValue={data.district}
          placeholder={"Bairro..."}
          textLabel={"Bairro"}
        />

        <BoxInput
          fieldValue={data.city}
          placeholder={"Cidade..."}
          textLabel={"Cidade"}
        />

        <Container fieldDirection="row" fieldJustifyContent="space-between">
          <BoxInput
            fieldValue={data.state}
            fieldWidth={"65"}
            placeholder={"Estado..."}
            maxLength={9}
            textLabel={"Estado"}
          />
          <BoxInput
            fieldValue={data.stateShortname}
            fieldWidth={"25"}
            placeholder={"UF..."}
            maxLength={9}
            textLabel={"UF"}
          />
        </Container>
      </ContainerForm>
    </ScrollForm>
  );
};

export default HomeScreen;
