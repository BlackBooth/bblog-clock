/**
* BetterBattlelog Clock - Shows a clock in the bottom left corner
* 
* Thanks to dapil for the improvements: https://github.com/dapil/
*
* @author BlackBooth, dapil
* @version 1.1
* @url https://github.com/BlackBooth/bblog-clock
*/

// initialize your plugin
BBLog.handle("add.plugin", {
    id : "bblog-clock",
    
    name : "BetterBattlelog Clock",

    init : function(instance){
      if($('#bblog-clock').length === 0)
        {
          $('body').append('<div style="position: fixed; display: block; bottom: 0px; padding: 0 4px; z-index:9999; background-color: rgba(0, 0, 0, 0.5)" id="bblog-clock"><h5 style="margin:0"></h5></div>');
        }
      setInterval(instance.setActualTime, 1000);
    },
  
    setActualTime : function(){
        var actualDate = new Date().toLocaleTimeString();
        
        if($('#bblog-clock').length != 0)
        {
          $('#bblog-clock h5').html(actualDate);
        }
    }
});