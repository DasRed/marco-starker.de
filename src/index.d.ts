declare module MS {
    type RouteParameter = {
        language?: string
    };

    type PageParameter = {
        language: string
    };

    type ProcessEnv = NodeJS.ProcessEnv & {
        MS_LANGUAGE_DEFAULT?: string;
    };

    type Config = {
        language: {
            default: string;
        };
    };
}
export default MS;