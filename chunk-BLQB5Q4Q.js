import{a as Ri,b as Li,c as Pi,d as ji}from"./chunk-CC56MJ7P.js";import{a as Bi,b as Oi,c as Hi,d as Vi,e as zi,f as Ni,g as qi}from"./chunk-YAFIIYWE.js";import{a as ri,b as di,e as li,f as N,h as si,i as q,j as Fi,k as G}from"./chunk-AZF2XYSM.js";import{a as Q,b as hi,c as mi,d as ui,e as Gi,f as Qi,g as Ki,h as $i,i as j}from"./chunk-2A2SZUYP.js";import{e as w,g as L,h as P}from"./chunk-RQKEQDP3.js";import{Ba as T,Ca as Ti,Da as M,Ea as A,Fa as R,Ga as Ai,Ha as I,Ia as pi,R as fi,W as Mi,_ as Ei,a as J,ca as Di,m as ii,o as f,q as ti,r as ei,t as ai,u as Si,v as oi,w as ci,x as ni,y as V,z}from"./chunk-HREUBYHO.js";import{$ as g,Cb as v,Eb as C,Lb as ki,Mb as c,Nb as m,Ob as $,Pb as X,Sa as d,Ta as s,Ub as _,aa as Ii,ca as x,da as k,ib as u,ja as Z,ka as Ci,kb as p,ma as xi,mc as y,oc as H,qb as E,rb as D,sb as F,ta as Y,tb as a,ub as o,vb as h,zb as S}from"./chunk-E3FJXN4A.js";var K=(()=>{let t=class t{constructor(i){this.http=i,this.url=pi+":8080"}save(i){return this.http.post(this.url+"/vehicle",i)}list(i){return this.http.get(this.url+"/vehicle?id="+i)}};t.\u0275fac=function(n){return new(n||t)(Y(J))},t.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function nt(e,t){if(e&1&&(a(0,"mat-option",12),c(1),o()),e&2){let l=t.$implicit;p("value",l.value),d(),m(l.viewValue)}}function rt(e,t){if(e&1){let l=S();a(0,"button",13),v("click",function(){x(l);let n=C();return k(n.save())}),c(1,"Guardar"),o()}}function dt(e,t){e&1&&h(0,"mat-progress-bar",14)}var Ui=(()=>{let t=class t{constructor(i,n,r,b){this.formBuilder=i,this.route=n,this.vehicleService=r,this.messageService=b,this.types=[{value:"Moto",viewValue:"Moto"},{value:"Automovil",viewValue:"Automovil"}],this.loading=!1,this.form=i.group({mark:["",[f.required]],tipo:["",[f.required]],line:["",[f.required]],color:["",[f.required]],placa:["",[f.required]],id:["",[]],userId:["",[]]})}ngOnInit(){}save(){this.loading=!0,this.form.valid?(console.log(this.form.value),this.form.get("userId")?.setValue(localStorage.getItem("Id")),this.vehicleService.save(this.form.value).subscribe(i=>{i.success?(this.messageService.open(i.message),this.route.navigate(["driver/vehicle/list"]),this.loading=!1):(this.messageService.open(i.message),this.loading=!1)})):(this.form.markAllAsTouched(),this.loading=!1)}};t.\u0275fac=function(n){return new(n||t)(s(ni),s(w),s(K),s(I))},t.\u0275cmp=g({type:t,selectors:[["app-editvehicle"]],standalone:!0,features:[_],decls:39,vars:3,consts:[[1,"container","mx-auto","px-4","flex","justify-center"],[1,"example-form",3,"formGroup"],[2,"text-align","center","margin-top","2rem","margin-bottom","2rem"],[2,"width","100%","margin-bottom","1rem"],[1,"example-full-width"],["matInput","","formControlName","mark"],["matInput","","formControlName","line"],["formControlName","tipo"],["matInput","","formControlName","placa"],["matInput","","formControlName","color"],["mat-stroked-button","","color","primary",3,"click",4,"ngIf"],["mode","query",4,"ngIf"],[3,"value"],["mat-stroked-button","","color","primary",3,"click"],["mode","query"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"form",1)(2,"h3",2),c(3,"Vehiculo"),o(),h(4,"hr",3),a(5,"mat-form-field",4)(6,"mat-label"),c(7,"Marca:"),o(),h(8,"input",5),a(9,"mat-error"),c(10,"Marca es requerida."),o()(),a(11,"mat-form-field",4)(12,"mat-label"),c(13,"Linea:"),o(),h(14,"input",6),a(15,"mat-error"),c(16,"Linea es requerida."),o()(),a(17,"mat-form-field",4)(18,"mat-label"),c(19,"Tipo:"),o(),a(20,"mat-select",7),D(21,nt,2,2,"mat-option",12,E),o(),a(23,"mat-error"),c(24,"Tipo es requerido."),o()(),a(25,"mat-form-field",4)(26,"mat-label"),c(27,"Placa:"),o(),h(28,"input",8),a(29,"mat-error"),c(30,"Placa es requerido."),o()(),a(31,"mat-form-field",4)(32,"mat-label"),c(33,"Color:"),o(),h(34,"input",9),a(35,"mat-error"),c(36,"Color es requerido."),o()(),u(37,rt,2,0,"button",10)(38,dt,1,0,"mat-progress-bar",11),o()()),n&2&&(d(),p("formGroup",r.form),d(20),F(r.types),d(16),p("ngIf",!r.loading),d(),p("ngIf",r.loading))},dependencies:[q,si,li,ri,di,N,G,Fi,Di,V,ai,ii,ti,ei,M,T,z,oi,ci,H,y,R,A],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();function st(e,t){e&1&&(a(0,"mat-icon",5),c(1,"two_wheeler"),o())}function pt(e,t){e&1&&(a(0,"mat-icon",5),c(1,"directions_car"),o())}function ht(e,t){if(e&1&&(a(0,"mat-list-item"),u(1,st,2,0,"mat-icon",2)(2,pt,2,0,"mat-icon",2),a(3,"div",3),c(4),o(),a(5,"div",4),c(6),o()(),h(7,"hr")),e&2){let l=t.$implicit;d(),p("ngIf",l.tipo=="Moto"),d(),p("ngIf",l.tipo=="Automovil"),d(2),X("",l.mark," ",l.line,""),d(2),m(l.placa)}}var Zi=(()=>{let t=class t{constructor(i,n,r){this.route=i,this.vehicleService=n,this.messageService=r,this.vehicles=[]}ngOnInit(){this.vehicleService.list(localStorage.getItem("Id")).subscribe(i=>{i.success?this.vehicles=i.data:this.messageService.open(i.message)})}};t.\u0275fac=function(n){return new(n||t)(s(w),s(K),s(I))},t.\u0275cmp=g({type:t,selectors:[["app-listvehicle"]],standalone:!0,features:[_],decls:4,vars:0,consts:[[1,"container","mx-auto","px-4","flex","justify-center"],["role","list",1,"w-screen"],["matListItemIcon","",4,"ngIf"],["matListItemTitle",""],["matListItemLine",""],["matListItemIcon",""]],template:function(n,r){n&1&&(a(0,"div",0)(1,"mat-list",1),D(2,ht,8,5,null,null,E),o()()),n&2&&(d(2),F(r.vehicles))},dependencies:[j,Gi,Qi,ui,mi,hi,Q,P,L,y]});let e=t;return e})();var ut=new xi("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Yi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=Ii({type:t}),t.\u0275inj=Ci({providers:[Mi,{provide:ut,useValue:{separatorKeyCodes:[13]}}],imports:[fi,Ei,fi]});let e=t;return e})();var O=(()=>{let t=class t{constructor(i){this.http=i,this.url=pi+":8080"}save(i){return this.http.post(this.url+"/travel",i)}listDriver(i){return this.http.get(this.url+"/travel/driver?id="+i)}initTravel(i){return this.http.post(this.url+"/travel/start",i)}inProgressTravel(i){return this.http.get(this.url+"/travel/inprogress?id="+i)}addPassengerTravel(i){return this.http.post(this.url+"/travel/add",i)}endTravel(i){return this.http.post(this.url+"/travel/end",i)}};t.\u0275fac=function(n){return new(n||t)(Y(J))},t.\u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function gt(e,t){e&1&&(a(0,"mat-icon",12),c(1,"two_wheeler"),o())}function _t(e,t){e&1&&(a(0,"mat-icon",12),c(1,"directions_car"),o())}function ft(e,t){if(e&1&&(a(0,"mat-list-option",8),u(1,gt,2,0,"mat-icon",9)(2,_t,2,0,"mat-icon",9),a(3,"div",10),c(4),o(),a(5,"div",11),c(6),o()(),h(7,"hr")),e&2){let l=t.$implicit;p("value",l),d(),p("ngIf",l.tipo=="Moto"),d(),p("ngIf",l.tipo=="Automovil"),d(2),X("",l.mark," ",l.line,""),d(2),m(l.placa)}}function bt(e,t){e&1&&(a(0,"button",13),c(1,"Cancel"),o())}function yt(e,t){if(e&1){let l=S();a(0,"button",14),v("click",function(){x(l);let n=C();return k(n.iniciar())}),c(1,"Iniciar"),o()}}function wt(e,t){e&1&&h(0,"mat-progress-bar",15)}var Xi=(()=>{let t=class t{constructor(i,n,r,b,_i){this.messageService=i,this.dialogRef=n,this.vehicleService=r,this.travelService=b,this.router=_i,this.vehicles=[],this.loading=!1}ngOnInit(){this.vehicleService.list(localStorage.getItem("Id")).subscribe(i=>{i.success?this.vehicles=i.data:this.messageService.open(i.message)})}onSelectionChange(i){console.log(i.options),this.selected=i.options[0].value}iniciar(){this.loading=!0,this.selected?this.travelService.initTravel({travelId:this.travelService.travel.id,vehicleId:this.selected.id}).subscribe(i=>{i.success?(this.loading=!1,this.messageService.open(i.message),this.dialogRef.close(),this.router.navigate(["driver/progress"])):(this.loading=!1,this.messageService.open(i.message))}):this.messageService.open("Seleccione un vehiculo.")}};t.\u0275fac=function(n){return new(n||t)(s(I),s(Bi),s(K),s(O),s(w))},t.\u0275cmp=g({type:t,selectors:[["app-modalvehicle"]],standalone:!0,features:[_],decls:13,vars:5,consts:[["mat-dialog-title",""],[1,"flex","justify-center"],["color","primary",3,"multiple","selectionChange"],["shoes",""],["align","end"],["mat-button","","mat-dialog-close","",4,"ngIf"],["mat-button","","cdkFocusInitial","",3,"click",4,"ngIf"],["mode","query",4,"ngIf"],[3,"value"],["matListItemIcon","",4,"ngIf"],["matListItemTitle",""],["matListItemLine",""],["matListItemIcon",""],["mat-button","","mat-dialog-close",""],["mat-button","","cdkFocusInitial","",3,"click"],["mode","query"]],template:function(n,r){n&1&&(a(0,"h2",0),c(1,"Seleccione vehiculo"),o(),a(2,"mat-dialog-content",1)(3,"mat-selection-list",2,3),v("selectionChange",function(_i){return r.onSelectionChange(_i)}),D(5,ft,8,6,null,null,E),o(),a(7,"p"),c(8),o()(),a(9,"mat-dialog-actions",4),u(10,bt,2,0,"button",5)(11,yt,2,0,"button",6)(12,wt,1,0,"mat-progress-bar",7),o()),n&2&&(d(3),p("multiple",!1),d(2),F(r.vehicles),d(3),$(" Opcion seleccionada : ",r.selected?r.selected.mark+" "+r.selected.line:"Ninguna"," "),d(2),p("ngIf",!r.loading),d(),p("ngIf",!r.loading),d(),p("ngIf",r.loading))},dependencies:[qi,Hi,Vi,Ni,zi,M,T,N,q,G,j,$i,Ki,ui,mi,hi,V,z,H,y,Ai,P,L,R,A]});let e=t;return e})();function It(e,t){e&1&&(a(0,"span",14),c(1,"En progreso"),o())}function Ct(e,t){e&1&&(a(0,"span",15),c(1,"Pendiente"),o())}function xt(e,t){e&1&&(a(0,"span",16),c(1,"Completado"),o())}function kt(e,t){if(e&1){let l=S();a(0,"div",2)(1,"mat-icon",3),c(2,"directions_car"),o(),a(3,"div",4)(4,"span",5),c(5),o(),a(6,"span",5),c(7),o(),a(8,"span",6),c(9),o()(),a(10,"div",7),u(11,It,2,0,"span",8)(12,Ct,2,0,"span",9)(13,xt,2,0,"span",10),a(14,"button",11)(15,"mat-icon"),c(16,"more_vert"),o()(),a(17,"mat-menu",null,12)(19,"button",13),v("click",function(){let r=x(l).$implicit,b=C();return k(b.openDialog(r))}),c(20,"Iniciar viaje"),o()()()(),h(21,"hr")}if(e&2){let l=t.$implicit,i=ki(18);d(5),m(l.startLocation),d(2),m(l.endLocation),d(2),m(l.starHour),d(2),p("ngIf",l.status=="IN_PROGRESS"),d(),p("ngIf",l.status=="INACTIVE"),d(),p("ngIf",l.status=="COMPLETED"),d(),p("matMenuTriggerFor",i)}}var Ji=(()=>{let t=class t{constructor(i,n,r,b){this.route=i,this.travelService=n,this.messageService=r,this.dialog=b,this.folders=[{name:"Viaje 1",updated:new Date("1/1/16")},{name:"Viaje 2",updated:new Date("1/17/16")},{name:"Viaje 3",updated:new Date("1/28/16")}],this.travels=[]}ngOnInit(){this.travelService.listDriver(localStorage.getItem("Id")).subscribe(i=>{i.success?(this.travels=i.data,console.log(this.travels)):this.messageService.open(i.message)})}openDialog(i){let n=this.dialog.open(Xi);this.travelService.travel=i,n.afterClosed().subscribe(r=>{console.log(`Dialog result: ${r}`)})}};t.\u0275fac=function(n){return new(n||t)(s(w),s(O),s(I),s(Oi))},t.\u0275cmp=g({type:t,selectors:[["app-listtravels"]],standalone:!0,features:[_],decls:4,vars:0,consts:[[1,"container","mx-auto","px-4","flex","justify-center"],[1,"w-screen"],[1,"location"],[1,"location-icon"],[1,"location-info"],[1,"info-title"],[1,"info-add"],[1,"location-option"],["class","chip green",4,"ngIf"],["class","chip yellou",4,"ngIf"],["class","chip blue",4,"ngIf"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"chip","green"],[1,"chip","yellou"],[1,"chip","blue"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div",1),D(2,kt,22,7,null,null,E),o()()),n&2&&(d(2),F(r.travels))},dependencies:[j,Q,P,L,M,Ti,ji,Li,Ri,Pi,Yi,y],styles:[".location[_ngcontent-%COMP%]{display:flex;margin-top:1rem;margin-bottom:1rem;align-items:center}.location-icon[_ngcontent-%COMP%]{width:auto;color:#00000061;padding-right:1.5rem;padding-left:1rem}.location-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.location-option[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center}.info-title[_ngcontent-%COMP%]{color:#000000de;font-family:Roboto,sans-serif;font-size:16px}.info-add[_ngcontent-%COMP%]{color:#0000008a}.chip[_ngcontent-%COMP%]{border-radius:8px;padding:4px 10px;color:#fff;width:max-content;margin-right:.5rem}.green[_ngcontent-%COMP%]{background-color:#40b659}.yellou[_ngcontent-%COMP%]{background-color:#ffe819;color:#000000a9}.blue[_ngcontent-%COMP%]{background-color:#404cb6}"]});let e=t;return e})();function St(e,t){if(e&1){let l=S();a(0,"button",11),v("click",function(){x(l);let n=C();return k(n.save())}),c(1,"Guardar"),o()}}function Mt(e,t){e&1&&h(0,"mat-progress-bar",12)}var it=(()=>{let t=class t{constructor(i,n,r,b){this.formBuilder=i,this.route=n,this.travelService=r,this.messageService=b,this.foods=[{value:"1",viewValue:"Conductor"},{value:"2",viewValue:"Pasajero"}],this.loading=!1,this.form=i.group({id:["",[]],startLocation:["",[f.required]],endLocation:["",[f.required]],totalPassenger:["",[f.required,f.pattern("^[0-9]*$")]],starHour:["",[f.required,f.pattern("^([01]?[0-9]|2[0-3]):[0-5][0-9]$")]],userId:["",[]]})}ngOnInit(){}save(){this.loading=!0,this.form.valid?(console.log(this.form.value),this.form.get("userId")?.setValue(localStorage.getItem("Id")),this.travelService.save(this.form.value).subscribe(i=>{i.success?(this.messageService.open(i.message),this.route.navigate(["driver/list"]),this.loading=!1):(this.messageService.open(i.message),this.loading=!1)})):(this.form.markAllAsTouched(),this.loading=!1)}};t.\u0275fac=function(n){return new(n||t)(s(ni),s(w),s(O),s(I))},t.\u0275cmp=g({type:t,selectors:[["app-edittravels"]],standalone:!0,features:[_],decls:31,vars:3,consts:[[1,"container","mx-auto","px-4","flex","justify-center"],[1,"example-form",3,"formGroup"],[2,"text-align","center","margin-top","2rem","margin-bottom","2rem"],[2,"width","100%","margin-bottom","1rem"],[1,"example-full-width"],["matInput","","formControlName","startLocation"],["matInput","","formControlName","endLocation"],["type","number","matInput","","formControlName","totalPassenger"],["matInput","","formControlName","starHour","placeholder","HH:MM"],["mat-stroked-button","","color","primary",3,"click",4,"ngIf"],["mode","query",4,"ngIf"],["mat-stroked-button","","color","primary",3,"click"],["mode","query"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"form",1)(2,"h3",2),c(3,"Viaje"),o(),h(4,"hr",3),a(5,"mat-form-field",4)(6,"mat-label"),c(7,"Lugar de salida:"),o(),h(8,"input",5),a(9,"mat-error"),c(10,"Lugar de salida es requerido."),o()(),a(11,"mat-form-field",4)(12,"mat-label"),c(13,"Destino:"),o(),h(14,"input",6),a(15,"mat-error"),c(16,"Destino es requerido."),o()(),a(17,"mat-form-field",4)(18,"mat-label"),c(19,"Cantidad pasajeros:"),o(),h(20,"input",7),a(21,"mat-error"),c(22,"Cantidad de pasajeros es requerido."),o()(),a(23,"mat-form-field",4)(24,"mat-label"),c(25,"Hora de salida:"),o(),h(26,"input",8),a(27,"mat-error"),c(28,"Hora de salida es requerido."),o()(),u(29,St,2,0,"button",9)(30,Mt,1,0,"mat-progress-bar",10),o()()),n&2&&(d(),p("formGroup",r.form),d(28),p("ngIf",!r.loading),d(),p("ngIf",r.loading))},dependencies:[q,si,li,ri,di,N,G,V,ai,ii,Si,ti,ei,M,T,z,oi,ci,H,y,R,A],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});let e=t;return e})();function Et(e,t){if(e&1){let l=S();a(0,"button",15),v("click",function(){x(l);let n=C();return k(n.finalizar())}),c(1,"Completar viaje"),o()}}function Dt(e,t){e&1&&h(0,"mat-progress-bar",16)}var tt=(()=>{let t=class t{constructor(i,n,r){this.travelService=i,this.messageService=n,this.route=r,this.travel={id:0,startLocation:"No definido",endLocation:"No definido",passenger:0,totalPassenger:0,starHour:"No definido"},this.valid=!1,this.loading=!1}ngOnInit(){this.travelService.inProgressTravel(localStorage.getItem("Id")).subscribe(i=>{i.success?(this.travel=i.data,this.valid=!0):(this.messageService.open(i.message),this.valid=!1)})}addPassenger(){this.loading=!0,this.valid&&this.travelService.addPassengerTravel({id:this.travel.id,passenger:1}).subscribe(i=>{i.success?(this.travel=i.data,this.loading=!1):(this.messageService.open(i.message),this.loading=!1)})}removePassenger(){this.loading=!0,this.valid&&this.travelService.addPassengerTravel({id:this.travel.id,passenger:-1}).subscribe(i=>{i.success?(this.travel=i.data,this.loading=!1):(this.messageService.open(i.message),this.loading=!1)})}finalizar(){this.loading=!0,this.travelService.endTravel({travelId:this.travel.id}).subscribe(i=>{i.success?(this.messageService.open(i.message),this.route.navigate(["driver/list"]),this.loading=!1):(this.messageService.open(i.message),this.loading=!1)})}};t.\u0275fac=function(n){return new(n||t)(s(O),s(I),s(w))},t.\u0275cmp=g({type:t,selectors:[["app-admintravels"]],standalone:!0,features:[_],decls:37,vars:7,consts:[[1,"container","mx-auto","px-4","flex","justify-center"],[1,"w-screen","p8"],[1,"location"],[1,"location-icon"],[1,"location-info"],[1,"info-title"],[1,"info-add"],[1,"flex","column"],[2,"text-align","center"],[1,"flex","justify-center"],[1,"passengers"],["mat-flat-button","","color","primary",2,"margin","0 10px",3,"click"],[2,"margin","0"],["mat-stroked-button","","color","primary","style","margin-top: 1rem;",3,"click",4,"ngIf"],["mode","query","style","margin-top: 1rem;",4,"ngIf"],["mat-stroked-button","","color","primary",2,"margin-top","1rem",3,"click"],["mode","query",2,"margin-top","1rem"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-icon",3),c(4,"my_location"),o(),a(5,"div",4)(6,"span",5),c(7),o(),a(8,"span",6),c(9),o()()(),h(10,"hr"),a(11,"div",2)(12,"mat-icon",3),c(13,"location_on"),o(),a(14,"div",4)(15,"span",5),c(16),o(),a(17,"span",6),c(18,"Hora de llegada: Desconocido"),o()()(),h(19,"hr"),a(20,"div",7)(21,"span",8),c(22),o(),a(23,"span",8),c(24,"Pasajeros a bordo:"),o(),a(25,"div",9)(26,"span",10),c(27),o()()(),a(28,"div",9)(29,"button",11),v("click",function(){return r.removePassenger()}),a(30,"mat-icon",12),c(31,"remove"),o()(),a(32,"button",11),v("click",function(){return r.addPassenger()}),a(33,"mat-icon",12),c(34,"add"),o()()(),u(35,Et,2,0,"button",13)(36,Dt,1,0,"mat-progress-bar",14),o()()),n&2&&(d(7),m(r.travel.startLocation),d(2),$("Hora de salida: ",r.travel.starHour,""),d(7),m(r.travel.endLocation),d(6),$("Max. de pasajeros:",r.travel.totalPassenger,""),d(5),m(r.travel.passenger),d(8),p("ngIf",!r.loading),d(),p("ngIf",r.loading))},dependencies:[j,Q,P,L,M,T,R,A,y],styles:[".p8[_ngcontent-%COMP%]{padding:8px 0}.location[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;margin-bottom:1rem}.location-icon[_ngcontent-%COMP%]{color:#00000061;margin-right:2rem;margin-left:1rem}.location-info[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column}.info-title[_ngcontent-%COMP%]{color:#000000de;font-family:Roboto,sans-serif;font-size:16px}.info-add[_ngcontent-%COMP%]{color:#0000008a}.column[_ngcontent-%COMP%]{padding:1.5rem 0rem;flex-direction:column}.passengers[_ngcontent-%COMP%]{color:#000000a8;border-radius:50%;height:7rem;width:7rem;display:flex;align-items:center;justify-content:center;border-style:solid;border-width:2px;border-color:#0000005e;font-size:3rem}"]});let e=t;return e})();var Pa=[{path:"progress",component:tt},{path:"travel",children:[{path:"list",component:Ji},{path:"edit",component:it}]},{path:"vehicle",children:[{path:"list",component:Zi},{path:"edit",component:Ui}]}];export{Pa as routes};
