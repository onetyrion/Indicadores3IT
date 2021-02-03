import * as React from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import { List } from "react-native-paper";

function ListKPI(props) {
  const [Data, setData] = React.useState([]);
  //Obtiene los datos desde la API
  //Si se le pasa un parametro este buscará el historial de dicho indicador
  const getDataFromAPI = async (kpi) => {
    let urlFunction = kpi ? kpi : "";
    return await fetch(`https://mindicador.cl/api/${urlFunction}`)
      .then(response => response.json())
      .then(res => {
        if (kpi) {
          return res;
        } else {
          delete res.version;
          delete res.autor;
          delete res.fecha;
          setData(Object.entries(res));
          console.log("Obtenido con exito " + kpi);
        }
      })
      .catch(res => console.log("ha ocurrido un error"));
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
            return (
              <List.Item
                title={kpi[1].nombre}
                key={index}
                description={kpi[1].unidad_medida}
                onPress={() =>
                  props.navigation.navigate("Details", {
                    kpi,
                    getData: getDataFromAPI.bind(this)
                  })
                }
                right={prop => (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("History", {
                        kpi,
                        getData: getDataFromAPI.bind(this)
                      })
                    }
                  >
                    <List.Icon {...prop} icon="information" />
                  </TouchableOpacity>
                )}
              />
            );
          })}
        </List.Section>
      ) : (
        <Text style={{ fontSize: 30 }}>
          No se ha podido conectar a los servicios
        </Text>
      )}
    </ScrollView>
  );
}

export default ListKPI;
