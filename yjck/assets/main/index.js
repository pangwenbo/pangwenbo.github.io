System.register("chunks:///_virtual/Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(t){"use strict";var e,i,n,o,r,s,l,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,l=t.Collider,c=t.Component},function(t){u=t.Constant}],execute:function(){var p,a,h;r._RF.push({},"867b4NPoc1JfrlpK9Xtp+Zi","Bullet",void 0);var d=s.ccclass,f=s.property;t("Bullet",d("Bullet")((h=e((a=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,n(e,"bulletSpeed",h,o(e)),e._direction=u.Direction.MIDDLE,e._isEnemyBullet=!1,e}i(e,t);var r=e.prototype;return r.start=function(){},r.onEnable=function(){this.getComponent(l).on("onTriggerEnter",this._ontriggerEnter,this)},r.onDisable=function(){this.getComponent(l).off("onTriggerEnter",this._ontriggerEnter,this)},r.update=function(t){var e,i=this.node.position;this._isEnemyBullet?(e=i.z+this.bulletSpeed,this.node.setPosition(i.x,i.y,e),e>50&&this.node.destroy()):(e=i.z-this.bulletSpeed,this._direction===u.Direction.LEFT?this.node.setPosition(i.x-.2*this.bulletSpeed,i.y,e):this._direction===u.Direction.RIGHT?this.node.setPosition(i.x+.2*this.bulletSpeed,i.y,e):this.node.setPosition(i.x,i.y,e),e<-50&&this.node.destroy())},r._ontriggerEnter=function(t){console.log("子弹消失")},r.changeBulletSpeed=function(t,e,i){void 0===i&&(i=u.Direction.MIDDLE),this._direction=i,this._isEnemyBullet=e,this.bulletSpeed=t},e}(c)).prototype,"bulletSpeed",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=a))||p);r._RF.pop()}}}));

System.register("chunks:///_virtual/BulletProp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){"use strict";var t,n,o,r,i,p;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,o=e._decorator,r=e.Collider,i=e.Component},function(e){p=e.Constant}],execute:function(){var s;n._RF.push({},"4bfaeLdaWNEkYJ5WUXaIQn1","BulletProp",void 0);var a=o.ccclass;o.property,e("BulletProp",a("BulletProp")(s=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this)._propSpeed=0,t._gameManager=null,t._propXSpeed=.7,t}t(n,e);var o=n.prototype;return o.start=function(){},o.update=function(e){var t=this.node.position;(t.x>=20||t.x<=-20)&&(this._propXSpeed=-this._propXSpeed),this.node.setPosition(t.x-this._propXSpeed,t.y,t.z-this._propSpeed),t.z>50&&this.node.destroy()},o.changePropSpeed=function(e,t){this._propSpeed=t,this._gameManager=e},o.onEnable=function(){this.getComponent(r).on("onTriggerEnter",this._ontriggerEnter,this)},o.onDisable=function(){this.getComponent(r).off("onTriggerEnter",this._ontriggerEnter,this)},o._ontriggerEnter=function(e){var t=e.selfCollider.node.name;"bulletH"===t?this._gameManager.changeBulletType(p.BulletPropType.BULLET_H):"bulletS"===t?this._gameManager.changeBulletType(p.BulletPropType.BULLET_S):this._gameManager.changeBulletType(p.BulletPropType.BULLET_M),this.node.destroy()},n}(i))||s);n._RF.pop()}}}));

System.register("chunks:///_virtual/Constant.ts",["cc"],(function(t){"use strict";var n,L;return{setters:[function(t){n=t.cclegacy,L=t._decorator}],execute:function(){var c,e;n._RF.push({},"3c34cRO3+pNnY7madUy196G","Constant",void 0);var o=L.ccclass;L.property,t("Constant",o("Constant")(((e=function(){}).EnemyType={TYPE1:1,TYPE2:2},e.Combination={PLAN1:1,PLAN2:2,PLAN3:3},e.CollisionType={SELF_PLANE:2,ENEMY_PLANE:4,SELF_BULLET:8,ENEMY_BULLET:16,BULLET_PROP:32},e.BulletPropType={BULLET_M:1,BULLET_H:2,BULLET_S:3},e.Direction={LEFT:1,MIDDLE:2,RIGHT:3},c=e))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,i,n,s,l,r,a,g,h,c,p,C,d,m,u,T;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,c=t.instantiate,p=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,T=t.Component}],execute:function(){var L,f,M,b,v,x,E,S,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(L=A("internal.DebugViewRuntimeControl"),f=y(r),M=y(r),b=y(r),L((E=e((x=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",E,n(e)),i(e,"singleModeToggle",S,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct TRT","Env TRT","TRT All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","TRT","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=c(s);l.parent=this.node,l.name="Buttons";var r=c(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var T=c(this.EnableAllCompositeModeButton.getChildByName("Label"));T.setPosition(i+(u>0?450:150),n,0),T.setScale(.75,.75,.75),T.parent=r;var L=T.getComponent(p);L.string=u?"----------Composite Mode----------":"----------Single Mode----------",L.color=a.WHITE,L.overflow=0,this.labelComponentList[this.labelComponentList.length]=L}n-=20;for(var f=0,M=0;M<this.strSingle.length;M++,f++){M===this.strSingle.length>>1&&(i+=200,f=0);var b=M?c(this.singleModeToggle):this.singleModeToggle;b.setPosition(i,n-20*f,0),b.setScale(.5,.5,.5),b.parent=this.singleModeToggle.parent;var v=b.getComponentInChildren(C);v.string=this.strSingle[M],this.textComponentList[this.textComponentList.length]=v,this.textContentList[this.textContentList.length]=v.string,b.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[M]=b}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var x=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=x;var E=c(this.EnableAllCompositeModeButton);E.setPosition(i+90,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.changeTextColor,this),E.parent=l,(x=E.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=x;var S=c(this.EnableAllCompositeModeButton);S.setPosition(i+200,n,0),S.setScale(.5,.5,.5),S.on(m.EventType.CLICK,this.hideUI,this),S.parent=this.node.parent,(x=S.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=x,this.hideButtonLabel=x,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=c(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?c(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(T)).prototype,"compositeModeToggle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(x.prototype,"singleModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(x.prototype,"EnableAllCompositeModeButton",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=x))||v));s._RF.pop()}}}));

System.register("chunks:///_virtual/EneMyPlane.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){"use strict";var t,n,i,r,o,l,s,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.Collider,a=e.Component},function(e){u=e.Constant}],execute:function(){var c,h,p;o._RF.push({},"19b62SsnhJLXZijTNvCuDky","EneMyPlane",void 0);var g=l.ccclass,d=l.property;e("EneMyPlane",g("EneMyPlane")((p=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))||this)._enemySpeed=0,i(t,"createBulletTime",p,r(t)),t._needBullet=!1,t._curCreateBulletTime=0,t._gameManager=null,t}n(t,e);var o=t.prototype;return o.start=function(){},o.onEnable=function(){this.getComponent(s).on("onTriggerEnter",this._ontriggerEnter,this)},o.onDisable=function(){this.getComponent(s).off("onTriggerEnter",this._ontriggerEnter,this)},o.update=function(e){var t=this.node.position,n=t.z+this._enemySpeed;this.node.setPosition(t.x,t.y,n),this._needBullet&&(this._curCreateBulletTime+=e,this._curCreateBulletTime>this.createBulletTime&&(this._gameManager.createEnemyBullet(this.node.position),this._curCreateBulletTime=0)),n>70&&this.node.destroy()},o._ontriggerEnter=function(e){var t=e.otherCollider.getGroup();t!==u.CollisionType.SELF_BULLET&&t!==u.CollisionType.SELF_PLANE||(console.log("敌机损毁"),this.node.destroy(),this._gameManager.addScore())},o.changeEnemySpeed=function(e,t,n){this._enemySpeed=t,this._needBullet=n,this._gameManager=e},t}(a)).prototype,"createBulletTime",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),c=h))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SelfPlane.ts","./BulletProp.ts","./EneMyPlane.ts","./Constant.ts","./Bullet.ts"],(function(e){"use strict";var t,i,n,r,o,l,a,u,s,c,h,m,p,b,y,g,P,f,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Prefab,u=e.Node,s=e.Label,c=e.math,h=e.instantiate,m=e.Collider,p=e.macro,b=e.Component},function(e){y=e.SelfPlane},function(e){g=e.BulletProp},function(e){P=e.EneMyPlane},function(e){f=e.Constant},function(e){d=e.Bullet}],execute:function(){var _,S,T,v,E,C,B,L,z,w,R,M,A,I,N,G,U,H,O,x,D,F,k,Y,j,V,Z,q,J,K,Q,W,X,$,ee,te,ie,ne,re,oe,le;o._RF.push({},"a5ced+goNRPdowHbZ78UIU7","GameManager",void 0);var ae=l.ccclass,ue=l.property;e("GameManager",(_=ae("GameManager"),S=ue(y),T=ue(a),v=ue(a),E=ue(a),C=ue(a),B=ue(a),L=ue(u),z=ue(a),w=ue(a),R=ue(a),M=ue(a),A=ue(a),I=ue(u),N=ue(u),G=ue(s),U=ue(s),_((x=t((O=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,n(t,"playerPlane",x,r(t)),n(t,"bullet01",D,r(t)),n(t,"bullet02",F,r(t)),n(t,"bullet03",k,r(t)),n(t,"bullet04",Y,r(t)),n(t,"bullet05",j,r(t)),n(t,"shootTime",V,r(t)),n(t,"bulleetSpeed",Z,r(t)),n(t,"bulletRoot",q,r(t)),n(t,"enemy01",J,r(t)),n(t,"enemy02",K,r(t)),n(t,"bulletPropM",Q,r(t)),n(t,"bulletPropH",W,r(t)),n(t,"bulletPropS",X,r(t)),n(t,"gamePage",$,r(t)),n(t,"gameOverPage",ee,r(t)),n(t,"gameScore",te,r(t)),n(t,"gameOverScore",ie,r(t)),t.isGameStart=!1,n(t,"bulletPropSpeed",ne,r(t)),n(t,"createEnemyTime",re,r(t)),n(t,"enemy1speed",oe,r(t)),n(t,"enemy2speed",le,r(t)),t._curShootTime=0,t._isShooting=!1,t._currCreateEnemyTime=0,t._combinationInterval=f.Combination.PLAN1,t._bulletType=f.BulletPropType.BULLET_M,t._score=0,t}i(t,e);var o=t.prototype;return o.start=function(){this._init()},o.update=function(e){if(this.isGameStart)if(this.playerPlane.isDie)this.gameOver();else if(this._curShootTime+=e,this._currCreateEnemyTime+=e,this._isShooting&&this._curShootTime>this.shootTime&&(this._bulletType===f.BulletPropType.BULLET_H?this.creatPlayerBulletH():this._bulletType===f.BulletPropType.BULLET_S?this.creatPlayerBulletS():this.creatPlayerBulletM(),this._curShootTime=0),this._combinationInterval===f.Combination.PLAN1)this._currCreateEnemyTime>this.createEnemyTime&&(this.createEnemyPlane(),this._currCreateEnemyTime=0);else if(this._combinationInterval===f.Combination.PLAN2){if(this._currCreateEnemyTime>1*this.createEnemyTime)c.randomRangeInt(1,3)===f.Combination.PLAN2?this.createCombination1():this.createEnemyPlane(),this._currCreateEnemyTime=0}else if(this._currCreateEnemyTime>1*this.createEnemyTime){var t=c.randomRangeInt(1,4);t===f.Combination.PLAN2?this.createCombination1():t===f.Combination.PLAN3?this.createCombination2():this.createEnemyPlane(),this._currCreateEnemyTime=0}},o.createCombination2=function(){for(var e=new Array(7),t=[[-21,0,-60],[-14,0,-55],[-7,0,-50],[0,0,-45],[7,0,-50],[14,0,-55],[21,0,-60]],i=0;i<e.length;i++){e[i]=h(this.enemy02);var n=e[i];n.setParent(this.node),n.setPosition(t[i][0],t[i][1],t[i][2]),n.getComponent(P).changeEnemySpeed(this,this.enemy2speed,!1)}},o.createCombination1=function(){for(var e=new Array(5),t=0;t<e.length;t++){e[t]=h(this.enemy01);var i=e[t];i.setParent(this.node),i.setPosition(10*t-21,0,-50),i.getComponent(P).changeEnemySpeed(this,this.enemy1speed,!1)}},o.createEnemyPlane=function(){var e=null,t=0;c.randomRangeInt(1,3)===f.EnemyType.TYPE1?(e=this.enemy01,t=this.enemy1speed):(e=this.enemy02,t=this.enemy2speed);var i=h(e);i.setParent(this.node);var n=c.randomRangeInt(-25,25);i.setPosition(n,0,-50),i.getComponent(P).changeEnemySpeed(this,t,!0)},o.createBulletType=function(){var e=c.randomRangeInt(1,4),t=null;e===f.BulletPropType.BULLET_H&&(t=this.bulletPropH),e===f.BulletPropType.BULLET_S&&(t=this.bulletPropS),e===f.BulletPropType.BULLET_M&&(t=this.bulletPropM);var i=h(t);i.setParent(this.node);var n=c.randomRangeInt(-21,21);i.setPosition(n,0,-50),i.getComponent(g).changePropSpeed(this,-this.bulleetSpeed)},o.isShooting=function(e){this._isShooting=e},o.createEnemyBullet=function(e){var t=h(this.bullet02);t.setParent(this.bulletRoot),t.setPosition(e.x,e.y,e.z),t.getComponent(d).changeBulletSpeed(1,!0);var i=t.getComponent(m);i.setGroup(f.CollisionType.ENEMY_BULLET),i.setMask(f.CollisionType.SELF_PLANE)},o.creatPlayerBulletM=function(){var e=h(this.bullet01);e.setParent(this.bulletRoot);var t=this.playerPlane.node.position;e.setPosition(t.x,t.y,t.z-4.5),e.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1)},o.creatPlayerBulletH=function(){var e=this.playerPlane.node.position,t=h(this.bullet03);t.setParent(this.bulletRoot),t.setPosition(e.x-2.5,e.y,e.z-4.5),t.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1);var i=h(this.bullet03);i.setParent(this.bulletRoot),i.setPosition(e.x+2.5,e.y,e.z-4.5),i.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1)},o.creatPlayerBulletS=function(){var e=this.playerPlane.node.position,t=h(this.bullet05);t.setParent(this.bulletRoot),t.setPosition(e.x,e.y,e.z-4.5),t.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1);var i=h(this.bullet05);i.setParent(this.bulletRoot),i.setPosition(e.x-4,e.y,e.z-4.5),i.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1,f.Direction.LEFT);var n=h(this.bullet05);n.setParent(this.bulletRoot),n.setPosition(e.x+4,e.y,e.z-4.5),n.getComponent(d).changeBulletSpeed(this.bulleetSpeed,!1,f.Direction.RIGHT)},o.changeBulletType=function(e){this._bulletType=e},o.addScore=function(){this._score++,this.gameScore.string=this._score.toString()},o.returnMain=function(){this._score=0,this._curShootTime=0,this._currCreateEnemyTime=0,this._combinationInterval=f.Combination.PLAN1,this._bulletType=f.BulletPropType.BULLET_M,this.playerPlane.node.setPosition(0,0,15)},o.gameStart=function(){this.isGameStart=!0,this._changePlaneMode(),this._score=0,this.gameScore.string=this._score.toString()},o.gameReStart=function(){this._score=0,this.isGameStart=!0,this._curShootTime=0,this._currCreateEnemyTime=0,this._combinationInterval=f.Combination.PLAN1,this._bulletType=f.BulletPropType.BULLET_M,this.gameScore.string=this._score.toString(),this.playerPlane.node.setPosition(0,0,15)},o.gameOver=function(){this.isGameStart=!1,this.gamePage.active=!1,this.gameOverPage.active=!0,this.gameOverScore.string=this._score.toString(),this._isShooting=!1,this.playerPlane.init(),this.unschedule(this._modeChanged),this._detoryAll()},o._init=function(){this.playerPlane.init(),this._curShootTime=this.shootTime},o._changePlaneMode=function(){this.schedule(this._modeChanged,10,p.REPEAT_FOREVER)},o._modeChanged=function(){this._combinationInterval++,this.createBulletType()},o._detoryAll=function(){for(var e=this.node.children,t=e.length,i=t-1;i>=0;i--){e[i].destroy()}for(var n=(t=(e=this.bulletRoot.children).length)-1;n>=0;n--){e[n].destroy()}},t}(b)).prototype,"playerPlane",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(O.prototype,"bullet01",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=t(O.prototype,"bullet02",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(O.prototype,"bullet03",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=t(O.prototype,"bullet04",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=t(O.prototype,"bullet05",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=t(O.prototype,"shootTime",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),Z=t(O.prototype,"bulleetSpeed",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),q=t(O.prototype,"bulletRoot",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=t(O.prototype,"enemy01",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(O.prototype,"enemy02",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=t(O.prototype,"bulletPropM",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=t(O.prototype,"bulletPropH",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=t(O.prototype,"bulletPropS",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$=t(O.prototype,"gamePage",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(O.prototype,"gameOverPage",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(O.prototype,"gameScore",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t(O.prototype,"gameOverScore",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t(O.prototype,"bulletPropSpeed",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.3}}),re=t(O.prototype,"createEnemyTime",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),oe=t(O.prototype,"enemy1speed",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),le=t(O.prototype,"enemy2speed",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.7}}),H=O))||H));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./MovingSceneBg.ts","./Bullet.ts","./BulletProp.ts","./Constant.ts","./GameManager.ts","./EneMyPlane.ts","./SelfPlane.ts","./UIMain.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MovingSceneBg.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var t,n,e,o,s,g,r,a;return{setters:[function(i){t=i.applyDecoratedDescriptor,n=i.inheritsLoose,e=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){s=i.cclegacy,g=i._decorator,r=i.Node,a=i.Component}],execute:function(){var c,u,b,p,h,l,v;s._RF.push({},"e209aW+J71CdplpaBrcZVtD","MovingSceneBg",void 0);var _=g.ccclass,f=g.property;i("MovingSceneBg",(c=_("MovingSceneBg"),u=f(r),b=f(r),c((l=t((h=function(i){function t(){for(var t,n=arguments.length,s=new Array(n),g=0;g<n;g++)s[g]=arguments[g];return t=i.call.apply(i,[this].concat(s))||this,e(t,"bg01",l,o(t)),e(t,"bg02",v,o(t)),t._bgSpeed=10,t._bgMovingRange=90,t}n(t,i);var s=t.prototype;return s.start=function(){this._init()},s.update=function(i){this._moveBackground(i)},s._init=function(){this.bg01.setPosition(0,-20,0),this.bg02.setPosition(0,-20,-this._bgMovingRange)},s._moveBackground=function(i){this.bg01.setPosition(0,-20,this.bg01.position.z+this._bgSpeed*i),this.bg02.setPosition(0,-20,this.bg02.position.z+this._bgSpeed*i),this.bg01.position.z>this._bgMovingRange&&this.bg01.setPosition(0,-20,this.bg02.position.z-this._bgMovingRange),this.bg02.position.z>this._bgMovingRange&&this.bg02.setPosition(0,-20,this.bg01.position.z-this._bgMovingRange)},t}(a)).prototype,"bg01",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(h.prototype,"bg02",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=h))||p));s._RF.pop()}}}));

System.register("chunks:///_virtual/SelfPlane.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Constant.ts"],(function(e){"use strict";var i,t,n,r,o,l,s,c,u,a;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.Label,c=e.Collider,u=e.Component},function(e){a=e.Constant}],execute:function(){var f,h,g,p,L;o._RF.push({},"9ddc7wtY/xKvbBFLhx/GYEh","SelfPlane",void 0);var _=l.ccclass,E=l.property;e("SelfPlane",(f=_("SelfPlane"),h=E(s),f((L=i((p=function(e){function i(){for(var i,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return(i=e.call.apply(e,[this].concat(o))||this).lifValue=5,i._curLife=0,i.isDie=!1,n(i,"curLifeLabel",L,r(i)),i}t(i,e);var o=i.prototype;return o.onEnable=function(){this.getComponent(c).on("onTriggerEnter",this._ontriggerEnter,this)},o.onDisable=function(){this.getComponent(c).off("onTriggerEnter",this._ontriggerEnter,this)},o.init=function(){this._curLife=this.lifValue,this.curLifeLabel.string=this._curLife.toString(),this.isDie=!1},o._ontriggerEnter=function(e){var i=e.otherCollider.getGroup();i!==a.CollisionType.ENEMY_BULLET&&i!==a.CollisionType.ENEMY_PLANE||(console.log("飞机掉血"),this._curLife--,this.curLifeLabel.string=this._curLife.toString(),console.log(this._curLife,"当前生命值"),0===this._curLife&&(this.isDie=!0))},o.update=function(e){},i}(u)).prototype,"curLifeLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=p))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/UIMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){"use strict";var t,a,i,n,r,o,u,l,s,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,a=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,o=e._decorator,u=e.Node,l=e.Input,s=e.Component},function(e){c=e.GameManager}],execute:function(){var g,p,h,m,f,v,y,M,S,b,d,_,z,O;r._RF.push({},"5a124Ns2WtEaIZ5mwOgFbfX","UIMain",void 0);var T=o.ccclass,w=o.property;e("UIMain",(g=T("UIMain"),p=w(u),h=w(c),m=w(u),f=w(u),v=w(u),g((S=t((M=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,i(t,"planeSpeed",S,n(t)),i(t,"playerPlane",b,n(t)),i(t,"gameManager",d,n(t)),i(t,"gameOver",_,n(t)),i(t,"gameStart",z,n(t)),i(t,"game",O,n(t)),t}a(t,e);var r=t.prototype;return r.start=function(){this.node.on(l.EventType.TOUCH_START,this._touchStart,this),this.node.on(l.EventType.TOUCH_MOVE,this._touchMove,this),this.node.on(l.EventType.TOUCH_END,this._touchEnd,this),this.gameStart.active=!0},r.reStart=function(){this.gameOver.active=!1,this.game.active=!0,this.gameManager.gameReStart()},r.returnMain=function(){this.gameOver.active=!1,this.gameStart.active=!0,this.gameManager.returnMain()},r._touchStart=function(e){this.gameManager.isGameStart?this.gameManager.isShooting(!0):(this.gameStart.active=!1,this.game.active=!0,this.gameManager.gameStart())},r._touchMove=function(e){if(this.gameManager.isGameStart){var t=e.getDelta(),a=this.playerPlane.position;this.playerPlane.setPosition(a.x+this.planeSpeed*t.x,a.y,a.z-this.planeSpeed*t.y)}},r._touchEnd=function(e){this.gameManager.isGameStart&&this.gameManager.isShooting(!1)},r.update=function(e){},t}(s)).prototype,"planeSpeed",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.05}}),b=t(M.prototype,"playerPlane",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=t(M.prototype,"gameManager",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=t(M.prototype,"gameOver",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(M.prototype,"gameStart",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(M.prototype,"game",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=M))||y));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});