webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var $root = $('html, body');
        $('a').click(function () {
            var target = $.attr(this, 'href');
            if (target == "#body") {
                $root.animate({
                    scrollTop: 0
                }, 500);
            }
            else {
                $root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 135
                }, 500);
            }
            return false;
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(172),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestorationServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RestorationServicesComponent = (function () {
    function RestorationServicesComponent() {
    }
    RestorationServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.        
        $('#fire').bind('mouseenter', function () {
            $("#fire").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover1 = true;
        });
        $('#fire').bind('mouseleave', function () {
            $("#fire").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover1 = false;
        });
        $('#flood').bind('mouseenter', function () {
            $("#flood").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover2 = true;
        });
        $('#flood').bind('mouseleave', function () {
            $("#flood").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover2 = false;
        });
        $('#storm').bind('mouseenter', function () {
            $("#storm").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover3 = true;
        });
        $('#storm').bind('mouseleave', function () {
            $("#storm").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover3 = false;
        });
        $('#mold').bind('mouseenter', function () {
            $("#mold").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover4 = true;
        });
        $('#mold').bind('mouseleave', function () {
            $("#mold").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover4 = false;
        });
        $('#cleaning').bind('mouseenter', function () {
            $("#cleaning").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover5 = true;
        });
        $('#cleaning').bind('mouseleave', function () {
            $("#cleaning").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover5 = false;
        });
        $('#reconstuction').bind('mouseenter', function () {
            $("#reconstuction").parent('.restoration-services').css({
                'border-color': 'orange'
            }, 300);
            _this.isHover6 = true;
        });
        $('#reconstuction').bind('mouseleave', function () {
            $("#reconstuction").parent('.restoration-services').css({
                'border-color': 'lightgrey'
            }, 300);
            _this.isHover6 = false;
        });
    };
    return RestorationServicesComponent;
}());
RestorationServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'restoration-services',
        template: __webpack_require__(173),
        styles: [__webpack_require__(164)]
    })
], RestorationServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReviewListComponent = (function () {
    function ReviewListComponent() {
        this.state1 = true;
        this.stateNum = 1;
    }
    ReviewListComponent.prototype.initialize = function () {
        var _this = this;
        this.stateNum = 2;
        setInterval(function () {
            _this.state1 = false;
            _this.state2 = false;
            _this.state3 = false;
            _this.state4 = false;
            if (_this.stateNum == 1) {
                _this.state1 = true;
            }
            else if (_this.stateNum == 2) {
                _this.state2 = true;
            }
            else if (_this.stateNum == 3) {
                _this.state3 = true;
            }
            else {
                _this.state4 = true;
            }
            _this.stateNum++;
            if (_this.stateNum > 4) {
                _this.stateNum = 1;
            }
        }, 3000);
    };
    ReviewListComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.initialize();
    };
    return ReviewListComponent;
}());
ReviewListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-review-list',
        template: __webpack_require__(174),
        styles: [__webpack_require__(165)]
    })
], ReviewListComponent);

//# sourceMappingURL=review.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_carousel_mock__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CarouselService = (function () {
    function CarouselService() {
    }
    CarouselService.prototype.getCarousel = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mocks_carousel_mock__["a" /* CarouselImages */]);
    };
    return CarouselService;
}());
CarouselService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], CarouselService);

//# sourceMappingURL=carousel.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return whyUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var whyUsComponent = (function () {
    function whyUsComponent() {
    }
    return whyUsComponent;
}());
whyUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'why-us',
        template: __webpack_require__(175),
        styles: [__webpack_require__(166)]
    })
], whyUsComponent);

