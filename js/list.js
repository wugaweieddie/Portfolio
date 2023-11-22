$(function(){
    $("#check").change(function(){
        console.log($(this).val());
        if($(this).is(':checked')){
            console.log("同意");
        }else{
            console.log("不同意");
        }
    });


    $("#OK_btn").bind("click",function(){
        console.log($("#listname").val());
        console.log($("#tel").val());
        console.log($("#buyday").val());
        
    });




});