const StartFunc = () => {
    jFShowDateTime()
};
export { StartFunc };

const jFShowDateTime = () => {
    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('Date').value = formattedSevenDaysAgo;
};