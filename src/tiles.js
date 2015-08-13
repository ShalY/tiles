/**
 * Created by Shalom Yiblet on 8/12/2015.
 */









function getWorksheetData(spreadsheetID, worksheetID) {
    var arr = create2DArray();

    var url = 'https://spreadsheets.google.com/feeds/cells/' + spreadsheetID + '/' + worksheetID + '/public/values?alt=json';

    $.getJSON(url, function (data) {

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

            arr[xCoord - 1][yCoord - 1] = content;
//                    console.log(arr[xCoord - 1][yCoord - 1]);

        });
               document.write(arr[0][1]);
    });
    return arr
}

function create2DArray() {
    var arr = [[]];
    return arr;
}