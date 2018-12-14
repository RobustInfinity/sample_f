


//checking for null, undefined, empty string
const isEmpty = value => 
                value === null || value === undefined ||
                (typeof value === 'string' && value.trim().length === 0);

export default isEmpty