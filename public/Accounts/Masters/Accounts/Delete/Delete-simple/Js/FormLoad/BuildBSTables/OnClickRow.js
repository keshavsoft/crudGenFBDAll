const OnClickRow = (row, $element, field) => {
    console.log(row);
    console.log($element);
    console.log(field);
};

const StartFunc = () => {
    const handleClick = (row, $element, field) => {
        OnClickRow(row, $element, field);
    };

    return handleClick;
};

export { StartFunc };
