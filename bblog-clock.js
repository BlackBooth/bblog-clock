/**
* BetterBattlelog Clock - Shows a clock in the bottom left corner
*
* @author BlackBooth
* @version 1.0
* @url https://github.com/BlackBooth/bblog-clock
*/

// initialize your plugin
BBLog.handle("add.plugin", {
    id : "bblog-clock",

    name : "BetterBattlelog Clock",


    translations : {
    },

    configFlags : [
    ],

    init : function(instance){
      if($('#bblog-clock').length === 0)
        {
          $('body').append('<div style="position: fixed; display: block; bottom:-4px;z-index:9999" id="bblog-clock"></div>');
        }
      setInterval(instance.setActualTime, 1000);
    },
  
    setActualTime : function(){
        var actualDate = new Date().toLocaleTimeString();
        var innerDiv = '<h5>'+actualDate+'</h5>';
        
        if($('#bblog-clock').length != 0)
        {
          $('#bblog-clock').html(innerDiv);
        }
    }
});