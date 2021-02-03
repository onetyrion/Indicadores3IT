import * as React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { Card } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

function DetailsKPI(props) {
  const [Data, setData] = React.useState([]);
  const [info, setInfo] = React.useState([]);
  const params = props.route.params;
  //Invoca a la función en ListKPI.js que obtiene los datos y le pone formato a los datos para setearlos en los elementos
  const getDataFromAPI = async () => {
    setData([]);
    await params.getData(params.kpi[0]).then(res => {
        let {unidad_medida,fecha,nombre} = res
        setInfo([unidad_medida,fecha,nombre])
        delete res.serie.fecha,res.serie.nombre,res.serie.unidad_medida;
        setData(res.serie);
      
    });
  };
  React.useEffect(() => {
    getDataFromAPI();
  }, []);

var titles = [[],[0]]; // Almacena los labels y los valores de los gráfico,
  return (
    <View style={{ flex: 1 }}>
        {//Setea la fecha y los valores en el array titles
            Data.map((values)=>{
            titles[0].push(values.fecha.slice(0, 10));
            titles[1].push(values.valor);
        })
        }
      <Card style={{ width: "100%", padding: 30 }}>
        <Text style={{ fontSize: 50 }}>
            {//Definición de los signos % y $ en el valor
            info[0] !== 'Porcentaje' ?'$':'' }{Data[0] ? Data[0].valor : ""}{info[0] === 'Porcentaje' ?'%':'' }
        </Text>
        {/*Vista que retorna el titulo y su valor NOMBRE*/}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 15 }}>Nombre:</Text>
          <TextInput
            style={{
              width: "45%",
              borderColor: "gray",
              borderWidth: 1,
              marginStart: "36%",
              paddingLeft: 10,
            }}
            value={info[2]}
            editable={false}
          />
        </View>
        {/*Vista que retorna el titulo y su valor FECHA*/}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 15 }}>Fecha:</Text>
          <TextInput
            style={{
              width: "45%",
              borderColor: "gray",
              borderWidth: 1,
              marginStart: "40%",
              paddingLeft: 10,
            }}
            value={Data[0] ? Data[0].fecha.slice(0, 10) : ""}
            editable={false}
          />
        </View>
        {/*Vista que retorna el titulo y su valor MEDIDA*/}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ fontSize: 15 }}>Unidad de medida:</Text>
          <TextInput
            style={{
              width: "45%",
              borderColor: "gray",
              borderWidth: 1,
              marginStart: "15%",
              paddingLeft: 10,
            }}
            value={info[0]}
            editable={false}
          />
        </View>
        {/*Vista que retorna el titulo y su valor GRÁFICO*/}
        <View>
          <LineChart
            data={{
              labels: titles[0].length > 9 ? titles[0].slice(0,10) : [],
              datasets: [
                  {
                    data:titles[1].length===1 ? titles[1] : titles[1].slice(1,11),
                  }
              ]
            }}
            width={Dimensions.get("window").width - 50}
            height={450}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            verticalLabelRotation={90}
            style={{
              marginVertical: 8,
              marginTop: 50,
              borderRadius: 16
            }}
          />
        </View>
      </Card>
    </View>
  );
}

export default DetailsKPI;
