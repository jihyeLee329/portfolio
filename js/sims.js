 $(document).ready(function(){
        $("#top").css({height:"0"}).stop().animate({height:"165px"},1000);
        $("#character").stop().animate({opacity:"1"},900);
        var toggleCheck = true;
        $("#direction").click(function(){
                $("#chat").stop().animate({opacity:"0"},500);
                $("#character > div").stop().animate({opacity:"0"},100);
            
            if(toggleCheck){
                    $("#direction").css("background-image","url(image/direction1.png)");
                    $("#skmore").stop().animate({opacity:"1",bottom:"350px"},700);
                    $("#chat").stop().animate({opacity:"0"},500);
                    $("#character > div").stop().animate({opacity:"0"},100);
                     $(".about").stop().animate({opacity:"0"},300);
                    mabout=true;
                    $("#self").stop().animate({opacity:"0"},300);
                    mself=true;    
                    $("#character > div").stop().animate({opacity:"0"},100);
                    chatCheck=true;
                
                 $("#menu > div").eq(4).click(function(){
                     $("#skmore").stop().animate({opacity:"0",bottom:"250px"},700);
                    toggleCheck = true;
                });
                toggleCheck = false;
            }else{
                $("#direction").css("background-image","url(image/direction.png)");
                $("#skmore").stop().animate({opacity:"0",bottom:"250px"},700);
                
                toggleCheck =true;
            }
            
        }); //direction end
            var chatCheck=true;
        $("#menu > div").eq(4).click(function(){
            
           if(chatCheck){ 
               $("#chat").stop().animate({opacity:"1"},500);
               chatCheck=false;
           }else{
            $("#chat").stop().animate({opacity:"0"},500);
            $("#character > div").stop().animate({opacity:"0"},100);
            $(".about").stop().animate({opacity:"0"},100);
                chatCheck=true;
           }
         });//chat end
        
        
            var communi = true;
            $("#chat >div> div").eq(2).click(function(){
                if(communi){
                    $("#character > div").stop().animate({opacity:"1"},400);
                    communi=false;
            }else{
                    $("#character > div").stop().animate({opacity:"0"},400);
                    communi=true;
            }
        });//communi end
        
        
            var mself=true;
             $("#chat >div> div").eq(0).click(function(){
                if(mself){
                    $("#self").stop().animate({opacity:"1"},400);
                    mself=false;
                }else{
                    $("#self").stop().animate({opacity:"0"},400);
                    mself=true;
                  
            }
        });//mself end
        
     
     var mabout=true;
             $("#chat >div> div").eq(1).click(function(){
                if(mabout){
                    $(".about").stop().animate({opacity:"1"},400);
                    mabout=false;
                }else{
                    $(".about").stop().animate({opacity:"0"},400);
                    mabout=true;
                  
            }
        });//mabout end
        
     
        
        var skillInfo = new Array();
        skillInfo[0] = 70;
        skillInfo[1] = 70;
        skillInfo[2] = 67;
        skillInfo[3] = 68;
        skillInfo[4] = 50;
        skillInfo[5] = 50;
        
       $("#more").click(function(){
           for(var i=0;i<6;i++){
            $("#stat >div").eq(i).children('div').stop().animate({width:skillInfo[i]},300);
            }
       });//more end
        
          var leftskill = new Array();
        leftskill[0] = 185;
        leftskill[1] = 185;
        leftskill[2] = 170;
     
        var rightskill = new Array();
        rightskill[0] = 175;
        rightskill[1] = 140;
        rightskill[2] = 145;
        
         $("#direction").click(function(){
           for(var i=0;i<3;i++){
               $("#skleft>div").eq(i).children('div').stop().animate({width:leftskill[i]},300);
              $("#skright>div").eq(i).children('div').stop().animate({width:rightskill[i]},300);
            }
       });//direction end
        
       //nono 도망가기
        var nx, ny;
       $("#nono").hover(function(){
            nx = parseFloat($("#nono").css("right")) + Math.ceil(Math.random() * 200 - 100);
            ny = parseFloat($("#nono").css("bottom")) + (Math.ceil(Math.random() *200 - 150)+50);
//            console.log(nx);            
            $("#nono").css({right:nx, bottom:ny});
        },function(){
            
        });
        
        
     
     //심즈 클릭시 채용나타나기.
     
     var simscheck = true;
     $("#character a img").click(function(){
      if(simscheck){
          $("#character div").stop().animate({opacity:"1"},500);
          simscheck=false;
      }else{
           $("#character div").stop().animate({opacity:"0"},500);
          simscheck=true;
      }   
     });//심즈 클릭 끝
     
     
      
            $("#chat div div").eq(1).click(function(){
                var i = 0; 
                var x = '웹사이트 리뉴얼과 개인 포트폴리오 사이트를 직접 제작해 보면서 필요한 스킬들을 익히고 퍼블리셔 업무에 대한 이해도를 높이는 시간들이었습니다!'; 
                var y = ""; 
                function typeWriter() {
                    if (i < x.length) {  
                        $("#typing").text(y+=x[i]) ;    
                         i++;    
                         //setTimeout(함수, 시간)은 해당시간 경과후 함수호출
                         setTimeout(typeWriter, 100);
                    } 
                } 
                typeWriter();
            });//chat 글씨써지기    
        
     
     
        var nono=true;
        $("#nono").click(function(){
            if(nono){
                $("#character a img").stop().attr("src","image/simsnono.png").animate({opacity:"1"},300);
                nono=false;
            }else{
                 $("#character a img").stop().attr("src","image/ssims.png").animate({opacity:"1"},300);
                nono=true;
            }
        });//nono 이미지변경 끝
     
        var choice=true;
        $("#choice").click(function(){
            if(choice){
                $("#character a img").attr("src","image/simsgood.png").animate({opacity:"1"},300);
                choice=false;
            }else{
                 $("#character a img").stop().attr("src","image/ssims.png").animate({opacity:"1"},300);
                choice=true;
            }
        });//simschoice끝
     
     
    });//end
    
    