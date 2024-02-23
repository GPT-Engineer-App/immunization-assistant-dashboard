import { Box, Checkbox, CheckboxGroup, Container, Divider, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Select, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
const countries = [
  "España",
  "Francia",
  "Alemania",
  "Italia",
  "Portugal", // Europa
  "Estados Unidos",
  "Canadá",
  "Brasil",
  "Argentina",
  "México", // América
  "China",
  "India",
  "Japón",
  "Tailandia",
  "Indonesia", // Asia
  "Egipto",
  "Sudáfrica",
  "Nigeria",
  "Kenia",
  "Marruecos", // África
  "Australia",
  "Nueva Zelanda",
  "Fiyi",
  "Papúa Nueva Guinea",
  "Samoa", // Oceanía
]; // Add more countries as needed

const communities = [
  "Andalucía",
  "Aragón",
  "Asturias",
  "Baleares",
  "Canarias",
  "Cantabria",
  "Castilla-La Mancha",
  "Castilla y León",
  "Cataluña",
  "Ceuta",
  "Comunidad Valenciana",
  "Extremadura",
  "Galicia",
  "Madrid",
  "Melilla",
  "Murcia",
  "Navarra",
  "País Vasco",
  "La Rioja", // España
  // Agregar comunidades de otros países de cada continente como sea necesario
]; // Add more communities as needed

const Index = () => {
  const [isResident, setIsResident] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");

  const profiles = ["Unidad de Medicina Preventiva y Salud Pública", "Centro de Vacunación Internacional", "Gestor de Salud Pública", "Atención primaria", "Prevención de riesgos laborales", "Sociedad científica", "Industria Farmacéutica"];

  const continents = ["África", "América", "Asia", "Europa", "Oceanía"];

  const riskFactors = ["Pacientes institucionalizados de edad avanzada", "Enfermedades crónicas", "Cardiopatías e hipertensión", "Enfermedades pulmonares crónicas", "Diabetes", "Trasplante de órgano sólido y/o líquido", "Inmunosupresión (primaria/secundaria)", "Enfermedad autoinmune", "Cáncer", "Hipercolesterolemia y/o obesidad mórbida", "Niño nacido pre-término", "Edad avanzada", "Paciente con eventos adversos tras inmunización", "Paciente con riesgo ocupacional", "Paciente que va a viajar (especifique continente)", "Embarazo y/o lactancia", "Reclusos, uso de drogas por vía parenteral, trabajadores sexuales", "Hombres que tienen sexo con hombres", "Receptores de inmunoglobulinas y derivados sanguíneos"];

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Box bg="blue.100" p={4} rounded="md" shadow="base">
          <Heading as="h1" size="xl" textAlign="center" color="white">
            Asesor de Vacunas para Profesionales de la Salud
          </Heading>
          <Text fontSize="md" color="gray.200" textAlign="center" mt={2}>
            Bienvenido al Asesor de Vacunas para Profesionales de la Salud. Este servicio está diseñado para ayudar a identificar las necesidades de vacunación personalizadas para pacientes inmunocomprometidos. Por favor, proporcione la información solicitada para recibir recomendaciones específicas.
          </Text>
        </Box>

        <Divider />

        <Heading as="h2" size="lg">
          Evaluación Integral del Paciente
        </Heading>
        <FormControl isRequired>
          <FormLabel>Seleccione el perfil profesional al que pertenece:</FormLabel>
          <Select placeholder="Seleccione una opción" onChange={(e) => setSelectedProfile(e.target.value)}>
            {profiles.map((profile, index) => (
              <option key={index} value={profile}>
                {profile}
              </option>
            ))}
          </Select>
        </FormControl>

        <Divider />

        <Heading as="h2" size="lg">
          Información Demográfica y Clínica del Paciente
        </Heading>
        <FormControl as="fieldset">
          <FormLabel as="legend">Sexo:</FormLabel>
          <RadioGroup>
            <Stack spacing={5} direction="row">
              <Radio value="Varón">Varón</Radio>
              <Radio value="Mujer">Mujer</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Edad:</FormLabel>
          <Input placeholder="Especificar años o meses para lactantes" />
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend">Raza/grupo étnico:</FormLabel>
          <RadioGroup>
            <Stack spacing={5} direction="row">
              <Radio value="Caucásico">Caucásico</Radio>
              <Radio value="Negro">Negro</Radio>
              <Radio value="Asiático">Asiático</Radio>
              <Radio value="Mestizo">Mestizo</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl as="fieldset">
          <FormLabel as="legend">Procedencia:</FormLabel>
          <RadioGroup onChange={(e) => setIsResident(e.target.value === "Residente")}>
            <Stack spacing={5} direction="row">
              <Radio value="Residente">Residente</Radio>
              <Radio value="Extranjero">Extranjero</Radio>
            </Stack>
          </RadioGroup>
          {!isResident && (
            <Select placeholder="Seleccione un continente" onChange={(e) => setSelectedContinent(e.target.value)}>
              {continents.map((continent, index) => (
                <option key={index} value={continent}>
                  {continent}
                </option>
              ))}
            </Select>
          )}
          <Select
            placeholder="Seleccione su país"
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedCommunity(""); // Reset the selected community when a new country is selected
            }}
            display={selectedContinent ? "block" : "none"}
          >
            {countries
              .filter((country) => {
                const continentCountries = {
                  Europa: ["España", "Francia", "Alemania", "Italia", "Portugal"],
                  América: ["Estados Unidos", "Canadá", "Brasil", "Argentina", "México"],
                  Asia: ["China", "India", "Japón", "Tailandia", "Indonesia"],
                  África: ["Egipto", "Sudáfrica", "Nigeria", "Kenia", "Marruecos"],
                  Oceanía: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"],
                };
                return selectedContinent && continentCountries[selectedContinent].includes(country);
              })
              .map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
          </Select>
          {selectedCountry && (
            <Select placeholder="Seleccione su comunidad o estado" onChange={(e) => setSelectedCommunity(e.target.value)} display={selectedCountry && communities[selectedCountry] ? "block" : "none"}>
              {selectedCountry &&
                communities[selectedCountry] &&
                communities[selectedCountry].map((community, index) => (
                  <option key={index} value={community}>
                    {community}
                  </option>
                ))}
            </Select>
          )}
        </FormControl>

        <Divider />

        <Heading as="h2" size="lg">
          Factores de Riesgo
        </Heading>
        <FormControl as="fieldset">
          <FormLabel as="legend">Marque todos los factores de riesgo que apliquen al paciente:</FormLabel>
          <CheckboxGroup>
            <VStack spacing={2} align="flex-start">
              {riskFactors.map((factor, index) => (
                <Checkbox key={index} value={factor}>
                  {factor}
                </Checkbox>
              ))}
            </VStack>
          </CheckboxGroup>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
