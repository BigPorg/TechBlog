// helpers for handlebars
// pulled from class
// look into other date formats
module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    }
};
