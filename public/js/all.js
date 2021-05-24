$(document).ready(function(){
    $('.form-horizontal').on('submit',function(e){
       
            var data = {
                name : $(this).find('input#name'),
                email : $(this).find('input#email')
            }
            $.ajax({
                dataType : "json",
                method: "POST",
                url: $(this).attr('action'),
                contentType: "application/json; charset=utf-8",
                data:JSON.stringify(data),
                success : function(result) {
                    alert(result.msg);
                },
            });

        e.preventDefault();
    })
    $('#reguser').on('submit',function(e){
        console.log("trying to send data of reguser");
        var data = new FormData();
        data.append("username","myname");
        data.append("email","myemail@gslk.com");
        data.append("photo",$('#reguser input#photo')[0].files[0]);
        console.log($('#reguser input#photo')[0].files[0]);
       
        $.ajax({
            method: "POST",
            url: "/register/contest",
            contentType: "multipart/form-data",  
            data:data,
            processData: false,
    contentType: false,
            success : function(result) {
               console.log(result);
            },
            error : function(error){
                console.log("Error :", error);
            }
        });
        e.preventDefault();
    })
})