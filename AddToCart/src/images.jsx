import lambo1 from "./assets/lambo1.png"
import lambo2 from "./assets/lambo2.png"
import lambo3 from "./assets/lambo3.png"
import bugati1 from "./assets/bugati1.jpg"  
import bugati2 from "./assets/bugati2.png"
import bugati3 from "./assets/bugati3.png"
import ferrari1 from "./assets/ferrari1.png"
import ferrari2 from "./assets/ferrari2.png"
import ferrari3 from "./assets/ferrari3.png"

 const images=[
    {
        image:[lambo1,lambo2,lambo3],
        description: `The Aventador LP 700-4 used Lamborghini's 700 PS (515 kW; 690 hp) 6,498 cc (6.5 L; 396.5 cu in) 60° V12 engine, weighing about 235 kg (518 lb). Known internally as the L539,[15] it was Lamborghini's fifth in-house engine and only second V12 design since the 3.5-litre power plant found in the 350GT.[20]`,
        productName: 'Aventador LP 700–4',
        productCost:'$ 1,000,000',
        liked: false,
    },
    {
        image:[bugati1,bugati2,bugati3],
        description: `The main carry over component from the Veyron is the 7,993 cc (8.0 L; 487.8 cu in) quad-turbocharged W16 engine, though it is heavily updated. The engine in the Chiron has a peak power output of 1,103 kW (1,479 hp; 1,500 PS) at 6,700 rpm and 1,600 N⋅m (1,180 lb⋅ft) of torque starting from 2,000 to 6,000 rpm.[13] The engine in the most powerful variant of its predecessor, the Veyron Super Sport generates 221 kW (296 hp; 300 PS) less than the new Chiron, while the engine in the original Veyron generates 367 kW (492 hp; 499 PS) less power.[14][15]`,
        productName: 'Bugati chiron',
        productCost:'$ 1,500,000',
        liked: false,
    },
    {
        image:[ferrari1,ferrari2,ferrari3],
      description: `The Ferrari 296 (Type F171)[3] is a sports car built since 2022 by the Italian company Ferrari. The 296 is a two-seater, offered as a GTB coupé and a GTS folding hard-top convertible. It is a plug-in hybrid with a rear mid-engine, rear-wheel-drive layout and its power train combines a twin-turbocharged 120-degree block-angle V6 with an electric drive fitted in between the engine and gearbox.[clarification needed] The 296 can be driven in electric-only mode for short distances, to comply with use in urban zero-emission zones.

Unveiled on 24 June 2021,[4] the 296 is Ferrari's first stock model with 6-cylinders other than the Dino 206 GT, 246 GT and 246 GTS cars produced by Ferrari but sold under the Dino marque. Its power pack puts out a combined 830 PS (610 kW; 819 hp), giving the 296 a power-to-weight ratio of 560 hp/ton.`,
        productName: 'Ferrari 296',
        productCost:'$ 800,000',
        liked: false,
    }
]
export default images;