# Indicadores3IT
Aplicación que muestra una lista de indicadores a través de un historial y detalle de estos basado en la API MINDICADOR.cl

La aplicación tiene como función principal mostrar los indicadores principales recogidos mediante un cliente REST desde un servicio open source ([Mi indicador](https://mindicador.cl))
que entrega los principales indicadores económicos para Chile en formato JSON. Tanto los indicadores diarios como históricos para que desarrolladores puedan utilizarlos en sus 
aplicaciones o sitios web seguidamente se listan los indicadores por nombre, descripción y anexo directo a vistas de detalle e historial.

El historial se muestra en formato de lista dada la fecha en forma descendiente a partir de último registro, junto a la fecha se indica el valor de dicha fecha 
conjunto a su medida dada ($ o %).

En la vista del detalle se exhibe el valor del indicador dado su último registro obtenido, junto con ello se muestra información como nombre, fecha y unidad de medida,
seguidamente presenta un gráfico linear con los 10 últimos registros.

## Capturas: 
<img src="https://github.com/onetyrion/Indicadores3IT/blob/main/assets/readmeFiles/Home.jpeg?raw=true" alt="HomeScreenshot" width="200"/><img src="https://github.com/onetyrion/Indicadores3IT/blob/main/assets/readmeFiles/History.jpeg?raw=true" alt="HistoryScreenshot" width="200"/><img src="https://github.com/onetyrion/Indicadores3IT/blob/main/assets/readmeFiles/Details.jpeg?raw=true" alt="DetailsScreenshot" width="200"/>

## Tecnologías Utilizadas
Este proyecto fue desarrollado bajo las siguientes tecnologías:
- React-Native: [ Framework que permite implementar apps nativas para dispositivos móviles utilizando JS (V16.x,SDK40)](https://reactnative.dev)
- Expo: [ Expo es una plataforma de código abierto para crear aplicaciones nativas universales para Android, iOS y la web con JavaScript y React.](https://expo.io)
- React-Navigation: [ Routing y navigation para aplicaciones hechas con React Native](https://reactnavigation.org)
- React-native-chart-kit: [React Native Chart Kit: Line Chart, Bezier Line Chart, Progress Ring, Bar chart, Pie chart](https://github.com/indiespirit/react-native-chart-kit)
- React-native-elements: [ Cross Platform React Native UI Toolkit](https://reactnativeelements.com)
- React-native-paper: [ Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario. **Basada en Material**](https://reactjs.org)

## Quick start
Intrucciones para la instalación y configuración.
- Clone the repo: `git clone https://github.com/onetyrion/Indicadores3IT`.
- Instale y configure expo según sus dispositivos
- Ejecute el comando `expo start`
