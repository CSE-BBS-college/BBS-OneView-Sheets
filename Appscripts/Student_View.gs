function studentView(output,subjects_data,roll_num) {
  var outputToReturn = output.filter(obj => obj.RollNumber == roll_num);
      for (var i = 0; i<subjects_data.length;i++) {
              if (subjects_data[i][0] == outputToReturn[0].Year ){
                outputToReturn[0]["subjects"] = subjects_data[i][2]
                  }
      }       
      // Logger.log(outputToReturn)
      return ContentService.createTextOutput(JSON.stringify({data: outputToReturn})).setMimeType(ContentService.MimeType.JSON)
}