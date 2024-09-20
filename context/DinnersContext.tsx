import { createContext, useContext, useReducer } from "react";

const DinnersContext = createContext<{
    dinners: string[];
    dispatch: React.Dispatch<{
        type: string;
        payload: { index: number; dinner: string };
    }>;
}>({
    dinners: [],
    dispatch: () => null,
});

const dinnersReducer = (
    state: string[],
    action: { type: string; payload: { index: number; dinner: string } }
) => {
    const newState = [...state];

    switch (action.type) {
        case "add":
            return [...state, action.payload.dinner];
        case "update":
            newState[action.payload.index] = action.payload.dinner;
            return newState;
        case "remove":
            newState.splice(action.payload.index, 1);
            return newState;
        default:
            return state;
    }
};

export const DinnersProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [dinners, dispatch] = useReducer(dinnersReducer, []);

    return (
        <DinnersContext.Provider value={{ dinners, dispatch }}>
            {children}
        </DinnersContext.Provider>
    );
};

export const useDinnersContext = () => useContext(DinnersContext);
