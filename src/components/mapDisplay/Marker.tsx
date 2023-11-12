// import React from "react";
// import leaflet from "leaflet";
// import { Marker, MarkerProps } from "react-leaflet";
// import PushPinIcon from '@mui/icons-material/PushPin';

// const iconsDefault = {
//     iconSize: [32, 32],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
// };

// interface AppMarker extends MarkerProps {
//     color: MarkerColor;
// }
// const markerColors = ["success", "failure"] as const;

// export type MarkerColor = (typeof markerColors)[number];
// const markerIcons = markerColors.reduce(
//     (prev, curColor) => ({
//         ...prev,
//         [curColor]: new leaflet.DivIcon({
//             iconSize: [32, 32], // Adjust the size as needed
//             className: `marker-icon marker-${curColor}`,
//             html: `<div class="marker-color marker-${curColor}"><PushPinIcon /></div>`,
//             ...iconsDefault,
//         }),
//     }),
//     {}
// ) as {
//     [key in MarkerColor]: leaflet.DivIcon;
// };

// export const AppMarker = React.forwardRef(
//     ({ children, color = "success", ...props }: AppMarker, ref) => {
//         return (
//             <Marker {...props} icon={markerIcons[color]} ref={ref as any}>
//                 {children}
//             </Marker>
//         );
//     }
// );