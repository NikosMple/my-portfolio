import keeper from "../assets/Projects/react-keeper.png";
import top100 from "../assets/Projects/crypto-top.png";
import keeperVol2 from "../assets/Projects/keepervol2.png";


export const data=[
    {
        id:1,
        name:"Full Stack Keeper",
        image:keeperVol2,
        github:"https://github.com/NikosMple/Keeper-FullStack",
        hasLiveButton: false,
    },

    {
        id:2,
        name:"React Keeper",
        image:keeper,
        github:"https://github.com/NikosMple/react-keeper",
        hasLiveButton: true,
        live:"https://nikosmple.github.io/react-keeper/",
    },
    {
        id:3,
        name:"Top 100 Crypto Live",
        image:top100,
        github:"https://github.com/NikosMple/top100-crypto",
        hasLiveButton: true,
        live:"https://top100-crypto.onrender.com/",
    }
]