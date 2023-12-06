var user = { "listname": "20231204", "tel": "098888111" };
var isAgree;
$(function () {

    $("#sw1").change(function () {
        console.log($(this).val());
        if ($(this).is(':checked')) {
            console.log("同意");
            $(this).next().text("已確認資料");
            isAgree = true;
        }
        else {
            console.log("不同意");
            $(this).next().text("未確認資料");
            isAgree = false;
        }
    });

    $("#OK_btn").bind("click", function () {
        if (isAgree == true) {
            var listnames = Number($("#listname").val()); //輸入的
            var tel = $("#tel").val();
            // console.log(typeof Number(user["listname"]));
            if (listnames == Number(user["listname"])) {
                if (tel == user.tel) {
                    alert("成功");
                } else {
                    alert("電話號碼錯誤");
                }
            } else {
                alert("訂單編號錯誤");
            }
        }else{
            alert("檢查訂單資料");
        }


    });




});


