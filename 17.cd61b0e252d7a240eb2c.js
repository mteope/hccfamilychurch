(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"tx+c":function(o,n,i){"use strict";i.r(n),i.d(n,"BookingsPageModule",(function(){return u}));var e=i("Valr"),t=i("QJY3"),b=i("DUip"),c=i("sPEm"),s=i("VFTF"),r=i("TYT/");function l(o,n){1&o&&(r.Mb(0,"ion-col",3),r.Kb(1,"br"),r.Kb(2,"br"),r.Mb(3,"p"),r.lc(4,"HCC Family Church \xa9 2020"),r.Lb(),r.Mb(5,"p"),r.lc(6,"- - - - - - -"),r.Lb(),r.Mb(7,"p"),r.lc(8,"Progressive Web App - Demo"),r.Lb(),r.Mb(9,"p"),r.lc(10,"- - - - - - -"),r.Lb(),r.Mb(11,"p"),r.lc(12,"Designed & Developed"),r.Lb(),r.Mb(13,"p"),r.lc(14,"marcial.s.teope@gmail.com"),r.Lb(),r.Mb(15,"p"),r.lc(16,"PWA Developer | Software Engineer"),r.Lb(),r.Lb())}function a(o,n){if(1&o){var i=r.Nb();r.Mb(0,"ion-item-sliding",null,6),r.Mb(2,"ion-item"),r.Mb(3,"ion-label"),r.Mb(4,"h5"),r.lc(5),r.Lb(),r.Mb(6,"p"),r.lc(7),r.Lb(),r.Lb(),r.Lb(),r.Mb(8,"ion-item-options"),r.Mb(9,"ion-item-option",7),r.Ub("click",(function(){r.fc(i);var o=n.$implicit,e=r.ec(1);return r.Wb(2).onCancelBooking(o.id,e)})),r.Kb(10,"ion-icon",8),r.Lb(),r.Lb(),r.Lb()}if(2&o){var e=n.$implicit;r.zb(5),r.mc(e.placeTitle),r.zb(2),r.nc("Guests: ",e.guestNumber,"")}}function g(o,n){if(1&o&&(r.Mb(0,"ion-col",4),r.Mb(1,"ion-list"),r.kc(2,a,11,2,"ion-item-sliding",5),r.Lb(),r.Lb()),2&o){var i=r.Wb();r.zb(2),r.bc("ngForOf",i.loadedBookings)}}var f=[{path:"",component:function(){function o(o,n){this.bookingService=o,this.loadingCtrl=n}return o.prototype.ngOnInit=function(){var o=this;this.bookingService.bookings.subscribe((function(n){o.loadedBookings=n}))},o.prototype.onCancelBooking=function(o,n){var i=this;n.close(),this.loadingCtrl.create({message:"Cancelling..."}).then((function(n){n.present(),i.bookingService.cancelBooking(o).subscribe((function(){n.dismiss()}))}))},o.prototype.ngOnDestroy=function(){this.bookingSub&&this.bookingSub.unsubscribe()},o.\u0275fac=function(n){return new(n||o)(r.Jb(s.a),r.Jb(c.Q))},o.\u0275cmp=r.Db({type:o,selectors:[["app-bookings"]],decls:11,vars:2,consts:[["slot","start"],["size-md","6","offset-md","3","class","ion-text-center",4,"ngIf"],["size-md","6","offset-md","3",4,"ngIf"],["size-md","6","offset-md","3",1,"ion-text-center"],["size-md","6","offset-md","3"],[4,"ngFor","ngForOf"],["slidingBooking",""],["color","danger",3,"click"],["name","trash","slot","icon-only"]],template:function(o,n){1&o&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-buttons",0),r.Kb(3,"ion-menu-button"),r.Lb(),r.Mb(4,"ion-title"),r.lc(5,"Copyright"),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content"),r.Mb(7,"ion-grid"),r.Mb(8,"ion-row"),r.kc(9,l,17,0,"ion-col",1),r.kc(10,g,3,1,"ion-col",2),r.Lb(),r.Lb(),r.Lb()),2&o&&(r.zb(9),r.bc("ngIf",!n.loadedBookings||n.loadedBookings.length<=0),r.zb(1),r.bc("ngIf",n.loadedBookings&&n.loadedBookings.length>0))},directives:[c.o,c.N,c.f,c.A,c.M,c.l,c.n,c.D,e.j,c.k,c.y,e.i,c.w,c.s,c.x,c.v,c.u,c.p],styles:[""]}),o}()}],u=function(){function o(){}return o.\u0275mod=r.Hb({type:o}),o.\u0275inj=r.Gb({factory:function(n){return new(n||o)},imports:[[e.b,t.f,c.O,b.h.forChild(f)]]}),o}()}}]);