(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");





var appRoutes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLinkActive=\"active\" routerLink=\"home\">Home</a>\n      </li>\n      <li>\n        <a routerLinkActive=\"active\" routerLink=\"employees\">List</a>\n      </li>\n      <li>\n        <a routerLinkActive=\"active\" routerLink=\"employees/create\">Create</a>\n      </li>\n    </ul>\n  </nav>\n    <router-outlet></router-outlet>\n </div>     \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _employee_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee/employee.module */ "./src/app/employee/employee.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _employee_employee_module__WEBPACK_IMPORTED_MODULE_9__["EmployeeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular_web_storage__WEBPACK_IMPORTED_MODULE_11__["AngularWebStorageModule"]
            ],
            providers: [_employee_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employee/create-employee.component.css":
/*!********************************************************!*\
  !*** ./src/app/employee/create-employee.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    border:1px solid silver;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvY3JlYXRlLWVtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/employee/create-employee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employee/create-employee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n\n  <div class=\"panel panel-primary\">\n\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{pageTitle}}</h3>\n    </div>\n\n    <div class=\"panel-body\">\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.fullName}\">\n        <label class=\"col-sm-2 control-label\" for=\"fullName\">Full Name</label>\n        <div class=\"col-sm-8\">\n          <input id=\"fullName\" formControlName=\"fullName\" type=\"text\" class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.fullName\">\n            {{formErrors.fullName}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-2 control-label\" for=\"contactPreference\">Contact Preference</label>\n        <div class=\"col-md-8\">\n          <label class=\"radio-inline\">\n            <input formControlName=\"contactPreference\" type=\"radio\" value=\"email\">Email\n          </label>\n          <label class=\"radio-inline\">\n            <input formControlName=\"contactPreference\" type=\"radio\" value=\"phone\">Phone\n          </label>\n        </div>\n      </div>\n\n      <div formGroupName=\"emailGroup\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.email}\">\n          <label class=\"col-sm-2 control-label\" for=\"email\">Email</label>\n            <div class=\"col-sm-8\">\n              <input id=\"email\" formControlName=\"email\" type=\"text\" class=\"form-control\" (blur)=\"logValidationErrors()\">\n              <span class=\"help-block\" *ngIf=\"formErrors.email\">\n                {{formErrors.email}}\n              </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.confirmEmail || formErrors.emailGroup}\">\n          <label class=\"col-sm-2 control-label\" for=\"confirmEmail\">Confirm Email</label>\n          <div class=\"col-sm-8\">\n            <input id=\"confirmEmail\" formControlName=\"confirmEmail\" type=\"text\" class=\"form-control\" (blur)=\"logValidationErrors()\">\n            <span class=\"help-block\" *ngIf=\"formErrors.confirmEmail || formErrors.emailGroup\">\n              {{formErrors.confirmEmail ? formErrors.confirmEmail:formErrors.emailGroup}}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.phone}\">\n        <label class=\"col-sm-2 control-label\" for=\"phone\">Phone</label>\n        <div class=\"col-sm-8\">\n          <input id=\"phone\" formControlName=\"phone\" type=\"text\" class=\"form-control\" (blur)=\"logValidationErrors()\">\n          <span class=\"help-block\" *ngIf=\"formErrors.phone\">\n            {{formErrors.phone}}\n          </span>\n        </div>\n      </div>\n\n      <div class=\"well\">\n\n          <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-4\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addSkillButtonClick()\" [disabled]=\"employeeForm.get('skills').invalid\">\n                  Add Skill\n                </button>\n              </div>\n            </div>\n\n\n        <div formArrayName=\"skills\">\n\n        <div *ngFor=\"let skill of employeeForm.get('skills').controls; let i = index\">\n          <hr *ngIf=\"i>0\"/>\n          <div [formGroupName]=\"i\">\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': skill.get('skillName').invalid && skill.get('skillName').touched}\">\n              <label class=\"col-sm-2 control-label\" attr.for=\"{{'skillName'+i}}\">Skills</label>\n              <div class=\"col-sm-4\">\n                <input type=\"text\" id=\"{{'skillName'+i}}\" placeholder=\"C#,Java,Angular etc...\" formControlName=\"skillName\" class=\"form-control\">\n                <span class=\"help-block\" *ngIf=\"skill.get('skillName').errors?.required && skill.get('skillName').touched\">\n                    Skill Name is required.\n                </span>\n              </div>\n              <div class=\"col-sm-6\" *ngIf=\"employeeForm.get('skills').length>1\">\n                <button type=\"button\" class=\"btn btn-danger btn-sm pull-right\" title=\"Delete\" (click)=\"removeSkillButtonClick(i)\">\n                  <span class=\"glyphicon glyphicon-remove\"></span>\n                </button>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': skill.get('experienceInYears').invalid && skill.get('experienceInYears').touched}\">\n              <label class=\"col-sm-2 control-label\" attr.for=\"{{'experienceInYears'+i}}\">Experience</label>\n              <div class=\"col-sm-4\">\n                <input type=\"text\" id=\"{{'experienceInYears'+i}}\" placeholder=\"In Year\" formControlName=\"experienceInYears\" class=\"form-control\">\n                <span class=\"help-block\" *ngIf=\"skill.get('experienceInYears').errors?.required && skill.get('experienceInYears').touched\">\n                    Experience is required.\n                </span>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': skill.get('proficiency').invalid && skill.get('proficiency').touched}\">\n              <label class=\"col-md-2 control-label\">Proficiency</label>\n              <div class=\"col-md-8\">\n                <label class=\"radio-inline\">\n                  <input formControlName=\"proficiency\" type=\"radio\" value=\"beginner\">Beginner\n                </label>\n                <label class=\"radio-inline\">\n                  <input formControlName=\"proficiency\" type=\"radio\" value=\"intermidate\">Intermidate\n                </label>\n                <label class=\"radio-inline\">\n                  <input formControlName=\"proficiency\" type=\"radio\" value=\"advanced\">Advanced\n                </label>\n                <span class=\"help-block\" *ngIf=\"skill.get('proficiency').errors?.required && skill.get('proficiency').touched\">\n                    Proficiency is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"panel-footer\">\n      <div class=\"btn-toolbar\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"employeeForm.invalid\">Save</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onLoadDataClick()\">Load</button>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/employee/create-employee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employee/create-employee.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/custom.validators */ "./src/app/shared/custom.validators.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");







var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(fb, route, employeeService, router) {
        this.fb = fb;
        this.route = route;
        this.employeeService = employeeService;
        this.router = router;
        // fullNameLength=0;
        this.validationMessages = {
            'fullName': {
                'required': "Full Name is required",
                'minlength': "Full Name must be greater than 2 Characters.",
                'maxlength': "Full Name must be less than 10 characters."
            },
            'email': {
                'required': "Email is required.",
                'emailDomain': "Email domain should be capgemini.com"
            },
            'confirmEmail': {
                'required': "Confirm Email is required"
            },
            'emailGroup': {
                'emailMismatch': 'Email and confirm Email do not match.'
            },
            'phone': {
                'required': "Phone is required.",
            }
        };
        this.formErrors = {};
    }
    CreateEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeForm = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            contactPreference: ['email'],
            emailGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_custom_validators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].emailDomain("capgemini.com")]],
                confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }, {
                validator: matchEmail
            }),
            phone: [''],
            skills: this.fb.array([
                this.addSkillFormGroup()
            ])
        });
        this.employeeForm.get('contactPreference').valueChanges.subscribe(function (data) {
            _this.onContactPreferenceChange(data);
        });
        this.employeeForm.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.employeeForm);
        });
        this.route.paramMap.subscribe(function (params) {
            var empId = +params.get('id');
            if (empId) {
                _this.pageTitle = 'Edit Employee';
                _this.getEmployee(empId);
            }
            else {
                _this.pageTitle = 'Create Employee';
                _this.employee = {
                    id: null,
                    fullName: '',
                    contactPreference: '',
                    email: '',
                    phone: null,
                    EmployeesSkillDetails: []
                };
            }
            ;
        });
    };
    CreateEmployeeComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.employeeService.getEmployee(id).subscribe(function (employee) {
            _this.editEmployee(employee);
            _this.employee = employee[0];
            console.log(_this.employee);
        }, function (err) { return console.log(err); });
    };
    CreateEmployeeComponent.prototype.editEmployee = function (employee) {
        this.employeeForm.patchValue({
            fullName: employee[0].fullName,
            contactPreference: employee[0].contactPreference,
            emailGroup: {
                email: employee[0].email,
                confirmEmail: employee[0].email
            },
            phone: employee[0].phone
        });
        this.employeeForm.setControl('skills', this.setExistingSkills(employee[0].skills));
    };
    CreateEmployeeComponent.prototype.setExistingSkills = function (skillSets) {
        var _this = this;
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        skillSets.forEach(function (s) {
            formArray.push(_this.fb.group({
                skillName: s.skillName,
                experienceInYears: s.experienceInYears,
                proficiency: s.proficiency
            }));
        });
        return formArray;
    };
    CreateEmployeeComponent.prototype.addSkillButtonClick = function () {
        this.employeeForm.get('skills').push(this.addSkillFormGroup());
        console.log(this.employeeForm.get('skills'));
    };
    CreateEmployeeComponent.prototype.removeSkillButtonClick = function (skillGroupIndex) {
        var skillsFormArray = this.employeeForm.get('skills');
        skillsFormArray.removeAt(skillGroupIndex);
        skillsFormArray.markAsDirty();
        skillsFormArray.markAsTouched();
    };
    CreateEmployeeComponent.prototype.addSkillFormGroup = function () {
        return this.fb.group({
            skillName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            experienceInYears: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            proficiency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    // For email and phone contactpreference validation
    CreateEmployeeComponent.prototype.onContactPreferenceChange = function (selectedValue) {
        var phoneFormControl = this.employeeForm.get('phone');
        if (selectedValue === 'phone') {
            phoneFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        }
        else {
            phoneFormControl.clearValidators();
        }
        phoneFormControl.updateValueAndValidity();
    };
    // this.employeeForm.get("fullName").valueChanges.subscribe((value:string)=>{
    //   this.fullNameLength=value.length;
    // });
    // Disable the controls based on requirement
    CreateEmployeeComponent.prototype.logKeyValuePairs = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.logKeyValuePairs(abstractControl);
                abstractControl.disable(); //only nested formgroup controls are disabled
            }
            else {
                // console.log('key ='+key+'value ='+abstractControl.value);
                // abstractControl.disable();
            }
        });
    };
    // Validation logic in component control file not in view control file 
    CreateEmployeeComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.employeeForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
                var messages = _this.validationMessages[key];
                for (var errorKey in abstractControl.errors) {
                    if (errorKey) {
                        _this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
        });
    };
    //Load button for loading data for editing
    CreateEmployeeComponent.prototype.onLoadDataClick = function () {
        this.employeeForm.patchValue({
            fullName: "Kameshwar",
            emailGroup: {
                email: "kameshwargupta@capgemini.com",
                confirmEmail: "kameshwargupta@capgemini.com"
            },
            phone: "7506803439"
        });
        // this.logKeyValuePairs(this.employeeForm);
        // this.logValidationErrors(this.employeeForm);
        // console.log(this.formErrors);
    };
    //Submit data to check the output in console
    CreateEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.employeeForm.get('fullname').value);
        this.mapFormValuesToEmployeeModel();
        if (this.employee.id) {
            this.employeeService.updateEmployee(this.employee).subscribe(function () { return _this.router.navigate(['employees']); }, function (err) { return console.log(err); });
        }
        else {
            this.employeeService.addEmployee(this.employee).subscribe(function () { return _this.router.navigate(['employees']); }, function (err) { return console.log(err); });
        }
    };
    CreateEmployeeComponent.prototype.mapFormValuesToEmployeeModel = function () {
        this.employee.fullName = this.employeeForm.value.fullName;
        this.employee.contactPreference = this.employeeForm.value.contactPreference;
        this.employee.email = this.employeeForm.value.emailGroup.email;
        this.employee.phone = this.employeeForm.value.phone;
        this.employee.EmployeesSkillDetails = this.employeeForm.value.skills;
    };
    CreateEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/employee/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/employee/create-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());

