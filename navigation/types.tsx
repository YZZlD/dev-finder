//This helper object defines type safety for different route parameters for the app
export type RootStackParamList = {
    Signup: undefined;
    Map: undefined;
    Profile: {
        username: string
    };
};
