/**
 * Created by Shalom Yiblet on 8/12/2015.
 */









function getWorksheetData(callback) {
    var arr = create2DArray();

    var spreadsheetID = '1Aa0SeYb49zb6neQNJXYp7Rx5ScHhY5PXXtnECr1V3ic';
    var worksheetID = 'oyqw9mk';
    var url = 'https://spreadsheets.google.com/feeds/cells/' + spreadsheetID + '/' + worksheetID + '/public/values?alt=json';

    $.getJSON(url, function (data) {
//            console.log('entry');
//            console.log(data.feed.entry);
//
//            console.log('end entry');

        $.each(data.feed.entry, function (i, val) {

            // assign parameters for mapping and infowindow
            // note that this will be different depending on header titles
            var cell = val.gs$cell;
//                console.log(cell);
            var xCoord = cell.row;
            var yCoord = cell.col;
            var content = cell.$t;

            if (!arr[xCoord - 1]) {
                arr[xCoord - 1] = [];
            }

//                    document.getElementById("hi").innerHTML = content;
            arr[xCoord - 1][yCoord - 1] = content;
//                    console.log(arr[xCoord - 1][yCoord - 1]);

        });
        // add stuff from here
//                document.getElementById("hi").innerHTML = "hi";
        process();
        callback();
//                document.write(arr[0][1]);
    });
//
    return arr
}