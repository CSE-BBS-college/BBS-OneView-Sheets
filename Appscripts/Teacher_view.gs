function getResultOfWholeCT(output, subjects_data) {
    var outputToReturn = output.filter(obj => obj.Branch =='CSE' || obj.Branch ==  'EN' || obj.Branch ==  'CE' || obj.Branch ==  'ME')
    var subjects_array={}
    let step = 1
    let row = {}

    for (var i =0; i<subjects_data.length;i++) {
          row[`${subjects_data[i][1]}`] = subjects_data[i][2];
          if (i == 3 || i == 8 || i == 13 || i == 18)  {
              subjects_array[step] = row;  
              step++;
              i++
              row = {};
          }
      }
    
    outputToReturn.push(subjects_array)
    // Logger.log(outputToReturn)
    return ContentService.createTextOutput(JSON.stringify({data: outputToReturn})).setMimeType(ContentService.MimeType.JSON)

}

function getResultsByBothParams(Year,Branch,output,subjects_data) {
       var outputToReturn = output.filter(obj => obj.Branch == Branch && obj.Year == Year);
      for (var i = 0; i<subjects_data.length;i++) {
              if (subjects_data[i][0] == outputToReturn[0].Year && subjects_data[i][1] == outputToReturn[0].Branch ){
                outputToReturn[0]["subjects"] = subjects_data[i][2]
                  }
    }
      // Logger.log(outputToReturn)
      return ContentService.createTextOutput(JSON.stringify({data: outputToReturn})).setMimeType(ContentService.MimeType.JSON)
}

function getResultsByYear(Year,output,subjects_data) {
       var outputToReturn = output.filter(obj =>  obj.Year == Year);
       var row = {};
       for (var i = 0; i<subjects_data.length;i++) {
              if (subjects_data[i][0] == Year ){
                row[`${subjects_data[i][1]}`] = subjects_data[i][2]
            }
          }
          outputToReturn.push(row)
      // Logger.log(outputToReturn)
      return ContentService.createTextOutput(JSON.stringify({data: outputToReturn})).setMimeType(ContentService.MimeType.JSON)
}

function getResultsByBranch(Branch,output,subjects_data) {
       var outputToReturn = output.filter(obj =>  obj.Branch == Branch);
       var row = {};
       for (var i = 0; i<subjects_data.length;i++) {
              if (subjects_data[i][1] == Branch ){
                row[`${subjects_data[i][0]}`] = subjects_data[i][2]
            }
          }
          outputToReturn.push(row)
      // Logger.log(outputToReturn)
      return ContentService.createTextOutput(JSON.stringify({data: outputToReturn})).setMimeType(ContentService.MimeType.JSON)
}