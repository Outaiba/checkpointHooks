import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randoList: [
    {
      id: Math.random(),
      name: "La Galite",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/la-galite.jpg",
      description:
        "      Classée réserve naturel depuis 1980 du gouvernorat de Bizerte, l’île de la Galite réunit à la fois la mer la montagne et un paysage exceptionnel. Très demandée en été pour y passer quelques jours.",
      rating: 5,
    },
    {
      id: Math.random(),
      name: "Ain soltane / Bni mtir",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/bni-mtir.jpg",
      description:
        "Située à Ghardimaou du gouvernorat de Jendouba, Le village abrite un centre de camping géré par le ministère de la Jeunesse et des Sports. Des groupes de jeunes viennent de temps en temps pour y passer leurs vacances d’été.",
      rating: 4,
    },
    {
      id: Math.random(),
      name: "Oued zitoun",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/wed-zitoun.jpg",
      description:
        "Situé dans la délégation de Ghezela entre Mateur et Sejnen, du gouvernorat de Bizerte, le paysage est à couper le souffle avec des cascades d’eau d’au moins de 30 mètres.",
      rating: 2,
    },
    {
      id: Math.random(),
      name: "Tamaghza",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/tamaghza.jpg",
      description:
        "Un coin de paradis avec des oasis et des cascades d’eau en plein désert de Tozeur.",
      rating: 3,
    },
    {
      id: Math.random(),
      name: " Cap negro/Sidi mechreg",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/djebel-chtana-sidi-mechreg.jpg",
      description:
        "Situé près de Nefza du gouvernorat de Béja : une randonnée avec vue sur mer magnifique et une verdure très riche.",
      rating: 5,
    },
    {
      id: Math.random(),
      name: "Mahmyet khroufa (Nefza)",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/khroufa.jpg",
      description:
        "Une belle réserve naturelle de 125 hectares située à Ouechtata, à mi-chemin entre Nefza et Tabarka.",
      rating: 1,
    },
    {
      id: Math.random(),
      name: "Djebba",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/djebba.jpg",
      description:
        "Un village Tunisien du gouvernorat de Béja, on y trouve les ruines romaines de Kouchbatia au pied de Djebel Gorra, on y trouve aussi un parc naturel avec une multitude d’arbres, mais aussi des grottes.",
      rating: 5,
    },
    {
      id: Math.random(),
      name: " Kef echgueg (la montagne des fissures)r",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/kef-echgueg.jpg",
      description:
        "Du coté de Mateur du gouvernorat de Bizerte, la montagne est pleine de failles de fissures, offrant un paysage exceptionnel avec une faune et une flore importante.",
      rating: 3,
    },

    {
      id: Math.random(),
      name: "Ichkeul, Parc National d’Ichkeul",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/ichkeul.jpg",
      description:
        "Réserve  naturel du gouvernorat de Bizerte, la faune et la flore est très variée, un magnifique paysage avec un lac d’une superficie de 8500 hectares, il accueille plus de 180 d’espèces de oiseux pendant l’hiver dont le Flamant rose.",
      rating: 5,
    },

    {
      id: Math.random(),
      name: "La table de Jugurtha",
      posterurl:
        "http://www.pagesport.tn/wp-content/uploads/2016/04/table-de-jugurtha-2.jpg",
      posterurl1:
        "https://universnews.tn/wp-content/uploads/2022/05/table-de-jugurta.jpg",
      posterurl2:
        "https://3.bp.blogspot.com/-cab6LyA3BzI/WdovwnXdb5I/AAAAAAAACio/F-9GvmINSgQYnkKdG9I1jNxnh-f3AjscQCLcBGAs/s1600/22228615_1883214258674137_3164459626071481097_n.jpg",
      posterurl3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6SzfZUHdVfVlrHxRdDP5y26bAWumEZES4w&usqp=CAU",
      posterurl4:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4iBb3ZXu6ZSv0DnvJVCYN8AB9SjsQ-EFCw&usqp=CAU",
      posterurl5: "https://pbs.twimg.com/media/FEKYYEmXMAc4Qmq.jpg",
      description:
        "De la région de kalaat Senan, du gouvernorat du Kef. La table de Jugurtha, haut plateau de 1271 mètres d’altitude couvrant une superficie de plus de 80 hectares. On y trouve une verdure variée et de nombreuses sources d’eau comme celle de Ain Soltan.",
      src: "https://www.youtube.com/watch?v=SDgz7bC12ls&ab_channel=trekkingtunisie",
      rating: 5,
    },
  ],
};

export const RandoSlice = createSlice({
  name: "rando",
  initialState,
  reducers: {
    addRando: (state, action) => {
      state.randoList.push(action.payload);
    },
    removeRando: (state, action) => {
      state.randoList = state.randoList.filter(
        (el) => el.id !== action.payload.id
      );
    },
    editRando: (state, action) => {
      let i = state.randoList.findIndex((el) => el.id === action.payload.id);
      state.randoList[i] = {
        ...state.randoList[i],
        name: action.payload.edited.name
          ? action.payload.edited.name
          : state.randoList[i].name,
        posterurl: action.payload.edited.posterurl
          ? action.payload.edited.posterurl
          : state.randoList[i].posterurl,
        description: action.payload.edited.description
          ? action.payload.edited.description
          : state.randoList[i].description,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRando, removeRando, editRando } = RandoSlice.actions;

export default RandoSlice.reducer;
