// API request handler
export const handleRequest = async (request) => {
    try {
        const response = await request();
        return {
            data: response.data,
            error: null,
            status: response.status,
        };
    } catch (error) {
        return {
            data: null,
            error: error || 'An error occurred',
            status: error.response?.status,
        };
    }
};