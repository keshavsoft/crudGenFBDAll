function jFGlobalSerialColumn(value, row, index) {
    return index + 1;
};
function jFGlobalForYear(value, row, index) {
    return value.substring(0, 4);

};
function jFGlobalForDate(value, row, index) {
    return value.substring(0, 10);

};

function operateFormatter(value, row, index) {
    return [
        `<a class="like" href="../../Scan/ShowAlert/ShowAlert.html?BranchName=${row.BranchName}&VoucherRef=${row.pk}" title="Scan">`,
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">',
        '<path d="M2 2h2v2H2V2Z"/>',
        '<path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/>',
        '<path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/>',
        '<path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/>',
        '<path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/>',
        '</svg>',
        '</a>  '
    ].join('')
}

function detailFormatter(index, row) {
    var html = []
    $.each(row, function (key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>')
    })
    return html.join('')
};

function priceFormatterSum(data) {
    var field = this.field;
    return data.map(function (row) {
        return parseFloat(row[field]);
    }).reduce(function (sum, i) {
        if (isNaN(i)) {
            sum = parseFloat(sum.toFixed(4));
            return sum;
        } else {
            sum = parseFloat(sum.toFixed(4));
            return sum + i;
        }
    }, 0);
}

function priceBalance(data) {
    var field = this.field;
    var values = data.map(function (row) {
        return parseFloat(row[field]);
    });

    var lastValue = values[values.length - 1];

    if (isNaN(lastValue)) {
        return 0;
    } else {
        return parseFloat(lastValue.toFixed(4));
    }
}