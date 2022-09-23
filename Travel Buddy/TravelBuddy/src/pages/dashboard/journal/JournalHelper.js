const getColor = (prefix, theme) => {
    console.log(theme,"theme");
    switch (theme) {
        case "indigo": {
            if (prefix === "text") {
                return "indigo-text";
            } else if (prefix === "border") {
                return "indigo-b";
            } else {
                return "indigo-bg";
            }
        }
        case "blue":
            if (prefix === "text") {
                return "blue-text";
            } else if (prefix === "border") {
                return "blue-b";
            } else {
                return "blue-bg";
            }
        case "red":
            if (prefix === "text") {
                return "red-text";
            } else if (prefix === "border") {
                return "red-b";
            } else {
                return "red-bg";
            }
        case "green":
            if (prefix === "text") {
                return "green-text";
            } else if (prefix === "border") {
                return "green-b";
            } else {
                return "green-bg";
            }
        case "orange":
            if (prefix === "text") {
                return "orange-text";
            } else if (prefix === "border") {
                return "orange-b";
            } else {
                return "orange-bg";
            }
        case "purple":
            if (prefix === "text") {
                return "purple-text";
            } else if (prefix === "border") {
                return "purple-b";
            } else {
                return "purple-bg";
            }
        case "yellow":
            if (prefix === "text") {
                return "yellow-text";
            } else if (prefix === "border") {
                return "yellow-b";
            } else {
                return "yellow-bg";
            }
        default:
            if (prefix === "text") {
                return "indigo-text";
            } else if (prefix === "border") {
                return "indigo-b";
            } else {
                return "indigo-bg";
            }
    }
};

const setMyTheme = (no) => {
    console.log("in a method THEME :");
    switch (no) {
        case 1: {
            return "indigo";
        }
        case 2:
            return "blue";
        case 3:
            return "red";
        case 4:
            return "green";
        case 5:
            return "orange";
        case 6:
            return "purple";
        case 7:
            return "yellow";
        default:
            return "indigo";
    }
};

export { setMyTheme };
export default getColor;