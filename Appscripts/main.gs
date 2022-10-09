function doGet(req) {
    var roll_num = req ? req.parameter.rn :null;
    var selected_branch = req ? req.parameter.branch : null;
    var selected_year = req ? req.parameter.year : null;
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("marksheet");
    var subjects  = doc.getSheetByName("subjects");
    var data = sheet.getDataRange().getValues();
    var subjects_data = subjects.getDataRange().getValues();

    var output = [];
    for (var i = 1; i<data.length; i++) {
      var row = {};
      row['RollNumber'] = data[i][0];
      row['Name'] = data[i][1];
      row['Branch'] = data[i][2];
      row['Year'] = data[i][3];
      row['currentCT'] = data[i][4];
      row['marks'] = [data[i][5],data[i][6],data[i][7],data[i][8],data[i][9],data[i][10]]
      output.push(row);
    }

    if (roll_num != null ){
        return studentView(output,subjects_data,roll_num)           
      
    }
    else if(selected_year != null && selected_branch != null) {
        return getResultsByBothParams(selected_year,selected_branch,output,subjects_data)
    }
    else if (selected_year != null) {
        return getResultsByYear(selected_year,output,subjects_data)
    }
    else if (selected_branch != null) {
        return getResultsByBranch(selected_branch,output,subjects_data)
    }
    else {
        return getResultOfWholeCT(output,subjects_data)
    }
}
    