//# sourceMappingURL=whyUs.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "section {\r\n  margin-top: 100px; }\r\n.container-fluid {\r\n    padding: 0;\r\n}\r\n.carousel-inner {\r\n  position: relative;\r\n  height: 400px;\r\n  overflow: hidden; }\r\n  .carousel-inner .carousel-image {\r\n    min-width: 100%; }\r\n  .carousel-inner .carousel-caption-customized {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    color: white;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: rgba(0, 0, 0, 0.5); }\r\n\r\n.carousel-bottom-bar {\r\n  background-color: white;\r\n  border-bottom: 1px solid black; }\r\n\r\n.container {\r\n  padding: 30px;\r\n  font-family: 'Libre Baskerville', serif; }\r\n  .container h2, .container h4 {\r\n    margin: 0px;\r\n    color: black; }\r\n  .container h2 {\r\n    font-weight: 700; }\r\n  .container h4 {\r\n    color: gray;\r\n    font-weight: 500; }\r\n  .container .carousel-bottom-desc {\r\n    padding-left: 20px;\r\n    border-left: 3px solid grey; }\r\n  .container .btn-call-us {\r\n    background-color: rgba(4, 170, 170, 0.8);\r\n    box-shadow: 4px 4px grey;\r\n    color: white;\r\n    padding: 10px 30px;\r\n    border: 0px;\r\n    font-size: 180%;\r\n    font-weight: 600; }\r\n  .container .btn-call-us:hover, .container .btn-call-us:focus {\r\n    box-shadow: 0px 0px white;\r\n    position: relative;\r\n    left: 4px;\r\n    top: 4px; }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-color: rgba(233, 178, 0, 0.6);\r\n  padding: 50px 0px;\r\n  color: white;\r\n  text-align: center; }\r\n\r\n.header-div {\r\n  text-align: center;\r\n  position: relative; }\r\n  .header-div .services-header {\r\n    padding: 5px 50px;\r\n    font-weight: 700;\r\n    border: 1px solid rgba(255, 255, 255, 0.6); }\r\n  .header-div #header-pre-div {\r\n    float: left;\r\n    width: 30px;\r\n    left: 37%;\r\n    position: relative;\r\n    height: 30px;\r\n    margin-top: 5px;\r\n    border-top: 1px solid white;\r\n    border-left: 1px solid white; }\r\n  .header-div #header-middle-div {\r\n    float: left;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0);\r\n    color: white; }\r\n  .header-div #header-after-div {\r\n    float: left;\r\n    width: 30px;\r\n    right: -58%;\r\n    position: relative;\r\n    height: 30px;\r\n    margin-top: 43px;\r\n    border-bottom: 1px solid white;\r\n    border-right: 1px solid white; }\r\n\r\n.form-input {\r\n  margin-top: 50px; }\r\n\r\n.btn-send {\r\n  width: 100%; }\r\n\r\n.services-area {\r\n  border: 1px solid white; }\r\n\r\n.table-area {\r\n  margin: 20px auto;\r\n  padding: 10px; }\r\n  .table-area td {\r\n    border: 0px;\r\n    font-size: 120%; }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".bernhardt-footer {\r\n  padding: 10px 0px;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  color: white;\r\n  text-align: center; }\r\n\r\n#logo-image {\r\n  width: 50%; }\r\n\r\n.copyright {\r\n  margin: 20px auto; }\r\n\r\n.align-left {\r\n  text-align: right; }\r\n\r\n.social-icon {\r\n  width: 75px;\r\n  opacity: 0.5;\r\n  transition: opacity 0.5s; }\r\n\r\n.social-icon:focus, .social-icon:hover {\r\n  opacity: 1; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".bernhardt-nav {\r\n  text-align: center;\r\n  background-color: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\r\n  .bernhardt-nav .nav-header {\r\n    background-color: white;\r\n    text-align: center;\r\n    width: 20%;\r\n    min-width: 384px;\r\n    margin: 0px auto;\r\n    padding: 10px 0px; }\r\n    .bernhardt-nav .nav-header #nav-header-line-left {\r\n      border-top: 7px solid rgba(4, 170, 170, 0.5);\r\n      border-bottom: 7px solid rgba(4, 170, 170, 0.5);\r\n      border-left: 7px solid rgba(4, 170, 170, 0.5);\r\n      height: 70px;\r\n      width: 20px;\r\n      float: left; }\r\n    .bernhardt-nav .nav-header #nav-header-line-right {\r\n      border-top: 7px solid rgba(4, 170, 170, 0.5);\r\n      border-bottom: 7px solid rgba(4, 170, 170, 0.5);\r\n      border-right: 7px solid rgba(4, 170, 170, 0.5);\r\n      height: 70px;\r\n      width: 20px;\r\n      float: left; }\r\n  .bernhardt-nav #bernhardt-nav-header {\r\n    padding: 5px 20px;\r\n    position: relative;\r\n    float: left; }\r\n  .bernhardt-nav #bernhardt-nav-name {\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n    .bernhardt-nav #bernhardt-nav-name h4 {\r\n      border-top: 1px solid black;\r\n      margin: 0;\r\n      padding-top: 3px; }\r\n  .bernhardt-nav a {\r\n    color: black; }\r\n\r\n.bernhardt-nav-menu {\r\n  text-align: center;\r\n  background-color: white;\r\n  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4);\r\n  font-family: 'Libre Baskerville', serif;\r\n  font-weight: 600; }\r\n  .bernhardt-nav-menu a {\r\n    color: black;\r\n    padding: 5px 30px; }\r\n  .bernhardt-nav-menu a:hover, .bernhardt-nav-menu a:focus {\r\n    color: #04aaaa;\r\n    text-decoration: none; }\r\n  .bernhardt-nav-menu ul {\r\n    list-style: none;\r\n    margin-bottom: 2px; }\r\n    .bernhardt-nav-menu ul li {\r\n      font-size: 150%;\r\n      margin: 7px 5%;\r\n      display: inline-block;\r\n      margin-bottom: 5px; }\r\n    .bernhardt-nav-menu ul li:hover {\r\n      border-bottom: 5px solid #04aaaa;\r\n      margin-bottom: -5px; }\r\n\r\n#first-char-nav {\r\n  color: #04aaaa;\r\n  font-size: 120%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "section {\r\n  margin: 50px auto; }\r\n\r\n.header-div {\r\n  text-align: center;\r\n  position: relative; }\r\n  .header-div .services-header {\r\n    padding: 5px 50px;\r\n    font-weight: 700;\r\n    border: 1px solid rgba(128, 128, 128, 0.2); }\r\n  .header-div #header-pre-div {\r\n    float: left;\r\n    width: 30px;\r\n    left: 39%;\r\n    position: relative;\r\n    height: 30px;\r\n    margin-top: 5px;\r\n    border-top: 1px solid lightgray;\r\n    border-left: 1px solid lightgray; }\r\n  .header-div #header-middle-div {\r\n    float: left;\r\n    position: absolute;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n  .header-div #header-after-div {\r\n    float: left;\r\n    width: 30px;\r\n    right: -56%;\r\n    position: relative;\r\n    height: 30px;\r\n    margin-top: 43px;\r\n    border-bottom: 1px solid lightgray;\r\n    border-right: 1px solid lightgray; }\r\n\r\n.services-box {\r\n  padding: 20px; }\r\n  .services-box .col-md-6 {\r\n    text-align: center; }\r\n  .services-box .restoration {\r\n    text-align: center;\r\n    padding: 20px 10px; }\r\n  .services-box #fire {\r\n    width: 100%; }\r\n    .services-box #fire img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box #flood {\r\n    width: 100%; }\r\n    .services-box #flood img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box #storm {\r\n    width: 100%; }\r\n    .services-box #storm img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box #mold {\r\n    width: 100%; }\r\n    .services-box #mold img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box #cleaning {\r\n    width: 100%; }\r\n    .services-box #cleaning img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box #reconstuction {\r\n    width: 100%; }\r\n    .services-box #reconstuction img {\r\n      padding: 20px;\r\n      border-radius: 50%; }\r\n  .services-box img {\r\n    width: 200px; }\r\n\r\n.restoration-services {\r\n  position: relative;\r\n  border: 1px solid;\r\n  border-bottom: 7px solid;\r\n  border-color: lightgrey;\r\n  font-family: 'Libre Baskerville', serif;\r\n  margin-bottom: 20px;\r\n  cursor: pointer; }\r\n  .restoration-services .services-header {\r\n    border-top: 1px solid lightgrey;\r\n    font-weight: 700;\r\n    font-size: 175%;\r\n    color: gray;\r\n    margin: 0;\r\n    padding-top: 27px; }\r\n  .restoration-services .services-header-div {\r\n    -webkit-transform: rotateY(90deg);\r\n            transform: rotateY(90deg); }\r\n  .restoration-services .services-info {\r\n    font-weight: 700;\r\n    font-size: 175%; }\r\n  .restoration-services .services-desc-div {\r\n    -webkit-transform: rotateY(0deg);\r\n            transform: rotateY(0deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s; }\r\n  .restoration-services .services-desc-div.side {\r\n    -webkit-transform: rotateY(90deg);\r\n            transform: rotateY(90deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s; }\r\n  .restoration-services .services-image {\r\n    -webkit-transform: rotateY(0deg);\r\n            transform: rotateY(0deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s; }\r\n  .restoration-services .services-image.side {\r\n    -webkit-transform: rotateY(90deg);\r\n            transform: rotateY(90deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s; }\r\n  .restoration-services .services-image-div {\r\n    position: absolute;\r\n    left: 0%;\r\n    top: 0%;\r\n    -webkit-transform: rotateY(90deg);\r\n            transform: rotateY(90deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s;\r\n    padding-top: 40px;\r\n    color: orange; }\r\n  .restoration-services .services-image-div.side {\r\n    -webkit-transform: rotateY(0deg);\r\n            transform: rotateY(0deg);\r\n    transition: -webkit-transform 0.25s;\r\n    transition: transform 0.25s;\r\n    transition: transform 0.25s, -webkit-transform 0.25s; }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n  background-color: lightblue; }\r\n  .container-fluid .down-arrow {\r\n    position: absolute;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 60px solid transparent;\r\n    border-right: 60px solid transparent;\r\n    border-top: 50px solid rgba(4, 170, 170, 0.5);\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n  .container-fluid .down-arrow-back {\r\n    position: absolute;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 60px solid transparent;\r\n    border-right: 60px solid transparent;\r\n    border-top: 50px solid white;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n  .container-fluid .review-desc {\r\n    color: dimgrey; }\r\n  .container-fluid .review-box {\r\n    margin: 75px 0px 50px 0px;\r\n    height: 181px;\r\n    overflow: hidden; }\r\n    .container-fluid .review-box .review-comment {\r\n      background-color: rgba(255, 255, 255, 0.3);\r\n      position: absolute;\r\n      right: 0;\r\n      top: 100%;\r\n      max-width: 80%;\r\n      padding: 10px 20px;\r\n      transition: top 0.3s; }\r\n      .container-fluid .review-box .review-comment .review-header {\r\n        font-weight: 600; }\r\n        .container-fluid .review-box .review-comment .review-header .reviewer {\r\n          margin-left: 10px;\r\n          color: cadetblue;\r\n          font-size: 50%; }\r\n    .container-fluid .review-box .review-comment.active {\r\n      top: 0%;\r\n      transition: top 0.3s; }\r\n    .container-fluid .review-box .review-comment-opposite {\r\n      background-color: rgba(255, 255, 255, 0.8);\r\n      position: absolute;\r\n      left: 0;\r\n      max-width: 80%;\r\n      padding: 10px 20px;\r\n      text-align: right;\r\n      top: 100%;\r\n      transition: all 0.3s; }\r\n      .container-fluid .review-box .review-comment-opposite .review-header {\r\n        font-weight: 600; }\r\n        .container-fluid .review-box .review-comment-opposite .review-header .reviewer {\r\n          margin-left: 10px;\r\n          color: cadetblue;\r\n          font-size: 50%; }\r\n    .container-fluid .review-box .review-comment-opposite.active {\r\n      top: 0%;\r\n      transition: all 0.3s; }\r\n  .container-fluid .down-arrow-half {\r\n    position: absolute;\r\n    right: -10px;\r\n    bottom: -50px;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 60px solid transparent;\r\n    border-top: 50px solid rgba(255, 255, 255, 0.3);\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n  .container-fluid .down-arrow-half-opposite {\r\n    position: absolute;\r\n    left: 50px;\r\n    bottom: -50px;\r\n    width: 0;\r\n    height: 0;\r\n    border-right: 60px solid transparent;\r\n    border-top: 50px solid rgba(255, 255, 255, 0.8);\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0); }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".why-us-container {\r\n  background-color: rgba(4, 170, 170, 0.5); }\r\n\r\n.why-us-middle {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 2px;\r\n  padding: 30px 20px;\r\n  box-shadow: 20px 20px rgba(4, 170, 170, 0.5); }\r\n  .why-us-middle .reviewer-img-div {\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translate(0, -50%);\r\n            transform: translate(0, -50%); }\r\n  .why-us-middle .why-us-header {\r\n    width: 100%;\r\n    font-weight: 700;\r\n    color: black; }\r\n    .why-us-middle .why-us-header .why-us-rating {\r\n      font-size: 50%;\r\n      color: #036200; }\r\n  .why-us-middle .reviewer-div {\r\n    float: left; }\r\n  .why-us-middle .reviewer-name {\r\n    margin-left: 25%;\r\n    margin-right: 5%;\r\n    padding: 5px 10px;\r\n    background-color: rgba(255, 255, 255, 0.8); }\r\n    .why-us-middle .reviewer-name h2, .why-us-middle .reviewer-name h4 {\r\n      margin: 0; }\r\n  .why-us-middle .reviewer-desc {\r\n    margin-left: 25%;\r\n    margin-right: 5%;\r\n    margin-top: 5px;\r\n    padding: 0px 10px;\r\n    color: dimgray;\r\n    border-left: 3px solid grey; }\r\n    .why-us-middle .reviewer-desc h4 {\r\n      line-height: 25px; }\r\n  .why-us-middle .reviewer-img {\r\n    width: 200px;\r\n    border-radius: 50%;\r\n    padding: 20px 20px 20px 0px; }\r\n\r\n.why-us-reivew-detail h2 {\r\n  color: white; }\r\n\r\n.why-us-review {\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  box-shadow: 20px 20px rgba(4, 170, 170, 0.5);\r\n  color: black; }\r\n  .why-us-review .review-img {\r\n    width: 200px;\r\n    margin: 10px 0px; }\r\n  .why-us-review .review-total-info {\r\n    background: rgba(255, 255, 255, 0.6);\r\n    padding: 20px; }\r\n  .why-us-review h1 {\r\n    margin: 0;\r\n    font-size: 300%;\r\n    font-weight: 700; }\r\n  .why-us-review h5 {\r\n    margin: 0;\r\n    color: #04aaaa; }\r\n  .why-us-review h4 {\r\n    font-weight: 100;\r\n    line-height: 25px; }\r\n\r\n.container {\r\n  padding: 40px 20px; }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<main-carousel></main-carousel>\n\n<why-us id=\"whyUs\"></why-us>\n\n<app-review-list></app-review-list>\n\n<restoration-services id=\"services\"></restoration-services>\n\n<contact-us id=\"contactUs\"></contact-us>\n\n<app-footer></app-footer>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n    <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n        <!-- Indicators -->\r\n        <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\r\n        </ol>\r\n        <!-- Wrapper for slides -->\r\n        <div class=\"carousel-inner\" role=\"listbox\">\r\n            <div class=\"{{image.class}}\" *ngFor=\"let image of carouselImages\">\r\n                <img class=\"carousel-image\" src=\"{{image.src}}\" alt=\"{{image.alt}}\">\r\n                <div class=\"carousel-caption-customized\">\r\n                    {{image.caption}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Controls -->\r\n        <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"carousel-bottom-bar row\">\r\n        <div class=\"container\">\r\n            <div class=\"col-md-9 carousel-bottom-desc\">\r\n                <h2>We have 25th years exprience. Don't hesitate</h2>\r\n                <h4>No.1 Restoration Company in Wheeling</h4>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <a href=\"tel:+1-847-520-8320\"><button type=\"button\" class=\"btn-call-us pull-right\">Call us!<br>(847)520-8320</button></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n    <div class=\"container\">\r\n        <div class=\"header-div row\">\r\n            <div id=\"header-pre-div\"></div>\r\n            <div id=\"header-middle-div\">\r\n                <h1><span class=\"services-header\">Contact us</span></h1>\r\n            </div>\r\n            <div id=\"header-after-div\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <h3>Lorem ipsum dolor sit amet, consectetur.<br><span>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum.</span></h3>\r\n        \r\n        <div class=\"form-input row\">\r\n            <div class=\"col-md-6\">\r\n                <form class=\"form-horizontal\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Report\" class=\"col-sm-4 control-label\">Report</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <select name=\"ReportList\" id=\"Report\" class=\"form-control\">\r\n                            <option value=\"fireRestoration\">Fire Restoration</option>\r\n                            <option value=\"floodRestoration\">flood Restoration</option>\r\n                            <option value=\"stormdamage\">Storm Damage clean up</option>\r\n                            <option value=\"moldremediation\">Mold Remediation</option>\r\n                            <option value=\"carpetclean\">Carpet Cleaning</option>\r\n                            <option value=\"Reconstruction\">Reconstruction</option>\r\n                        </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"fullName\" class=\"col-sm-4 control-label\">Full Name</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"fullName\" placeholder=\"Full name\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"phonenumber\" class=\"col-sm-4 control-label\">Phone Number</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"tel\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"address\" class=\"col-sm-4 control-label\">Address</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"Address\" required>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\" class=\"col-sm-4 control-label\">City</label>\r\n                        <div class=\"col-sm-8\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" required>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-sm-offset-4 col-sm-8\">\r\n                            <button type=\"submit\" class=\"btn btn-success btn-lg btn-send\">Send</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"services-area\">\r\n                    <table class=\"table table-area\">\r\n                        <tr>\r\n                            <td>Arlington Heights</td>\r\n                            <td>Bannockburn</td>\r\n                            <td>Buffalo Grove</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Chicago</td>\r\n                            <td>Deerfield</td>\r\n                            <td>Des Plaines</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Glenview</td>\r\n                            <td>Kenilworth</td>\r\n                            <td>Highland Park</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Lake Forest</td>\r\n                            <td>Long Grove</td>\r\n                            <td>Morton Grove</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Northbrook</td>\r\n                            <td>Northfield</td>\r\n                            <td>Park Ridge</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Palatine</td>\r\n                            <td>Riverwoods</td>\r\n                            <td>Skokie</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Wilmette</td>\r\n                            <td>Winnetka</td>\r\n                            <td>Wheeling</td>\r\n                        </tr>\r\n                    </table>\r\n                    <h4><span class=\"glyphicon glyphicon-info-sign\"></span> Our service area includes but is not limited</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bernhardt-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img src=\"../../assets/images/logo/logo-white.png\" alt=\"logo\" id=\"logo-image\">\n        </div>\n        <div class=\"col-sm-6 align-left\">\n            <a href=\"https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fbernhardtrestoration.com%252F%26title%3DAbout&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_US\"><img src=\"../../assets/images/social-icon/facebook-white.png\" alt=\"social-icon\" class=\"social-icon\"></a>\n            <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https://bernhardtrestoration.com/&summary=%5B..%5D&source=\"><img src=\"../../assets/images/social-icon/linkedin-white.png\" alt=\"social-icon\" class=\"social-icon\"></a>\n            <a href=\"https://twitter.com/login?redirect_after_login=%2Fhome%3Fstatus%3Dhttp%3A%2F%2Fbernhardtrestoration.com%2F%26title%3DAbout\"><img src=\"../../assets/images/social-icon/twitter-white.png\" alt=\"social-icon\" class=\"social-icon\"></a>\n            <a href=\"https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjI0dGu0b3TAhVr6IMKHUcmBWoQPAgD#hl=en&q=bernhardt+restoration\"><img src=\"../../assets/images/social-icon/google-white.png\" alt=\"social-icon\" class=\"social-icon\"></a>\n        </div>\n        </div>\n        <div class=\"col-sm-12\">\n            <p class=\"copyright\">&copy; 2017 - By Silent heal</p>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"container-fluid\">\n        <div class=\"navbar-fixed-top\">\n            <div class=\"bernhardt-nav\">\n                    <h1 class=\"nav-header\">\n                        <a href=\"#body\">\n                            <div id=\"nav-header-line-left\"></div>\n                            <div id=\"bernhardt-nav-header\">\n                                <span id=\"first-char-nav\">B</span>\n                                <span>E</span>\n                                <span>R</span>\n                                <span>N</span>\n                                <span>H</span>\n                                <span>A</span>\n                                <span>R</span>\n                                <span>D</span>\n                                <span>T</span>\n                            </div>\n                            <div id=\"bernhardt-nav-name\">\n                                <h4>Restoration Company</h4>\n                            </div>\n                            <div id=\"nav-header-line-right\"></div>\n                            <div class=\"clearfix\"></div>\n                        </a>\n                    </h1>\n            </div>\n            <div class=\"bernhardt-nav-menu\">\n                <ul>\n                    <li><a href=\"#whyUs\">Why us?</a></li>\n                    <li><a href=\"#services\">Services</a></li>\n                    <li><a href=\"#contactUs\">Contact us</a></li>\n                    <li><a href=\"#\">Quick Report</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n    <div class=\"container\">\r\n        <div class=\"header-div row\">\r\n            <div id=\"header-pre-div\"></div>\r\n            <div id=\"header-middle-div\">\r\n                <h1><span class=\"services-header\">Services</span></h1>\r\n            </div>\r\n            <div id=\"header-after-div\"></div>\r\n        </div>\r\n        <div class=\"services-box row\">\r\n            <div class=\"col-md-4\">\r\n                <div>\r\n                    <!--<div id=\"fire-pre\"></div>-->\r\n                    <div class=\"restoration-services\">\r\n                        <div class=\"restoration relative\" id=\"fire\">\r\n                            <img src=\"../../assets/images/restoration/fire.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover1}\">\r\n                            <div class=\"services-image-div\" [ngClass]=\"{'side': isHover1}\">\r\n                                <h3>Short information about fire restoration<br /><br /></h3>\r\n                                <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                            </div>\r\n                            <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover1}\">\r\n                                <h2 class=\"services-header\">Fire restoration</h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--<div id=\"fire-after\"></div>-->\r\n                    <div class=\"restoration-services\">\r\n                        <div class=\"restoration relative\" id=\"mold\">\r\n                            <img src=\"../../assets/images/restoration/mold.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover4}\">\r\n                            <div class=\"services-image-div\" [ngClass]=\"{'side': isHover4}\">\r\n                                <h3>Short information about Mold remediation<br /><br /></h3>\r\n                                <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                            </div>\r\n                            <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover4}\">\r\n                                <h2 class=\"services-header\">Mold remediation</h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <!--<div id=\"flood-pre\"></div>-->\r\n                <div class=\"restoration-services\">\r\n                    <div class=\"restoration relative\" id=\"flood\">\r\n                        <img src=\"../../assets/images/restoration/flood.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover2}\">\r\n                        <div class=\"services-image-div\" [ngClass]=\"{'side': isHover2}\">\r\n                            <h3>Short information about Flood restoration<br /><br /></h3>\r\n                            <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                        </div>\r\n                        <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover2}\">\r\n                            <h2 class=\"services-header\">Flood restoration</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"restoration-services\">\r\n                    <div class=\"restoration relative\" id=\"cleaning\">\r\n                        <img src=\"../../assets/images/restoration/cleaning.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover5}\">\r\n                        <div class=\"services-image-div\" [ngClass]=\"{'side': isHover5}\">\r\n                            <h3>Short information about Carpet cleaning<br /><br /></h3>\r\n                            <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                        </div>\r\n                        <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover5}\">\r\n                            <h2 class=\"services-header\">Carpet cleaning</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<div id=\"flood-after\"></div>-->\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <!--<div id=\"storm-pre\"></div>-->\r\n                <div class=\"restoration-services\">\r\n                    <div class=\"restoration relative\" id=\"storm\">\r\n                        <img src=\"../../assets/images/restoration/storm.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover3}\">\r\n                        <div class=\"services-image-div\" [ngClass]=\"{'side': isHover3}\">\r\n                            <h3>Short information about Storm damage clean up<br /><br /></h3>\r\n                            <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                        </div>\r\n                        <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover3}\">\r\n                            <h2 class=\"services-header\">Storm damage clean up</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"restoration-services\">\r\n                    <div class=\"restoration relative\" id=\"reconstuction\">\r\n                        <img src=\"../../assets/images/restoration/remodel.png\" alt=\"restoration\" class=\"services-image\" [ngClass]=\"{'side': isHover6}\">\r\n                        <div class=\"services-image-div\" [ngClass]=\"{'side': isHover6}\">\r\n                            <h3>Short information about Reconstuction<br /><br /></h3>\r\n                            <h2 class=\"services-info\"><span class=\"glyphicon glyphicon-question-sign\"></span>&ensp;Click for example</h2>\r\n                        </div>\r\n                        <div class=\"services-desc-div\" [ngClass]=\"{'side': isHover6}\">\r\n                            <h2 class=\"services-header\">Reconstuction</h2>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--<div id=\"storm-after\"></div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n    <div class=\"relative\">\r\n        <div class=\"down-arrow-back\"></div>\r\n        <div class=\"down-arrow\"></div>\r\n    </div>\r\n    <div class=\"container \">\r\n        <div class=\"review-box relative\">\r\n            <div class=\"review-comment\" [ngClass]=\"{'active': state1}\">\r\n                <h2 class=\"review-header\">Name<span class=\"reviewer\">by Jinseong Kim</span></h2>\r\n                <h4 class=\"review-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet explicabo blanditiis ipsa distinctio\r\n                    aliquid repudiandae, temporibus consequatur alias. Quidem!</h4>\r\n                <div class=\"down-arrow-half\"></div>\r\n            </div>\r\n\r\n            <div class=\"review-comment-opposite\" [ngClass]=\"{'active': state2}\">\r\n                <h2 class=\"review-header\">Name<span class=\"reviewer\">by Joe Johnson</span></h2>\r\n                <h4 class=\"review-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet explicabo blanditiis ipsa distinctio\r\n                    aliquid repudiandae, temporibus consequatur alias. Quidem!</h4>\r\n                <div class=\"down-arrow-half-opposite\"></div>\r\n            </div>\r\n\r\n            <div class=\"review-comment\" [ngClass]=\"{'active': state3}\">\r\n                <h2 class=\"review-header\">Name<span class=\"reviewer\">by Derek</span></h2>\r\n                <h4 class=\"review-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet explicabo blanditiis ipsa distinctio\r\n                    aliquid repudiandae, temporibus consequatur alias. Quidem!</h4>\r\n                <div class=\"down-arrow-half\"></div>\r\n            </div>\r\n\r\n            <div class=\"review-comment-opposite\" [ngClass]=\"{'active': state4}\">\r\n                <h2 class=\"review-header\">Name<span class=\"reviewer\">by Joel</span></h2>\r\n                <h4 class=\"review-desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet explicabo blanditiis ipsa distinctio\r\n                    aliquid repudiandae, temporibus consequatur alias. Quidem!</h4>\r\n                <div class=\"down-arrow-half-opposite\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid why-us-container\">\r\n    <div class=\"container\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"why-us-review\">\r\n                <img src=\"../../assets/images/review/trust_icon.png\" alt=\"Star\" class=\"review-img\" />\r\n                <div class=\"review-total-info\">\r\n                    <h1>Trustable</h1>\r\n                    <h5>95% Satisfied customer</h5>\r\n                    <h4>With 20+ years experience, we’ve assembled the systems, resources, and manpower to accommodate the specific needs of each client within the industries we serve.</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-8 why-us-reivew-detail\">\r\n            <div class=\"why-us-middle\">\r\n                <div class=\"row relative\">\r\n                    <div class=\"reviewer-div reviewer-img-div\">\r\n                        <img src=\"../../assets/images/review/reliability_icon.png\" alt=\"reviewer\" class=\"reviewer-img\">\r\n                    </div>\r\n                    <div class=\"reviewer-div\">\r\n                        <div class=\"reviewer-name\">\r\n                            <h2 class=\"why-us-header\">\r\n                                Reliability \r\n                                <span class=\"why-us-rating\">Finally, a contractor you can count on</span>\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"reviewer-desc\">\r\n                            <h4>We understand the importance of being accessible and ensure punctuality, reliability, and world-class communication through our one-of-a-kind Bristol Service Mobile App.</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"why-us-middle\" style=\"margin-top: 40px;\">\r\n                <div class=\"row relative\">\r\n                    <div class=\"reviewer-div reviewer-img-div\">\r\n                        <img src=\"../../assets/images/review/quality_icon2.png\" alt=\"reviewer\" class=\"reviewer-img\">\r\n                    </div>\r\n                    <div class=\"reviewer-div\">\r\n                        <div class=\"reviewer-name\">\r\n                            <h2 class=\"why-us-header\">\r\n                                Quality \r\n                                <span class=\"why-us-rating\">Committed to excellence in all we do</span>\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"reviewer-desc\">\r\n                            <h4>Any contractor can claim quality. At Bristol Service, our long-standing reputation of superior work is supported by the Clients we proudly serve.</h4>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(105);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(168),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restoration_services_services_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contactUs_contactUs_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__review_review_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__whyUs_whyUs_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '#whyUs', component: __WEBPACK_IMPORTED_MODULE_12__whyUs_whyUs_component__["a" /* whyUsComponent */] },
    { path: '#services', component: __WEBPACK_IMPORTED_MODULE_9__restoration_services_services_component__["a" /* RestorationServicesComponent */] },
    { path: '#contactUs', component: __WEBPACK_IMPORTED_MODULE_10__contactUs_contactUs_component__["a" /* ContactUsComponent */] },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_9__restoration_services_services_component__["a" /* RestorationServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__contactUs_contactUs_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__review_review_component__["a" /* ReviewListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__whyUs_whyUs_component__["a" /* whyUsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_carousel_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselComponent = (function () {
    function CarouselComponent(carouselService) {
        this.carouselService = carouselService;
    }
    CarouselComponent.prototype.getCarousel = function () {
        var _this = this;
        this.carouselService.getCarousel().then(function (x) { return _this.carouselImages = x; });
    };
    CarouselComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getCarousel();
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        //moduleId: module.id,
        selector: 'main-carousel',
        template: __webpack_require__(169),
        styles: [__webpack_require__(160)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_carousel_service__["a" /* CarouselService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_carousel_service__["a" /* CarouselService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_carousel_service__["a" /* CarouselService */]) === "function" && _a || Object])
], CarouselComponent);

var _a;
//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'contact-us',
        template: __webpack_require__(170),
        styles: [__webpack_require__(161)]
    })
], ContactUsComponent);

//# sourceMappingURL=contactUs.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(171),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselImages; });
var CarouselImages = [
    {
        id: 1,
        class: "item active",
        src: "/../../assets/images/carousel-image/carousel-img01.jpg",
        alt: "carousel-image01",
        caption: "Sometimes.."
    }
];
//# sourceMappingURL=carousel.mock.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.bundle.js.map