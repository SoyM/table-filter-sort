var senceInfo_array = Array()
var array_senceInfo_title = Array()

// 读取table数据
var tb = document.getElementById("senceInfo");
// console.log(tb)
var rows = tb.rows;
var key;
console.log("rows.length: " + rows.length + ",cells.lenght: " + rows[0].cells.length)
for (var i = 1; i < rows.length; i++) {
    key = rows[i].cells[0].innerHTML
    senceInfo_array[i - 1] = Array()

    var cells = rows[i].cells;
    for (var j = 0; j < cells.length; j++) {
        senceInfo_array[i - 1][j] = cells[j].innerHTML;

        if (j < cells.length - 4) {

            //get array_senceInfo_title
            if (i == 1) {
                array_senceInfo_title[j] = Array()
            }
            if (array_senceInfo_title[j].indexOf(cells[j].innerText) == -1) {
                array_senceInfo_title[j].push(cells[j].innerText)
            }
        }

    }
}
console.log("array_senceInfo_title")
console.log(array_senceInfo_title)
console.log("senceInfo_array")
console.log(senceInfo_array)

var classify_product_model = Array()
var array_title_id = ['product_model_select', 'lens_model_select', 'mounting_height_select', 'test_site_select',
    'Installation_method_select', 'temp_humi_select'
]

// 填入select数据
for (var m = 1; m < array_senceInfo_title.length; m++) {

    for (var i = 0; i < array_senceInfo_title[m].length; i++) {
        var product_model_select = document.createElement("option")

        product_model_select.innerText = array_senceInfo_title[m][i]
        product_model_select.id = "product_model" + i
        product_model_select.value = array_senceInfo_title[m][i];
        document.getElementById(array_title_id[m - 1]).appendChild(product_model_select)

        // console.log(document.getElementById("product_model" + i))


        // var foo_count = 1;
        // classify_product_model[array_senceInfo_title[1][i]] = Array()
        // for (var m = 0; m < senceInfo_array.length; m++) {
        //     if (senceInfo_array[m] == undefined) {
        //         continue
        //     }
        //     if (senceInfo_array[m][1] == array_senceInfo_title[1][i]) {

        //         classify_product_model[array_senceInfo_title[1][i]].push(senceInfo_array[m])
        //         foo_count++;
        //     }
        // }
    }
}


// console.log(classify_product_model)


function getclassifyInfo() {
    var classify_array = Array()
    var classify_count = 0
    for (var i = 0; i < array_title_id.length; i++) {


        if (document.getElementById(array_title_id[i]).value != '') {
            // console.log(document.getElementById(array_title_id[i]).value)
            if (classify_count == 0) {

                for (var m = 0; m < senceInfo_array.length; m++) {
                    // console.log(senceInfo_array[m][i + 1] + "-" + document.getElementById(array_title_id[i]).value)
                    if (senceInfo_array[m][i + 1] == document.getElementById(array_title_id[i]).value) {

                        classify_array.push(senceInfo_array[m])
                    }
                }

                classify_count++
            }
            //over second classify
            else {
                var temp_classify_array = Array()
                for (var m = 0; m < classify_array.length; m++) {
                    // console.log(senceInfo_array[m][i + 1] + "-" + document.getElementById(array_title_id[i]).value)
                    if (classify_array[m][i + 1] == document.getElementById(array_title_id[i]).value) {

                        temp_classify_array.push(classify_array[m])
                    }
                }
                classify_array = temp_classify_array
            }
        }

        console.log(classify_array)
    }


    var tb = document.getElementById("senceInfo");

    for (var i = 0; i < classify_array.length; i++) {
        // console.log(i)
        // var cells = tb.rows[i + 1].cells;

        for (var j = 0; j < tb.rows[i + 1].cells.length; j++) {
            tb.rows[i + 1].cells[j].innerHTML = classify_array[i][j];
        }
    }

    for (var i = classify_array.length; i < tb.rows.length - 1; i++) {
        var cells = tb.rows[i + 1].cells;
        for (var j = 0; j < cells.length; j++) {
            cells[j].innerHTML = '';
        }
    }
}

