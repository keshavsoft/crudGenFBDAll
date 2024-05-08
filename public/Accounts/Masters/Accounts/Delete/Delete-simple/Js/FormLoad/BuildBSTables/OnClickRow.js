const OnClickRow = (row, $element, field) => {
    console.log(row);
    console.log($element);
    console.log(field);
};

const StartFunc = (row, $element, field) => {
    if(field === "KS-Delete"){
        console.log(row);
    }
};

export { StartFunc };
