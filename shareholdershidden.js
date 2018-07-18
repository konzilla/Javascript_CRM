function checkcredentials(currentUserId){
    // checks to see if users has correct O drive credentials - returns yes or no
    var access = 'no';
    for (var i in currentUserId){
        var user = currentUserId[i]; 
        if (user == '646f68e9-7c79-e811-80ed-0050569c48be') {
            var access = 'yes';
            return access;
        }
    }
    return access;
}  

function hideshareholdersdirectors() { 
    var currentUserId = Xrm.Page.context.getUserRoles(); // SECURED O DRIVE - 646f68e9-7c79-e811-80ed-0050569c48be
    var driveletter = Xrm.Page.getAttribute("gpw_driveletter").getValue();
    var items = Xrm.Page.ui.navigation.items.get();
    var check = checkcredentials(currentUserId);
    if ((check == 'no') && (driveletter == "O")) {
        for (var i in items){
            var item = items[i];
            if (item.getId() == 'nav_gpw_account_shareholders_Client' || item.getId() == 'nav_gpw_account_offdir') {
                item.setVisible(false);
            }       
        }
    }
}  

function hideshareholdersbackdoor (){ // stops backdoor access to shareholders and hides information   
    var currentUserId = Xrm.Page.context.getUserRoles(); // SECURED O DRIVE - 646f68e9-7c79-e811-80ed-0050569c48be
    var driveletter =  Xrm.Page.getAttribute("gpw_shacctnetworkdriveltr").getValue();
    var check = checkcredentials(currentUserId);    
    if ((check == 'no') && (driveletter == 'O')){
        Xrm.Page.ui.tabs.get('{d19cd3cc-0c0a-449a-9620-4f81289e1c38}').setVisible(false);
        Xrm.Page.ui.tabs.get('ShareTransfers').setVisible(false);
        Xrm.Page.ui.tabs.get('ADMINISTRATION').setVisible(false);
        Xrm.Page.ui.tabs.get('{46790f51-e19e-4ec7-9c03-186aa8067eeb}').setVisible(false);
        setTimeout(function() { alert('You Do Not Have Permission To Access This Page'); }, 1000);
    } 
}

function hidedirectorsbackdoor (){ // stops backdoor access to directors
    var currentUserId = Xrm.Page.context.getUserRoles(); // SECURED O DRIVE - 646f68e9-7c79-e811-80ed-0050569c48be
    var driveletter =  Xrm.Page.getAttribute("gpw_off_dir_acctnetworkdriveltr").getValue();
    var check = checkcredentials(currentUserId);    
    if ((check == 'no') && (driveletter == 'O')){
        Xrm.Page.ui.tabs.get('{809bec8f-f78d-40c5-af32-8a81cf3853a9}').setVisible(false);
        Xrm.Page.ui.tabs.get('ADMINISTRATION').setVisible(false);
        Xrm.Page.ui.tabs.get('{a6033068-79d1-43d4-8a5b-81b2b053da09}').setVisible(false);
        setTimeout(function() { alert('You Do Not Have Permission To Access This Page'); }, 1000);
    }
}


