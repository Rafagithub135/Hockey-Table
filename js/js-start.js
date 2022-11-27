"use strict";

    let xlsx = require('xlsx');
    let workbook = xlsx.readFile('Football_Pool_Sheet_Week_18.xlsx');
    let sheet_name_list = workbook.SheetNames;
    let xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);



