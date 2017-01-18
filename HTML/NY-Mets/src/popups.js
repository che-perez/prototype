 (function() {  
    var dialog = document.getElementById('window');  
    document.getElementById('show').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('exit').onclick = function() {  
        dialog.close();  
    };  
})();
            
    (function() {  
    var dialog = document.getElementById('window2');  
    document.getElementById('show2').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('exit2').onclick = function() {  
        dialog.close();  
    };  
})();