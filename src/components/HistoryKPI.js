import * as React from "react";
import { Text, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Non-serializable values were found in the navigation state"
]);

function HistoryKPI(props) {
  const [Data, setData] = React.useState([]);
  const [tipoMedida, settipoMedida] = React.useState("");

  //Invoca a la función en ListKPI.js que obtiene los datos
  const getDataFromAPI = async kpi => {
    setData([]);
    await props.route.params.getData(props.route.params.kpi[0]).then(res => {
      setData(res.serie);
      settipoMedida(res.unidad_medida);
    });
  };

  React.useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <ScrollView>
      {//Validación que asegura que existan más de un indicador
      Data.length > 0 ? (
        <List.Section>
          {//Función que retorna una lista con la vista por cada indicador
            Data.map((kpi, index) => {
            kpi.valor = kpi.valor.toString();
            //Asignación de tipo de medida al valor
            if (tipoMedida === "Porcentaje" && !kpi.valor.includes("%")) {
              kpi.valor = kpi.valor + "%";
            } else if ( (tipoMedida === "Pesos" || tipoMedida === "Dólar") && !kpi.valor.includes("$") ) {
              kpi.valor = "$" + kpi.valor;
            }

            return (
              <List.Item
                titleStyle={{
                  fontSize: 20,
                  alignSelf: "center",
                  borderBottomWidth: 1,
                  borderBottomColor: "#b0b0b0",
                  width: "100%"
                }}
                title={kpi.fecha.slice(0, 10) + "      " + kpi.valor}
                key={index}
              />
            );
          })}
        </List.Section>
      ) : (
        <Text style={{ fontSize: 30 }}>Cargando</Text>
      )}
    </ScrollView>
  );
}

export default HistoryKPI;
