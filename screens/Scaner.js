// import * as React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { Camera } from 'expo-camera';
// import * as FaceDetector from 'expo-face-detector';

// function Scaner() {
//   const [hasPermission, setHasPermission] = React.useState();
//   const [faceData, setFaceDate] = React.useState();

//   React.useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   function getFaceDataView() {
//     if (faceData.lenfth === 0) {
//       return (
//         <View style={styles.face}>
//           <Text style={styles.faceDataText}>No face detected</Text>
//         </View>
//       );
//     } else {
//       return faceData.map((face, index) => {
//         const eyesShut = face.leftEyeOpenProbability < 0.4 && face.rightEyeOpenProbability < 0.4;
//         const winking = !eyesShut && (face.leftEyeOpenProbability < 0.4 || face.rightEyeOpenProbability < 0.4);
//         const smiling = face.smilingProbability > 0.7;
//         return (
//           <View style={styles.face}>
//             <Text style={styles.faceDataText}>Eyes Shut: {eyesShut.toString()}</Text>
//           </View>
//         );
//     }
//   };

//   const handleFacesDested = ({ faces }) => {
//     setFaceDate(faces);
//     console.log(faces);
//   };

//   return (
//     <Camera 
//     type={Camera.Constants.Type.front}
//     style={styles.camera}
//     onFacesDetected={handleFacesDetected}
//     faceDetectorSettings={{
//       mode : FaceDetector.Constants.Mode.fast,
//       detectLandmarks : FaceDetector.FaceDetectorLandmarks.none,
//       runClassifications : FaceDetector.Constants.Classifications.none,
//       minDetectionInterval : 100,
//       tracking : true,
//     }}>
//       {getFaceDataView()}
//     </Camera>
//   );
// }

// const styles = StyleSheet.create({
//   camera: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   face: {
//     backgroundColor: "white",
//     alignSelf: "stretch",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 10,
//     padding: 10,
//   },
//   faceDataText: {
//     fontSize: 20,
//   },
// });

// export default Scaner;