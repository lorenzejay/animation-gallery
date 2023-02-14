import React from "react";

export function getInitialState() {
  return {
    orderedGallery: [
      {
        slug: "/portraits",
        type: "portraits",
        name: "mikitA",
        imageSrc: "/gallery/mikita.jpg",
        background: "#6d7671",
        initialX: 0,
        // animation: animation1,
        // sequence: sequence1,
      },
      {
        slug: "/vivid",
        type: "vivid",
        name: "oladimeji",
        imageSrc: "/gallery/oladimeji.jpg",
        background: "#708C99",
        initialX: -700,
        // initial: { x: -700 },
        // transition: {
        //   duration: 0.5,
        //   // delay: 0.35,
        // },
        // sequence: sequence2,
        // animation: animation2,
      },
      {
        slug: "/lifestyle",
        type: "lifestyle",
        name: "kimson",
        imageSrc: "/gallery/kimson.jpg",
        background: "#D5D1CB",
        initialX: -380,
        // initial: { x: -380 },
        // transition: {
        //   duration: 0.5,
        // },
        // sequence: sequence3,
        // animation: animation3,
      },

      {
        slug: "/fashion",
        type: "fashion",
        name: "behrouz",
        imageSrc: "/gallery/behrouz.jpg",
        background: "#d1ac77",
        initialX: 380,
        // initial: { x: 380 },
        // transition: {
        //   duration: 0.5,
        // },
        // sequence: sequence4,
        // animation: animation4,
      },
      {
        slug: "/artwork",
        type: "artwork",
        name: "lucas",
        imageSrc: "/gallery/lucas.jpg",
        background: "#664F42",
        initialX: 700,
        // initial: { x: 700 },
        // transition: {
        //   duration: 0.5,
        // },
        // sequence: sequence5,
        // animation: animation5,
      },
    ],
    selectedGallery: {
      slug: "/portraits",
      type: "portraits",
      name: "mikitA",
      imageSrc: "/gallery/mikita.jpg",
      background: "#6d7671",
      initialX: 0,
      // animation: animation1,
      // sequence: sequence1,
    },
  };
}
function galleryReducer(state, action) {
  switch (action.type) {
    case "GALLERY_REORDERED":
      return action.reorderedGallery;
    default:
      return state;
  }
}
function pageGalleryReducer(state, action) {
  switch (action.type) {
    case "PAGE_GALLERY":
      return action.selectedGallery;
    default:
      return state;
  }
}
function appReducer(state, action) {
  return {
    orderedGallery: galleryReducer(state.reorderedGallery, action),
    selectedGallery: pageGalleryReducer(state.selectedGallery, action),
  };
}
const AppStateContext = React.createContext({
  state: getInitialState(),
  dispatch: () => {},
});

export function AppStateProvider({ children }: { children: any }) {
  const [state, dispatch] = React.useReducer(appReducer, getInitialState());

  const value = React.useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return React.useContext(AppStateContext).state;
}
export function useAppDispatch() {
  return React.useContext(AppStateContext).dispatch;
}

export function usePageGallery() {
  const { selectedGallery } = useAppState();
  return selectedGallery;
}