function matchEmail(group) {
    var emailControl = group.get('email');
    var confirmEmailControl = group.get('confirmEmail');
    if (emailControl.value === confirmEmailControl.value
        || (confirmEmailControl.pristine && confirmEmailControl.value === '')) {
        return null;
    }
    else {
        return { 'emailMismatch': true };
    }
}


/***/ }),

/***/ "./src/app/employee/employee-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/employee-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-employee.component */ "./src/app/employee/list-employee.component.ts");
/* harmony import */ var _create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-employee.component */ "./src/app/employee/create-employee.component.ts");





var appRoutes = [
    {
        path: 'employees', children: [
            { path: '', component: _list_employee_component__WEBPACK_IMPORTED_MODULE_3__["ListEmployeeComponent"] },
            { path: 'create', component: _create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"] },
            { path: 'edit/:id', component: _create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"] }
        ]
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-employee.component */ "./src/app/employee/create-employee.component.ts");
/* harmony import */ var _list_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-employee.component */ "./src/app/employee/list-employee.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/employee/employee-routing.module.ts");







var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _employee_routing_module__WEBPACK_IMPORTED_MODULE_6__["EmployeeRoutingModule"]
            ],
            declarations: [
                _create_employee_component__WEBPACK_IMPORTED_MODULE_3__["CreateEmployeeComponent"],
                _list_employee_component__WEBPACK_IMPORTED_MODULE_4__["ListEmployeeComponent"]
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/employee/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/employee/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);





var EmployeeService = /** @class */ (function () {
    function EmployeeService(httpClient) {
        this.httpClient = httpClient;
        //   baseUrl='http://localhost:3000/employees';
        this.baseUrl = 'http://localhost:59108/api/employees';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.httpClient.get(this.baseUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.log('Client Side Error :', errorResponse.error);
        }
        else {
            console.log('Server Side Error :', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There is a problem with the service');
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.httpClient.get(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        console.log(employee);
        return this.httpClient.post(this.baseUrl, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        return this.httpClient.put(this.baseUrl + "/" + employee.id, employee, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        console.log(id);
        return this.httpClient.delete(this.baseUrl + "/" + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employee/list-employee.component.css":
/*!******************************************************!*\
  !*** ./src/app/employee/list-employee.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2xpc3QtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee/list-employee.component.html":
/*!*******************************************************!*\
  !*** ./src/app/employee/list-employee.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr class=\"bg-primary\">\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Contact Preference</th>\n        <th colspan=\"2\">Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let employee of employees\">\n        <td>{{employee.fullName}}</td>\n        <td>{{employee.email}}</td>\n        <td>{{employee.phone}}</td>\n        <td>{{employee.contactPreference}}</td>\n        <td><button class=\"btn btn-primary\" (click)=\"editButtonClick(employee.id)\">Edit</button></td>\n        <td><button class=\"btn btn-primary\" (click)=\"deleteButtonClick(employee.id)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div>\n  <h2>Cookies</h2>\n  <button  class=\"btn-primary\" (click)=\"setCookies()\">Set Cookies</button>\n  <button  class=\"btn-primary\" (click)=\"getCookies()\">Get Cookies</button>\n  <button  class=\"btn-danger\" (click)=\"deleteCookies()\">Delete Cookies</button>\n</div>\n\n<div>\n    <h2>Local Storage</h2>\n    <button  class=\"btn-primary\" (click)=\"setlocalstorage()\">Set Local Storage</button>\n    <button  class=\"btn-primary\" (click)=\"getlocalstorage()\">Get Local Storage</button>\n    <button  class=\"btn-danger\" (click)=\"deletelocalstorage()\">Delete Local Storage</button>\n</div>\n\n\n<div>\n    <h2>Session Storage</h2>\n    <button  class=\"btn-primary\" (click)=\"setsessionstorage()\">Set Session Storage</button>\n    <button  class=\"btn-primary\" (click)=\"getsessionstorage()\">Get Session Storage</button>\n    <button  class=\"btn-danger\" (click)=\"deletesessionstorage()\">Delete Session Storage</button>\n</div>"

/***/ }),

/***/ "./src/app/employee/list-employee.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/employee/list-employee.component.ts ***!
  \*****************************************************/
/*! exports provided: ListEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeeComponent", function() { return ListEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm5/angular-web-storage.js");






var ListEmployeeComponent = /** @class */ (function () {
    function ListEmployeeComponent(_employeeService, _router, _cookiesService, _localstorage, _sessionstorage) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._cookiesService = _cookiesService;
        this._localstorage = _localstorage;
        this._sessionstorage = _sessionstorage;
    }
    ListEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (listEmployees) { return _this.employees = listEmployees; }, function (err) { return console.log(err); });
    };
    ListEmployeeComponent.prototype.setCookies = function () {
        this._cookiesService.set('test', 'testing cookies');
    };
    ListEmployeeComponent.prototype.getCookies = function () {
        alert(this._cookiesService.get("test"));
    };
    ListEmployeeComponent.prototype.deleteCookies = function () {
        this._cookiesService.delete("test");
    };
    ListEmployeeComponent.prototype.setlocalstorage = function () {
        this._localstorage.set("userName", "Kameshwar Gupta");
    };
    ListEmployeeComponent.prototype.getlocalstorage = function () {
        alert(this._localstorage.get("userName"));
    };
    ListEmployeeComponent.prototype.deletelocalstorage = function () {
        this._localstorage.clear();
    };
    ListEmployeeComponent.prototype.setsessionstorage = function () {
        this._sessionstorage.set("logged-in", "Kameshwar");
    };
    ListEmployeeComponent.prototype.getsessionstorage = function () {
        alert(this._sessionstorage.get("logged-in"));
    };
    ListEmployeeComponent.prototype.deletesessionstorage = function () {
        this._sessionstorage.clear();
    };
    ListEmployeeComponent.prototype.editButtonClick = function (employeeId) {
        console.log(this._employeeService.baseUrl);
        this._router.navigate(['/employees/edit', employeeId]);
    };
    ListEmployeeComponent.prototype.deleteButtonClick = function (employeeId) {
        var _this = this;
        this._employeeService.deleteEmployee(employeeId).subscribe(function () { return _this._router.navigate(['employees']); }, function (err) { return console.log(err); });
        console.log(employeeId);
    };
    ListEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-employee',
            template: __webpack_require__(/*! ./list-employee.component.html */ "./src/app/employee/list-employee.component.html"),
            styles: [__webpack_require__(/*! ./list-employee.component.css */ "./src/app/employee/list-employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
    ], ListEmployeeComponent);
    return ListEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive {\r\n    width: 100%;\r\n    height: 20%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNwb25zaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Employee Management System</h3>\n  </div>\n\n  <div class=\"panel-body\">\n    <img src=\"../assets/images/Employee.png\" class=\"img-thumbnail responsive\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/*!**********************************************!*\
  !*** ./src/app/page-not-found.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h3>The Page you are looking for cannot be found.</h3>\n\n"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom.validators.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/custom.validators.ts ***!
  \*********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
//Custom validator for email which is reusable for any form
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.emailDomain = function (domainName) {
        return function (control) {
            var email = control.value;
            var domain = email.substring(email.lastIndexOf('@') + 1);
            if (email === '' || domain === domainName) {
                return null;
            }
            else {
                return { 'emailDomain': true };
            }
        };
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            declarations: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Cli\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map