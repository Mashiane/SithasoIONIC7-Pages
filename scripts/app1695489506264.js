var _banano_sion7pages1=new banano_sion7pages1();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_sion7pages1_pgaccount=new banano_sion7pages1_pgaccount();var _banano_sion7pages1_pgchats=new banano_sion7pages1_pgchats();var _banano_sion7pages1_pgindex=new banano_sion7pages1_pgindex();var _banano_sion7pages1_pgstatus=new banano_sion7pages1_pgstatus();
/* App */
function banano_sion7pages1_pgaccount() {var _B;this._name="account";this._title="Account";this._icon="logo-ionic";this._path="/account";this._app= new banano_sithasoionic7_ionicapp();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;this.accountpage(_B._app._pageviewer);_B._name=_B._account.getpgname();_B._title=_B._account.getpgtitle();_B._icon=_B._account.getpgicon();_B._path=_B._account.getpgpath();_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.buildpage=function() {if (_B==null) _B=this;};this.btnstatus_click=function(_e) {if (_B==null) _B=this;_banano_sion7pages1_pgstatus.show();};this.accountpage=function(Par) {_B._account=BANC( banano_sithasoionic7_shiontab,_B, "account", "account",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "Back","CenterContent": false,"Component": "","ContentFullscreen": false,"ContentIonPadding": true,"ContentText": "My Profile","CoverImage": "","FooterTranslucent": false,"HasBackButton": true,"HasContent": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasList": false,"HasMenuButton": false,"HasRightButtons": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","PageIcon": "cog-outline","Path": "/account","RouteLocation": "","RouterName": "approuter","Tab": "","Title": "Profile","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._btnstatus=BANC( banano_sithasoionic7_shionbutton,_B, "btnstatus", "btnstatus",u('#account'), {"Color": "none","Disabled": false,"Expand": "none","Fill": "default","Form": "","Href": "","IconOnly": "","IonTextWrap": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","MaxWidth": "","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "accountcontent","RawAttributes": "","RawClasses": "","RawStyles": "","Shape": "none","Size": "default","Slot": "","Strong": false,"Target": "none","Text": "Status","TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 100,"B4XHeight": 50,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sion7pages1_pgchats() {var _B;this._name="chats";this._title="Chats";this._icon="logo-ionic";this._path="/chats";this._app= new banano_sithasoionic7_ionicapp();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;this.chatspage(_B._app._pageviewer);_B._name=_B._chats.getpgname();_B._title=_B._chats.getpgtitle();_B._icon=_B._chats.getpgicon();_B._path=_B._chats.getpgpath();_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.buildpage=function() {if (_B==null) _B=this;};this.btnaccount_click=function(_e) {if (_B==null) _B=this;_banano_sion7pages1_pgaccount.show();};this.chatspage=function(Par) {_B._chats=BANC( banano_sithasoionic7_shiontab,_B, "chats", "chats",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "Back","CenterContent": false,"Component": "","ContentFullscreen": false,"ContentIonPadding": true,"ContentText": "Chats","CoverImage": "","FooterTranslucent": false,"HasBackButton": true,"HasContent": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasList": false,"HasMenuButton": false,"HasRightButtons": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","PageIcon": "chatbubble-ellipses-outline","Path": "/chats","RouteLocation": "","RouterName": "approuter","Tab": "","Title": "Chats","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._btnaccount=BANC( banano_sithasoionic7_shionbutton,_B, "btnaccount", "btnaccount",u('#chats'), {"Color": "none","Disabled": false,"Expand": "none","Fill": "default","Form": "","Href": "","IconOnly": "","IonTextWrap": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","MaxWidth": "","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "chatscontent","RawAttributes": "","RawClasses": "","RawStyles": "","Shape": "none","Size": "default","Slot": "","Strong": false,"Target": "none","Text": "Profile","TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 100,"B4XHeight": 50,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sion7pages1_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this.initialize=async function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();this.indexlayout(_B._app._here);_B._app._pageviewer=_B._apppage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);};this.applist_itemclick=async function(_e) {if (_B==null) _B=this;var _bshow,_itemid;_e.preventDefault();await _B._appmenu.close();_bshow=_B._app.navigatetopage(_e.target.id,"forward");if (_bshow) { return ;}_itemid=_B._app.mvfield(_e.target.id,1,"_");switch ("" + _itemid) {case "" + "":break;}};this.addpages=function() {if (_B==null) _B=this;_banano_sion7pages1_pgaccount.initialize(_B._app);_banano_sion7pages1_pgchats.initialize(_B._app);_banano_sion7pages1_pgstatus.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;_B._applist.additempage(_banano_sion7pages1_pgstatus);_B._applist.additempage(_banano_sion7pages1_pgchats);_B._applist.additempage(_banano_sion7pages1_pgaccount);};this.addpagetabs=function() {if (_B==null) _B=this;_B._apppage._pagetabbar.additempage(_banano_sion7pages1_pgstatus);_B._apppage._pagetabbar.additempage(_banano_sion7pages1_pgchats);_B._apppage._pagetabbar.additempage(_banano_sion7pages1_pgaccount);};this.isauthenticated=function(_b) {if (_B==null) _B=this;_B._appmenu.setvisible(_b);if (_B._apppage.gethastabs()) {_B._apppage._pagetabbar.setvisible(_b);}if (_B._apppage.gethasfooter()) {_B._apppage._pagefooter.setvisible(_b);}if (_B._apppage.gethasheader()) {_B._apppage._pageheader.setvisible(_b);}};this.app_ionroutedidchange=function(_e) {if (_B==null) _B=this;console.log("app_IonRouteDidChange");console.log(_e);};this.app_ionroutewillchange=function(_e) {if (_B==null) _B=this;console.log("app_IonRouteWillChange");console.log(_e);};this.indexlayout=function(Par) {_B._appmenu=BANC( banano_sithasoionic7_shionmenu,_B, "appmenu", "appmenu",u(Par), {"ContentId": "apppage","Disabled": false,"IsOpen": false,"MaxEdgeStart": "50","MenuId": "appmenu","Side": "start","SwipeGesture": false,"TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 210,"B4XHeight": 580,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._apppage=BANC( banano_sithasoionic7_shionpage,_B, "apppage", "apppage",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "Back","CenterContent": false,"ContentFullscreen": false,"ContentIonPadding": false,"ContentText": "","CoverImage": "","FooterTranslucent": false,"HasBackButton": false,"HasContent": true,"HasFooter": false,"HasHeader": false,"HasLeftButtons": true,"HasList": false,"HasMenuButton": false,"HasRightButtons": true,"HasRouterOutlet": false,"HasTabBar": true,"HasTabs": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": true,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","PageIcon": "logo-ionic","Path": "","RouterName": "","SelectedTab": "status","TabBarColor": "none","TabBarPosition": "bottom","TabsRoute": false,"Title": "","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 230,"B4XTop": 10,"B4XWidth": 360,"B4XHeight": 580,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._applist=BANC( banano_sithasoionic7_shionlist,_B, "applist", "applist",u('#appmenu'), {"Inset": false,"Lines": "full","MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","Slot": "","Visible": true,"B4XLeft": 20,"B4XTop": 20,"B4XWidth": 190,"B4XHeight": 100,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sion7pages1_pgstatus() {var _B;this._name="status";this._title="Status";this._icon="logo-ionic";this._path="/";this._app= new banano_sithasoionic7_ionicapp();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;this.statuspage(_B._app._pageviewer);_B._name=_B._status.getpgname();_B._title=_B._status.getpgtitle();_B._icon=_B._status.getpgicon();_B._path=_B._status.getpgpath();_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.buildpage=function() {if (_B==null) _B=this;};this.btnchats_click=function(_e) {if (_B==null) _B=this;_banano_sion7pages1_pgchats.show();};this.statuspage=function(Par) {_B._status=BANC( banano_sithasoionic7_shiontab,_B, "status", "status",u(Par), {"BackButtonHref": "/","BackButtonIcon": "","BackButtonText": "Back","CenterContent": false,"Component": "","ContentFullscreen": false,"ContentIonPadding": true,"ContentText": "My Status","CoverImage": "","FooterTranslucent": false,"HasBackButton": false,"HasContent": true,"HasFooter": false,"HasHeader": true,"HasLeftButtons": true,"HasList": false,"HasMenuButton": true,"HasRightButtons": true,"HeaderTranslucent": false,"IsPage": true,"MenuButtonAutoHide": false,"MenuButtonColor": "","MenuId": "appmenu","Mode": "ios","PageIcon": "eye-outline","Path": "/","RouteLocation": "","RouterName": "approuter","Tab": "","Title": "Status","TitleColor": "none","ToolbarColor": "none","TypeOf": "div","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 600,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._btnchats=BANC( banano_sithasoionic7_shionbutton,_B, "btnchats", "btnchats",u('#status'), {"Color": "none","Disabled": false,"Expand": "none","Fill": "default","Form": "","Href": "","IconOnly": "","IonTextWrap": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","MaxWidth": "","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "statuscontent","RawAttributes": "","RawClasses": "","RawStyles": "","Shape": "none","Size": "default","Slot": "","Strong": false,"Target": "none","Text": "Chats","TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 100,"B4XHeight": 50,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});};}function banano_sion7pages1() {var _B;this._appname="sithasoionic7tabs";this._apptitle="SithasoIONIC7 Tabs";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_sion7pages1_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_tablemodel() {var _B=this;_B._tablename="";_B._primarykey="";_B._autoincrement="";_B._fields=[];_B.initialize=function() {};}function banano_sithasoionic7_fieldmodel() {var _B=this;_B._fieldname="";_B._fieldtype="";_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B.initialize=function() {};}function banano_sithasoionic7_storagequota() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_sion7pages1['banano_online']==="function") {_banano_sion7pages1.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_sion7pages1['banano_offline']==="function") {_banano_sion7pages1.banano_offline();}});var BANversion=1695489511414;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_sion7pages1.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_sion7pages1['banano_visibilitychanged']==="function") {_banano_sion7pages1.banano_visibilitychanged(false);}} else {if (typeof _banano_sion7pages1['banano_visibilitychanged']==="function") {_banano_sion7pages1.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_sion7pages1['banano_resized']==="function") {_banano_sion7pages1.banano_resized();}}, true);