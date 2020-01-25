(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/shared/digital-unav/src/index.ts":
/*!************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/index.ts ***!
  \************************************************************************************************/
/*! exports provided: SharedDigitalUnavModule, DigitalUnavHeaderComponent, DigitalUnavFooterComponent, UNAV_CONFIG, LinkUrl, UNAV_USER_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_digital_unav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-digital-unav.module */ "../../../libs/shared/digital-unav/src/lib/shared-digital-unav.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedDigitalUnavModule", function() { return _lib_shared_digital_unav_module__WEBPACK_IMPORTED_MODULE_0__["SharedDigitalUnavModule"]; });

/* harmony import */ var _lib_components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/digital-unav-header/digital-unav-header.component */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DigitalUnavHeaderComponent", function() { return _lib_components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_1__["DigitalUnavHeaderComponent"]; });

/* harmony import */ var _lib_components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/digital-unav-footer/digital-unav-footer.component */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DigitalUnavFooterComponent", function() { return _lib_components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_2__["DigitalUnavFooterComponent"]; });

/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNAV_CONFIG", function() { return _lib_config__WEBPACK_IMPORTED_MODULE_3__["UNAV_CONFIG"]; });

/* harmony import */ var _lib_models_linkUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/linkUrl */ "../../../libs/shared/digital-unav/src/lib/models/linkUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkUrl", function() { return _lib_models_linkUrl__WEBPACK_IMPORTED_MODULE_4__["LinkUrl"]; });

/* harmony import */ var _lib_util_user_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/util/user-state */ "../../../libs/shared/digital-unav/src/lib/util/user-state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNAV_USER_STATE", function() { return _lib_util_user_state__WEBPACK_IMPORTED_MODULE_5__["UNAV_USER_STATE"]; });









/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer *ngIf=\"(content$ | async) as content\" id=\"divfootermain\">\n  <div class=\"footer__main footer__main-primary\">\n    <div class=\"footer__header\">\n      <h2 class=\"footer__header--copy\" id=\"digital-footer-tmobile-icon-title\">{{content.iconSection[0].title}}</h2>\n      <ul class=\"footer__social-links\">\n        <ng-container *ngFor=\"let iconSection of content.iconSection\">\n          <ng-container *ngIf=\"iconSection.iconType == 'T-MOBILE-ICON'\">\n\n            <li>\n              <ng-container *ngFor=\"let item of iconSection.link;let i=index\">\n                <a tmoDigitalAnalytics *ngIf=\"item.linkUrl[0]\" [href]=\"item.linkUrl[0].linkHref\"\n                  [attr.aria-label]=\"item.linkUrl[0].linkText\"\n                  id=\"digital-footer-tmobile-icon-{{i}}\"\n                  [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n                  eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'><span\n                    class=\"mdi {{ item.icon }}\"></span>\n                </a>\n              </ng-container>\n            </li>\n          </ng-container>\n        </ng-container>\n      </ul>\n      <div class=\"footer__language-links\">\n        <ng-container *ngFor=\"let item of content.languageLinks;let i=index\">\n          <a *ngIf=\"item.linkUrl[0]\" tmoDigitalAnalytics class=\"langLink\" [class.language__link--active]=\"i===0\"\n            id=\"digital-footer-language-switch-{{i}}\" [href]=\"item.linkUrl[0].linkHref\"\n            [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            attr.data-lang=\"{{item.id === 'english-lang' ? 'en' :'es'}}\"\n            attr.data-href=\"{{item.linkUrl[0].linkHref}}\" mporgnav=\"\" onclick=\"return switchLanguage(this);function switchLanguage(e) {\n                    MP.init();\n          var lang = e.getAttribute('data-lang');\n           var url = e.getAttribute('data-href');\n           var tSite = MP.tSite.replace(/(https?:\\/\\/|\\/?$)/g,'');\n           url = url.replace(/(https?:\\/\\/|\\/?$)/g,'');\n           MP.switchLanguage(tSite.search(url)!=-1?MP.oSite:url, lang, true);\n           return false;}\"\n            eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'>{{ item.linkUrl[0].linkText }}</a>\n        </ng-container>\n      </div>\n    </div>\n    <div>\n      <ul class=\"footer__content\">\n        <tmo-unav-dropdown-container>\n\n          <li *ngFor=\"let item of content.categoryLinks;let i=index\">\n            <tmo-footer-panel id=\"digital-footer-panel-{{i}}\" [index]=\"i\"[content]=\"item\"> </tmo-footer-panel>\n          </li>\n        </tmo-unav-dropdown-container>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"footer__main footer__main-secondary\">\n    <div class=\"footer__bottom--icon\" *ngIf=\"content.logo && content.logo.linkUrl[0]\">\n      <a tmoDigitalAnalytics class=\"navbar__brand\" [href]=\" content.logo.linkUrl[0] ?content.logo.linkUrl[0].linkHref :''\"\n        aria-label=\"T-Mobile\"  [attr.target]=\"content.logo.targetWindow === 'NEW' ? '_blank' : '_self'\"\n        eventData='{\"navType\": \"fNav\",\"category\":\"{{ content.logo.linkUrl[0].linkText }}\"}'\n        >\n        <img [src]=\"content.logo.icon\" alt=\"{{content.logo.linkUrl[0].linkText}}\" />\n      </a>\n    </div>\n\n    <div class=\"footer__bottom--links\">\n      <ul class=\"footer__bottom--links-top\">\n        <li *ngFor=\"let item of content.secondaryTopLinks;let i=index\">\n          <a tmoDigitalAnalytics *ngIf=\"item.linkUrl[0]\"  id=\"digital-footer-bottom-link-top-{{i}}\" [href]=\"item.linkUrl[0].linkHref\"\n            [attr.aria-label]=\"item.linkUrl[0].linkText\"\n            [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'>\n            {{ item.linkUrl[0].linkText }}</a>\n        </li>\n      </ul>\n      <ul class=\"footer__bottom--links-secondary\">\n        <li *ngFor=\"let item of content.secondaryBottomLinks;let i=index\">\n          <a tmoDigitalAnalytics *ngIf=\"item.linkUrl[0] && item.id!='event'\"  id=\"digital-footer-bottom-link-bottom-{{i}}\" [href]=\"item.linkUrl[0].linkHref\"\n            [attr.aria-label]=\"item.linkUrl[0].linkText\"\n            [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'>\n            {{ item.linkUrl[0].linkText }}</a>\n\n            <a tmoDigitalAnalytics *ngIf=\"item.linkUrl[0] && item.id ==='event'\"  id=\"digital-footer-bottom-link-bottom-{{i}}\"\n            (click)='triggerEvent(item.linkUrl[0].linkHref)'\n            href=\"javascript:void(0)\"\n            [attr.aria-label]=\"item.linkUrl[0].linkText\"\n            [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'>\n            {{ item.linkUrl[0].linkText }}</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"footer__bottom--social--link\">\n      <ul class=\"footer__social-links\">\n\n        <ng-container *ngFor=\"let iconSectionSecondary of content.iconSectionSecondary\">\n          <ng-container *ngIf=\"iconSectionSecondary.iconType == 'CORPORATE-ICON'\">\n            <li>\n              <ng-container *ngFor=\"let item of iconSectionSecondary.link ;let i=index \">\n                <a tmoDigitalAnalytics *ngIf=\"item.linkUrl[0]\" [href]=\"item.linkUrl[0].linkHref\"\n                  [attr.aria-label]=\"item.linkUrl[0].linkText\"\n                  id=\"digital-footer-corporate-icon-{{i}}\"\n                  [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n                  eventData='{\"navType\": \"fNav\",\"category\":\"{{ item.linkUrl[0].linkText }}\"}'><span\n                    class=\"mdi {{ item.icon }}\"></span>\n                </a>\n                \n              </ng-container>\n            </li>\n          </ng-container>\n        </ng-container>\n      </ul>\n      <p class=\"footer__bottom--copyright\" id=\"digital-footer-copyright\" *ngIf=\"content.copyRight.linkUrl[0]\"  [innerHTML]=\"content.copyRight.linkUrl[0].linkText\">\n       \n      </p>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer__main {\n  padding-left: 20px;\n  padding-right: 20px;\n  -webkit-font-smoothing: none; }\n  @media (min-width: 768px) {\n    .footer__main {\n      padding-left: 40px;\n      padding-right: 40px; } }\n  @media (min-width: 1024px) {\n    .footer__main {\n      padding-left: 60px;\n      padding-right: 60px; } }\n  @media (min-width: 1680px) {\n    .footer__main {\n      padding-left: 260px;\n      padding-right: 260px; } }\n  .footer__main-primary {\n    padding-top: 18px;\n    padding-bottom: 24px;\n    background-color: #333333; }\n  @media (min-width: 768px) {\n      .footer__main-primary {\n        padding-top: 32px;\n        padding-bottom: 40px; } }\n  .footer__main-secondary {\n    background-color: #262626;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    display: flex;\n    flex-flow: row wrap;\n    border-top: solid 1px #ffffff; }\n  @media (min-width: 768px) {\n      .footer__main-secondary {\n        flex-flow: row wrap;\n        justify-content: space-between; } }\n  @media (min-width: 1024px) {\n      .footer__main-secondary {\n        flex-flow: row nowrap; } }\n  .footer__main h2, .footer__main a, .footer__main li, .footer__main button, .footer__main ul, .footer__main p {\n    color: #ffffff !important;\n    padding: 0;\n    margin: 0;\n    line-height: 1.71;\n    margin: 0;\n    padding: 0; }\n  .footer__main li, .footer__main a {\n    text-decoration: none !important; }\n  .footer__main p, .footer__main a, .footer__main li, .footer__main button {\n    font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Helvetica Neue\", Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    font-size: 14px; }\n  .footer__main .footer__header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  @media (min-width: 768px) {\n      .footer__main .footer__header {\n        flex-direction: row;\n        align-items: center; } }\n  .footer__main .footer__header--copy {\n    font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Helvetica Neue\", Arial, sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    margin-bottom: 16px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__header--copy {\n        font-size: 24px;\n        margin-bottom: 0px; } }\n  .footer__main .footer__content {\n    margin-top: 16px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__content {\n        margin-top: 32px;\n        -webkit-column-count: 4;\n                column-count: 4;\n        -ms-column-count: 4;\n        -moz-column-count: 4; } }\n  @media (min-width: 1024px) {\n      .footer__main .footer__content {\n        margin-top: 40px;\n        -webkit-column-count: 6;\n                column-count: 6;\n        -ms-column-count: 6;\n        -moz-column-count: 6; } }\n  .footer__main .footer__content li {\n      text-decoration: none;\n      list-style: none; }\n  .footer__main .footer__social-links {\n    flex: 1;\n    align-items: center;\n    display: flex;\n    padding: 0;\n    margin: 0px 0px 8px 0px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__social-links {\n        margin: 0px 0px 0px 24px; } }\n  .footer__main .footer__social-links li {\n      list-style: none;\n      display: flex; }\n  .footer__main .footer__social-links li a {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-right: 20px; }\n  .footer__main .footer__social-links li a:hover, .footer__main .footer__social-links li a a:focus {\n          color: #e20074; }\n  .footer__main .footer__social-links li a span {\n          font-size: 14px; }\n  @media (min-width: 768px) {\n            .footer__main .footer__social-links li a span {\n              font-size: 16px; } }\n  @media (min-width: 1024px) {\n            .footer__main .footer__social-links li a span {\n              font-size: 24px; } }\n  .footer__main .footer__bottom--social--link {\n    order: 1;\n    flex: 1; }\n  @media (min-width: 768px) {\n      .footer__main .footer__bottom--social--link {\n        order: 0;\n        flex: 1 1 100%;\n        display: flex; } }\n  @media (min-width: 1024px) {\n      .footer__main .footer__bottom--social--link {\n        order: 0;\n        flex: none;\n        display: block; } }\n  .footer__main .footer__bottom--social--link .footer__social-links {\n      justify-content: flex-start;\n      margin: 0; }\n  @media (min-width: 768px) {\n        .footer__main .footer__bottom--social--link .footer__social-links {\n          margin: 0 0 26px;\n          padding: 0;\n          flex: none; } }\n  @media (min-width: 1024px) {\n        .footer__main .footer__bottom--social--link .footer__social-links {\n          order: 0; } }\n  .footer__main .footer__language-links {\n    display: flex;\n    align-items: center;\n    font-size: 14px; }\n  .footer__main .footer__language-links a:hover, .footer__main .footer__language-links a:focus {\n      color: #e20074; }\n  .footer__main .footer__language-links a:first-child {\n      padding-right: 24px; }\n  .footer__main .footer__language-links .language__link--active {\n      font-weight: bold; }\n  .footer__main .footer__bottom--icon {\n    order: 0;\n    height: 100%;\n    padding-right: 16px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__bottom--icon {\n        order: 1;\n        padding-right: 24px; } }\n  @media (min-width: 1024px) {\n      .footer__main .footer__bottom--icon {\n        order: 0;\n        padding-right: 26px; } }\n  .footer__main .footer__bottom--icon img {\n      width: auto;\n      height: 40px; }\n  @media (min-width: 768px) {\n        .footer__main .footer__bottom--icon img {\n          width: auto;\n          height: 50px; } }\n  @media (min-width: 1024px) {\n        .footer__main .footer__bottom--icon img {\n          width: auto;\n          height: 56px; } }\n  .footer__main .footer__bottom--links {\n    order: 2;\n    font-size: 12px;\n    margin-top: 24px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__bottom--links {\n        flex: 9;\n        margin-top: 0;\n        padding-right: 40px; } }\n  @media (min-width: 1024px) {\n      .footer__main .footer__bottom--links {\n        flex: 1;\n        order: 0; } }\n  .footer__main .footer__bottom--links li {\n      display: inline-block;\n      margin: 0 0 16px;\n      word-wrap: none; }\n  @media (min-width: 768px) {\n        .footer__main .footer__bottom--links li {\n          margin-bottom: 8px; } }\n  .footer__main .footer__bottom--links a {\n      padding-right: 24px;\n      font-size: 12px; }\n  .footer__main .footer__bottom--links .footer__bottom--links-top {\n      font-weight: bold; }\n  .footer__main .footer__bottom--copyright {\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.33;\n    letter-spacing: normal;\n    color: #f2f2f2;\n    margin-top: 10px; }\n  @media (min-width: 768px) {\n      .footer__main .footer__bottom--copyright {\n        margin-top: 0;\n        padding-top: 4px; } }\n  @media (min-width: 1024px) {\n      .footer__main .footer__bottom--copyright {\n        padding-top: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvZGlnaXRhbC11bmF2LWZvb3Rlci9EOlxcVE1PX1BST0pFQ1RTXFxUTU5HXFx0bW8tYWVtLXVpLWludGVncmF0aW9uXFx0bW8tbmcvbGlic1xcc2hhcmVkXFxkaWdpdGFsLXVuYXZcXHNyY1xcbGliXFxjb21wb25lbnRzXFxkaWdpdGFsLXVuYXYtZm9vdGVyXFxkaWdpdGFsLXVuYXYtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9kaWdpdGFsLXVuYXYtZm9vdGVyL0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXHNhc3NcXF9taXhpbnMuc2NzcyIsImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvZGlnaXRhbC11bmF2LWZvb3Rlci9EOlxcVE1PX1BST0pFQ1RTXFxUTU5HXFx0bW8tYWVtLXVpLWludGVncmF0aW9uXFx0bW8tbmcvbGlic1xcc2hhcmVkXFxkaWdpdGFsLXVuYXZcXHNyY1xcbGliXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE2QixFQUFBO0VDQzdCO0lESkY7TUFNSSxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUEsRUFnUnRCO0VDN1FDO0lEVkY7TUFXSSxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUEsRUEyUXRCO0VDalFDO0lEdEJGO01BZ0JJLG1CQUFtQjtNQUNuQixvQkFBb0IsRUFBQSxFQXNRdkI7RUFuUUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBT3BCLHlCQUF5QixFQUFBO0VDekIzQjtNRGdCQTtRQUtJLGlCQUFp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QVE7SUFDUixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUNoT2xCO01ESkY7UUFzT00sT0FBTztRQUNQLGFBQWE7UUFDYixtQkFBbUIsRUFBQSxFQXdCdEI7RUN0UEQ7TURWRjtRQTRPTSxPQUFPO1FBQ1AsUUFBUSxFQUFBLEVBbUJYO0VBaFFIO01BZ1BNLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0VDOU9uQjtRREpGO1VBcVBRLGtCQUFrQixFQUFBLEVBRXJCO0VBdlBMO01BeVBNLG1CQUFtQjtNQUNuQixlQUNGLEVBQUE7RUEzUEo7TUE4UE0saUJBQWlCLEVBQUE7RUE5UHZCO0lBbVFJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQ3RRbEI7TURKRjtRQTZRTSxhQUFhO1FBQ2IsZ0JBQWdCLEVBQUEsRUFNbkI7RUMxUUQ7TURWRjtRQWtSTSxnQkFBZ0IsRUFBQSxFQUVuQiIsImZpbGUiOiJsaWJzL3NoYXJlZC9kaWdpdGFsLXVuYXYvc3JjL2xpYi9jb21wb25lbnRzL2RpZ2l0YWwtdW5hdi1mb290ZXIvZGlnaXRhbC11bmF2LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcblxuLmZvb3Rlcl9fbWFpbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZyA6IG5vbmU7XG5cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxuXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICB9XG5cbiAgQGluY2x1ZGUgZXh0cmEtbGFyZ2UtZGVza3RvcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNjBweDtcbiAgfVxuXG4gICYtcHJpbWFyeSB7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICB9XG4gICYtc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZmZmZmZmO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIH1cbiAgfVxuXG4gIGgyLCBhLCBsaSwgYnV0dG9uLCB1bCwgcCB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudCA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSwgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICBwLCBhLCBsaSwgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeS1ub3JtYWw7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4XG4gIH1cblxuICAuZm9vdGVyX19oZWFkZXIge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB9XG4gIH1cbiAgLmZvb3Rlcl9faGVhZGVyLS1jb3B5IHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeS1ub3JtYWw7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcblxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXJfX2NvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgIGNvbHVtbi1jb3VudDogNDtcbiAgICAgIC1tcy1jb2x1bW4tY291bnQ6IDQ7XG4gICAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcbiAgICB9XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgY29sdW1uLWNvdW50OiA2O1xuICAgICAgLW1zLWNvbHVtbi1jb3VudDogNjtcbiAgICAgIC1tb3otY29sdW1uLWNvdW50OiA2O1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFsLWxpbmtzIHtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXJnaW46IDBweCAwcHggMHB4IDI0cHg7XG5cbiAgICB9XG4gICAgbGkge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgJjpob3ZlcixhOmZvY3VzIHtcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXJfX2JvdHRvbS0tc29jaWFsLS1saW5rIHtcbiAgICBvcmRlcjogMTtcbiAgICBmbGV4OiAxO1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBvcmRlcjogMDtcbiAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgIH1cbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIG9yZGVyOiAwO1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxuICAgIC5mb290ZXJfX3NvY2lhbC1saW5rcyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBtYXJnaW46IDAgMCAyNnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlcl9fbGFuZ3VhZ2UtbGlua3Mge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBhOmhvdmVyLGE6Zm9jdXMge1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbiAgICBhOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLmxhbmd1YWdlX19saW5rLS1hY3RpdmUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLmZvb3Rlcl9fYm90dG9tLS1pY29uIHtcbiAgICBvcmRlcjogMDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBvcmRlcjogMTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBvcmRlcjogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAuZm9vdGVyX19ib3R0b20tLWxpbmtzIHtcbiAgICBvcmRlcjogMjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZmxleDogOTtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgZmxleDogMTtcbiAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDAgMCAxNnB4O1xuICAgICAgd29yZC13cmFwOiBub25lO1xuXG4gICAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweFxuICAgIH1cblxuICAgIC5mb290ZXJfX2JvdHRvbS0tbGlua3MtdG9wIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuXG4gIC5mb290ZXJfX2JvdHRvbS0tY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICB9XG4gIH1cblxuXG59XG5cbiIsIkBtaXhpbiBtb2JpbGUtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGV4dHJhLWxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cbiIsIlxuXG5cbiRwcmltYXJ5OiAjZTIwMDc0O1xuJHByaW1hcnktaG92ZXI6ICNiYTAwNjA7XG4kcHJpbWFyeS1mb2N1czogI2ExMDA1MztcbiRibGFjazogIzAwMDAwMDtcbiRibGFjay1zZWNvbmRhcnk6ICMyNjI2MjY7XG4kYmxhY2stdGhpcmQ6IzIxMjEyMTtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJHdoaXRlLXNlY29uZGFyeTojZjhmOGY4O1xuJHdoaXRlLXRoaXJkOiAjZjJmMmYyO1xuJHdoaXRlLWZvdXJ0aDogI2Y2ZjZmNjtcbiR3aGl0ZS1maWZ0aDogI2U4ZThlODtcbiRncmF5OiAjY2NjY2NjO1xuJGdyYXktc2Vjb25kYXJ5OiAjYjNiM2IzO1xuJGdyYXktZGFyazojNmE2YTZhO1xuJGdyYXktbGlnaHQ6IzliOWI5YjtcbiRncmF5LWRhcmtlc3Q6ICMzMzMzMzM7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LWJvbGQ6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLFxuXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnktbm9ybWFsOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LXVsdHJhOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktdGVsZUdyb3Rlc2tOZXh0LXVsdHJhOiBcIlRlbGVHcm90ZXNrTmV4dC1VbHRyYVwiO1xuXG4kdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcblxuIl19 */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: DigitalUnavFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalUnavFooterComponent", function() { return DigitalUnavFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content.service */ "../../../libs/shared/digital-unav/src/lib/services/content.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");






var DigitalUnavFooterComponent = /** @class */ (function () {
    function DigitalUnavFooterComponent(cs, platformId, ref) {
        this.cs = cs;
        this.platformId = platformId;
        this.ref = ref;
        this.clientId = 'default';
        this.mock = 'false';
        this.digitalUnavEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DigitalUnavFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.content$ = this.contentData
            ? this.cs
                .parse(this.contentData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])({ complete: function () { return _this.ref.detectChanges(); } }))
            : this.cs
                .getContent(this.clientId, _models__WEBPACK_IMPORTED_MODULE_3__["UnavComponent"].ComponentTypeEnum.FOOTER, this.site)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])({ complete: function () { return _this.ref.detectChanges(); } }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (e) { return Boolean(e); }));
    };
    DigitalUnavFooterComponent.prototype.ngAfterViewInit = function () {
    };
    DigitalUnavFooterComponent.prototype.triggerEvent = function (event) {
        this.digitalUnavEvent.emit(event);
        console.log(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavFooterComponent.prototype, "clientId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavFooterComponent.prototype, "contentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavFooterComponent.prototype, "mock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavFooterComponent.prototype, "site", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DigitalUnavFooterComponent.prototype, "digitalUnavEvent", void 0);
    DigitalUnavFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-digital-footer',
            template: __webpack_require__(/*! ./digital-unav-footer.component.html */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./digital-unav-footer.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"], String, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DigitalUnavFooterComponent);
    return DigitalUnavFooterComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header #headerNavbar *ngIf=\"(content$ | async) as headerDetails\" class=\"ntm-navbar\" id=\"header_navbar\"\n  [class.is-side-menu]=\"sideMenuState.menuState\" [class.ntm-navbar--light]=\"theme === 'light'\"\n  [class.ntm-navbar--dark]=\"theme === 'dark'\" [tmoFocusListen]=\"sideMenuState.menuState\"\n  (focusChange)=\"closeHamburger()\">\n  <div class=\"skip-links\">\n    <a href=\"#maincontent\" class=\"sr-only skip-link\">Skip to main content</a>\n    <a href=\"#divfootermain\" class=\"sr-only skip-link\">Skip to footer</a>\n  </div>\n  <div class=\"ntm-navbar__universal-menu-bar\" role=\"banner\" *ngIf=\"skinny!=='true'\">\n    <div class=\"ntm-navbar__universal-menu-item\" [class.is-active]=\"site.activeState\"\n      *ngFor=\"let site of headerDetails.sites; let i = index\">\n      <a class=\"nav__link\" tabindex=\"0\" id=\"universal-menu-{{i}}\" [href]=\"site.linkUrl[0].linkHref\"\n        [attr.target]=\"site.targetWindow === 'NEW' ? '_blank' : '_self'\" role=\"menuitem\" [attr.aria-label]=\"site.label\"\n        tmoDigitalAnalytics\n        eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{site.linkUrl[0].linkText}}&quot;}\">\n        {{ site.linkUrl[0].linkText }}\n      </a>\n    </div>\n  </div>\n  <div [ngStyle]=\"sticky === 'true' && wrapperHeight\">\n  <div #stickyHeader class=\"ntm-navbar__menu-bar\" [class.is_sticky_header] = \"isSticky === true\" role=\"banner\"\n  [class.is_sticky_dark_bg]=\"isSticky === true && theme === 'dark'\"\n  [class.is_sticky_light_bg]=\"isSticky === true && theme === 'light'\"\n   >\n    <a *ngIf=\"headerDetails.logo && headerDetails.logo.linkUrl\" class=\"ntm-navbar__brand\"\n      [href]=\"headerDetails.logo.linkUrl[0].linkHref\" [attr.aria-label]=\"headerDetails.logo.label\"\n      id=\"digital-header-logo-url\" [attr.target]=\"\n        headerDetails.logo.targetWindow === 'NEW' ? '_blank' : '_self'\n      \" [class.mobile-close]=\"activeSlide != 'defaultMenu'\" tmoDigitalAnalytics\n      eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{headerDetails.logo.linkUrl[0].linkText}}&quot;}\">\n      <img [src]=\"headerDetails.logo.icon\" id=\"digital-header-logo-img\" alt=\"{{headerDetails.logo.linkUrl[0].linkText}}\" />\n    </a>\n    <div class=\"ntm-navbar__hamburger-container\">\n      <button #prevSlideButton id=\"prevSlideButton\"class=\"navbar__prev-slide sm-text-left show-sm\"\n        [class.is-active]=\"activeSlide !== 'defaultMenu'\" [disabled]=\"activeSlide === 'defaultMenu'\"\n        (click)=\"toggleDefaultMenu()\" *ngIf=\"sideMenuState.menuState && backButton \" aria-label=\"Previous slide\">\n        <span class=\"mdi mdi-arrow-left\"></span>\n      </button>\n\n      <ng-container *ngFor=\"let item of headerDetails.utility; let i = index\">\n        <div class=\"ntm-navbar__hamburger-links\" id=\"{{ item.id }}-mobile\" *ngIf=\"item.showInMobileView\"\n          [class.hide]=\"sideMenuState.menuState || activeSlide === 'searchMenu'\">\n          <a [class.tmo_tfn_number.invocaTelLink]=\"item.id === 'call-us'\" class=\"nav__link\"\n            id=\"digital-header-utility-mobile-{{i}}\" [href]=\"item.linkUrl[0].linkHref\" [attr.aria-label]=\"item.label\"\n            [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            *ngIf=\"item.id != 'search' && item.id != 'account-menu' && item.id != 'event' && item.linkUrl[0].linkHref\" tmoDigitalAnalytics\n            eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{item.linkUrl[0].linkText}}&quot;}\">\n            <span class=\"mdi {{ item.icon }} navbar__cart-item\"\n              [matBadge]=\"item.id === 'cart' ? (cartCounter$ | async) : null\" matBadgeColor=\"warn\"\n              matBadgeSize=\"small\"></span>\n            <span class=\"navbar__mobile_text\">{{item.linkUrl[0].linkText}}</span>\n          </a>\n          <a\n            class=\"nav__link\"\n            id=\"digital-header-utility-mobile-{{i}}\"\n            [href]=\"\"\n            [attr.aria-label]=\"item.label\"\n            *ngIf=\"item.id == 'event'\"\n            tmoDigitalAnalytics\n            (click)= \"onUtilClick($event, item.linkUrl[0].linkHref)\"\n            eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{item.linkUrl[0].linkText}}&quot;}\">\n            <span class=\"mdi {{ item.icon }} navbar__cart-item\"\n              [matBadge]=\"item.id === 'cart' ? (cartCounter$ | async) : null\" matBadgeColor=\"warn\"\n              matBadgeSize=\"small\"></span>\n            <span class=\"navbar__mobile_text\">{{item.linkUrl[0].linkText}}</span>\n          </a>\n\n          <a class=\"nav__link\" id=\"digital-header-utility-mobile-{{i}}\" [id]=\"item.id\" href=\"javascript:void(0)\"\n            [attr.aria-label]=\"item.label\" (click)=\"toggleSearchMenu()\" [class.is-active]=\"activeSlide === 'searchMenu'\"\n            *ngIf=\"item.id === 'search'\" [attr.aria-expanded]=\"activeSlide === 'searchMenu' ? 'true' : 'false'\">\n            <span class=\"mdi {{ item.icon }} \"></span>\n            <span class=\"navbar__mobile_text\">{{item.linkUrl[0].linkText}}</span>\n          </a>\n          <a  class=\"nav__link\" href=\"javascript:void(0)\"\n            id=\"digital-header-utility-mobile-{{i}}\" [attr.aria-label]=\"item.label\"\n            aria-haspopup=\"true\"\n            [attr.aria-expanded]=\"activeSlide === 'loginMenu' ? true : false\"\n            *ngIf=\"item.id === 'account-menu'\"\n            (click)=\"openHamburger();toggleLoginMenu(true)\"\n            >\n            <span class=\"mdi {{ item.icon }} \"></span>\n            <span class=\"navbar__mobile_text\">{{item.linkUrl[0].linkText}}</span>\n          </a>\n        </div>\n      </ng-container>\n      <button tmoDigitalAnalytics\n        eventData=\"{&quot;navType&quot;: &quot;tnav&quot; , &quot;category&quot;:&quot;Menu&quot;}\"\n        class=\"ntm-navbar__hamburger\" (click)=\"openHamburger()\"\n        *ngIf=\"!sideMenuState.menuState\" id=\"digital-header-menu-button\">\n        <span class=\"mdi mdi-menu\"></span> {{ headerDetails.title }}\n      </button>\n\n      <button class=\"ntm-navbar__hamburger-close\" (click)=\"closeHamburger()\" *ngIf=\"sideMenuState.menuState\">\n        <span class=\"mdi mdi-close\"></span>\n      </button>\n    </div>\n\n    <div #defaultMenu class=\"navbar__collapse navbar__collapse--default-menu\"\n      [class.notSticky]=\"isSticky !== true\"\n      [class.is-active]=\"sideMenuState.menuState\" [class.is-hidden]=\"this.activeSlide !== 'defaultMenu' ? true : false\"\n      [@centerX]=\"sideMenuState.menuState ? 'open' : 'closed'\">\n      <div class=\"navbar__collapse--slide\">\n        <div class=\"navbar__collapse--container\">\n          <tmo-unav-dropdown-container>\n            <ul class=\"ntm-navbar__nav ntm-navbar__nav--left\">\n              <tmo-unav-dropdown [mobileView]=\"sideMenuState.mobileState\" [menuItemData]=\"menuItemData\" (closeMenu)=\"closeMenu()\" *ngFor=\"\n                  let item of headerDetails.navigationLinks;\n                  let i = index\n                \" [data]=\"item\" [index]=\"i\" id=\"nav-link-contaniner-{{i}}\"\n                [class.ntm-navbar--light]=\"theme === 'light'\" [class.ntm-navbar--dark]=\"theme === 'dark'\">\n              </tmo-unav-dropdown>\n            </ul>\n          </tmo-unav-dropdown-container>\n        </div>\n        <div class=\"navbar__collapse--container container--grey\">\n          <ul class=\"ntm-navbar__nav ntm-navbar__nav--right\" [class.search-menu-active]=\"activeSlide === 'searchMenu'\">\n\n            <ng-container *ngFor=\"let item of headerDetails.utility; let i = index\">\n              <li class=\"navbar__item\"\n                  *ngIf=\"!item.showInMobileView\"\n                  [id]=\"item.id\"\n                  [class.navbar__item-search-bar]=\"item.id === 'search'\"\n              >\n                <a\n                  [class.tmo_tfn_number.invocaTelLink]=\"item.id === 'call-us'\"\n                  [class.tmo_tfn_number]=\"item.linkUrl[0].linkHref\"\n                  class=\"nav__link\"\n                  id=\"digital-header-utility-{{i}}\"\n                  [href]=\"item.linkUrl[0].linkHref\"\n                  [attr.aria-label]=\"item.label\"\n                  *ngIf=\"\n                    item.linkUrl[0].linkHref &&\n                    item.id != 'call-us' &&\n                    item.id != 'search' &&\n                    item.id != 'cart' &&\n                    item.id != 'account-menu' &&\n                    item.id != 'event'\"\n                  [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n                  tmoDigitalAnalytics\n                  eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{item.linkUrl[0].linkText}}&quot;}\">\n                  <span class=\"mdi {{ item.icon }}\"></span>\n                  <span class=\"d-inline show-on-sm-modal\">{{ item.linkUrl[0].linkText }}</span>\n                  <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span>\n                </a>\n\n              <div\n                *ngIf=\"item.id === 'search' && !sideMenuState.mobileState\"\n                class=\"navbar__collapse--search-bar search__bar-inline\"\n                [attr.aria-hidden]=\"item.id === 'search' && activeSlide === 'searchMenu'\n                  ? false\n                  : true\"\n                [tmoFocusListen]=\"this.activeSlide === 'searchMenu' ? true : false\"\n                (focusChange)=\"toggleSearchMenu()\"\n              >\n                <tmo-search-bar\n                  [isOpened]=\"activeSlide === 'searchMenu' ? true : false\"\n                  [searchAuthData]=\"headerDetails.search\"\n                  [class.ntm-navbar--light]=\"theme === 'light'\"\n                  [class.ntm-navbar--dark]=\"theme === 'dark'\"\n                  [url]=\"item.linkUrl[0].linkHref\"\n                  [setInputFocus]=\"this.activeSlide === 'searchMenu' ? true : false\"\n                  [searchAuthData]=\"headerDetails.search\">\n                </tmo-search-bar>\n              </div>\n\n              <a *ngIf=\"item.id === 'search'\"\n                id=\"digital-header-utility-{{i}}\"\n                class=\"nav__link\"\n                [class.is-active]=\"activeSlide === 'searchMenu'\"\n                (click)=\"toggleSearchMenu()\"\n                href=\"javascript:void(0)\"\n                [attr.aria-label]=\"item.label\"\n                [attr.aria-expanded]=\"activeSlide === 'searchMenu' ? 'true' : 'false'\"\n              >\n                <span class=\"mdi\" [ngClass]=\"activeSlide != 'searchMenu' ? item.icon : ''\"></span>\n                <span\n                  *ngIf=\"activeSlide != 'searchMenu' || sideMenuState.mobileState\"\n                  class=\"d-inline show-on-sm-modal\">\n                  {{ item.linkUrl[0].linkText }}\n                </span>\n                <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span>\n              </a>\n\n                <a class=\"nav__link\" id=\"digital-header-utility-{{i}}\" href=\"javascript:void(0)\" [attr.aria-label]=\"item.label\"\n                  (click)=\"toggleLoginMenu()\" [class.is-active]=\"activeSlide === 'loginMenu'\" *ngIf=\"item.id === 'account-menu'\"\n                  [attr.aria-expanded]=\"activeSlide === 'loginMenu' ? 'true' : 'false'\">\n                  <span class=\"mdi {{item.icon}}\" ></span>\n                  <span class=\"d-inline show-on-sm-modal\">{{\n                                  item.linkUrl[0].linkText\n                                }}</span>\n                  <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span>\n                </a>\n\n                <a class=\"nav__link\" id=\"digital-header-utility-{{i}}\" [id]=\"item.id\" [href]=\"item.linkUrl[0].linkHref\"\n                  [attr.aria-label]=\"item.label\" *ngIf=\"item.id === 'cart'\"\n                  [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\" tmoDigitalAnalytics\n                  eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{item.linkUrl[0].linkText}}&quot;}\">\n                  <span class=\"mdi {{ item.icon }} navbar__cart-item\" matBadgePosition=\"above after\"\n                    [matBadge]=\"cartCounter$ | async\" matBadgeSize=\"medium\"></span>\n                  <span class=\"d-inline show-on-sm-modal\">{{\n                    item.linkUrl[0].linkText\n                  }}</span>\n                  <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span></a>\n                 <!--for schedule call modal-->\n                  <a\n                  [class.tmo_tfn_number]=\"item.linkUrl[0].linkHref\"\n                  class=\"nav__link\"\n                  id=\"digital-header-utility-{{i}}\"\n                  [href]=\"\"\n                  [attr.aria-label]=\"item.label\"\n                  *ngIf=\"item.id == 'event'\"\n                  tmoDigitalAnalytics\n                  (click)= \"onUtilClick($event, item.linkUrl[0].linkHref)\">\n                  <span class=\"mdi {{ item.icon }}\"></span>\n                  <span class=\"d-inline show-on-sm-modal\">{{ item.linkUrl[0].linkText }}</span>\n                  <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span>\n                </a>\n                <button mat-button disableRipple [disabled]=\"item.disabled\" class=\"cta-button full-width\"  [class.primary-dark]=\"theme === 'dark'\"\n                 [ngClass]=\"(item.buttonType === 'secondary-black')?'mat-stroked-button mat-primary':\n                 (item.buttonType === 'secondary-magenta')?'mat-stroked-button mat-accent':\n                 (item.buttonType === 'primary-magenta')?'mat-flat-button mat-accent':\n                 (item.buttonType === 'primary-black')?'mat-flat-button mat-primary':''\"  id=\"digital-header-utility-{{i}}\" href=\"javascript:void(0)\" [attr.aria-label]=\"item.label\"\n                [class.is-active]=\"activeSlide === 'loginMenu'\" *ngIf=\"item.id === 'login-menu'\"\n                [attr.aria-expanded]=\"activeSlide === 'loginMenu' ? 'true' : 'false'\">\n                <span class=\"d-inline\">{{item.linkUrl[0].linkText}} </span>\n    \n                </button>\n              <button mat-button  [disabled]=\"item.disabled\" disableRipple class=\"cta-button full-width lastitem\"    \n              [ngClass]=\"(item.buttonType === 'secondary-black')?'mat-stroked-button mat-primary':\n              (item.buttonType === 'secondary-magenta')?'mat-stroked-button mat-accent':\n              (item.buttonType === 'primary-magenta')?'mat-flat-button mat-accent':\n              (item.buttonType === 'primary-black')?'mat-flat-button mat-primary':''\"\n              [class.primary-dark]=\"theme === 'dark'\"\n                id=\"digital-header-utility-{{i}}\" href=\"javascript:void(0)\" [attr.aria-label]=\"item.label\"\n                [class.is-active]=\"activeSlide === 'get-started'\" *ngIf=\"item.id === 'get-started'\">\n                <span class=\"d-inline\">{{item.linkUrl[0].linkText }} </span>\n              </button>\n              </li>\n\n              <tmo-unav-dropdown\n                *ngIf=\"item.id === 'call-us' \"\n                [mobileView]=\"sideMenuState.mobileState\"\n                [menuItemData]=\"menuItemData\"\n                (closeMenu)=\"closeMenu()\"\n                [data]=\"item\"\n                [index]=\"i\"\n                id=\"digital-header-utility-{{i}}\"\n                [class.ntm-navbar--light]=\"theme === 'light'\"\n                [class.ntm-navbar--dark]=\"theme === 'dark'\">\n              </tmo-unav-dropdown>\n\n          </ng-container>\n\n         <!-- <li  class=\"navbar__item\" *ngIf=\"sideMenuState.mobileState && headerDetails.userLinks\">\n              <a class=\"nav__link\" id=\"user-links-dropdown-mobile\" href=\"javascript:void(0)\" aria-label=\"open side menu\"\n              (click)=\"toggleLoginMenu()\" [class.is-active]=\"activeSlide === 'loginMenu'\"\n              [attr.aria-expanded]=\"activeSlide === 'loginMenu' ? 'true' : 'false'\">\n              <span class=\"mdi {{headerDetails.userLinks?.mobileIcon}}\" ></span>\n              <span class=\"d-inline show-on-sm-modal\">{{headerDetails.userLinks.labelText}}</span>\n              <span class=\"ntm-arrow mdi mdi-chevron-right show-sm\"></span>\n            </a>\n          </li> \n\n            <!-- <li class=\"navbar__item navbar__item-button navbar__item-login\" *ngIf=\"!sideMenuState.mobileState && headerDetails.userLinks\">\n              <button class=\"nav__link nav__link-button dropdown-toggles nav__link-button-desktop\"\n                [ngClass]=\"headerDetails.userLinks.labelColor\" id=\"user-links-dropdown\" aria-haspopup=\"true\"\n                [attr.aria-expanded]=\"\n                  activeSlide === 'loginMenu' ? true : false\n                \" (click)=\"toggleLoginMenu()\">\n                {{ headerDetails.userLinks.labelText }}\n                <span class=\"mdi\" [class.mdi-chevron-down]=\"activeSlide !== 'loginMenu'\"\n                  [class.mdi-chevron-up]=\"activeSlide === 'loginMenu'\"></span>\n              </button>\n            </li> -->\n          </ul>\n        </div>\n\n        <div class=\"navbar__collapse--container container--grey navbar__collapse--universal-menu\">\n          <p class=\"navbar__item\">{{headerDetails.sitesTitle}}</p>\n          <ul class=\"ntm-navbar__nav ntm-navbar__nav--right ntm-navbar__nav-universal-menu-right\">\n            <li class=\"navbar__item\" [class.is-active]='site.activeState' *ngFor=\"let site of headerDetails.sites; let i = index\">\n              <a class=\"nav__link\" tabindex=\"0\" id=\"universal-menu-mobile-{{i}}\" [href]=\"site.linkUrl[0].linkHref\"\n                [attr.target]=\"site.targetWindow === 'NEW' ? '_blank' : '_self'\" role=\"menuitem\"\n                [attr.aria-label]=\"site.label\" tmoDigitalAnalytics\n                eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;category&quot;:&quot;{{site.linkUrl[0].linkText}}&quot;}\">\n                {{ site.linkUrl[0].linkText }}\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"navbar__collapse navbar__collapse--login-menu\"\n      [class.notSticky]=\"isSticky !== true\"\n      [class.is-active]=\"this.activeSlide === 'loginMenu' ? true : false\"\n      [attr.aria-hidden]=\"this.activeSlide != 'loginMenu' ? true : false\"\n      [tmoFocusListen]=\"this.activeSlide === 'loginMenu' ? true : false\" (focusChange)=\"toggleLoginMenu()\">\n      <tmo-log-in-menu *ngIf=\"\n          headerDetails.userLinks && headerDetails.userLinks.link.length > 0\n        \" [data]=\"headerDetails.userLinks\" [isOpened]=\"this.activeSlide === 'loginMenu' ? true : false\"\n        [class.ntm-navbar--light]=\"theme === 'light'\" [class.ntm-navbar--dark]=\"theme === 'dark'\"\n        (closeLoginMenu)=\"toggleLoginMenu()\">\n      </tmo-log-in-menu>\n    </div>\n\n    <div class=\"navbar__collapse navbar__collapse--search-bar\"\n      [class.notSticky]=\"isSticky !== true\"\n      [class.is-active]=\"this.activeSlide === 'searchMenu' ? true : false\"\n      [attr.aria-hidden]=\"this.activeSlide != 'searchMenu' ? true : false\">\n      <ng-container *ngFor=\"let item of headerDetails.utility\">\n        <tmo-search-bar *ngIf=\"item.id == 'search'\" [setInputFocus]=\"this.activeSlide === 'searchMenu' ? true : false\"\n          [class.ntm-navbar--light]=\"theme === 'light'\" [class.ntm-navbar--dark]=\"theme === 'dark'\"\n          [url]=\"item.linkUrl[0].linkHref\" [searchAuthData]=\"headerDetails.search\">\n        </tmo-search-bar>\n      </ng-container>\n    </div>\n  </div>\n  </div>\n</header>\n<form method=\"post\" action=\"\" id=\"MyTmosessionLogOut\">\n  <input type=\"hidden\" name=\"logOutParam\" id=\"logOutParamtext\" value=\"true\" />\n  <input type=\"hidden\" name=\"redirectUrlParam\" id=\"redirectUrlParamText\"/>\n</form>\n"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*** Basic button styles ***/\nbutton.mat-button, button.mat-flat-button, button.mat-stroked-button,\na.mat-button,\na.mat-flat-button,\na.mat-stroked-button {\n  border-radius: 0;\n  transition: background-color 0.3s; }\n/*** CTA button styles ***/\nbutton.cta-button,\n.mat-button.cta-button,\na.cta-button {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: bold;\n  height: 48px;\n  min-width: 120px;\n  padding: 0 0; }\nbutton.cta-button.mat-button,\n  .mat-button.cta-button.mat-button,\n  a.cta-button.mat-button {\n    padding: 0; }\nbutton.cta-button.mat-button:not([disabled]) .mat-button-wrapper,\n    .mat-button.cta-button.mat-button:not([disabled]) .mat-button-wrapper,\n    a.cta-button.mat-button:not([disabled]) .mat-button-wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: center; }\nbutton.cta-button.mat-button:not([disabled]) .mat-button-wrapper::after,\n      .mat-button.cta-button.mat-button:not([disabled]) .mat-button-wrapper::after,\n      a.cta-button.mat-button:not([disabled]) .mat-button-wrapper::after {\n        direction: ltr;\n        display: inline-block;\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: normal;\n        letter-spacing: normal;\n        text-transform: none;\n        white-space: nowrap;\n        word-wrap: normal;\n        -webkit-font-smoothing: antialiased;\n        content: 'keyboard_arrow_right';\n        font-size: 24px;\n        margin-left: 0.2rem;\n        margin-right: 0.25rem;\n        transition: margin 0.3s; }\nbutton.cta-button.mat-button:not([disabled]):hover .mat-button-wrapper::after, button.cta-button.mat-button:not([disabled]):focus .mat-button-wrapper::after, button.cta-button.mat-button:not([disabled]):active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-button:not([disabled]):hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-button:not([disabled]):focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-button:not([disabled]):active .mat-button-wrapper::after,\n    a.cta-button.mat-button:not([disabled]):hover .mat-button-wrapper::after,\n    a.cta-button.mat-button:not([disabled]):focus .mat-button-wrapper::after,\n    a.cta-button.mat-button:not([disabled]):active .mat-button-wrapper::after {\n      margin-left: 0.45rem;\n      margin-right: 0; }\nbutton.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: padding 0.3s; }\nbutton.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after {\n      direction: ltr;\n      display: inline-block;\n      font-family: 'Material Icons';\n      font-style: normal;\n      font-weight: normal;\n      letter-spacing: normal;\n      text-transform: none;\n      white-space: nowrap;\n      word-wrap: normal;\n      -webkit-font-smoothing: antialiased;\n      content: 'keyboard_arrow_right';\n      font-size: 24px;\n      transition: right 0.3s, opacity 0.3s;\n      height: 100%; }\nbutton.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem; }\nbutton.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]) .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]) .mat-button-wrapper::after {\n      opacity: 0;\n      position: absolute;\n      right: 3rem;\n      width: 1rem; }\nbutton.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper {\n    padding-right: 1rem;\n    padding-left: 0; }\nbutton.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]):hover .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]):focus .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]):active .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]):hover .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]):focus .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]):active .mat-button-wrapper::after {\n      opacity: 1;\n      right: 2rem; }\nbutton.cta-button.mat-stroked-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after,\n  .mat-button.cta-button.mat-flat-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after,\n  a.cta-button.mat-stroked-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after,\n  a.cta-button.mat-flat-button:not([disabled]) .cta-button-clicked .mat-button-wrapper::after {\n    opacity: 0;\n    right: 1rem; }\nbutton.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper {\n    padding-right: 0;\n    padding-left: 0; }\nbutton.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).full-width .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).fixed-width .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).full-width .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).fixed-width .mat-button-wrapper::after {\n      margin-left: -0.5rem;\n      position: relative;\n      right: 0;\n      transition: margin 0.3s, opacity 0.3s;\n      width: 1rem; }\nbutton.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper, button.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper,\n  .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper,\n  a.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper,\n  a.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper {\n    padding-right: 0;\n    padding-left: 0; }\nbutton.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after, button.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after, button.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after,\n    .mat-button.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).full-width:hover .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).full-width:focus .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).full-width:active .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after,\n    a.cta-button.mat-stroked-button:not([disabled]).fixed-width:active .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).full-width:hover .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).full-width:focus .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).full-width:active .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).fixed-width:hover .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).fixed-width:focus .mat-button-wrapper::after,\n    a.cta-button.mat-flat-button:not([disabled]).fixed-width:active .mat-button-wrapper::after {\n      margin-left: 0.1rem;\n      right: 0; }\nbutton.cta-button.cta-button-small,\n  .mat-button.cta-button.cta-button-small,\n  a.cta-button.cta-button-small {\n    font-size: rem(14px); }\nbutton.cta-button.cta-button-large,\n  .mat-button.cta-button.cta-button-large,\n  a.cta-button.cta-button-large {\n    height: rem(56px);\n    line-height: rem(56px); }\nbutton.mat-button:hover .mat-button-focus-overlay,\n.mat-button.mat-button:hover .mat-button-focus-overlay,\na.mat-button:hover .mat-button-focus-overlay {\n  opacity: 0; }\nbutton.full-width,\n.mat-button.full-width,\na.full-width {\n  width: 100%; }\nbutton.inline-button,\n.mat-button.inline-button,\na.inline-button {\n  height: inherit;\n  line-height: inherit;\n  margin-bottom: 0; }\nbutton.inline-button .mat-button-wrapper,\n  .mat-button.inline-button .mat-button-wrapper,\n  a.inline-button .mat-button-wrapper {\n    height: inherit; }\n/*** Block button style ***/\n.button-block-group {\n  display: flex;\n  flex-direction: column; }\nbutton.button-block,\na.button-block {\n  background-color: #f2f2f2;\n  border-radius: 0;\n  font-weight: bold;\n  text-align: left;\n  margin-bottom: rem(8px);\n  padding: rem(16px) rem(24px); }\nbutton.button-block::after,\n  a.button-block::after {\n    direction: ltr;\n    display: inline-block;\n    font-family: 'Material Icons';\n    font-style: normal;\n    font-weight: normal;\n    letter-spacing: normal;\n    text-transform: none;\n    white-space: nowrap;\n    word-wrap: normal;\n    -webkit-font-smoothing: antialiased;\n    content: 'keyboard_arrow_right';\n    font-size: 24px;\n    position: absolute;\n    right: 2rem; }\nbutton.button-block:hover, button.button-block:active,\n  a.button-block:hover,\n  a.button-block:active {\n    background-color: #e20074;\n    color: #ffffff;\n    transition: background-color 0.3s, color 0.3s; }\n/*** Angular Material - default color adjustments ***/\n.primary-dark.mat-stroked-button[disabled], .primary-dark.mat-stroked-button.mat-primary[disabled], .primary-dark.mat-stroked-button.mat-accent[disabled], .primary-dark.mat-stroked-button.mat-warn[disabled],\n.mat-button[disabled],\n.mat-button.mat-primary[disabled],\n.mat-button.mat-accent[disabled],\n.mat-button.mat-warn[disabled],\n.mat-icon-button[disabled],\n.mat-icon-button.mat-primary[disabled],\n.mat-icon-button.mat-accent[disabled],\n.mat-icon-button.mat-warn[disabled],\n.mat-stroked-button[disabled],\n.mat-stroked-button.mat-primary[disabled],\n.mat-stroked-button.mat-accent[disabled],\n.mat-stroked-button.mat-warn[disabled] {\n  border-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary,\n.mat-raised-button.mat-primary,\n.mat-fab.mat-primary,\n.mat-mini-fab.mat-primary {\n  background-color: #000000; }\n.mat-flat-button.mat-primary:hover:not([disabled]),\n  .mat-raised-button.mat-primary:hover:not([disabled]),\n  .mat-fab.mat-primary:hover:not([disabled]),\n  .mat-mini-fab.mat-primary:hover:not([disabled]) {\n    background-color: #333333; }\n.mat-flat-button.mat-primary:focus, .mat-flat-button.mat-primary:active,\n  .mat-raised-button.mat-primary:focus,\n  .mat-raised-button.mat-primary:active,\n  .mat-fab.mat-primary:focus,\n  .mat-fab.mat-primary:active,\n  .mat-mini-fab.mat-primary:focus,\n  .mat-mini-fab.mat-primary:active {\n    background-color: #262626; }\n.mat-flat-button.mat-accent:hover:not([disabled]),\n.mat-raised-button.mat-accent:hover:not([disabled]),\n.mat-fab.mat-accent:hover:not([disabled]),\n.mat-mini-fab.mat-accent:hover:not([disabled]) {\n  background-color: #ba0060; }\n.mat-flat-button.mat-accent:focus, .mat-flat-button.mat-accent:active,\n.mat-raised-button.mat-accent:focus,\n.mat-raised-button.mat-accent:active,\n.mat-fab.mat-accent:focus,\n.mat-fab.mat-accent:active,\n.mat-mini-fab.mat-accent:focus,\n.mat-mini-fab.mat-accent:active {\n  background-color: #a10053; }\n.mat-stroked-button.mat-primary {\n  color: #000000;\n  border-color: #000000; }\n.mat-stroked-button.mat-primary:hover:not([disabled]) {\n    background-color: rgba(248, 248, 248, 0.5); }\n.mat-stroked-button.mat-primary:focus, .mat-stroked-button.mat-primary:active {\n    background-color: #f2f2f2; }\n.mat-stroked-button.mat-accent {\n  border-color: #e20074; }\n.mat-stroked-button.mat-accent:hover:not([disabled]) {\n    background-color: rgba(246, 109, 179, 0.1); }\n.mat-stroked-button.mat-accent:focus, .mat-stroked-button.mat-accent:active {\n    background-color: rgba(246, 109, 179, 0.5); }\n.button-row a,\n.button-row button {\n  margin-right: rem(16px); }\np + .button-row {\n  margin-top: rem(24px); }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  background-color: #e20074; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  color: #ffffff; }\n.mat-button.mat-accent,\n.mat-icon-button.mat-accent,\n.mat-stroked-button.mat-accent {\n  color: #e20074; }\n.mat-flat-button.mat-accent {\n  color: #ffffff; }\n.primary-dark.mat-flat-button.mat-primary:not([disabled]), .primary-dark.mat-flat-button.mat-accent:not([disabled]) {\n  background-color: #ffffff;\n  color: #e20074; }\n.primary-dark.mat-flat-button.mat-primary:not([disabled]):hover:not([disabled]), .primary-dark.mat-flat-button.mat-accent:not([disabled]):hover:not([disabled]) {\n    background-color: #e8e8e8; }\n.primary-dark.mat-flat-button.mat-primary:not([disabled]):focus, .primary-dark.mat-flat-button.mat-primary:not([disabled]):active, .primary-dark.mat-flat-button.mat-accent:not([disabled]):focus, .primary-dark.mat-flat-button.mat-accent:not([disabled]):active {\n    background-color: #e8e8e8; }\n.primary-dark.mat-stroked-button.mat-primary:not([disabled]), .primary-dark.mat-stroked-button.mat-accent:not([disabled]) {\n  border-color: #ffffff;\n  color: #ffffff; }\n.primary-dark.mat-stroked-button.mat-primary:not([disabled]):hover:not([disabled]), .primary-dark.mat-stroked-button.mat-accent:not([disabled]):hover:not([disabled]) {\n    background-color: rgba(255, 255, 255, 0.2); }\n.primary-dark.mat-stroked-button.mat-primary:not([disabled]):focus, .primary-dark.mat-stroked-button.mat-primary:not([disabled]):active, .primary-dark.mat-stroked-button.mat-accent:not([disabled]):focus, .primary-dark.mat-stroked-button.mat-accent:not([disabled]):active {\n    background-color: rgba(255, 255, 255, 0.5); }\n.primary-dark.mat-flat-button.mat-primary[disabled], .primary-dark.mat-flat-button.mat-accent[disabled] {\n  background-color: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.3); }\n.primary-dark.mat-stroked-button.mat-primary[disabled], .primary-dark.mat-stroked-button.mat-accent[disabled] {\n  border-color: rgba(255, 255, 255, 0.12); }\n.primary-dark.mat-stroked-button.mat-primary[disabled], .primary-dark.mat-stroked-button.mat-accent[disabled] {\n  color: rgba(255, 255, 255, 0.3); }\n.ntm-navbar.ntm-navbar--light {\n  background: #ffffff;\n  color: #000000; }\n@media (max-width: 1023px) {\n    .ntm-navbar.ntm-navbar--light .navbar__collapse.navbar__collapse--default-menu.is-active {\n      background-color: white; } }\n@media (min-width: 768px) {\n    .ntm-navbar.ntm-navbar--light .navbar__collapse.notSticky {\n      background: #ffffff; } }\n.ntm-navbar.ntm-navbar--light .navbar__collapse .navbar__collapse--container.container--grey {\n    background: #f8f8f8; }\n.ntm-navbar.ntm-navbar--light .navbar__collapse .navbar__collapse--container.container--grey p.navbar__item {\n      color: #6a6a6a; }\n@media (min-width: 1024px) {\n      .ntm-navbar.ntm-navbar--light .navbar__collapse .navbar__collapse--container.container--grey {\n        background: inherit; } }\n.ntm-navbar.ntm-navbar--light .ntm-navbar__universal-menu-bar {\n    background-color: #f6f6f6; }\n.ntm-navbar.ntm-navbar--light .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item.is-active {\n      background-color: #ffffff; }\n.ntm-navbar.ntm-navbar--light .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link {\n      color: #6a6a6a; }\n.ntm-navbar.ntm-navbar--light .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link:focus, .ntm-navbar.ntm-navbar--light .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link:hover {\n        color: #e20074;\n        text-decoration: none; }\n.ntm-navbar.ntm-navbar--dark {\n  background: #000000;\n  color: #ffffff; }\n.ntm-navbar.ntm-navbar--dark .navbar__collapse {\n    color: #ffffff; }\n@media (max-width: 1023px) {\n      .ntm-navbar.ntm-navbar--dark .navbar__collapse.navbar__collapse--default-menu.is-active {\n        background-color: black; } }\n@media (min-width: 768px) {\n      .ntm-navbar.ntm-navbar--dark .navbar__collapse.notSticky {\n        background: #000000;\n        color: #ffffff; } }\n.ntm-navbar.ntm-navbar--dark .navbar__collapse .navbar__collapse--container.container--grey {\n      background: #262626; }\n.ntm-navbar.ntm-navbar--dark .navbar__collapse .navbar__collapse--container.container--grey p.navbar__item {\n        color: #cccccc; }\n@media (min-width: 1024px) {\n        .ntm-navbar.ntm-navbar--dark .navbar__collapse .navbar__collapse--container.container--grey {\n          background: inherit; } }\n.ntm-navbar.ntm-navbar--dark .ntm-navbar__universal-menu-bar {\n    background-color: #333333; }\n.ntm-navbar.ntm-navbar--dark .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item.is-active {\n      background-color: #000000; }\n.ntm-navbar.ntm-navbar--dark .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link {\n      color: #b3b3b3; }\n.ntm-navbar.ntm-navbar--dark .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link:focus, .ntm-navbar.ntm-navbar--dark .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item .nav__link:hover {\n        color: #ffffff;\n        text-decoration: none; }\n.ntm-navbar.ntm-navbar--dark .navbar__collapse--slide {\n    background-color: #000000; }\n.ntm-navbar.ntm-navbar--dark .ntm-navbar__hamburger-container .ntm-navbar__hamburger, .ntm-navbar.ntm-navbar--dark .ntm-navbar__hamburger-container .ntm-navbar__hamburger-close, .ntm-navbar.ntm-navbar--dark .ntm-navbar__hamburger-container .navbar__prev-slide {\n    color: #ffffff; }\n.ntm-navbar {\n  background: #ffffff;\n  color: #000000;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Helvetica Neue\", Arial, sans-serif;\n  transition: height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n  z-index: 9;\n  width: 100%; }\n.ntm-navbar.ntm-navbar--dark {\n    background: #000000;\n    color: #ffffff; }\n.ntm-navbar.is-side-menu {\n    z-index: 9999;\n    position: fixed; }\n@media (min-width: 768px) {\n      .ntm-navbar.is-side-menu {\n        position: inherit; } }\n.ntm-navbar.is-side-menu .ntm-navbar__hamburger-container {\n      padding: 0;\n      flex-grow: 0;\n      width: 100%;\n      position: fixed;\n      right: 0;\n      bottom: inherit;\n      z-index: 99999; }\n@media (min-width: 768px) {\n        .ntm-navbar.is-side-menu .ntm-navbar__hamburger-container {\n          width: 320px; } }\n.ntm-navbar .ntm-navbar__universal-menu-bar {\n    display: none;\n    width: 100%;\n    align-items: stretch;\n    height: 100%;\n    flex-wrap: nowrap; }\n@media (min-width: 1024px) {\n      .ntm-navbar .ntm-navbar__universal-menu-bar {\n        display: flex; } }\n.ntm-navbar .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item {\n      height: 100%;\n      padding: 6px 8px;\n      font-size: 10px;\n      font-weight: bold;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.2;\n      letter-spacing: 0.9px;\n      text-transform: uppercase; }\n.ntm-navbar .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item.is-active {\n        background-color: #ffffff; }\n.ntm-navbar .ntm-navbar__universal-menu-bar .ntm-navbar__universal-menu-item a {\n        font-size: 10px;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.2;\n        letter-spacing: 0.9px; }\n.ntm-navbar .ntm-navbar__menu-bar {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 8px;\n    justify-content: flex-start;\n    position: relative; }\n@media (min-width: 1024px) {\n      .ntm-navbar .ntm-navbar__menu-bar {\n        justify-content: inherit; } }\n.ntm-navbar .ntm-navbar__menu-bar.is_sticky_header {\n      position: fixed;\n      top: 0;\n      width: 100%;\n      flex-wrap: nowrap;\n      z-index: 998;\n      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n.ntm-navbar .ntm-navbar__menu-bar.is_sticky_light_bg {\n      background: #ffffff; }\n.ntm-navbar .ntm-navbar__menu-bar.is_sticky_dark_bg {\n      background: #000000; }\n.ntm-navbar .skip-links {\n    background: #262626; }\n.ntm-navbar .skip-link {\n    clip: rect(0, 0, 0, 0);\n    display: inline-block;\n    height: 1px;\n    font-size: 16px;\n    margin: -1px;\n    overflow: hidden;\n    position: absolute;\n    width: 1px; }\n.ntm-navbar .skip-link:focus {\n      clip: auto;\n      color: #fff;\n      height: auto;\n      margin: 10px 15px;\n      overflow: visible;\n      position: static;\n      width: auto; }\n.ntm-navbar .mdi.navbar__cart-item {\n    position: relative; }\n.ntm-navbar .mdi.navbar__cart-item .mat-badge-content {\n      background-color: #e20074; }\n@media (min-width: 1024px) {\n        .ntm-navbar .mdi.navbar__cart-item .mat-badge-content {\n          top: -16px; } }\n.ntm-navbar .ntm-navbar__brand {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    font-size: 8px;\n    white-space: nowrap;\n    margin-right: 12px;\n    opacity: 1;\n    transition: 0.2s 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\n    width: auto;\n    height: 48px;\n    z-index: 999; }\n.ntm-navbar .ntm-navbar__brand.mobile-close {\n      transition: 0.2s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n      opacity: 0;\n      -webkit-transform: scaleY(0);\n              transform: scaleY(0); }\n@media (min-width: 768px) {\n      .ntm-navbar .ntm-navbar__brand {\n        transition: none; }\n        .ntm-navbar .ntm-navbar__brand.mobile-close {\n          -webkit-transform: none;\n                  transform: none;\n          opacity: 1; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .ntm-navbar__brand {\n        width: auto;\n        height: 56px; } }\n.ntm-navbar .ntm-navbar__brand img {\n      max-height: 48px;\n      width: auto; }\n@media (min-width: 1024px) {\n        .ntm-navbar .ntm-navbar__brand img {\n          max-height: 56px; } }\n.ntm-navbar .ntm-navbar__nav {\n    padding-left: 0;\n    list-style: none;\n    font-size: 14px;\n    line-height: 1.71;\n    font-weight: normal;\n    margin: 0;\n    display: block; }\n@media (min-width: 1024px) {\n      .ntm-navbar .ntm-navbar__nav {\n        display: flex;\n        flex-wrap: wrap;\n        align-content: center;\n        align-items: stretch;\n        height: 100%; } }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right {\n      font-weight: bold;\n      padding: 24px 0;\n      position: relative;\n      transition: width 0.2s cubic-bezier(0.25, 0.1, 0.25, 1); }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right.ntm-navbar__nav-universal-menu-right {\n        padding: 12px 0; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right.search-menu-active .navbar__item:not(.navbar__item-search-bar) {\n        visibility: hidden;\n        opacity: 0; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right.search-menu-active .navbar__item-search-bar ~ .navbar__item {\n        visibility: visible;\n        opacity: 1; }\n@media (min-width: 1024px) {\n        .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right {\n          padding: 0;\n          font-weight: normal; } }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item .nav__link > .mdi {\n        margin-right: 5.7072px;\n        margin-top: 3px;\n        position: relative; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item .nav__link > .mdi.ntm-arrow {\n        margin-right: 0;\n        flex-grow: 1;\n        text-align: right; }\n@media (min-width: 1024px) {\n        .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item.navbar__item-login .nav__link > .mdi {\n          margin-right: 0;\n          margin-left: 3px;\n          margin-top: 1px; } }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .nav__link:not(.dropdown-toggles) {\n        display: flex;\n        border: none;\n        background: none;\n        width: 100%;\n        font-size: 16px;\n        align-items: center;\n        font-weight: bold;\n        line-height: 1.71; }\n@media (min-width: 1024px) {\n          .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .nav__link:not(.dropdown-toggles) {\n            font-size: 14px; }\n            .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .nav__link:not(.dropdown-toggles).is-active {\n              cursor: default; } }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .nav__link:not(.dropdown-toggles) .mdi.mdi-chevron-right {\n          flex: 1;\n          text-align: right; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login) {\n        opacity: 1;\n        transition: opacity 0.3s 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\n        padding: 12px 0;\n        margin-bottom: 0;\n        flex-direction: row;\n        align-items: center;\n        flex-wrap: wrap;\n        justify-content: space-between; }\n@media (min-width: 1024px) {\n          .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login) {\n            margin: inherit;\n            padding: 0 16px 0 0; } }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login).navbar__item-search-bar {\n          display: flex;\n          flex-wrap: nowrap;\n          position: inherit; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login).navbar__item-search-bar .search__bar-inline {\n            display: none;\n            position: absolute;\n            right: 100%;\n            top: 0; }\n.ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login).navbar__item-search-bar .search__bar-inline[aria-hidden=true] {\n              visibility: hidden;\n              transition: visibility 0s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n@media (min-width: 1024px) {\n              .ntm-navbar .ntm-navbar__nav.ntm-navbar__nav--right .navbar__item:not(.navbar__item-login).navbar__item-search-bar .search__bar-inline {\n                width: 402px;\n                height: 100%;\n                display: flex;\n                align-items: center; } }\n.ntm-navbar .ntm-navbar__hamburger-container {\n    padding-right: 10px;\n    flex-grow: 1;\n    z-index: 3;\n    display: flex;\n    justify-content: flex-end; }\n@media (min-width: 768px) {\n      .ntm-navbar .ntm-navbar__hamburger-container {\n        padding-right: 18px;\n        flex-grow: 0;\n        width: 300px;\n        position: absolute;\n        right: 0;\n        bottom: 12px; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .ntm-navbar__hamburger-container {\n        display: none; } }\n.ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger:hover, .ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger:focus, .ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger-close:hover, .ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger-close:focus, .ntm-navbar .ntm-navbar__hamburger-container .navbar__prev-slide:hover, .ntm-navbar .ntm-navbar__hamburger-container .navbar__prev-slide:focus {\n    color: #6a6a6a;\n    text-decoration: none; }\n.ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger-links {\n    display: flex;\n    align-items: center; }\n.ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger-links.hide {\n      display: none; }\n.ntm-navbar .ntm-navbar__hamburger-container .ntm-navbar__hamburger-links .nav__link {\n      margin-right: 20px; }\n.ntm-navbar .navbar__prev-slide {\n    font-size: 24px;\n    background-color: transparent;\n    border: 0;\n    padding-left: 18px;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n    opacity: 0;\n    transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); }\n@media (min-width: 768px) {\n      .ntm-navbar .navbar__prev-slide {\n        position: relative;\n        top: 0;\n        transition: none;\n        opacity: 1; }\n        .ntm-navbar .navbar__prev-slide[disabled] {\n          transition: none; } }\n.ntm-navbar .navbar__prev-slide.is-active {\n      -webkit-transform: scaleY(1);\n              transform: scaleY(1);\n      opacity: 1;\n      transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n.ntm-navbar .ntm-navbar__hamburger-close {\n    font-size: 24px;\n    margin-right: 0;\n    margin-left: auto;\n    display: flex;\n    border: none;\n    padding: 0;\n    background-color: transparent;\n    box-sizing: content-box;\n    float: right;\n    padding-right: 18px; }\n.ntm-navbar .ntm-navbar__hamburger-close.is-active, .ntm-navbar .ntm-navbar__hamburger-close:hover, .ntm-navbar .ntm-navbar__hamburger-close:active, .ntm-navbar .ntm-navbar__hamburger-close:focus {\n      color: #6a6a6a; }\n.ntm-navbar .ntm-navbar__hamburger {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #262626;\n    padding-left: 0px;\n    background-color: transparent;\n    border: none;\n    box-sizing: content-box;\n    float: right; }\n.ntm-navbar .ntm-navbar__hamburger.is-active, .ntm-navbar .ntm-navbar__hamburger:hover, .ntm-navbar .ntm-navbar__hamburger:active, .ntm-navbar .ntm-navbar__hamburger:focus {\n      color: #6a6a6a; }\n.ntm-navbar .ntm-navbar__hamburger span.mdi {\n      font-size: 36px;\n      margin-right: 8px;\n      line-height: 1;\n      position: relative; }\n.ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n    width: 100%; }\n@media (min-width: 768px) {\n      .ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n        width: 320px; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n        display: none; } }\n.ntm-navbar .navbar__collapse.navbar__collapse--login-menu, .ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n    transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    box-shadow: none;\n    opacity: 1; }\n@media (min-width: 1024px) {\n      .ntm-navbar .navbar__collapse.navbar__collapse--login-menu, .ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n        -webkit-transform: translate3d(0%, 0, 0);\n                transform: translate3d(0%, 0, 0); } }\n.ntm-navbar .navbar__collapse.navbar__collapse--login-menu[aria-hidden=\"true\"], .ntm-navbar .navbar__collapse.navbar__collapse--search-bar[aria-hidden=\"true\"] {\n      visibility: hidden;\n      opacity: 0; }\n.ntm-navbar .navbar__collapse.navbar__collapse--login-menu.is-active, .ntm-navbar .navbar__collapse.navbar__collapse--search-bar.is-active {\n      transition: -webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n      transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n      -webkit-transform: translate3d(0%, 0, 0);\n              transform: translate3d(0%, 0, 0); }\n.ntm-navbar .navbar__collapse {\n    overflow: hidden;\n    display: inherit;\n    position: fixed;\n    bottom: 0;\n    padding-top: 64px;\n    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);\n    visibility: hidden;\n    transition: visibility 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n    top: 0;\n    right: 0;\n    opacity: 0;\n    width: 100%;\n    z-index: 998; }\n.ntm-navbar .navbar__collapse.is-active {\n      visibility: visible;\n      transition: opacity 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n      opacity: 1; }\n.ntm-navbar .navbar__collapse.is-active .navbar__collapse--slide {\n        -webkit-transform: translate3d(0%, 0, 0);\n                transform: translate3d(0%, 0, 0);\n        transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n.ntm-navbar .navbar__collapse.is-hidden {\n      visibility: hidden;\n      transition: visibility 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse.is-hidden {\n          visibility: hidden; } }\n.ntm-navbar .navbar__collapse.is-hidden .navbar__collapse--slide {\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n        transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n@media (min-width: 1024px) {\n          .ntm-navbar .navbar__collapse.is-hidden .navbar__collapse--slide {\n            -webkit-transform: none;\n                    transform: none; } }\n@media (min-width: 768px) {\n      .ntm-navbar .navbar__collapse {\n        width: 320px; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .navbar__collapse {\n        width: inherit;\n        transition: none;\n        visibility: visible;\n        display: flex;\n        flex-grow: 1;\n        z-index: 9;\n        overflow: visible;\n        position: relative;\n        align-items: stretch;\n        justify-content: flex-end;\n        padding: 0;\n        height: 100%;\n        opacity: 1;\n        box-shadow: none; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .navbar__collapse.navbar__collapse--default-menu {\n        visibility: visible !important;\n        display: block !important;\n        z-index: 999; } }\n@media (min-width: 1024px) {\n      .ntm-navbar .navbar__collapse.navbar__collapse--login-menu, .ntm-navbar .navbar__collapse.navbar__collapse--search-bar {\n        position: absolute;\n        top: 70px; } }\n.ntm-navbar .navbar__collapse .navbar__collapse--container {\n      padding: 0 18px; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__collapse--container {\n          padding: 0; }\n          .ntm-navbar .navbar__collapse .navbar__collapse--container:nth-of-type(1) {\n            flex: 1; } }\n.ntm-navbar .navbar__collapse .navbar__collapse--container.container--grey:last-of-type {\n        height: 100%;\n        border-top: 1px solid #cccccc; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__collapse--container.container--grey {\n          height: auto;\n          background-color: inherit; } }\n.ntm-navbar .navbar__collapse .navbar__slide--container {\n      width: calc(100%*2);\n      overflow: hidden; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__slide--container {\n          width: auto;\n          overflow: inherit;\n          flex: 1; } }\n.ntm-navbar .navbar__collapse .navbar__collapse--slide {\n      background-color: inherit;\n      height: 100%;\n      -webkit-transform: translate3d(0%, 0, 0);\n              transform: translate3d(0%, 0, 0);\n      width: 100%;\n      transition: 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      overflow-x: hidden;\n      padding-top: 24px; }\n.ntm-navbar .navbar__collapse .navbar__collapse--slide.disabled {\n        display: none; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__collapse--slide {\n          float: none;\n          width: 100%;\n          display: flex;\n          justify-content: space-around;\n          z-index: 1;\n          align-items: stretch;\n          overflow-y: visible;\n          overflow-x: visible;\n          padding-top: 0px; } }\n.ntm-navbar .navbar__collapse .navbar__item {\n      justify-content: space-between;\n      flex-wrap: nowrap;\n      display: flex; }\n.ntm-navbar .navbar__collapse .navbar__item:empty {\n        display: none; }\n.ntm-navbar .navbar__collapse .navbar__item-login {\n      padding: 12px 0; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__item-login {\n          padding: 0; } }\n.ntm-navbar .navbar__collapse .navbar__collapse--universal-menu {\n      padding-top: 39px; }\n@media (min-width: 1024px) {\n        .ntm-navbar .navbar__collapse .navbar__collapse--universal-menu {\n          display: none; } }\n.ntm-navbar .navbar__collapse .navbar__collapse--universal-menu p.navbar__item {\n        font-size: 10px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: 1.2;\n        letter-spacing: 0.9px;\n        color: #6a6a6a; }\n.navbar__item-button {\n  padding-top: 12px;\n  padding-bottom: 12px; }\n@media (min-width: 1024px) {\n    .navbar__item-button {\n      padding: 0; } }\n.navbar__item-button .dropdown-toggles {\n  display: flex;\n  font-size: 14px;\n  line-height: 1.5;\n  padding-left: 0;\n  font-weight: bold;\n  align-items: center;\n  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1); }\n.navbar__item-button .dropdown-toggles span {\n    margin-right: 5.7072px; }\n.navbar__item-button .dropdown-toggles span.user-dropdown-icn {\n    display: none; }\n@media (min-width: 1024px) {\n    .navbar__item-button .dropdown-toggles {\n      box-sizing: border-box;\n      padding: 16px;\n      font-size: 14px;\n      height: 56px; }\n      .navbar__item-button .dropdown-toggles.BLACK {\n        background: #000000;\n        color: #ffffff !important; }\n        .navbar__item-button .dropdown-toggles.BLACK:hover {\n          background: #333333; }\n        .navbar__item-button .dropdown-toggles.BLACK:focus {\n          background: #262626; }\n      .navbar__item-button .dropdown-toggles.MAGENTA {\n        background: #e20074;\n        color: #ffffff !important; }\n        .navbar__item-button .dropdown-toggles.MAGENTA:hover {\n          background: #ba0060; }\n        .navbar__item-button .dropdown-toggles.MAGENTA:focus {\n          background: #a10053; }\n      .navbar__item-button .dropdown-toggles.WHITE {\n        background: #ffffff;\n        color: #e20074 !important; }\n        .navbar__item-button .dropdown-toggles.WHITE:hover, .navbar__item-button .dropdown-toggles.WHITE:focus {\n          background: #e8e8e8; }\n      .navbar__item-button .dropdown-toggles.GREY {\n        background-color: #f2f2f2;\n        color: #000000 !important;\n        border: 1px solid #f2f2f2; }\n        .navbar__item-button .dropdown-toggles.GREY:hover, .navbar__item-button .dropdown-toggles.GREY:focus {\n          background: #e8e8e8; }\n      .navbar__item-button .dropdown-toggles span.user-dropdown-icn {\n        display: inherit; } }\n.navbar__item-button .dropdown-toggles.nav__link-button-mobile {\n    display: inherit;\n    width: 100%;\n    padding: 0; }\n@media (min-width: 1024px) {\n      .navbar__item-button .dropdown-toggles.nav__link-button-mobile {\n        display: none; } }\n.navbar__item-button .dropdown-toggles.nav__link-button-desktop {\n    display: none; }\n@media (min-width: 1024px) {\n      .navbar__item-button .dropdown-toggles.nav__link-button-desktop {\n        justify-content: flex-start;\n        display: inherit; } }\n.navbar__mobile_text {\n  font-weight: bold;\n  font-size: 16px;\n  vertical-align: top; }\n#get-started {\n  padding-right: 0; }\n.navbar__search-form {\n  height: 38px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvZGlnaXRhbC11bmF2LWhlYWRlci9EOlxcVE1PX1BST0pFQ1RTXFxUTU5HXFx0bW8tYWVtLXVpLWludGVncmF0aW9uXFx0bW8tbmcvbGlic1xcc2hhcmVkXFxkaWdpdGFsLXVuYXZcXHNyY1xcbGliXFxzYXNzXFxfYnV0dG9uLnNjc3MiLCJsaWJzL3NoYXJlZC9kaWdpdGFsLXVuYXYvc3JjL2xpYi9jb21wb25lbnRzL2RpZ2l0YWwtdW5hdi1oZWFkZXIvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9kaWdpdGFsLXVuYXYtaGVhZGVyL0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGRpZ2l0YWwtdW5hdi1oZWFkZXJcXGRpZ2l0YWwtdW5hdi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJsaWJzL3NoYXJlZC9kaWdpdGFsLXVuYXYvc3JjL2xpYi9jb21wb25lbnRzL2RpZ2l0YWwtdW5hdi1oZWFkZXIvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJRSw0QkFBQTtBQUNBOzs7O0VBS0ksZ0JBQWdCO0VBQ2hCLGlDQUFpQyxFQUFBO0FBSXJDLDBCQUFBO0FBQ0E7OztFQUlJLDZIQUE2SDtFQUM3SCxp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QUFZLEVBQUE7TUFsQmhCO1FBcUJNLG1CRDd2QlM7UUM4dkJULHlCQUF3QixFQUFBO1FBdEI5QjtVQXdCUSxtQkRudkJjLEVBQUE7UUMydEJ0QjtVQTZCUSxtQkRwd0JpQixFQUFBO01DdXVCekI7UUFrQ00sbUJEN3dCVztRQzh3QlgseUJBQXdCLEVBQUE7UUFuQzlCO1VBc0NRLG1CRGh4QmUsRUFBQTtRQzB1QnZCO1VBeUNRLG1CRGx4QmUsRUFBQTtNQ3l1QnZCO1FBNkNNLG1CRGp4QlM7UUNreEJULHlCQUEwQixFQUFBO1FBOUNoQztVQWlEUSxtQkRqeEJhLEVBQUE7TUNndUJyQjtRQXFETSx5QkR2eEJlO1FDd3hCZix5QkFBd0I7UUFDeEIseUJEenhCZSxFQUFBO1FDa3VCckI7VUF5RFEsbUJEenhCYSxFQUFBO01DZ3VCckI7UUE2RE0sZ0JBQWdCLEVBQUEsRUFDakI7QUE5REw7SUFrRUksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVLEVBQUE7QUNyeUJaO01EaXVCRjtRQXNFTSxhQUFhLEVBQUEsRUFFaEI7QUF4RUg7SUEyRUksYUFBYSxFQUFBO0FDNXlCZjtNRGl1QkY7UUE2RU0sMkJBQTJCO1FBQzNCLGdCQUFnQixFQUFBLEVBRW5CO0FBRUg7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsZ0JBQWUsRUFBQTtBQUVqQjtFQUNFLHVCQUFzQixFQUFBIiwiZmlsZSI6ImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvZGlnaXRhbC11bmF2LWhlYWRlci9kaWdpdGFsLXVuYXYtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNtYWxsLWZvbnQtc2l6ZTogcmVtKDE0cHgpO1xuJHRtby1ncmF5MTA6ICNmMmYyZjI7XG4kc3BhY2luZy14czogcmVtKDE2cHgpO1xuJHNwYWNpbmcteHhzOiByZW0oOHB4KTtcbiRzcGFjaW5nLXNtOiByZW0oMjRweCk7XG4kdG1vLW1hZ2VudGEtYnJhbmQ6ICNlMjAwNzQ7XG4kdG1vLXdoaXRlOiAjZmZmZmZmO1xuJHRtby1ibGFjazogIzAwMDAwMDtcbiR0bW8tZ3JheTgwOiAjMzMzMzMzO1xuJHRtby1ncmF5ODU6ICMyNjI2MjY7XG4kdG1vLW1hZ2VudGEtZGFyazogI2JhMDA2MDtcbiR0bW8tbWFnZW50YS12ZXJ5LWRhcms6ICNhMTAwNTM7XG4kdG1vLW1hZ2VudGEtbGlnaHQ6ICNmNjZkYjM7XG5AbWl4aW4gbWF0ZXJpYWwtaWNvbnMge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cblxuQG1peGluIG1hdGVyaWFsLWNhcmV0LXJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtYXRlcmlhbC1pY29ucztcbiAgICBjb250ZW50OiAna2V5Ym9hcmRfYXJyb3dfcmlnaHQnO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBcbiAgJGJ1dHRvbi1ob3Jpem9udGFsLXBhZGRpbmc6IDJyZW07XG4gICRkZWZhdWx0LWJ1dHRvbi1oZWlnaHQ6IDQ4cHg7XG5cbiAgQG1peGluIG1hdC1idXR0b24taGlkZGVuLWNhcmV0KCRob3Jpei1wYWRkaW5nKSB7XG4gICAgJGNhcmV0LXdpZHRoOiAxcmVtO1xuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMC4zcztcbiAgXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIG1hdGVyaWFsLWNhcmV0LXJpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uOiByaWdodCAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1yaWdodDogJGNhcmV0LXdpZHRoLzI7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICRjYXJldC13aWR0aC8yO1xuICBcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogJGhvcml6LXBhZGRpbmcgKyAxcmVtO1xuICAgICAgICB3aWR0aDogJGNhcmV0LXdpZHRoO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkY2FyZXQtd2lkdGg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHJpZ2h0OiAkYnV0dG9uLWhvcml6b250YWwtcGFkZGluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICBcbiAgICAuY3RhLWJ1dHRvbi1jbGlja2VkIC5tYXQtYnV0dG9uLXdyYXBwZXI6OmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICByaWdodDogJGJ1dHRvbi1ob3Jpem9udGFsLXBhZGRpbmcgLSAxcmVtO1xuICAgIH1cblxuICAgICYuZnVsbC13aWR0aCxcbiAgICAmLmZpeGVkLXdpZHRoIHtcbiAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgICAgd2lkdGg6ICRjYXJldC13aWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcblxuICBAbWl4aW4gbWF0LWJ1dHRvbi1udWRnZWQtY2FyZXQoJGhvcml6LXBhZGRpbmcpIHtcbiAgICAkY2FyZXQtd2lkdGg6IDAuMjVyZW07XG4gICAgJGNhcmV0LW9mZnNldDogMC4ycmVtO1xuICBcbiAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBtYXRlcmlhbC1jYXJldC1yaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICRjYXJldC1vZmZzZXQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGNhcmV0LXdpZHRoO1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAubWF0LWJ1dHRvbi13cmFwcGVyOjphZnRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkY2FyZXQtb2Zmc2V0ICsgJGNhcmV0LXdpZHRoO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKioqIEJhc2ljIGJ1dHRvbiBzdHlsZXMgKioqL1xuICBidXR0b24sXG4gIGEge1xuICAgICYubWF0LWJ1dHRvbixcbiAgICAmLm1hdC1mbGF0LWJ1dHRvbixcbiAgICAmLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqKiBDVEEgYnV0dG9uIHN0eWxlcyAqKiovXG4gIGJ1dHRvbixcbiAgLm1hdC1idXR0b24sXG4gIGEge1xuICAgICYuY3RhLWJ1dHRvbiB7XG4gICAgICBmb250LWZhbWlseTogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDogJGRlZmF1bHQtYnV0dG9uLWhlaWdodDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6ICRkZWZhdWx0LWJ1dHRvbi1oZWlnaHQ7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgcGFkZGluZzogMCAwO1xuICBcbiAgICAgICYubWF0LWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gIFxuICAgICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi1udWRnZWQtY2FyZXQoJGJ1dHRvbi1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgJi5tYXQtc3Ryb2tlZC1idXR0b24sXG4gICAgICAmLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLWhpZGRlbi1jYXJldCgkYnV0dG9uLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAmLmN0YS1idXR0b24tc21hbGwge1xuICAgICAgICBmb250LXNpemU6ICRzbWFsbC1mb250LXNpemU7XG4gICAgICB9XG4gIFxuICAgICAgJi5jdGEtYnV0dG9uLWxhcmdlIHtcbiAgICAgICAgaGVpZ2h0OiByZW0oNTZweCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiByZW0oNTZweCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAmLm1hdC1idXR0b246aG92ZXIgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgJi5mdWxsLXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgXG4gICAgJi5pbmxpbmUtYnV0dG9uIHtcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgXG4gICAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAvL2xpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKioqIEJsb2NrIGJ1dHRvbiBzdHlsZSAqKiovXG4gIC5idXR0b24tYmxvY2stZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgYnV0dG9uLFxuICBhIHtcbiAgICAmLmJ1dHRvbi1ibG9jayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG1vLWdyYXkxMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2luZy14eHM7XG4gICAgICBwYWRkaW5nOiAkc3BhY2luZy14cyAkc3BhY2luZy1zbTtcbiAgXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIG1hdGVyaWFsLWNhcmV0LXJpZ2h0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgfVxuICBcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bW8tbWFnZW50YS1icmFuZDtcbiAgICAgICAgY29sb3I6ICR0bW8td2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC8qKiogQW5ndWxhciBNYXRlcmlhbCAtIGRlZmF1bHQgY29sb3IgYWRqdXN0bWVudHMgKioqL1xuICAucHJpbWFyeS1kYXJrLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1idXR0b24sXG4gIC5tYXQtaWNvbi1idXR0b24sXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgICYsXG4gICAgJi5tYXQtcHJpbWFyeSxcbiAgICAmLm1hdC1hY2NlbnQsXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkdG1vLWJsYWNrLCAwLjEyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG5cbiAgLm1hdC1mbGF0LWJ1dHRvbixcbiAgLm1hdC1yYWlzZWQtYnV0dG9uLFxuICAubWF0LWZhYixcbiAgLm1hdC1taW5pLWZhYiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG1vLWJsYWNrO1xuICBcbiAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby1ncmF5ODA7XG4gICAgICB9XG4gIFxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby1ncmF5ODU7XG4gICAgICB9XG4gIFxuICAgIH1cbiAgXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby1tYWdlbnRhLWRhcms7XG4gICAgICB9XG4gIFxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby1tYWdlbnRhLXZlcnktZGFyaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgICBjb2xvcjokdG1vLWJsYWNrO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkdG1vLWJsYWNrO1xuICBcbiAgICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDgsMjQ4LDI0OCwwLjUpO1xuICAgICAgfVxuICBcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10aGlyZDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBib3JkZXItY29sb3I6ICR0bW8tbWFnZW50YS1icmFuZDtcbiAgXG4gICAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRtby1tYWdlbnRhLWxpZ2h0LCAwLjEpO1xuICAgICAgfVxuICBcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRtby1tYWdlbnRhLWxpZ2h0LCAwLjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmJ1dHRvbi1yb3cge1xuICAgIGEsXG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHNwYWNpbmcteHM7XG4gICAgfVxuICB9XG4gIFxuICBwICsgLmJ1dHRvbi1yb3cge1xuICAgIG1hcmdpbi10b3A6ICRzcGFjaW5nLXNtO1xuICB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby1tYWdlbnRhLWJyYW5kO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgICBjb2xvcjokdG1vLXdoaXRlO1xufVxuLm1hdC1idXR0b24ubWF0LWFjY2VudCxcbiAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsIFxuIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCB7XG4gICAgY29sb3I6ICNlMjAwNzQ7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogJHRtby13aGl0ZTtcbn1cblxuLnByaW1hcnktZGFyay5tYXQtZmxhdC1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnk6bm90KFtkaXNhYmxlZF0pLFxuICAgICYubWF0LWFjY2VudDpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRtby13aGl0ZTtcbiAgICAgIGNvbG9yOiRwcmltYXJ5O1xuICAgICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZmlmdGg7XG4gICAgICB9XG4gICAgXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtZmlmdGg7XG4gICAgICB9XG4gICAgfVxufVxuXG4ucHJpbWFyeS1kYXJrLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4mLm1hdC1wcmltYXJ5Om5vdChbZGlzYWJsZWRdKSxcbiYubWF0LWFjY2VudDpub3QoW2Rpc2FibGVkXSkge1xuICBib3JkZXItY29sb3I6ICR3aGl0ZTtcbiAgY29sb3I6JHdoaXRlO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMik7XG4gIH1cblxuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XG4gIH1cbn1cbn1cbi5wcmltYXJ5LWRhcmsge1xuICAmLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sICYubWF0LWFjY2VudFtkaXNhYmxlZF0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG4gICYubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgJi5tYXQtYWNjZW50W2Rpc2FibGVkXSB7XG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gICAgfVxuICAgICYubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAmLm1hdC1hY2NlbnRbZGlzYWJsZWRdIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgfVxuICB9XG59XG4iLCJcblxuXG4kcHJpbWFyeTogI2UyMDA3NDtcbiRwcmltYXJ5LWhvdmVyOiAjYmEwMDYwO1xuJHByaW1hcnktZm9jdXM6ICNhMTAwNTM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmxhY2stc2Vjb25kYXJ5OiAjMjYyNjI2O1xuJGJsYWNrLXRoaXJkOiMyMTIxMjE7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiR3aGl0ZS1zZWNvbmRhcnk6I2Y4ZjhmODtcbiR3aGl0ZS10aGlyZDogI2YyZjJmMjtcbiR3aGl0ZS1mb3VydGg6ICNmNmY2ZjY7XG4kd2hpdGUtZmlmdGg6ICNlOGU4ZTg7XG4kZ3JheTogI2NjY2NjYztcbiRncmF5LXNlY29uZGFyeTogI2IzYjNiMztcbiRncmF5LWRhcms6IzZhNmE2YTtcbiRncmF5LWxpZ2h0OiM5YjliOWI7XG4kZ3JheS1kYXJrZXN0OiAjMzMzMzMzO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeS1ib2xkOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LW5vcm1hbDogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsXG5cIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeS11bHRyYTogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsXG5cIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXRlbGVHcm90ZXNrTmV4dC11bHRyYTogXCJUZWxlR3JvdGVza05leHQtVWx0cmFcIjtcblxuJHRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG5cbiIsIkBpbXBvcnQgJy4uLy4uL3Nhc3MvbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvYnV0dG9uJztcblxuLm50bS1uYXZiYXIubnRtLW5hdmJhci0tbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGNvbG9yOiAgJGJsYWNrO1xuXG4gIC5uYXZiYXJfX2NvbGxhcHNlIHtcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbiAgICAgICYubmF2YmFyX19jb2xsYXBzZS0tZGVmYXVsdC1tZW51LmlzLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgJi5ub3RTdGlja3l7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgfVxuICB9XG4gICAgLm5hdmJhcl9fY29sbGFwc2UtLWNvbnRhaW5lci5jb250YWluZXItLWdyZXkge1xuICAgICAgYmFja2dyb3VuZDokd2hpdGUtc2Vjb25kYXJ5O1xuXG4gICAgICBwLm5hdmJhcl9faXRlbSB7XG4gICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgICAgfVxuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm50bS1uYXZiYXJfX3VuaXZlcnNhbC1tZW51LWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWZvdXJ0aDtcbiAgICAubnRtLW5hdmJhcl9fdW5pdmVyc2FsLW1lbnUtaXRlbS5pcy1hY3RpdmV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5udG0tbmF2YmFyX191bml2ZXJzYWwtbWVudS1pdGVtIC5uYXZfX2xpbmt7XG4gICAgICBjb2xvcjogJGdyYXktZGFyaztcblxuICAgICAgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubnRtLW5hdmJhci5udG0tbmF2YmFyLS1kYXJrIHtcbiAgYmFja2dyb3VuZDogJGJsYWNrO1xuICBjb2xvcjogICR3aGl0ZTtcblxuICAubmF2YmFyX19jb2xsYXBzZSB7XG4gICAgY29sb3I6ICAkd2hpdGU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbiAgICAgICYubmF2YmFyX19jb2xsYXBzZS0tZGVmYXVsdC1tZW51LmlzLWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgJi5ub3RTdGlja3l7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICBjb2xvcjogICR3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAgIC5uYXZiYXJfX2NvbGxhcHNlLS1jb250YWluZXIuY29udGFpbmVyLS1ncmV5IHtcbiAgICAgIGJhY2tncm91bmQ6ICRibGFjay1zZWNvbmRhcnk7XG4gICAgICBwLm5hdmJhcl9faXRlbSB7XG4gICAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udG0tbmF2YmFyX191bml2ZXJzYWwtbWVudS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWRhcmtlc3Q7XG4gICAgLm50bS1uYXZiYXJfX3VuaXZlcnNhbC1tZW51LWl0ZW0uaXMtYWN0aXZle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIH1cbiAgICAubnRtLW5hdmJhcl9fdW5pdmVyc2FsLW1lbnUtaXRlbSAubmF2X19saW5re1xuICAgICAgY29sb3I6ICRncmF5LXNlY29uZGFyeTtcblxuICAgICAgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmF2YmFyX19jb2xsYXBzZS0tc2xpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgfVxuICAubnRtLW5hdmJhcl9faGFtYnVyZ2VyLWNvbnRhaW5lciB7XG4gICAgLm50bS1uYXZiYXJfX2hhbWJ1cmdlciwgLm50bS1uYXZiYXJfX2hhbWJ1cmdlci1jbG9zZSwgLm5hdmJhcl9fcHJldi1zbGlkZVxuICAgICAgeyBjb2xvcjogJHdoaXRlIH1cbiAgfVxufVxuXG5cbi5udG0tbmF2YmFyIHtcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xuICBjb2xvcjogICRibGFjaztcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zZWNvbmRhcnktbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzICR0aW1pbmctZnVuY3Rpb247XG4gIHotaW5kZXg6IDk7XG4gIHdpZHRoOiAxMDAlO1xuICAmLm50bS1uYXZiYXItLWRhcmsge1xuICAgIGJhY2tncm91bmQ6ICRibGFjaztcbiAgICBjb2xvcjogICR3aGl0ZTtcbiAgfVxuICAmLmlzLXNpZGUtbWVudSB7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgIH1cbiAgICAubnRtLW5hdmJhcl9faGFtYnVyZ2VyLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogaW5oZXJpdDtcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udG0tbmF2YmFyX191bml2ZXJzYWwtbWVudS1iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5udG0tbmF2YmFyX191bml2ZXJzYWwtbWVudS1pdGVtIHtcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgcGFkZGluZzogNnB4IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgfVxuICAgICAgYXtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubnRtLW5hdmJhcl9fbWVudS1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG4gICAgfVxuICAgICYuaXNfc3RpY2t5X2hlYWRlcntcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICB6LWluZGV4Ojk5ODtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgfVxuICAmLmlzX3N0aWNreV9saWdodF9iZ3tcbiAgICAgYmFja2dyb3VuZDogJHdoaXRlXG4gIH1cbiAgJi5pc19zdGlja3lfZGFya19iZ3tcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2tcbiAgfVxuXG4gIH1cbiAgLnNraXAtbGlua3Mge1xuICAgIGJhY2tncm91bmQ6ICRibGFjay1zZWNvbmRhcnk7XG4gIH1cbiAgLnNraXAtbGluayB7XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBjbGlwOiBhdXRvO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICB9XG5cbiAgLm1kaS5uYXZiYXJfX2NhcnQtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICB0b3A6IC0xNnB4O1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm50bS1uYXZiYXJfX2JyYW5kIHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICAvLyBtb2JpbGVcbiAgICB0cmFuc2l0aW9uOiAuMnMgLjJzICR0aW1pbmctZnVuY3Rpb247XG4gICAgJi5tb2JpbGUtY2xvc2Uge1xuICAgICAgdHJhbnNpdGlvbjogLjJzIDBzICR0aW1pbmctZnVuY3Rpb247XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cbiAgICB9XG5cbiAgICAvLyBtb2JpbGUgdGFibGV0XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OjQ4cHg7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAmLm1vYmlsZS1jbG9zZSB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OjU2cHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IDQ4cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBtYXgtaGVpZ2h0OiA1NnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5udG0tbmF2YmFyX19uYXYge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmLm50bS1uYXZiYXJfX25hdi0tcmlnaHQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMnMgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICYubnRtLW5hdmJhcl9fbmF2LXVuaXZlcnNhbC1tZW51LXJpZ2h0IHtcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgfVxuXG4gICAgICAmLnNlYXJjaC1tZW51LWFjdGl2ZSB7XG4gICAgICAgIC5uYXZiYXJfX2l0ZW06bm90KC5uYXZiYXJfX2l0ZW0tc2VhcmNoLWJhcikge1xuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyX19pdGVtLXNlYXJjaC1iYXIgfiAubmF2YmFyX19pdGVtIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuICAgICAgLm5hdmJhcl9faXRlbSAubmF2X19saW5rIHtcbiAgICAgICAgPiAubWRpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUuNzA3MnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgPiAubWRpLm50bS1hcnJvdyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5hdmJhcl9faXRlbS5uYXZiYXJfX2l0ZW0tbG9naW4gLm5hdl9fbGluayB7XG4gICAgICAgID4gLm1kaSB7XG4gICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmF2X19saW5rOm5vdCguZHJvcGRvd24tdG9nZ2xlcykge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcblxuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZGkubWRpLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5hdmJhcl9faXRlbTpub3QoLm5hdmJhcl9faXRlbS1sb2dpbikge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyAuMnMgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgcGFkZGluZzogMTJweCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgbWFyZ2luOiBpbmhlcml0O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDA7XG5cbiAgICAgICAgfVxuICAgICAgICAmLm5hdmJhcl9faXRlbS1zZWFyY2gtYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuXG4gICAgICAgICAgLnNlYXJjaF9fYmFyLWlubGluZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAmW2FyaWEtaGlkZGVuPXRydWVdIHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIC4zcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MDJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLm50bS1uYXZiYXJfX2hhbWJ1cmdlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHotaW5kZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG5cbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAxMnB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5udG0tbmF2YmFyX19oYW1idXJnZXItY29udGFpbmVyIHtcbiAgICAubnRtLW5hdmJhcl9faGFtYnVyZ2VyLCAubnRtLW5hdmJhcl9faGFtYnVyZ2VyLWNsb3NlLCAubmF2YmFyX19wcmV2LXNsaWRlIHtcbiAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5udG0tbmF2YmFyX19oYW1idXJnZXItbGlua3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmLmhpZGUge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5uYXZfX2xpbmsge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgICBcbiAgICAgIFxuICAgIFxuICB9XG5cbiAgLm5hdmJhcl9fcHJldi1zbGlkZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcblxuICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IC4zcyAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IC4zcyAuM3MgJHRpbWluZy1mdW5jdGlvbjtcblxuICAgIH1cblxuXG4gIH1cbiAgLm50bS1uYXZiYXJfX2hhbWJ1cmdlci1jbG9zZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIHBhZGRpbmc6MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICAmLmlzLWFjdGl2ZSxcbiAgICAmOmhvdmVyLFxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMgIHtcbiAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgIH1cbiAgfVxuICAubnRtLW5hdmJhcl9faGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgJi5pcy1hY3RpdmUsXG4gICAgJjpob3ZlcixcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzICB7XG4gICAgICBjb2xvcjogJGdyYXktZGFyaztcbiAgICB9XG5cbiAgICBzcGFuLm1kaSB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgfVxuXG4gIC5uYXZiYXJfX2NvbGxhcHNlLm5hdmJhcl9fY29sbGFwc2UtLXNlYXJjaC1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIHdpZHRoOiAzMjBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgZGVza3RvcHtcblxuICAgICAgLy8gbGVmdDogMDtcbiAgICAgIC8vIHRvcDogNzJweDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAubmF2YmFyX19jb2xsYXBzZS5uYXZiYXJfX2NvbGxhcHNlLS1sb2dpbi1tZW51LCAubmF2YmFyX19jb2xsYXBzZS5uYXZiYXJfX2NvbGxhcHNlLS1zZWFyY2gtYmFyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgJHRpbWluZy1mdW5jdGlvbjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcbiAgICB9XG5cbiAgICAmW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgLy8gQW5ndWxhciBhbmltYXRpb24gb3ZlcnJpZGVcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICB9XG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCk7XG4gICAgfVxuICB9XG4gIC5uYXZiYXJfX2NvbGxhcHNlIHtcblxuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6IDY0cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyAwLjNzICR0aW1pbmctZnVuY3Rpb24sIG9wYWNpdHkgMC4zcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5ODtcbiAgICAvL3RyYW5zaXRpb24tZGVsYXk6IC4zcztcbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIC5uYXZiYXJfX2NvbGxhcHNlLS1zbGlkZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWhpZGRlbiB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjNzICR0aW1pbmctZnVuY3Rpb247XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLm5hdmJhcl9fY29sbGFwc2UtLXNsaWRlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgd2lkdGg6IDMyMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB6LWluZGV4OiA5O1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICB9XG5cbiAgICAmLm5hdmJhcl9fY29sbGFwc2UtLWRlZmF1bHQtbWVudSB7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgLy8gb3ZlcnJpZGUgYW5ndWxhciBhbmltYXRpb24gZm9yIGRlc2t0b3BcbiAgICAgICAgLy8gZGVmYXVsdCBtZW51IGlzIHN0aWxsIGFjY2Vzc2JpbGUgd2hlblxuICAgICAgICAvLyBsb2cgaW4gb3Igc2VhcmNoIGJhciBwYW5lbCBhcmUgb3BlblxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm5hdmJhcl9fY29sbGFwc2UtLWxvZ2luLW1lbnUsICYubmF2YmFyX19jb2xsYXBzZS0tc2VhcmNoLWJhciB7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDcwcHg7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAubmF2YmFyX19jb2xsYXBzZS0tY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAmOm50aC1vZi10eXBlKDEpe1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuY29udGFpbmVyLS1ncmV5IHtcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2YmFyX19zbGlkZS0tY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUqMik7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLm5hdmJhcl9fY29sbGFwc2UtLXNsaWRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6aW5oZXJpdDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiAuM3MgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgIG92ZXJmbG93LXg6IHZpc2libGU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG5cblxuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXJfX2l0ZW0ge1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgJjplbXB0eSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmJhcl9faXRlbS1sb2dpbiB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XG5cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXJfX2NvbGxhcHNlLS11bml2ZXJzYWwtbWVudSB7XG4gICAgICBwYWRkaW5nLXRvcDogMzlweDtcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgcC5uYXZiYXJfX2l0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC45cHg7XG4gICAgICAgIGNvbG9yOiAkZ3JheS1kYXJrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG4ubmF2YmFyX19pdGVtLWJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cblxuLm5hdmJhcl9faXRlbS1idXR0b24gLmRyb3Bkb3duLXRvZ2dsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgdHJhbnNpdGlvbjogLjJzICR0aW1pbmctZnVuY3Rpb247XG4gIHNwYW4ge1xuICAgIG1hcmdpbi1yaWdodDogNS43MDcycHg7XG4gIH1cbiAgc3Bhbi51c2VyLWRyb3Bkb3duLWljbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNTZweDtcblxuICAgICYuQkxBQ0sge1xuICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmF5LWRhcmtlc3Q7XG4gICAgICB9XG5cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRibGFjay1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5NQUdFTlRBIHtcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktaG92ZXI7XG4gICAgICB9XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICAgICYuV0hJVEUge1xuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xuICAgICAgY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG5cbiAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtZmlmdGg7XG4gICAgICB9XG4gICAgfVxuICAgICYuR1JFWSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtdGhpcmQ7XG4gICAgICBjb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGUtdGhpcmQ7XG4gICAgICAmOmhvdmVyLCY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtZmlmdGg7XG4gICAgICB9XG4gICAgfVxuICAgIHNwYW4udXNlci1kcm9wZG93bi1pY24ge1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAmLm5hdl9fbGluay1idXR0b24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICYubmF2X19saW5rLWJ1dHRvbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cbi5uYXZiYXJfX21vYmlsZV90ZXh0e1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4jZ2V0LXN0YXJ0ZWQge1xuICBwYWRkaW5nLXJpZ2h0OjA7XG59XG4ubmF2YmFyX19zZWFyY2gtZm9ybXtcbiAgaGVpZ2h0OjM4cHggIWltcG9ydGFudDtcbn1cbiBcbiIsIkBtaXhpbiBtb2JpbGUtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGV4dHJhLWxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: DigitalUnavHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalUnavHeaderComponent", function() { return DigitalUnavHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content.service */ "../../../libs/shared/digital-unav/src/lib/services/content.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "../../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/cart.service */ "../../../libs/shared/digital-unav/src/lib/services/cart.service.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analytics.service */ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");












var DigitalUnavHeaderComponent = /** @class */ (function () {
    function DigitalUnavHeaderComponent(cs, cartService, breakpointObserver, renderer, analyticsService, ref, platformId, config) {
        this.cs = cs;
        this.cartService = cartService;
        this.breakpointObserver = breakpointObserver;
        this.renderer = renderer;
        this.analyticsService = analyticsService;
        this.ref = ref;
        this.platformId = platformId;
        this.config = config;
        this.activeSlide = 'defaultMenu';
        this.sideMenuState = { mobileState: false, menuState: false };
        this.backButton = true;
        this.theme = _models__WEBPACK_IMPORTED_MODULE_6__["UnavComponent"].NavThemeTypeEnum.LIGHT;
        this.skinny = _models__WEBPACK_IMPORTED_MODULE_6__["UnavComponent"].EnableTypeEnum.FALSE;
        this.sticky = _models__WEBPACK_IMPORTED_MODULE_6__["UnavComponent"].EnableTypeEnum.TRUE;
        this.clientId = _models__WEBPACK_IMPORTED_MODULE_6__["UnavComponent"].ComponentNavTypeEnum.DEFAULT;
        this.digitalUnavEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DigitalUnavHeaderComponent.prototype.onWindowScroll = function () {
        if (this.sticky === 'true') {
            if (window.pageYOffset > this.navMenuOffset) {
                this.isSticky = true;
            }
            else {
                this.isSticky = false;
            }
            this.ref.detectChanges();
        }
    };
    DigitalUnavHeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.stickyHeaderUno && this.stickyHeaderUno.nativeElement) {
            this.navMenuOffset = this.stickyHeaderUno.nativeElement.offsetTop;
            this.navMenuOffsetHeight = this.stickyHeaderUno.nativeElement.clientHeight + 'px';
            //this.wrapperHeight = { 'height': this.navMenuOffsetHeight };
        }
        if (!this.navMenuOffset) {
            this.stickyHeader.changes.subscribe((function (item) {
                if (_this.stickyHeader.length) {
                    _this.navMenuOffset = _this.stickyHeader.first.nativeElement.offsetTop;
                    _this.navMenuOffsetHeight = _this.stickyHeader.first.nativeElement.clientHeight + 'px';
                    // this.wrapperHeight = { 'height': this.navMenuOffsetHeight };
                }
            }));
        }
        this.ref.detectChanges();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["isPlatformBrowser"])(this.platformId)) {
            [this.config.baseUrl + '/client/assets/scripts/mp_linkcode.js',
                this.config.baseUrl + '/client/assets/scripts/motionpoint_v2.js',
                'https://tmobilees.mpeasylink.com/mpel/mpel.js'
            ]
                .map(function (url) {
                var script = document.createElement('script');
                script.src = url;
                script.type = 'text/javascript';
                script.async = true;
                script.defer = true;
                script.id = 'mpelid';
                return script;
            })
                .forEach(function (MpScript) {
                document.body.appendChild(MpScript);
            });
        }
    };
    DigitalUnavHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.breakpointObserver
            .observe(['(max-width: 1023px)'])
            .subscribe(function (breakPointState) {
            if (breakPointState.matches) {
                _this.sideMenuState.mobileState = true;
                _this.sideMenuState.menuState = false;
                _this.analyticsService.navType = 'tNav';
                _this.ref.detectChanges();
            }
            else {
                _this.sideMenuState.mobileState = false;
                _this.sideMenuState.menuState = false;
                _this.analyticsService.navType = 'tNav';
                _this.ref.detectChanges();
            }
        });
        this.content$ = this.contentData
            ? this.cs.parse(this.contentData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])({ complete: function () { return _this.ref.detectChanges(); } }))
            : this.cs.getContent(this.clientId, _models__WEBPACK_IMPORTED_MODULE_6__["UnavComponent"].ComponentTypeEnum.HEADER, this.site)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])({ complete: function () { return _this.ref.detectChanges(); } }));
        this.cartCounter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'unavBadgeEvent')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])({ detail: 'cart' }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event.detail === 'cart'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () {
            return _this.cartService
                .getCartcounter()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])({ complete: function () { return _this.ref.detectChanges(); } }));
        }));
    };
    DigitalUnavHeaderComponent.prototype.toggleDefaultMenu = function () {
        this.activeSlide = 'defaultMenu';
        if (this.sideMenuState.mobileState) {
            this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'false');
        }
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.toggleLoginMenu = function (util) {
        var _this = this;
        if (this.activeSlide === 'loginMenu') {
            this.backButton = true;
            this.activeSlide = 'defaultMenu';
            this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'false');
        }
        else {
            this.activeSlide = 'loginMenu';
            if (this.sideMenuState.mobileState) {
                util ? this.backButton = false :
                    setTimeout(function () {
                        _this.prevSlideButton.nativeElement.focus();
                    }, 0);
                this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'true');
            }
        }
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.openHamburger = function () {
        this.sideMenuState.menuState = true;
        this.analyticsService.navType = 'hNav';
        if (this.sideMenuState.mobileState) {
            this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'false');
        }
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.closeHamburger = function () {
        if (this.sideMenuState.mobileState) {
            this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'true');
        }
        this.sideMenuState.menuState = false;
        this.analyticsService.navType = 'tNav';
        this.activeSlide = 'defaultMenu';
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.toggleSearchMenu = function () {
        if (this.activeSlide === 'searchMenu') {
            this.activeSlide = 'defaultMenu';
            this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'false');
        }
        else {
            this.activeSlide = 'searchMenu';
            if (this.sideMenuState.mobileState) {
                this.sideMenuState.menuState = true;
                this.backButton = true;
                this.renderer.setAttribute(this.defaultMenu.nativeElement, 'aria-hidden', 'true');
            }
        }
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.closeMenu = function () {
        this.menuItemData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ 'close': true });
        this.ref.detectChanges();
    };
    DigitalUnavHeaderComponent.prototype.onUtilClick = function (event, evtName) {
        var callBackEvent = new CustomEvent(evtName, { bubbles: true, cancelable: true, detail: event });
        window.dispatchEvent(callBackEvent);
        this.digitalUnavEvent.emit(evtName);
        if (this.sideMenuState.mobileState) {
            this.closeHamburger();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "skinny", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "sticky", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "clientId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "site", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DigitalUnavHeaderComponent.prototype, "contentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DigitalUnavHeaderComponent.prototype, "digitalUnavEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('prevSlideButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DigitalUnavHeaderComponent.prototype, "prevSlideButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DigitalUnavHeaderComponent.prototype, "defaultMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerNavbar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DigitalUnavHeaderComponent.prototype, "headerNavBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyHeader'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DigitalUnavHeaderComponent.prototype, "stickyHeaderUno", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('stickyHeader'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], DigitalUnavHeaderComponent.prototype, "stickyHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DigitalUnavHeaderComponent.prototype, "onWindowScroll", null);
    DigitalUnavHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-digital-header',
            template: __webpack_require__(/*! ./digital-unav-header.component.html */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('centerX', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.navbar__item', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate3d(-10px, 0, 0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translate3d(0, 0px, 0)' })))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.navbar__item', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate3d(-15px, 0, 0)' }))
                                ])
                            ])
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./digital-unav-header.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_11__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_9__["AnalyticsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], String, Object])
    ], DigitalUnavHeaderComponent);
    return DigitalUnavHeaderComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"expansion__panel\" [class.expanded]=\"menuOpened\">\n  <div class=\"expansion__panel--header\">\n    <p>\n      <a *ngIf='content.linkHref' tmoDigitalAnalytics\n          id=\"digital-footer-category-name-{{index}}\"\n          [href]=\"content.linkHref\"\n          [attr.aria-label]=\"content.categoryName\"\n          [attr.target]=\"content.targetWindow === 'NEW' ? '_blank' : '_self'\"\n          eventData='{\"navType\": \"fNav\",\"category\":\"{{ content.categoryName }}\"}'\n          > {{ content.categoryName  }}</a>\n        <span *ngIf=\"!content.linkHref\" id=\"digital-footer-category-name-{{index}}\">{{ content.categoryName }}</span>\n      </p>\n    <button *ngIf=\"content.categorizedlink\"class=\"expansion__panel--button\" (click)=\"menuOpened ? closeDropdown() : openDropdown()\">\n      <span class=\"mdi\" [class.mdi-plus]=\"!menuOpened\" [class.mdi-minus]=\"menuOpened\"></span>\n    </button>\n  </div>\n\n  <div class=\"expansion__panel--body\" [attr.aria-labelledby] =\"content.categoryName\" [@centerX]=\"menuOpened ? 'open' : 'closed'\">\n    <ng-container  *ngFor=\"let item of content.categorizedlink;let i=index\">\n\n    <div class=\"panel__item\" *ngIf=\"item.linkUrl[0]\">\n        <a tmoDigitalAnalytics\n        id=\"digital-footer-categorized-link-{{index}}-{{i}}\"\n        [href]=\"item.linkUrl[0].linkHref\"\n        [attr.aria-label]=\"item.linkUrl[0].linkText\"\n        [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n        eventData='{\"navType\": \"fNav\",\"category\":\"{{ content.categoryName }}\", \"subCategory\":\"{{item.linkUrl[0].linkText}}\"}'\n        > {{ item.linkUrl[0].linkText }}</a>\n    </div>\n  </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion__panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: height .2s ease;\n  padding: 12px 0; }\n  @media (min-width: 768px) {\n    .expansion__panel {\n      display: inline;\n      padding: 0; } }\n  @media (min-width: 1024px) {\n    .expansion__panel {\n      display: inline-block; } }\n  .expansion__panel--header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  padding-bottom: 12px; }\n  @media (min-width: 768px) {\n    .expansion__panel--header {\n      padding-bottom: 4px; } }\n  .expansion__panel--header p {\n    font-weight: bold;\n    font-size: 14px; }\n  .expansion__panel--button {\n  background: none;\n  border: none;\n  flex-grow: 1;\n  text-align: right;\n  outline: none; }\n  @media (min-width: 768px) {\n    .expansion__panel--button {\n      display: none; } }\n  .expansion__panel--button span {\n    font-size: 24px;\n    line-height: 0; }\n  .expansion__panel--body {\n  padding: 0; }\n  @media (min-width: 768px) {\n    .expansion__panel--body {\n      height: auto !important;\n      visibility: visible !important;\n      opacity: 1 !important;\n      margin: 0 0 21px; } }\n  .expansion__panel--body .panel__item {\n    font-size: 14px;\n    padding: 12px 0;\n    line-height: 1.14; }\n  @media (min-width: 768px) {\n      .expansion__panel--body .panel__item {\n        margin: 9px 0;\n        padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvZm9vdGVyLXBhbmVsL0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGZvb3Rlci1wYW5lbFxcZm9vdGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9mb290ZXItcGFuZWwvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcc2Fzc1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTtFQ0FmO0lETEY7TUFPSSxlQUFlO01BQ2YsVUFBVSxFQUFBLEVBT2I7RUNKQztJRFhGO01BV0kscUJBQXFCLEVBQUEsRUFJeEI7RUFFRDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0VDaEJwQjtJRFlGO01BT0ksbUJBQW1CLEVBQUEsRUFPdEI7RUFkRDtJQVdJLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFJbkI7RUFDRSxnQkFBZTtFQUNmLFlBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtFQ2pDYjtJRDRCRjtNQU9JLGFBQVksRUFBQSxFQU9mO0VBZEQ7SUFXSSxlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBSWxCO0VBQ0UsVUFBVSxFQUFBO0VDN0NWO0lENENGO01BSUksdUJBQXVCO01BQ3ZCLDhCQUE4QjtNQUM5QixxQkFBcUI7TUFDckIsZ0JBQWdCLEVBQUEsRUFhbkI7RUFwQkQ7SUFXSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VDekRuQjtNRDRDRjtRQWdCTSxhQUFhO1FBQ2IsVUFBVSxFQUFBLEVBRWIiLCJmaWxlIjoibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9mb290ZXItcGFuZWwvZm9vdGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Fzcy9taXhpbnMnO1xuXG4uZXhwYW5zaW9uX19wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGhlaWdodCAuMnMgZWFzZTtcbiAgcGFkZGluZzogMTJweCAwO1xuICBAaW5jbHVkZSB0YWJsZXQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG5cbn1cblxuLmV4cGFuc2lvbl9fcGFuZWwtLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuXG4gIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uZXhwYW5zaW9uX19wYW5lbC0tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDpub25lO1xuICBib3JkZXI6bm9uZTtcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3V0bGluZTogbm9uZTtcbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gIH1cbn1cblxuLmV4cGFuc2lvbl9fcGFuZWwtLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBAaW5jbHVkZSB0YWJsZXR7XG4gICAgLy8gb3ZlcnJpZGUgYW5ndWxhciBhbmltYXRpb24gZm9yIG5vbiBtb2JpbGVcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDIxcHg7XG5cbiAgfVxuICAucGFuZWxfX2l0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTQ7XG5cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgbWFyZ2luOiA5cHggMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gbW9iaWxlLXRhYmxldC1vbmx5IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG5cbkBtaXhpbiBsYXJnZS1kZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDExOTBweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG5cbkBtaXhpbiBleHRyYS1sYXJnZS1kZXNrdG9wIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2ODBweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: FooterPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPanelComponent", function() { return FooterPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "../../../libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "../../../node_modules/@angular/animations/fesm5/animations.js");




var FooterPanelComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FooterPanelComponent, _super);
    function FooterPanelComponent(ref) {
        return _super.call(this, ref) || this;
    }
    FooterPanelComponent_1 = FooterPanelComponent;
    var FooterPanelComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FooterPanelComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FooterPanelComponent.prototype, "index", void 0);
    FooterPanelComponent = FooterPanelComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-footer-panel',
            template: __webpack_require__(/*! ./footer-panel.component.html */ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.html"),
            providers: [{ provide: _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FooterPanelComponent_1; }) }],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('centerX', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '*', opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        height: '0', opacity: 0, visibility: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.3s cubic-bezier(0.25, 0.1, 0.25, 1)'),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.panel__item', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3d(-10px, 0, 0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms 200ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3d(0, 0px, 0)' })))
                            ])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('.panel__item', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3d(-15px, 0, 0)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':self', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms 200ms cubic-bezier(0.25, 0.1, 0.25, 1)')])
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./footer-panel.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FooterPanelComponent);
    return FooterPanelComponent;
}(_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]));



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login__dropdown\" [class.is-active]=\"isOpened\" #login (focusout)=\"emitClose($event)\">\n\n  <ng-container *ngFor=\"let item of data.link ;let i=index\">\n\n\n    <ng-container *ngIf=\"item.linkType==='BLADE'\">\n      <ng-container *ngFor=\"let catLink of item.linkUrl[0].childLinks;let j=index\">\n        <div class=\"login__dropdown-buttons authenticated\" *ngFor=\"let links of catLink.categorizedlink;let k=index\">\n          <a class=\"nav__link\" href=\"#\" attr.aria-label=\"Account Home\" tabindex=\"0\" [href]=\"links.linkUrl[0].linkHref\"\n            id=\"user-link-dropdown-item-{{i}}-{{j}}-{{k}}\" [attr.target]=\"links.targetWindow === 'NEW' ? '_blank' : '_self'\"\n            [attr.aria-label]=\"item.label\" tmoDigitalAnalytics\n            eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{ data.labelText }}\", \"subCategory\":\"{{ links.linkUrl[0].linkText }}\"}'>\n            {{links.linkUrl[0].linkText}}\n            <span class=\"mdi mdi-chevron-right\"></span>\n          </a>\n        </div>\n      </ng-container>\n    </ng-container>\n\n\n    <div class=\"login__dropdown-buttons\" *ngIf=\"item.linkType==='BUTTON-COLUMN'\">\n      <ng-container *ngFor=\"let catLink of item.linkUrl[0].childLinks;let j=index\">\n        <ng-container *ngFor=\"let links of catLink.categorizedlink;let k=index\">\n          <a class=\"ntm-btn\" *ngIf=\"links.id !=='loginId'\"\n            [class.ntm-btn--secondary]=\"links.linkType ==='SECONDARY-BUTTON'\"\n            [class.ntm-btn--primary]=\"links.linkType ==='PRIMARY-BUTTON'\"\n            [href]=\"links.linkUrl[0].linkHref\" id=\"user-link-dropdown-item-{{i}}-{{j}}-{{k}}\"\n            [attr.target]=\"links.targetWindow === 'NEW' ? '_blank' : '_self'\" [attr.aria-label]=\"item.label\"\n            tmoDigitalAnalytics\n            eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{ data.labelText }}\", \"subCategory\":\"{{ links.linkUrl[0].linkText }}\"}'>\n            {{ links.linkUrl[0].linkText }}</a>\n\n          <a class=\"ntm-btn\" *ngIf=\"links.id ==='loginId'\"\n            [class.ntm-btn--secondary]=\"links.linkType ==='SECONDARY-BUTTON'\"\n            [class.ntm-btn--primary]=\"links.linkType ==='PRIMARY-BUTTON'\" (click)='loginNavigation(links.linkUrl[0].linkHref, links.targetWindow)' id=\"user-link-dropdown-item-{{i}}-{{j}}-{{k}}\"\n             [attr.target]=\"links.targetWindow === 'NEW' ? '_blank' : '_self'\" [attr.aria-label]=\"item.label\"\n             tmoDigitalAnalytics\n             eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{ data.labelText }}\", \"subCategory\":\"{{ links.linkUrl[0].linkText }}\"}'>{{ links.linkUrl[0].linkText }}</a>\n        </ng-container>\n      </ng-container>\n    </div>\n\n\n    <ng-container *ngIf=\"item.linkType==='SINGLE-COLUMN'\">\n      <div class=\"login__dropdown-buttons--secondary\" *ngFor='let catLink of item.linkUrl[0].childLinks;let j=index'>\n        <p id=\"user-link-dropdown-item-category-name-{{i}}-{{j}}\">{{ catLink.categoryName }}</p>\n        <ng-container *ngFor=\"let links of catLink.categorizedlink;let k=index\">\n        <a  class=\"nav__link\" *ngIf=\"links.id !=='logout' && (links.id !='switch-account' || (links.id ==='switch-account' && isswitchAccount))\"\n          [href]=\"links.linkUrl[0].linkHref\" [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n          id=\"user-link-dropdown-item-category-name-{{i}}-{{j}}-{{k}}\" [attr.aria-label]=\"links.label\"\n          tmoDigitalAnalytics eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{ data.labelText }}\", \"subCategory\":\n         \"{{ catLink.categoryName }}{{catLink.categoryName ? \" : \" : \"\"  }}{{ links.linkUrl[0].linkText }}\"}'>\n         {{ links.linkUrl[0].linkText }}\n        </a>\n\n          <a  class=\"nav__link\" *ngIf=\"links.id ==='logout'\"\n          href=\"javascript:void(0)\"\n          (click)='logout()' [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n          id=\"user-link-dropdown-item-category-name-{{i}}-{{j}}-{{k}}\" [attr.aria-label]=\"links.label\"\n          tmoDigitalAnalytics eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{ data.labelText }}\", \"subCategory\":\n         \"{{ catLink.categoryName }}{{catLink.categoryName ? \" : \" : \"\"  }}{{ links.linkUrl[0].linkText }}\"}'>\n         {{ links.linkUrl[0].linkText }}</a>\n        </ng-container>\n      </div>\n    </ng-container>\n  </ng-container>"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1024px) {\n  :host {\n    overflow: hidden;\n    position: absolute;\n    top: 6px;\n    right: 8px; } }\n\n:host.ntm-navbar--light .login__dropdown {\n  background-color: #ffffff;\n  color: #000000; }\n\n:host.ntm-navbar--light .login__dropdown-buttons--secondary {\n  background-color: #f8f8f8; }\n\n:host.ntm-navbar--light .login__dropdown-buttons--secondary p {\n    color: #6a6a6a; }\n\n:host.ntm-navbar--dark .login__dropdown {\n  background-color: #000000;\n  color: #ffffff; }\n\n:host.ntm-navbar--dark .login__dropdown-buttons--secondary {\n  background-color: #262626; }\n\n:host.ntm-navbar--dark .login__dropdown-buttons--secondary p {\n    color: #cccccc; }\n\n.login__dropdown {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  z-index: 0;\n  min-width: 220px;\n  position: absolute;\n  list-style: none;\n  box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.08);\n  flex: 1 1 100%;\n  z-index: 999;\n  right: 0;\n  visibility: inherit; }\n\n.login__dropdown .login__dropdown-buttons, .login__dropdown .login__dropdown-buttons--secondary {\n    padding: 20px; }\n\n@media (min-width: 1024px) {\n      .login__dropdown .login__dropdown-buttons, .login__dropdown .login__dropdown-buttons--secondary {\n        padding: 24px; } }\n\n.login__dropdown .login__dropdown-buttons.authenticated {\n    padding: 36px 24px; }\n\n.login__dropdown .login__dropdown-buttons.authenticated .nav__link {\n      justify-content: space-between;\n      display: flex;\n      width: 100%;\n      padding: 0; }\n\n.login__dropdown .login__dropdown-buttons--secondary {\n    height: 100%;\n    padding-bottom: 0px; }\n\n.login__dropdown .login__dropdown-buttons--secondary p {\n      padding: 0px;\n      margin-bottom: 20px;\n      font-size: 14px;\n      font-weight: normal;\n      line-height: normal; }\n\n@media (min-width: 1024px) {\n        .login__dropdown .login__dropdown-buttons--secondary p {\n          margin-bottom: 16px; } }\n\n@media (min-width: 768px) {\n    .login__dropdown {\n      width: 320px; } }\n\n@media (min-width: 1024px) {\n    .login__dropdown {\n      width: 100%;\n      position: relative;\n      visibility: hidden;\n      width: 222px;\n      height: auto;\n      -webkit-transform: translate3d(0%, -102%, 0);\n              transform: translate3d(0%, -102%, 0);\n      transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .login__dropdown .login__dropdown-buttons {\n        opacity: 0;\n        transition: -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .login__dropdown .login__dropdown-buttons--secondary {\n        opacity: 0;\n        transition: opacity 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        -webkit-transform: translate3d(0, 15px, 0);\n                transform: translate3d(0, 15px, 0); } }\n\n.login__dropdown.is-active {\n    visibility: visible; }\n\n@media (min-width: 1024px) {\n      .login__dropdown.is-active {\n        -webkit-transform: translate3d(0%, 0%, 0);\n                transform: translate3d(0%, 0%, 0);\n        transition: -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); } }\n\n.login__dropdown.is-active .login__dropdown-buttons {\n      opacity: 1; }\n\n@media (min-width: 1024px) {\n        .login__dropdown.is-active .login__dropdown-buttons {\n          transition: opacity 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);\n          transition: opacity 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1);\n          transition: opacity 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0.22s cubic-bezier(0.25, 0.1, 0.25, 1); } }\n\n@media (min-width: 1024px) {\n      .login__dropdown.is-active .login__dropdown-buttons--secondary {\n        transition: opacity 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);\n        transition: transform 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), -webkit-transform 0.3s 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0px, 0);\n                transform: translate3d(0, 0px, 0); } }\n\n.login__dropdown .login__dropdown-buttons .ntm-btn {\n    margin-bottom: 8px;\n    box-sizing: border-box; }\n\n.login__dropdown .nav__link {\n    display: block;\n    font-weight: bold;\n    font-size: 16px;\n    padding-bottom: 24px; }\n\n@media (min-width: 1024px) {\n      .login__dropdown .nav__link {\n        font-size: 14px;\n        padding-bottom: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLWxvZy1pbi1tZW51L0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXHNhc3NcXF9taXhpbnMuc2NzcyIsImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLWxvZy1pbi1tZW51L0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG50bS1sb2ctaW4tbWVudVxcbnRtLWxvZy1pbi1tZW51LmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tbG9nLWluLW1lbnUvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFFO0VDVkY7SUFHSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVLEVBQUEsRUE0Qlo7O0FBbENGO0VBV00seUJDSlM7RURLVCxjQ1RTLEVBQUE7O0FESGY7RUFlTSx5QkNQa0IsRUFBQTs7QURSeEI7SUFpQlEsY0NIVSxFQUFBOztBRGRsQjtFQXdCTSx5QkNyQlM7RURzQlQsY0NsQlMsRUFBQTs7QURQZjtFQTRCTSx5QkN4Qm1CLEVBQUE7O0FESnpCO0lBOEJRLGNDbEJNLEVBQUE7O0FEdUJkO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZDQUE2QztFQUM3QyxjQUFjO0VBQ2QsWUFBWTtFQUNaLFFBQVE7RUFDUixtQkFBbUIsRUFBQTs7QUFackI7SUFlSSxhQUFhLEVBQUE7O0FEeENmO01DeUJGO1FBaUJNLGFBQWEsRUFBQSxFQUVoQjs7QUFuQkg7SUFzQkksa0JBQWtCLEVBQUE7O0FBdEJ0QjtNQXdCTSw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLFdBQVc7TUFDWCxVQUFVLEVBQUE7O0FBM0JoQjtJQStCSSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7O0FBaEN2QjtNQW1DTSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsbUJBQW1CLEVBQUE7O0FEaEV2QjtRQ3lCRjtVQXlDUSxtQkFBbUIsRUFBQSxFQUd0Qjs7QUQzRUg7SUMrQkY7TUErQ0ksWUFBWSxFQUFBLEVBb0VmOztBRDVJQztJQ3lCRjtNQWtESSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLDRDQUFvQztjQUFwQyxvQ0FBb0M7TUFDcEMsc0RDbEU4QyxFQUFBO01EVWxEO1FBMkRNLFVBQVU7UUFDVixzRUN0RTRDO1FEc0U1Qyw4REN0RTRDO1FEc0U1QywwSEN0RTRDLEVBQUE7TURVbEQ7UUFnRU0sVUFBVTtRQUNWLHdIQzNFNEM7UUQyRTVDLGdIQzNFNEM7UUQyRTVDLDRLQzNFNEM7UUQ0RTVDLDBDQUFrQztnQkFBbEMsa0NBQWtDLEVBQUEsRUFFbkM7O0FBcEVMO0lBd0VJLG1CQUFtQixFQUFBOztBRGpHckI7TUN5QkY7UUEwRU0seUNBQWlDO2dCQUFqQyxpQ0FBaUM7UUFDakMsc0VDckY0QztRRHFGNUMsOERDckY0QztRRHFGNUMsMEhDckY0QyxFQUFBLEVEeUcvQzs7QUEvRkg7TUFnRk0sVUFBVSxFQUFBOztBRHpHZDtRQ3lCRjtVQWtGUSw4SEM1RjBDO1VENEYxQyxzSEM1RjBDO1VENEYxQyxxTEM1RjBDLEVBQUEsRURnRzdDOztBRC9HSDtNQ3lCRjtRQTBGUSw0SENwRzBDO1FEb0cxQyxvSENwRzBDO1FEb0cxQyxrTENwRzBDO1FEcUcxQyxVQUFVO1FBQ1YseUNBQWlDO2dCQUFqQyxpQ0FBaUMsRUFBQSxFQUVwQzs7QUE5Rkw7SUFtR0ksa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBOztBQXBHMUI7SUF5R0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUE7O0FEckl0QjtNQ3lCRjtRQThHTSxlQUFlO1FBQ2Ysb0JBQW9CLEVBQUEsRUFHdkIiLCJmaWxlIjoibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tbG9nLWluLW1lbnUvbnRtLWxvZy1pbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIG1vYmlsZS10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gbGFyZ2UtZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTkwcHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gZXh0cmEtbGFyZ2UtZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc2Fzcy9taXhpbnMnO1xuQGltcG9ydCAnLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG5cbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgcmlnaHQ6IDhweDtcbiAgfVxuXG4gICYubnRtLW5hdmJhci0tbGlnaHQge1xuICAgIC5sb2dpbl9fZHJvcGRvd24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgY29sb3I6ICAkYmxhY2s7XG4gICAgfVxuICAgIC5sb2dpbl9fZHJvcGRvd24tYnV0dG9ucy0tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICRncmF5LWRhcms7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5udG0tbmF2YmFyLS1kYXJrIHtcbiAgICAubG9naW5fX2Ryb3Bkb3duIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5sb2dpbl9fZHJvcGRvd24tYnV0dG9ucy0tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1zZWNvbmRhcnk7XG4gICAgICBwIHtcbiAgICAgICAgY29sb3I6ICRncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuIH1cbi5sb2dpbl9fZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAwO1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgZmxleDogMSAxIDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcmlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XG5cbiAgLmxvZ2luX19kcm9wZG93bi1idXR0b25zLCAubG9naW5fX2Ryb3Bkb3duLWJ1dHRvbnMtLXNlY29uZGFyeSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luX19kcm9wZG93bi1idXR0b25zLmF1dGhlbnRpY2F0ZWQge1xuICAgIHBhZGRpbmc6IDM2cHggMjRweDtcbiAgICAubmF2X19saW5rIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG4gIC5sb2dpbl9fZHJvcGRvd24tYnV0dG9ucy0tc2Vjb25kYXJ5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDsgLy9cblxuICAgIHAge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMjIycHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIC0xMDIlLCAwKTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgLjNzICR0aW1pbmctZnVuY3Rpb247XG5cbiAgICAubG9naW5fX2Ryb3Bkb3duLWJ1dHRvbnMge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgLjBzICR0aW1pbmctZnVuY3Rpb247XG4gICAgfVxuXG4gICAgLmxvZ2luX19kcm9wZG93bi1idXR0b25zLS1zZWNvbmRhcnkge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgLjBzICR0aW1pbmctZnVuY3Rpb24sIG9wYWNpdHkgLjNzIC4wcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxNXB4LCAwKTtcblxuICAgIH1cbiAgfVxuXG4gICYuaXMtYWN0aXZlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCUsIDApO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuXG4gICAgfVxuXG4gICAgLmxvZ2luX19kcm9wZG93bi1idXR0b25zIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgLjIycyAkdGltaW5nLWZ1bmN0aW9uLCB0cmFuc2Zvcm0gLjNzIC4yMnMgJHRpbWluZy1mdW5jdGlvbjtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmxvZ2luX19kcm9wZG93bi1idXR0b25zLS1zZWNvbmRhcnkge1xuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgLjRzICR0aW1pbmctZnVuY3Rpb24sIG9wYWNpdHkgLjNzIC40cyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAubG9naW5fX2Ryb3Bkb3duLWJ1dHRvbnMgLm50bS1idG57XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuXG4gIC5uYXZfX2xpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuXG4gICAgfVxuICB9XG59XG5cblxuIiwiXG5cblxuJHByaW1hcnk6ICNlMjAwNzQ7XG4kcHJpbWFyeS1ob3ZlcjogI2JhMDA2MDtcbiRwcmltYXJ5LWZvY3VzOiAjYTEwMDUzO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJsYWNrLXNlY29uZGFyeTogIzI2MjYyNjtcbiRibGFjay10aGlyZDojMjEyMTIxO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kd2hpdGUtc2Vjb25kYXJ5OiNmOGY4Zjg7XG4kd2hpdGUtdGhpcmQ6ICNmMmYyZjI7XG4kd2hpdGUtZm91cnRoOiAjZjZmNmY2O1xuJHdoaXRlLWZpZnRoOiAjZThlOGU4O1xuJGdyYXk6ICNjY2NjY2M7XG4kZ3JheS1zZWNvbmRhcnk6ICNiM2IzYjM7XG4kZ3JheS1kYXJrOiM2YTZhNmE7XG4kZ3JheS1saWdodDojOWI5YjliO1xuJGdyYXktZGFya2VzdDogIzMzMzMzMztcbiRmb250LWZhbWlseS1zZWNvbmRhcnktYm9sZDogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsXG5cIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeS1ub3JtYWw6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLFxuXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnktdWx0cmE6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLFxuXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS10ZWxlR3JvdGVza05leHQtdWx0cmE6IFwiVGVsZUdyb3Rlc2tOZXh0LVVsdHJhXCI7XG5cbiR0aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjEsIDAuMjUsIDEpO1xuXG4iXX0= */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: NtmLogInMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtmLogInMenuComponent", function() { return NtmLogInMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics.service */ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session.service */ "../../../libs/shared/digital-unav/src/lib/services/session.service.ts");
/* harmony import */ var _services_logout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/logout.service */ "../../../libs/shared/digital-unav/src/lib/services/logout.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/window-ref.service */ "../../../libs/shared/digital-unav/src/lib/services/window-ref.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");










var NtmLogInMenuComponent = /** @class */ (function () {
    function NtmLogInMenuComponent(platformId, sesionService, analyticsService, logoutService, windowRef, config) {
        this.platformId = platformId;
        this.sesionService = sesionService;
        this.analyticsService = analyticsService;
        this.logoutService = logoutService;
        this.windowRef = windowRef;
        this.config = config;
        this.closeLoginMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isswitchAccount = this.sesionService.getSessionAttributes().switchAccount === 'true';
        this.loginRedirect = this.config.loginRedirect || false;
    }
    NtmLogInMenuComponent.prototype.emitClose = function (event) {
        if (!this.loginElem.nativeElement.contains(event.target)) {
            this.closeLoginMenu.emit(true);
        }
    };
    NtmLogInMenuComponent.prototype.logout = function () {
        this.logoutService.doLogout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe)).subscribe();
    };
    NtmLogInMenuComponent.prototype.loginNavigation = function (url, linksTarget) {
        var window = this.windowRef.nativeWindow();
        var dynamicUrl = url;
        var target = linksTarget === 'NEW' ? '_blank' : '_self';
        if (this.loginRedirect) {
            var redirectUrl = window.location.href;
            var parsedUrl = this.logoutService.getParsedUrlForAuthUNAV(redirectUrl, true);
            dynamicUrl = dynamicUrl + '?dest=' + parsedUrl;
        }
        window.open(dynamicUrl, target);
    };
    NtmLogInMenuComponent.prototype.ngOnDestroy = function () {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId))
            return;
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmLogInMenuComponent.prototype, "closeLoginMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmLogInMenuComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NtmLogInMenuComponent.prototype, "isOpened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NtmLogInMenuComponent.prototype, "setInputFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('login'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NtmLogInMenuComponent.prototype, "loginElem", void 0);
    NtmLogInMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-log-in-menu',
            template: __webpack_require__(/*! ./ntm-log-in-menu.component.html */ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.html"),
            styles: [__webpack_require__(/*! ./ntm-log-in-menu.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_9__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"],
            _services_logout_service__WEBPACK_IMPORTED_MODULE_4__["LogoutService"],
            _services_window_ref_service__WEBPACK_IMPORTED_MODULE_8__["WindowRefService"], Object])
    ], NtmLogInMenuComponent);
    return NtmLogInMenuComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  *ngIf=\"isPlatformBrowser\"  \n  class=\"navbar__search\" \n  id=\"navbar_search\" \n  [class.is-active]=\"isOpened\" \n  #search\n>\n  <form class=\"navbar__search-form\" role=\"search\" autocomplete=\"off\" action=\".\">\n    <label for=\"nav_search_text\" class=\"sr-only\">Search</label>\n    <span \n      #searchIcon\n      class=\"navbar__search-input-icon mdi mdi-magnify\"\n      (click)=\"submit()\"\n      tmoDigitalAnalytics\n      eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ model.searchTerm }}&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{ targetUrl }}&quot;}\"\n    ></span>\n    <input\n      #searchInput\n      class=\"navbar__search-form-input\"\n      id=\"nav_search_text\"\n      type=\"search\"\n      role=\"search\"\n      (focusin)=\"openResults()\"\n      placeholder={{searchAuthData.searchHint}}\n      [(ngModel)]=\"model.searchTerm\"\n      name=\"searchTerm\"\n      #name=\"ngModel\"\n      (ngModelChange)=\"onModelChange()\"\n      (keydown.enter)=\"triggerClick()\"\n      (keyup)=\"autoSuggestion($event.target.value)\"\n      required\n    />\n    <!-- To enable the \"X\" button (to clear the search input) on mobile, update the display property of .mdi-close    -->\n    <span \n      *ngIf=\"model.searchTerm\"\n      class=\"navbar__search-input-icon mdi mdi-close\" \n      (mousedown)=\"clearInput()\">\n    </span>\n  </form>\n    <div class=\"navbar__search-results\" [class.is-active]=\"resultsState\" *ngIf=\"searchAuthData?.enableNewDropDown\">\n      <div class=\"navbar__search-results-container\">\n          <div class=\"navbar__search-results-default\" *ngIf=\"!model.searchTerm\">\n              <div class=\"search__results-tile\" *ngIf=\"searchAuthData.quickLinksLabel\">\n                  <p [innerHtml]=\"searchAuthData.quickLinksLabel\"></p>\n                  <li *ngFor=\"let quickLink of searchAuthData.quickLinks\">\n                    <a class=\"nav__link\" href={{quickLink?.linkHref}} [innerHtml]=\"quickLink?.linkText\"\n                    tmoDigitalAnalytics\n                    eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ quickLink.linkText }}&quot;,&quot;autosearch&quot; : &quot;1&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{quickLink.linkHref}}&quot;}\"></a>\n                  </li>\n              </div>\n              <div class=\"search__results-tile\" *ngIf=\"searchAuthData.topSearchesLabel\">\n                  <p [innerHtml]=\"searchAuthData.topSearchesLabel\"></p>\n                  <li *ngFor=\"let topSearch of searchAuthData?.searchSuggestions\"> \n                    <span class=\"mdi mdi-magnify\"></span>\n                    <a class=\"nav__link\" href={{topSearch?.linkHref}} [innerHtml]=\"topSearch?.linkText\"\n                    tmoDigitalAnalytics\n                    eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ topSearch.linkText }}&quot;,&quot;autosearch&quot; : &quot;1&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{topSearch.linkHref}}&quot;}\"></a>\n                  </li>\n              </div>\n            </div>\n            <div class=\"navbar__search-results-dirty\" *ngIf=\"model.searchTerm\">\n                <div class=\"search__results-tile suggestions\">\n                    <li *ngFor=\"let data of invetoryInfo\" >\n                    <span class=\"mdi mdi-magnify\"></span>\n                      <a  class=\"nav__link\"\n                      tmoDigitalAnalytics\n                      eventData=\"{&quot;navType&quot;: &quot;{{analyticsService.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ data }}&quot;,&quot;autosearch&quot; : &quot;1&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{ targetUrl }}&quot;}\" tabindex=\"0\" (click)='selectedSuggestion(data)' (keydown.enter)=\"selectedSuggestion(data)\">{{data}}</a>\n                    </li>\n                   <!-- <li>\n                    <span class=\"mdi mdi-magnify\"></span>\n                      <a class=\"nav__link\" href=\"\">Apple IPhone Xs</a>\n                    </li>\n                    <li>\n                      <span class=\"mdi mdi-magnify\"></span>\n                      <a class=\"nav__link\" href=\"\">Google Pixel 3</a>\n                    </li> -->\n                </div>\n                <div class=\"search__results-tile\" *ngIf=\"searchAuthData.quickLinksLabel\">\n                  <p [innerHtml]=\"searchAuthData.quickLinksLabel\"></p>\n                  <li *ngFor=\"let quickLink of searchAuthData.quickLinks\">\n                    <a class=\"nav__link\" href={{quickLink?.linkHref}} [innerHtml]=\"quickLink.linkText\"\n                    tmoDigitalAnalytics\n                    eventData=\"{&quot;navType&quot;: &quot;{{analyticsService?.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ quickLink?.linkText }}&quot;, &quot;autosearch&quot; : &quot;1&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{quickLink?.linkHref}}&quot;}\"></a>\n                  </li>\n              </div>\n              <div class=\"search__results-tile\" *ngIf=\"searchAuthData.topSearchesLabel\">\n                  <p [innerHtml]=\"searchAuthData?.topSearchesLabel \"></p>\n                  <li *ngFor=\"let topSearch of searchAuthData.searchSuggestions\"> \n                    <span class=\"mdi mdi-magnify\"></span>\n                    <a class=\"nav__link\" href={{topSearch?.linkHref}} [innerHtml]=\"topSearch?.linkText\"\n                    tmoDigitalAnalytics\n                    eventData=\"{&quot;navType&quot;: &quot;{{analyticsService?.navType}}&quot; , &quot;searchTerm&quot; : &quot;{{ topSearch?.linkText }}&quot;, &quot;autosearch&quot; : &quot;1&quot;, &quot;category&quot;:&quot;Search&quot;, &quot;targetUrl&quot;: &quot;{{topSearch?.linkHref}}&quot;}\"></a>\n                  </li>\n              </div>\n                \n      </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  overflow-y: scroll; }\n  @media (min-width: 1024px) {\n    :host {\n      height: 100%;\n      top: 0;\n      position: absolute;\n      padding: 8px 16px;\n      box-sizing: border-box;\n      overflow-y: visible; } }\n  :host.ntm-navbar--light {\n    background: #ffffff; }\n  :host.ntm-navbar--light .navbar__search {\n      background-color: #ffffff; }\n  :host.ntm-navbar--light .navbar__search-results {\n      background-color: #f8f8f8; }\n  @media (min-width: 1024px) {\n        :host.ntm-navbar--light .navbar__search-results {\n          background-color: transparent; } }\n  :host.ntm-navbar--light .navbar__search-form-input::-webkit-input-placeholder {\n      color: #6a6a6a;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--light .navbar__search-form-input:-ms-input-placeholder {\n      color: #6a6a6a;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--light .navbar__search-form-input::-ms-input-placeholder {\n      color: #6a6a6a;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--light .navbar__search-form-input::placeholder {\n      color: #6a6a6a;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--light .navbar__search-form-input {\n      color: #262626; }\n  :host.ntm-navbar--light .navbar__search-form-input:focus, :host.ntm-navbar--light .navbar__search-form-input:hover {\n        border-bottom: 2px solid #000000; }\n  :host.ntm-navbar--light .navbar__search-results-container {\n      background-color: #f8f8f8; }\n  @media (min-width: 1024px) {\n        :host.ntm-navbar--light .navbar__search-results-container {\n          background-color: #ffffff; } }\n  :host.ntm-navbar--light .search__results-tile p {\n      color: #6a6a6a; }\n  :host.ntm-navbar--light .search__results-tile .nav__link {\n      color: #000000; }\n  :host.ntm-navbar--light .search__results-tile .nav__link:hover, :host.ntm-navbar--light .search__results-tile .nav__link:focus {\n        color: #e20074; }\n  :host.ntm-navbar--dark {\n    background: #000000; }\n  :host.ntm-navbar--dark .navbar__search {\n      background-color: #000000; }\n  :host.ntm-navbar--dark .navbar__search-form-input {\n      color: #ffffff; }\n  :host.ntm-navbar--dark .navbar__search-form-input:focus, :host.ntm-navbar--dark .navbar__search-form-input:hover {\n        border-bottom: 2px solid #f2f2f2; }\n  :host.ntm-navbar--dark .navbar__search-form-input::-webkit-input-placeholder {\n      color: #ffffff;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--dark .navbar__search-form-input:-ms-input-placeholder {\n      color: #ffffff;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--dark .navbar__search-form-input::-ms-input-placeholder {\n      color: #ffffff;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--dark .navbar__search-form-input::placeholder {\n      color: #ffffff;\n      opacity: 1;\n      /* Firefox */ }\n  :host.ntm-navbar--dark .navbar__search-form-btn .mdi {\n      color: #ffffff; }\n  :host.ntm-navbar--dark .navbar__search-results {\n      background-color: #262626; }\n  @media (min-width: 1024px) {\n        :host.ntm-navbar--dark .navbar__search-results {\n          background-color: transparent; } }\n  :host.ntm-navbar--dark .navbar__search-results-container {\n      background: #262626; }\n  :host.ntm-navbar--dark .search__results-tile p {\n      color: #cccccc; }\n  :host.ntm-navbar--dark .search__results-tile .nav__link {\n      color: #ffffff; }\n  :host.ntm-navbar--dark .search__results-tile .nav__link:hover, :host.ntm-navbar--dark .search__results-tile .nav__link:focus {\n        color: #b3b3b3; }\n  .navbar__search {\n  height: 100%;\n  position: relative; }\n  @media (min-width: 1024px) {\n    .navbar__search {\n      transition: 0.3s 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\n      -webkit-transform: scale3d(0, 1, 1);\n              transform: scale3d(0, 1, 1);\n      -webkit-transform-origin: right;\n              transform-origin: right;\n      margin-bottom: -4px; }\n      .navbar__search input::-webkit-input-placeholder, .navbar__search span {\n        opacity: 0;\n        transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search input:-ms-input-placeholder, .navbar__search span {\n        opacity: 0;\n        transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search input::-ms-input-placeholder, .navbar__search span {\n        opacity: 0;\n        transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search input::placeholder, .navbar__search span {\n        opacity: 0;\n        transition: 0.3s 0.3s cubic-bezier(0.25, 0.1, 0.25, 1); } }\n  @media (min-width: 1024px) {\n    .navbar__search.is-active {\n      transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n      -webkit-transform: scale3d(1, 1, 1);\n              transform: scale3d(1, 1, 1); }\n      .navbar__search.is-active input::-webkit-input-placeholder, .navbar__search.is-active span {\n        opacity: 1;\n        transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search.is-active input:-ms-input-placeholder, .navbar__search.is-active span {\n        opacity: 1;\n        transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search.is-active input::-ms-input-placeholder, .navbar__search.is-active span {\n        opacity: 1;\n        transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); }\n      .navbar__search.is-active input::placeholder, .navbar__search.is-active span {\n        opacity: 1;\n        transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1); } }\n  .navbar__search-form {\n  position: relative;\n  margin: 16px 20px;\n  display: flex; }\n  @media (min-width: 1024px) {\n    .navbar__search-form {\n      margin: 0;\n      width: auto;\n      height: 100%; } }\n  .navbar__search-input-icon {\n  position: absolute; }\n  .navbar__search-input-icon.mdi.mdi-magnify {\n    left: 0; }\n  .navbar__search-input-icon.mdi-close {\n    right: 0;\n    font-size: 24px;\n    display: none;\n    cursor: pointer; }\n  @media (min-width: 1024px) {\n      .navbar__search-input-icon.mdi-close {\n        display: initial; } }\n  .navbar__search-form-input {\n  flex-grow: 1;\n  border-width: 0;\n  border-radius: 0;\n  padding: 7px 16px 6px 28px;\n  box-shadow: none;\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  outline: none;\n  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\n  background: inherit;\n  -webkit-appearance: none;\n  border-bottom: 1px solid #f2f2f2; }\n  .navbar__search-form-input:focus, .navbar__search-form-input:hover {\n    border-bottom: 2px solid #000000;\n    -webkit-appearance: none;\n    box-shadow: none !important;\n    -webkit-box-shadow: none !important; }\n  .navbar__search-form-input::-ms-clear {\n    display: none;\n    width: 0;\n    height: 0; }\n  .navbar__search-form-input::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0; }\n  .navbar__search-form-input::-webkit-search-decoration, .navbar__search-form-input::-webkit-search-cancel-button, .navbar__search-form-input::-webkit-search-results-button, .navbar__search-form-input::-webkit-search-results-decoration {\n    display: none; }\n  .navbar__search-form-btn {\n  position: absolute;\n  right: 8px;\n  border: none;\n  height: 95%;\n  width: 40px;\n  background: transparent;\n  cursor: pointer; }\n  .navbar__search-form-btn:hover .mdi.mdi-magnify, .navbar__search-form-btn:focus .mdi.mdi-magnify {\n    color: #e20074; }\n  .mdi.mdi-magnify {\n  font-size: 24px;\n  display: inline-block; }\n  .navbar__search-results {\n  position: absolute;\n  width: 100%;\n  overflow: scroll;\n  height: 100%; }\n  @media (min-width: 1024px) {\n    .navbar__search-results {\n      height: auto;\n      overflow: hidden;\n      visibility: hidden;\n      background-color: transparent;\n      padding: 0px 16px 34px;\n      box-sizing: content-box;\n      -webkit-transform: translate3d(-16px, -17px, 0);\n              transform: translate3d(-16px, -17px, 0);\n      margin-top: 17px; } }\n  .navbar__search-results .navbar__search-results-container {\n    position: relative;\n    width: 100%;\n    padding: 24px 0; }\n  @media (min-width: 1024px) {\n      .navbar__search-results .navbar__search-results-container {\n        transition: 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        -webkit-transform: translate3d(0, -110%, 0);\n                transform: translate3d(0, -110%, 0);\n        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);\n        overflow: hidden;\n        height: auto;\n        padding: 0;\n        margin-top: 8px;\n        padding: 20px 0px 0px; } }\n  .navbar__search-results.is-active {\n    visibility: visible; }\n  @media (min-width: 1024px) {\n      .navbar__search-results.is-active .navbar__search-results-container {\n        transition: 0.3s 50ms cubic-bezier(0.25, 0.1, 0.25, 1);\n        -webkit-transform: translate3d(0, 0%, 0);\n                transform: translate3d(0, 0%, 0); } }\n  @media (min-width: 1024px) {\n      .navbar__search-results.is-active li, .navbar__search-results.is-active p {\n        transition: opacity 0.3s 0s cubic-bezier(0.25, 0.1, 0.25, 1);\n        opacity: 1; } }\n  @media (min-width: 1024px) {\n    .navbar__search-results li, .navbar__search-results p {\n      transition: opacity 0.3s 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);\n      opacity: 0; } }\n  .navbar__search-results li {\n    text-decoration: none;\n    list-style: none;\n    margin: 0 0 24px; }\n  @media (min-width: 1024px) {\n      .navbar__search-results li {\n        margin: 0px 0 5px; } }\n  .navbar__search-results-default, .navbar__search-results-dirty {\n  padding: 0 24px; }\n  .search__results-tile {\n  margin-bottom: 23px; }\n  .search__results-tile p {\n    font-size: 10px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: 0.9px;\n    padding: 0 0 21px;\n    text-transform: uppercase; }\n  @media (min-width: 1024px) {\n      .search__results-tile p {\n        padding: 0 0 8px; } }\n  .search__results-tile .mdi {\n    font-size: 24px;\n    margin-right: 7px;\n    line-height: 1;\n    margin-top: 0px;\n    vertical-align: middle; }\n  .search__results-tile .nav__link:not(.dropdown-toggles) {\n    font-size: 16px;\n    font-weight: bold;\n    vertical-align: middle;\n    cursor: pointer;\n    display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLXNlYXJjaC1iYXIvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbnRtLXNlYXJjaC1iYXJcXG50bS1zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tc2VhcmNoLWJhci9EOlxcVE1PX1BST0pFQ1RTXFxUTU5HXFx0bW8tYWVtLXVpLWludGVncmF0aW9uXFx0bW8tbmcvbGlic1xcc2hhcmVkXFxkaWdpdGFsLXVuYXZcXHNyY1xcbGliXFxzYXNzXFxfbWl4aW5zLnNjc3MiLCJsaWJzL3NoYXJlZC9kaWdpdGFsLXVuYXYvc3JjL2xpYi9jb21wb25lbnRzL250bS1zZWFyY2gtYmFyL0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQ1FsQjtJRFZGO01BSUksWUFBWTtNQUNaLE1BQU07TUFDTixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLHNCQUFzQjtNQUN0QixtQkFBbUIsRUFBQSxFQTJGdEI7RUFwR0Q7SUFhSSxtQkVOVyxFQUFBO0VGUGY7TUFnQk0seUJFVFMsRUFBQTtFRlBmO01Bb0JNLHlCRVprQixFQUFBO0VERXRCO1FEVkY7VUFzQlEsNkJBQ0YsRUFBQSxFQUNEO0VBeEJMO01BMEJNLGNFWlk7TUZhWixVQUFVO01BQUUsWUFBQSxFQUFhO0VBM0IvQjtNQTBCTSxjRVpZO01GYVos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QUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQ3pSM0I7TUQ4UUY7UUFjTSxnQkFBZ0IsRUFBQSxFQUduQjtFQWpCSDtJQW1CSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysc0JBQXNCLEVBQUE7RUF2QjFCO0lBMEJJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlLEVBQUEiLCJmaWxlIjoibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tc2VhcmNoLWJhci9udG0tc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG5cbiAgfVxuICAmLm50bS1uYXZiYXItLWxpZ2h0ICB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xuXG4gICAgLm5hdmJhcl9fc2VhcmNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICB9XG5cbiAgICAubmF2YmFyX19zZWFyY2gtcmVzdWx0cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xuICAgICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gICAgICB9XG4gICAgfVxuICAgIC5uYXZiYXJfX3NlYXJjaC1mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJGdyYXktZGFyaztcbiAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICB9XG5cbiAgICAubmF2YmFyX19zZWFyY2gtZm9ybS1pbnB1dCB7XG4gICAgICBjb2xvcjokYmxhY2stc2Vjb25kYXJ5O1xuICAgICAgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmxhY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmJhcl9fc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XG5cbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaF9fcmVzdWx0cy10aWxlIHtcbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogJGdyYXktZGFyaztcbiAgICAgIH1cbiAgICAgIC5uYXZfX2xpbmsge1xuICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5udG0tbmF2YmFyLS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG5cbiAgICAubmF2YmFyX19zZWFyY2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIH1cbiAgICAubmF2YmFyX19zZWFyY2gtZm9ybS1pbnB1dCB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkd2hpdGUtdGhpcmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdmJhcl9fc2VhcmNoLWZvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgfVxuICAgIC5uYXZiYXJfX3NlYXJjaC1mb3JtLWJ0biAubWRpIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICAgIC5uYXZiYXJfX3NlYXJjaC1yZXN1bHRzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1zZWNvbmRhcnk7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2YmFyX19zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogJGJsYWNrLXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAuc2VhcmNoX19yZXN1bHRzLXRpbGUge1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAkZ3JheTtcbiAgICAgIH1cbiAgICAgIC5uYXZfX2xpbmsge1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgICAgICBjb2xvcjogJGdyYXktc2Vjb25kYXJ5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubmF2YmFyX19zZWFyY2gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgdHJhbnNpdGlvbjogLjNzIC4ycyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxICwgMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgc3BhbiB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogLjNzIC4zcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgIH1cbiAgfVxuICAmLmlzLWFjdGl2ZSB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICB0cmFuc2l0aW9uOiAuM3MgMHMgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxICwxKTtcbiAgICAgIGlucHV0OjpwbGFjZWhvbGRlciwgc3BhbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcyAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmF2YmFyX19zZWFyY2gtZm9ybXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDE2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuLm5hdmJhcl9fc2VhcmNoLWlucHV0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgJi5tZGkubWRpLW1hZ25pZnkge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgJi5tZGktY2xvc2Uge1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgfVxuICB9XG59XG5cbi5uYXZiYXJfX3NlYXJjaC1mb3JtLWlucHV0e1xuICBmbGV4LWdyb3c6MTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiA3cHggMTZweCA2cHggMjhweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zZWNvbmRhcnktbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG91dGxpbmU6bm9uZTtcbiAgdHJhbnNpdGlvbjogLjJzICR0aW1pbmctZnVuY3Rpb247XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR3aGl0ZS10aGlyZDtcblxuICAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJsYWNrO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIGNsZWFycyB0aGUgeCBmcm9tIElFXG4gICY6Oi1tcy1jbGVhciB7ICBkaXNwbGF5OiBub25lOyB3aWR0aCA6IDA7IGhlaWdodDogMDt9XG4gICY6Oi1tcy1yZXZlYWwgeyAgZGlzcGxheTogbm9uZTsgd2lkdGggOiAwOyBoZWlnaHQ6IDA7IH1cblxuICAvLyBjbGVhcnMgdGhlIHggZnJvbSBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcbiAgJjo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbiAgJjo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1idXR0b24sXG4gICY6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7IGRpc3BsYXk6IG5vbmU7IH1cblxufVxuXG4ubmF2YmFyX19zZWFyY2gtZm9ybS1idG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgYm9yZGVyOm5vbmU7XG4gIGhlaWdodDogOTUlO1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAubWRpLm1kaS1tYWduaWZ5IHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG4gIH1cbn1cbi5tZGkubWRpLW1hZ25pZnkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5hdmJhcl9fc2VhcmNoLXJlc3VsdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwcHggMTZweCAzNHB4O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2cHgsIC0xN3B4LCAwKTtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICB9XG4gIC5uYXZiYXJfX3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIHRyYW5zaXRpb246IC4zcyAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTEwJSwgMCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4O1xuXG4gICAgfVxuXG4gIH1cblxuICAmLmlzLWFjdGl2ZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgIC5uYXZiYXJfX3NlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzIDUwbXMgJHRpbWluZy1mdW5jdGlvbjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwJSwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpLCBwIHtcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyAwcyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxpLCBwIHtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIC4ycyAkdGltaW5nLWZ1bmN0aW9uO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgbGkge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMCAwIDI0cHg7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBtYXJnaW46IDBweCAwIDVweDtcbiAgICB9XG4gIH1cbn1cblxuLm5hdmJhcl9fc2VhcmNoLXJlc3VsdHMtZGVmYXVsdCwgLm5hdmJhcl9fc2VhcmNoLXJlc3VsdHMtZGlydHkge1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbi5zZWFyY2hfX3Jlc3VsdHMtdGlsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgICBwYWRkaW5nOiAwIDAgMjFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBwYWRkaW5nOiAwIDAgOHB4O1xuXG4gICAgfVxuICB9XG4gIC5tZGkge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAubmF2X19saW5rOm5vdCguZHJvcGRvd24tdG9nZ2xlcykge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbn1cblxuXG5cbiIsIkBtaXhpbiBtb2JpbGUtdGFibGV0LW9ubHkge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTE5MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cblxuQG1peGluIGV4dHJhLWxhcmdlLWRlc2t0b3Age1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gICAgQGNvbnRlbnRcbiAgIH1cbn1cbiIsIlxuXG5cbiRwcmltYXJ5OiAjZTIwMDc0O1xuJHByaW1hcnktaG92ZXI6ICNiYTAwNjA7XG4kcHJpbWFyeS1mb2N1czogI2ExMDA1MztcbiRibGFjazogIzAwMDAwMDtcbiRibGFjay1zZWNvbmRhcnk6ICMyNjI2MjY7XG4kYmxhY2stdGhpcmQ6IzIxMjEyMTtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJHdoaXRlLXNlY29uZGFyeTojZjhmOGY4O1xuJHdoaXRlLXRoaXJkOiAjZjJmMmYyO1xuJHdoaXRlLWZvdXJ0aDogI2Y2ZjZmNjtcbiR3aGl0ZS1maWZ0aDogI2U4ZThlODtcbiRncmF5OiAjY2NjY2NjO1xuJGdyYXktc2Vjb25kYXJ5OiAjYjNiM2IzO1xuJGdyYXktZGFyazojNmE2YTZhO1xuJGdyYXktbGlnaHQ6IzliOWI5YjtcbiRncmF5LWRhcmtlc3Q6ICMzMzMzMzM7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LWJvbGQ6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLFxuXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnktbm9ybWFsOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LXVsdHJhOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktdGVsZUdyb3Rlc2tOZXh0LXVsdHJhOiBcIlRlbGVHcm90ZXNrTmV4dC1VbHRyYVwiO1xuXG4kdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcblxuIl19 */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: NtmSearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtmSearchBarComponent", function() { return NtmSearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analytics.service */ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts");
/* harmony import */ var _services_search_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search-bar.service */ "../../../libs/shared/digital-unav/src/lib/services/search-bar.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");






var NtmSearchBarComponent = /** @class */ (function () {
    function NtmSearchBarComponent(renderer, analyticsService, ref, searchBarService, platformId, config) {
        this.renderer = renderer;
        this.analyticsService = analyticsService;
        this.ref = ref;
        this.searchBarService = searchBarService;
        this.platformId = platformId;
        this.config = config;
        this.model = { searchTerm: null };
        this.resultsState = false;
        this.invetoryInfo = [];
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId);
    }
    NtmSearchBarComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth <= 1024) {
            this.searchInputElem.nativeElement.focus();
        }
    };
    NtmSearchBarComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.targetUrl = this.url ? this.url.split('?')[0] : '';
            if (!this.isOpened) {
                this.resultsState = false;
            }
            setTimeout(function () {
                if (_this.setInputFocus) {
                    _this.searchInputElem.nativeElement.focus();
                }
            }, 300);
        }
    };
    NtmSearchBarComponent.prototype.triggerClick = function () {
        if (this.model.searchTerm) {
            this.searchIcon.nativeElement.click();
        }
    };
    NtmSearchBarComponent.prototype.onModelChange = function () {
        this.ref.detectChanges();
    };
    NtmSearchBarComponent.prototype.autoSuggestion = function (term) {
        var _this = this;
        if (this.searchAuthData && this.searchAuthData.enableNewDropDown) {
            var value = {};
            value['url'] = this.searchAuthData.searchURL;
            value['maxPredictive'] = this.searchAuthData.maxPredictive;
            this.searchBarService.getResultData(term, value, function (res) {
                _this.invetoryInfo = res;
                _this.ref.detectChanges();
            });
        }
    };
    NtmSearchBarComponent.prototype.injectScript = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            [this.config.baseUrl + '/client/assets/scripts/search.js']
                .map(function (url) {
                var script = document.createElement('script');
                script.src = url;
                script.type = 'text/javascript';
                script.async = true;
                script.defer = true;
                script.id = 'unavSearchApi';
                return script;
            })
                .forEach(function (SerachScript) {
                document.body.appendChild(SerachScript);
            });
        }
    };
    NtmSearchBarComponent.prototype.ngAfterViewInit = function () {
        if (this.searchAuthData && this.searchAuthData.enableNewDropDown && this.searchAuthData.enableDefaultScript) {
            this.injectScript();
        }
    };
    NtmSearchBarComponent.prototype.openResults = function () {
        this.resultsState = true;
        this.ref.detectChanges();
    };
    NtmSearchBarComponent.prototype.clearInput = function () {
        var _this = this;
        this.model.searchTerm = null;
        this.openResults();
        setTimeout(function () {
            if (_this.setInputFocus) {
                _this.searchInputElem.nativeElement.focus();
            }
        }, 300);
    };
    NtmSearchBarComponent.prototype.selectedSuggestion = function (data) {
        this.resultsState = false;
        this.model.searchTerm = data;
        this.ref.detectChanges();
        this.submit();
    };
    NtmSearchBarComponent.prototype.submit = function () {
        if (this.model.searchTerm) {
            /* istanbul ignore next: Only wiring with window methods */
            window.location.href = this.url
                ? this.url.replace('{querryParam}', this.model.searchTerm || '')
                : window.location.href;
            /* istanbul ignore next: Only wiring with window methods */
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NtmSearchBarComponent.prototype, "setInputFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NtmSearchBarComponent.prototype, "isOpened", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NtmSearchBarComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmSearchBarComponent.prototype, "searchAuthData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NtmSearchBarComponent.prototype, "searchElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NtmSearchBarComponent.prototype, "searchInputElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NtmSearchBarComponent.prototype, "searchIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NtmSearchBarComponent.prototype, "onResize", null);
    NtmSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-search-bar',
            template: __webpack_require__(/*! ./ntm-search-bar.component.html */ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.html"),
            styles: [__webpack_require__(/*! ./ntm-search-bar.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_5__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_search_bar_service__WEBPACK_IMPORTED_MODULE_3__["SearchBarService"], String, Object])
    ], NtmSearchBarComponent);
    return NtmSearchBarComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown-container/ntm-unav-dropdown-container.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown-container/ntm-unav-dropdown-container.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: NtmUnavDropdownContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtmUnavDropdownContainerComponent", function() { return NtmUnavDropdownContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "../../../libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts");



var NtmUnavDropdownContainerComponent = /** @class */ (function () {
    function NtmUnavDropdownContainerComponent(ref) {
        this.ref = ref;
    }
    NtmUnavDropdownContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Open the first panel
        // this.dropdowns.toArray()[0].menuOpened = true;
        // Loop through all dropdowns
        this.dropdowns.toArray().forEach(function (dropdown) {
            // subscribe panel toggle event <
            dropdown.toggle.subscribe(function (event) {
                // Open the panel
                _this.openPanel(dropdown);
            });
        });
    };
    NtmUnavDropdownContainerComponent.prototype.openPanel = function (dropdown) {
        // close all dropdowns
        this.dropdowns.toArray().forEach(function (p) { return p.menuOpened = false; });
        // open the selected panel
        dropdown.menuOpened = true;
        this.ref.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], NtmUnavDropdownContainerComponent.prototype, "dropdowns", void 0);
    NtmUnavDropdownContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-unav-dropdown-container',
            template: '<ng-content></ng-content>',
            styles: ["display: inherit"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NtmUnavDropdownContainerComponent);
    return NtmUnavDropdownContainerComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li \n    class=\"navbar__item\"\n    [class.is-active]=\"menuOpened\"\n    (mouseenter)=\"toggleDropdown($event)\"\n    (mouseleave)=\"toggleDropdown($event)\"\n    (touchend)=\"touchToggleDropdown($event, data.linkUrl[0].childLinks.length )\"\n    [class.nav_link_highlight]=\"data.active == true && data.linkUrl[0].childLinks.length > 0\"\n    [class.nav_link_highlight_wout_dd]=\"data.active == true && data.linkUrl[0].childLinks.length <= 0\">\n\n  <div class=\"nav__link-container\" *ngIf=\"data.linkUrl[0]\">\n    <a class=\"nav__link\"\n       [class.nav-right-with-dropdown]=\"data.id === 'call-us' \"\n       id=\"digital-header-nav-link-head-{{index}}\"\n       [attr.aria-label]=\"data.label\"\n       [attr.target]=\"data.targetWindow === 'NEW' ? '_blank' : '_self'\"\n       [href]=\"data.linkUrl[0].linkHref\"\n       tmoDigitalAnalytics eventData='{\"navType\": \"{{analyticsService.navType}}\" , \"category\":\"{{data.linkUrl[0].linkText}}\"}'>\n\n      <div id=\"digital-header-nav-link-head-content-{{index}}\" *ngIf=\"data.id === 'call-us'; else navItemWithNoIcon\" class=\"nav-item-with-icon\">\n       <span class=\"mdi {{ data.icon }}\"></span>\n       <span class=\"d-inline show-on-sm-modal\">{{ data.linkUrl[0].linkText }}</span>\n      </div>\n\n      <ng-template #navItemWithNoIcon>\n        {{ data.linkUrl[0].linkText }}\n      </ng-template>\n\n      <span class=\"mdi\"  [class.mdi-chevron-down]=\"!menuOpened\"\n      [class.mdi-chevron-up]=\"menuOpened\" *ngIf=\"data.linkUrl[0].childLinks.length > 0\"></span>\n    \n    </a>\n    <button *ngIf=\"data.linkUrl[0].childLinks.length > 0\"\n            class=\"dropdown__chevron\"\n            aria-haspopup=\"true\"\n            [attr.aria-expanded]=\"menuOpened ? true : false\"\n            [attr.aria-controls]=\"data.id\"\n            id=\"digital-header-nav-link-mobile-toggel-{{index}}\"\n            (click)=\"toggleMobileDropdown()\"\n            aria-label=\"Toggle Panel\">\n      <span class=\"mdi\" [class.mdi-minus]=\"menuOpened\" [class.mdi-plus]=\"!menuOpened\"></span>\n    </button>\n    <div *ngIf=\" data.linkType !== 'MULTIPLE-COLUMN' && data.linkUrl[0].childLinks.length > 0  && data.linkUrl[0].childLinks[0].categorizedlink[0] && data.linkUrl[0].childLinks[0].categorizedlink[0].linkUrl.length > 0\"\n         class=\"dropdown__menu\"\n         [attr.aria-labelledby]=\"data.label\"\n         role=\"menu\"\n         [class.is-active]=\"menuOpened\"\n         [class.nav-right-dropdown]=\"data.id === 'call-us' \"\n         [@centerX]=\"menuOpened ? 'open' : 'closed'\">\n      <p *ngIf=\"data.linkUrl[0].childLinks.length > 0 && data.linkUrl[0].childLinks[0].categoryName\" id=\"nav-link-category-name-{{index}}\" >{{ data.linkUrl[0].childLinks[0].categoryName }}</p>\n      <ng-container *ngFor=\"let item of data.linkUrl[0].childLinks[0].categorizedlink; let i=index\">\n      \n      <!-- Live Person, our 3rd party chat bot will be injected in this <a> tag -->\n      <!-- The injected div has inline styles that can be overridden by contacting Catalin Negru at livePerson. -->\n      <a \n        [class.dropdown__item]=\"item.id!='lpUnavLink'\"\n        [class.livePersonLink]=\"item.id =='lpUnavLink'\"\n        [attr.href]=\"item.id!='lpUnavLink' ? item.linkUrl[0].linkHref : undefined\"\n        role=\"menuitem\"\n        [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n        [attr.aria-label]=\"item.label\"\n        id=\"{{item.id}}\"\n        tmoDigitalAnalytics eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{data.linkUrl[0].linkText}}\", \"subCategory\":\n         \"{{ data.linkUrl[0].childLinks[0].categoryName }}{{ data.linkUrl[0].childLinks[0].categoryName ? \" : \" : \"\"  }}{{ item.linkUrl[0].linkText }}\"}'\n      >\n        <span *ngIf=\"item.id !=='lpUnavLink'\">{{ item.linkUrl[0].linkText }}</span>\n      </a>\n\n      </ng-container>\n        \n    </div>\n    <div *ngIf=\"data.linkType === 'MULTIPLE-COLUMN' &&  data.linkUrl[0].childLinks.length > 0 && data.linkUrl[0].childLinks[0].categorizedlink[0] && data.linkUrl[0].childLinks[0].categorizedlink[0].linkUrl.length > 0\"\n        class=\"dropdown__menu dropdown__menu--multicolum is-active\"\n        aria-labelledby=\"data.label\" \n        role=\"menu\" id=\"data.id\" \n        [class.is-active]=\"menuOpened\" \n        [class.nav-right-dropdown]=\"data.id === 'call-us' \" \n        [@centerX]=\"menuOpened ? 'open' : 'closed'\"\n    >\n    <div class=\"dropdown__multicolumn\" *ngFor=\"let category of data.linkUrl[0].childLinks;let j=index\">\n      <p *ngIf=\"data.linkUrl[0].childLinks.length > 0 && data.linkUrl[0].childLinks[j].categoryName\" id=\"nav-link-category-name-{{index}}\" >{{ data.linkUrl[0].childLinks[j].categoryName }}</p>\n      <a *ngFor=\"let item of data.linkUrl[0].childLinks[j].categorizedlink; let i=index\"\n        class=\"dropdown__item\"\n        [href]=\"item.linkUrl[0].linkHref\"\n        role=\"menuitem\"\n        [attr.target]=\"item.targetWindow === 'NEW' ? '_blank' : '_self'\"\n        [attr.aria-label]=\"item.label\"\n        id=\"digital-header-nav-link-category-link-{{index}}-{{i}}\"\n        tmoDigitalAnalytics eventData='{\"navType\": \"{{analyticsService.navType}}\", \"category\":\"{{data.linkUrl[0].linkText}}\", \"subCategory\":\n        \"{{ data.linkUrl[0].childLinks[j].categoryName }}{{ data.linkUrl[0].childLinks[j].categoryName ? \" : \" : \"\"  }}{{ item.linkUrl[0].linkText }}\"}'\n      >\n     {{ item.linkUrl[0].linkText }}</a>\n    </div>\n</div>\n  </div>\n  \n</li>"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host.ntm-navbar--light .dropdown__item:hover,\n  :host.ntm-navbar--light .dropdown__item:active,\n  :host.ntm-navbar--light .dropdown__item:focus {\n    color: #e20074;\n    text-decoration: none; }\n  :host.ntm-navbar--light .navbar__item:hover, :host.ntm-navbar--light .navbar__item:focus {\n    color: #000000; }\n  @media (min-width: 1024px) {\n    :host.ntm-navbar--light .navbar__item.is-active {\n      color: #e20074; } }\n  @media (max-width: 1023px) {\n    :host.ntm-navbar--light .navbar__item.is-active .nav-item-with-icon {\n      color: #e20074; } }\n  :host.ntm-navbar--light .dropdown__menu {\n    background-color: #ffffff;\n    color: #000000; }\n  @media (max-width: 1023px) {\n      :host.ntm-navbar--light .dropdown__menu.nav-right-dropdown {\n        background-color: #f8f8f8; } }\n  :host.ntm-navbar--light .dropdown__menu p {\n    color: #6a6a6a; }\n  :host.ntm-navbar--light .dropdown__chevron {\n    color: #000000;\n    outline: none !important; }\n  @media (min-width: 1024px) {\n      :host.ntm-navbar--light .dropdown__chevron {\n        color: inherit; } }\n  :host.ntm-navbar--dark .dropdown__item:hover,\n  :host.ntm-navbar--dark .dropdown__item:active,\n  :host.ntm-navbar--dark .dropdown__item:focus {\n    color: #b3b3b3; }\n  :host.ntm-navbar--dark .navbar__item:hover, :host.ntm-navbar--dark .navbar__item:focus {\n    color: #ffffff; }\n  @media (min-width: 1024px) {\n      :host.ntm-navbar--dark .navbar__item:hover, :host.ntm-navbar--dark .navbar__item:focus {\n        color: #b3b3b3; } }\n  @media (max-width: 1023px) {\n    :host.ntm-navbar--dark .navbar__item.is-active .nav-item-with-icon {\n      color: #b3b3b3; } }\n  :host.ntm-navbar--dark .dropdown__menu {\n    background: #000000;\n    color: #ffffff; }\n  @media (max-width: 1023px) {\n      :host.ntm-navbar--dark .dropdown__menu.nav-right-dropdown {\n        background-color: #262626; }\n        :host.ntm-navbar--dark .dropdown__menu.nav-right-dropdown a:first-child {\n          padding-top: 22px; } }\n  :host.ntm-navbar--dark .dropdown__menu p {\n    color: #cccccc; }\n  :host.ntm-navbar--dark .dropdown__chevron {\n    color: #ffffff; }\n  @media (min-width: 1024px) {\n      :host.ntm-navbar--dark .dropdown__chevron {\n        color: inherit; } }\n  .nav__link:focus + .dropdown__menu {\n  display: block; }\n  @media (min-width: 1024px) {\n  .navbar__item:hover .dropdown__menu.dropdown__menu--multicolum,\n  .navbar__item:focus .dropdown__menu.dropdown__menu--multicolum {\n    display: flex; } }\n  .nav__link-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .dropdown__chevron {\n  border: none;\n  font-size: 24px;\n  color: inherit;\n  padding: 0;\n  background-color: transparent;\n  flex-grow: 1;\n  text-align: right; }\n  @media (min-width: 1024px) {\n    .dropdown__chevron {\n      display: none; } }\n  .dropdown__menu.is-active {\n  visibility: visible; }\n  .dropdown__menu.dropdown__menu--multicolum {\n  display: none;\n  justify-content: space-around; }\n  .dropdown__menu.dropdown__menu--multicolum .dropdown__multicolumn {\n  min-width: 173px; }\n  .dropdown__menu {\n  min-width: 130px;\n  display: flex;\n  flex-direction: column;\n  float: none;\n  left: -16px;\n  z-index: 1000;\n  list-style: none;\n  flex: 1 1 100%;\n  width: 100%; }\n  @media (min-width: 1024px) {\n    .dropdown__menu {\n      width: auto; } }\n  @media (min-width: 1190px) {\n    .dropdown__menu {\n      min-width: 220px; } }\n  @media (min-width: 1024px) {\n    .dropdown__menu:focus {\n      display: block; } }\n  @media (min-width: 1024px) {\n    .dropdown__menu.is-active {\n      position: absolute;\n      display: block; } }\n  @media (min-width: 1024px) {\n    .dropdown__menu {\n      padding: 11px 25px;\n      flex-direction: row;\n      height: auto !important;\n      opacity: 1 !important;\n      visibility: visible !important;\n      display: none;\n      top: 68px;\n      position: absolute;\n      box-shadow: 0 16px 25px 0 rgba(0, 0, 0, 0.08); } }\n  .dropdown__menu::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 37px;\n    left: 0;\n    top: -24px;\n    background-color: transparent; }\n  .dropdown__menu p {\n    padding: 12px 16px;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: normal;\n    margin: 0; }\n  @media (min-width: 1024px) {\n      .dropdown__menu p {\n        padding: 14px 0 4px;\n        text-transform: capitalize; } }\n  .navbar__item:focus-within .dropdown__menu {\n  display: block; }\n  @media (min-width: 1024px) {\n    .navbar__item:focus-within .dropdown__menu {\n      position: absolute; } }\n  .navbar__item {\n  position: relative;\n  display: block;\n  height: 100%;\n  margin-bottom: 14px;\n  font-weight: bold; }\n  @media (min-width: 1024px) {\n    .navbar__item {\n      margin-bottom: 0;\n      display: flex;\n      align-content: center;\n      align-items: center;\n      margin-left: 16px; } }\n  @media (min-width: 1190px) {\n    .navbar__item {\n      margin-left: 24px; } }\n  .navbar__item .nav__link {\n    font-size: 24px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    line-height: 1.71; }\n  @media (min-width: 1024px) {\n      .navbar__item .nav__link {\n        font-size: 14px; } }\n  .navbar__item .nav__link.nav-right-with-dropdown {\n      width: initial; }\n  .navbar__item .nav__link .mdi {\n      margin-left: 1px;\n      margin-top: 1px;\n      display: none; }\n  @media (min-width: 1024px) {\n        .navbar__item .nav__link .mdi {\n          display: block; } }\n  .navbar__item .nav__link .nav-item-with-icon {\n      display: flex;\n      align-items: center; }\n  .navbar__item .nav__link .nav-item-with-icon .mdi {\n        display: inline;\n        margin: 3px 5.7072px 0 0;\n        position: relative;\n        line-height: 1; }\n  .dropdown__item {\n  display: block;\n  width: 100%;\n  padding: 12px 30px;\n  clear: both;\n  white-space: nowrap;\n  border: 0;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: inherit; }\n  @media (min-width: 1024px) {\n    .dropdown__item {\n      padding: 14px 0;\n      line-height: normal; } }\n  a.dropdown__item:focus {\n  outline: none !important; }\n  .dropdown__item:hover,\n.dropdown__item:active,\n.dropdown__item:focus {\n  color: #6a6a6a;\n  font-weight: bold; }\n  .nav_link_highlight {\n  position: relative;\n  width: 100%; }\n  .nav_link_highlight::after {\n  content: \"\";\n  width: calc(100% - 40px);\n  height: 2px;\n  background: #ed008b;\n  position: absolute;\n  bottom: -8px;\n  left: 0; }\n  .nav_link_highlight_wout_dd::after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: #ed008b;\n  position: absolute;\n  bottom: -8px;\n  left: 0; }\n  .livePersonLink {\n  display: block;\n  text-decoration: none;\n  color: #000000; }\n  .livePersonLink:hover {\n  color: #e20074;\n  text-decoration: none; }\n  @media (max-width: 1023px) {\n  .livePersonLink {\n    padding-left: 30px;\n    padding-right: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLXVuYXYtZHJvcGRvd24vRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcY29tcG9uZW50c1xcbnRtLXVuYXYtZHJvcGRvd25cXG50bS11bmF2LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tdW5hdi1kcm9wZG93bi9EOlxcVE1PX1BST0pFQ1RTXFxUTU5HXFx0bW8tYWVtLXVpLWludGVncmF0aW9uXFx0bW8tbmcvbGlic1xcc2hhcmVkXFxkaWdpdGFsLXVuYXZcXHNyY1xcbGliXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJsaWJzL3NoYXJlZC9kaWdpdGFsLXVuYXYvc3JjL2xpYi9jb21wb25lbnRzL250bS11bmF2LWRyb3Bkb3duL0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXHNhc3NcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQVksRUFBQTtFQURkOzs7SUFNTSxjQ05XO0lET1gscUJBQW9CLEVBQUE7RUFQMUI7SUFZUSxjQ1RPLEVBQUE7RUNPYjtJRlZGO01BZ0JVLGNDaEJPLEVBQUEsRURpQlI7RUFHSDtJQXBCTjtNQXVCWSxjQ3ZCSyxFQUFBLEVEd0JOO0VBeEJYO0lBNkJNLHlCQ3RCUztJRHVCVCxjQzNCUyxFQUFBO0VENkJUO01BaENOO1FBa0NVLHlCQzFCYyxFQUFBLEVEMkJmO0VBbkNUO0lBdUNNLGNDekJZLEVBQUE7RURkbEI7SUEwQ00sY0N2Q1M7SUR3Q1Qsd0JBQXdCLEVBQUE7RUVq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O0VBTXRCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7RUVqUmQ7SUZxUUY7TUFlSSxlQUFlO01BQ2YsbUJBQW1CLEVBQUEsRUFFdEI7RUFDRDtFQUNFLHdCQUF3QixFQUFBO0VBRTFCOzs7RUFHRSxjQzFSZ0I7RUQyUmhCLGlCQUFpQixFQUFBO0VBR25CO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQ0YsRUFBQTtFQUNBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTyxFQUFBO0VBRVQ7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPLEVBQUE7RUFFVDtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsY0NsVWEsRUFBQTtFRG9VZjtFQUNJLGNDeFVhO0VEeVViLHFCQUFxQixFQUFBO0VBRXpCO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUEsRUFDcEIiLCJmaWxlIjoibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tdW5hdi1kcm9wZG93bi9udG0tdW5hdi1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gICYubnRtLW5hdmJhci0tbGlnaHQge1xuICAgIC5kcm9wZG93bl9faXRlbTpob3ZlcixcbiAgICAuZHJvcGRvd25fX2l0ZW06YWN0aXZlLFxuICAgIC5kcm9wZG93bl9faXRlbTpmb2N1c3tcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIH1cblxuICAgIC5uYXZiYXJfX2l0ZW0ge1xuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbiAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgIC5uYXYtaXRlbS13aXRoLWljb24ge1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5OztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRyb3Bkb3duX19tZW51IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpe1xuICAgICAgICAmLm5hdi1yaWdodC1kcm9wZG93biB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZHJvcGRvd25fX21lbnUgcHtcbiAgICAgIGNvbG9yOiAkZ3JheS1kYXJrO1xuICAgIH1cbiAgICAuZHJvcGRvd25fX2NoZXZyb24ge1xuICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIEBpbmNsdWRlIGRlc2t0b3B7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYubnRtLW5hdmJhci0tZGFyayB7XG5cbiAgICAuZHJvcGRvd25fX2l0ZW06aG92ZXIsXG4gICAgLmRyb3Bkb3duX19pdGVtOmFjdGl2ZSxcbiAgICAuZHJvcGRvd25fX2l0ZW06Zm9jdXN7XG4gICAgICBjb2xvcjogJGdyYXktc2Vjb25kYXJ5O1xuICAgIH1cblxuICAgIC5uYXZiYXJfX2l0ZW0ge1xuICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgICAgICAgIGNvbG9yOiAkZ3JheS1zZWNvbmRhcnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XG4gICAgICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgICAubmF2LWl0ZW0td2l0aC1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS1zZWNvbmRhcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kcm9wZG93bl9fbWVudSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbiAgICAgICAgJi5uYXYtcmlnaHQtZHJvcGRvd24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1zZWNvbmRhcnk7XG5cbiAgICAgICAgICBhOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZHJvcGRvd25fX21lbnUgcCAgeyBjb2xvcjogJGdyYXk7IH1cblxuICAgIC5kcm9wZG93bl9fY2hldnJvbiB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgQGluY2x1ZGUgZGVza3RvcHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gfVxuXG4ubmF2X19saW5rOmZvY3VzICsgLmRyb3Bkb3duX19tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2YmFyX19pdGVtOmhvdmVyIC5kcm9wZG93bl9fbWVudS5kcm9wZG93bl9fbWVudS0tbXVsdGljb2x1bSxcbi5uYXZiYXJfX2l0ZW06Zm9jdXMgLmRyb3Bkb3duX19tZW51LmRyb3Bkb3duX19tZW51LS1tdWx0aWNvbHVtIHtcbiAgLy8gZGlzcGxheTpibG9jaztcbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5cbi5uYXZfX2xpbmstY29udGFpbmVyIHtcbiAgZGlzcGxheTpmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6d3JhcDtcblxufVxuLmRyb3Bkb3duX19jaGV2cm9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOmluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmRyb3Bkb3duX19tZW51LmlzLWFjdGl2ZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZHJvcGRvd25fX21lbnUuZHJvcGRvd25fX21lbnUtLW11bHRpY29sdW0ge1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmRyb3Bkb3duX19tZW51LmRyb3Bkb3duX19tZW51LS1tdWx0aWNvbHVtIC5kcm9wZG93bl9fbXVsdGljb2x1bW4ge1xuICBtaW4td2lkdGg6IDE3M3B4O1xuXG5cbn1cblxuLmRyb3Bkb3duX19tZW51IHtcbiAgbWluLXdpZHRoOiAxMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxvYXQ6IG5vbmU7XG4gIGxlZnQ6IC0xNnB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIEBpbmNsdWRlIGxhcmdlLWRlc2t0b3Age1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgfVxuICAmLmlzLWFjdGl2ZSB7XG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgcGFkZGluZzoxMXB4IDI1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyBvdmVycmlkZSBhbmd1bGFyIGFuaW1hdGlvbiBmb3IgZGVza3RvcFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB0b3A6IDY4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAtMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBwIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgIHBhZGRpbmc6IDE0cHggMCA0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbi5uYXZiYXJfX2l0ZW06Zm9jdXMtd2l0aGluIC5kcm9wZG93bl9fbWVudSB7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIEBpbmNsdWRlIGRlc2t0b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuLm5hdmJhcl9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcblxuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIH1cblxuICBAaW5jbHVkZSBsYXJnZS1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC5uYXZfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG5cbiAgICAmLm5hdi1yaWdodC13aXRoLWRyb3Bkb3duIHtcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5tZGkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIC5uYXYtaXRlbS13aXRoLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAubWRpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBtYXJnaW46IDNweCA1LjcwNzJweCAwIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kcm9wZG93bl9faXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICBjbGVhcjogYm90aDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogaW5oZXJpdDtcblxuICBAaW5jbHVkZSBkZXNrdG9wIHtcbiAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuYS5kcm9wZG93bl9faXRlbTpmb2N1c3tcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duX19pdGVtOmhvdmVyLFxuLmRyb3Bkb3duX19pdGVtOmFjdGl2ZSxcbi5kcm9wZG93bl9faXRlbTpmb2N1c3tcbiAgY29sb3I6ICRncmF5LWRhcms7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2X2xpbmtfaGlnaGxpZ2h0e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6MTAwJVxufVxuLm5hdl9saW5rX2hpZ2hsaWdodDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZWQwMDhiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogMDtcbn1cbi5uYXZfbGlua19oaWdobGlnaHRfd291dF9kZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNlZDAwOGI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAwO1xufVxuLmxpdmVQZXJzb25MaW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRibGFjaztcbn1cbi5saXZlUGVyc29uTGluazpob3ZlcntcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XG4gIC5saXZlUGVyc29uTGluayB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbiIsIlxuXG5cbiRwcmltYXJ5OiAjZTIwMDc0O1xuJHByaW1hcnktaG92ZXI6ICNiYTAwNjA7XG4kcHJpbWFyeS1mb2N1czogI2ExMDA1MztcbiRibGFjazogIzAwMDAwMDtcbiRibGFjay1zZWNvbmRhcnk6ICMyNjI2MjY7XG4kYmxhY2stdGhpcmQ6IzIxMjEyMTtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJHdoaXRlLXNlY29uZGFyeTojZjhmOGY4O1xuJHdoaXRlLXRoaXJkOiAjZjJmMmYyO1xuJHdoaXRlLWZvdXJ0aDogI2Y2ZjZmNjtcbiR3aGl0ZS1maWZ0aDogI2U4ZThlODtcbiRncmF5OiAjY2NjY2NjO1xuJGdyYXktc2Vjb25kYXJ5OiAjYjNiM2IzO1xuJGdyYXktZGFyazojNmE2YTZhO1xuJGdyYXktbGlnaHQ6IzliOWI5YjtcbiRncmF5LWRhcmtlc3Q6ICMzMzMzMzM7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LWJvbGQ6IEJsaW5rTWFjU3lzdGVtRm9udCwgLWFwcGxlLXN5c3RlbSwgXCJTZWdvZSBVSVwiLFxuXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnktbm9ybWFsOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LXVsdHJhOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktdGVsZUdyb3Rlc2tOZXh0LXVsdHJhOiBcIlRlbGVHcm90ZXNrTmV4dC1VbHRyYVwiO1xuXG4kdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC4xLCAwLjI1LCAxKTtcblxuIiwiQG1peGluIG1vYmlsZS10YWJsZXQtb25seSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50XG4gICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gbGFyZ2UtZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTkwcHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuXG5AbWl4aW4gZXh0cmEtbGFyZ2UtZGVza3RvcCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgICBAY29udGVudFxuICAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: NtmUnavDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtmUnavDropdownComponent", function() { return NtmUnavDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/dropdown.directive */ "../../../libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analytics.service */ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts");





var NtmUnavDropdownComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NtmUnavDropdownComponent, _super);
    function NtmUnavDropdownComponent(analyticsService, ref, elementRef) {
        var _this = _super.call(this, ref) || this;
        _this.analyticsService = analyticsService;
        _this.elementRef = elementRef;
        _this.activeIndex = 0;
        _this.clicks = 0;
        _this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    NtmUnavDropdownComponent_1 = NtmUnavDropdownComponent;
    NtmUnavDropdownComponent.prototype.onWindowClick = function (event) {
        if (!this.elementRef.nativeElement.contains(event.target) && !this.mobileView) {
            this.menuOpened = false;
            this.changeRef.detectChanges();
        }
    };
    NtmUnavDropdownComponent.prototype.ngOnChanges = function () {
        this.menuOpened = this.menuItemData && !this.menuItemData.close;
    };
    NtmUnavDropdownComponent.prototype.toggleMobileDropdown = function () {
        var toggleState = !this.menuOpened;
        this.menuOpened = toggleState;
        this.changeRef.detectChanges();
    };
    NtmUnavDropdownComponent.prototype.toggleDropdown = function (e) {
        if (e.type === 'mouseenter' && !this.mobileView) {
            this.menuOpened = true;
            this.changeRef.detectChanges();
            return;
        }
        if (e.type === 'mouseleave' && !this.mobileView) {
            this.menuOpened = false;
            this.changeRef.detectChanges();
            return;
        }
    };
    NtmUnavDropdownComponent.prototype.touchToggleDropdown = function (e, items) {
        var srcId = e.target ? e.target.id : '';
        var parentEle = e.target ? e.target['parentElement'] : '';
        var parentSrcId = parentEle ? parentEle['id'] : '';
        var isnavLink = srcId.startsWith('digital-header-nav-link-head') || parentSrcId.startsWith('digital-header-nav-link-head');
        /*if (!this.mobileView && isnavLink && items > 0) {
         
          if(!this.menuOpened){
            e.preventDefault();
            this.closeMenu.emit();
          }
          setTimeout(() => {
          const IS_OPENED = !this.menuOpened;
              this.menuOpened = IS_OPENED;
              this.changeRef.detectChanges();
            },0);
        }*/
        if (e.type === 'touchend' && !this.mobileView) {
            if (!this.menuOpened) {
                e.preventDefault();
                this.menuOpened = true;
                this.changeRef.detectChanges();
                return;
            }
            else {
                this.menuOpened = false;
                this.changeRef.detectChanges();
                this.closeMenu.emit();
                return;
            }
        }
    };
    var NtmUnavDropdownComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmUnavDropdownComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NtmUnavDropdownComponent.prototype, "mobileView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NtmUnavDropdownComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmUnavDropdownComponent.prototype, "menuItemData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmUnavDropdownComponent.prototype, "closeMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NtmUnavDropdownComponent.prototype, "onWindowClick", null);
    NtmUnavDropdownComponent = NtmUnavDropdownComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-unav-dropdown',
            template: __webpack_require__(/*! ./ntm-unav-dropdown.component.html */ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.html"),
            providers: [
                {
                    provide: _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NtmUnavDropdownComponent_1; })
                }
            ],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('centerX', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0',
                        opacity: 0,
                        visibility: 'hidden'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.3s cubic-bezier(0.25, 0.1, 0.25, 1)'),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.dropdown__item, p, a', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate3d(-10px, 0, 0)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 200ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translate3d(0, 0px, 0)' })))
                            ])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.dropdown__item, p, a', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.25, 0.1, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translate3d(-15px, 0, 0)' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':self', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms 200ms cubic-bezier(0.25, 0.1, 0.25, 1)')
                            ])
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./ntm-unav-dropdown.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NtmUnavDropdownComponent);
    return NtmUnavDropdownComponent;
}(_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"]));



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar_universal_menu\" class=\"navbar__universal-menu\" >\n  <div class=\"grid-row universal__menu-grid\" role=\"menu\">\n      <a *ngFor=\"let item of this.data\"\n        class=\"grid-item universal__menu-grid-item\"\n        tabindex=\"0\"\n        [id]=\"item.id\"\n        [href]=\"item.linkUrl[0].linkHref\"\n        role=\"menuitem\"\n      >\n          <div class=\"grid__item-body\">\n              <p class=\"navbar__universal-menu-label\">{{ item.label }}</p>\n              <h1 class=\"navbar__universal-menu-headline\">{{ item.linkUrl[0].linkText }}</h1>\n              <p class=\"navbar__universal-menu-subtext\">{{ item.description }}</p>\n          </div>\n        </a>\n\n\n  </div> <!-- grid row -->\n\n</div> <!-- universal menu bar -->\n"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host.ntm-navbar--light .navbar__universal-menu {\n  color: #000000; }\n\n:host.ntm-navbar--dark .navbar__universal-menu {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLXVuaXZlcnNhbC1tZW51L0Q6XFxUTU9fUFJPSkVDVFNcXFRNTkdcXHRtby1hZW0tdWktaW50ZWdyYXRpb25cXHRtby1uZy9saWJzXFxzaGFyZWRcXGRpZ2l0YWwtdW5hdlxcc3JjXFxsaWJcXGNvbXBvbmVudHNcXG50bS11bml2ZXJzYWwtbWVudVxcbnRtLXVuaXZlcnNhbC1tZW51LmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGFyZWQvZGlnaXRhbC11bmF2L3NyYy9saWIvY29tcG9uZW50cy9udG0tdW5pdmVyc2FsLW1lbnUvRDpcXFRNT19QUk9KRUNUU1xcVE1OR1xcdG1vLWFlbS11aS1pbnRlZ3JhdGlvblxcdG1vLW5nL2xpYnNcXHNoYXJlZFxcZGlnaXRhbC11bmF2XFxzcmNcXGxpYlxcc2Fzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBR00sY0NBUyxFQUFBOztBREhmO0VBVU0sY0NIUyxFQUFBIiwiZmlsZSI6ImxpYnMvc2hhcmVkL2RpZ2l0YWwtdW5hdi9zcmMvbGliL2NvbXBvbmVudHMvbnRtLXVuaXZlcnNhbC1tZW51L250bS11bml2ZXJzYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Nhc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJy4uLy4uL3Nhc3MvbWl4aW5zJztcblxuOmhvc3Qge1xuICAmLm50bS1uYXZiYXItLWxpZ2h0IHtcbiAgICAubmF2YmFyX191bml2ZXJzYWwtbWVudSB7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuICAgIH1cblxuXG4gIH1cbiAgJi5udG0tbmF2YmFyLS1kYXJrIHtcbiAgICAubmF2YmFyX191bml2ZXJzYWwtbWVudSB7XG4gICAgICBjb2xvcjokd2hpdGU7XG4gICAgfVxuICB9XG5cblxufVxuXG5cblxuXG4iLCJcblxuXG4kcHJpbWFyeTogI2UyMDA3NDtcbiRwcmltYXJ5LWhvdmVyOiAjYmEwMDYwO1xuJHByaW1hcnktZm9jdXM6ICNhMTAwNTM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kYmxhY2stc2Vjb25kYXJ5OiAjMjYyNjI2O1xuJGJsYWNrLXRoaXJkOiMyMTIxMjE7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiR3aGl0ZS1zZWNvbmRhcnk6I2Y4ZjhmODtcbiR3aGl0ZS10aGlyZDogI2YyZjJmMjtcbiR3aGl0ZS1mb3VydGg6ICNmNmY2ZjY7XG4kd2hpdGUtZmlmdGg6ICNlOGU4ZTg7XG4kZ3JheTogI2NjY2NjYztcbiRncmF5LXNlY29uZGFyeTogI2IzYjNiMztcbiRncmF5LWRhcms6IzZhNmE2YTtcbiRncmF5LWxpZ2h0OiM5YjliOWI7XG4kZ3JheS1kYXJrZXN0OiAjMzMzMzMzO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeS1ib2xkOiBCbGlua01hY1N5c3RlbUZvbnQsIC1hcHBsZS1zeXN0ZW0sIFwiU2Vnb2UgVUlcIixcblwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5LW5vcm1hbDogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsXG5cIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeS11bHRyYTogQmxpbmtNYWNTeXN0ZW1Gb250LCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsXG5cIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXRlbGVHcm90ZXNrTmV4dC11bHRyYTogXCJUZWxlR3JvdGVza05leHQtVWx0cmFcIjtcblxuJHRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuMSwgMC4yNSwgMSk7XG5cbiJdfQ== */"

/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: NtmUniversalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NtmUniversalMenuComponent", function() { return NtmUniversalMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");


var NtmUniversalMenuComponent = /** @class */ (function () {
    function NtmUniversalMenuComponent() {
    }
    NtmUniversalMenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NtmUniversalMenuComponent.prototype, "data", void 0);
    NtmUniversalMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-universal-menu-element',
            template: __webpack_require__(/*! ./ntm-universal-menu.component.html */ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.html"),
            styles: [__webpack_require__(/*! ./ntm-universal-menu.component.scss */ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NtmUniversalMenuComponent);
    return NtmUniversalMenuComponent;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/config.ts":
/*!*****************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/config.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UNAV_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAV_CONFIG", function() { return UNAV_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");

var UNAV_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNAV_CONFIG');


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/directives/analytics-click.directive.ts":
/*!***********************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/directives/analytics-click.directive.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: AnalyticsClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsClickDirective", function() { return AnalyticsClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/analytics.service */ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts");




var AnalyticsClickDirective = /** @class */ (function () {
    function AnalyticsClickDirective(el, analyticsService) {
        this.el = el;
        this.analyticsService = analyticsService;
    }
    AnalyticsClickDirective.prototype.onClick = function () {
        var data = JSON.parse(this.eventData);
        var targetUrl = this.el.nativeElement.getAttribute('href') || data.targetUrl;
        var elementData = {
            targetUrl: targetUrl,
            icid: (targetUrl && targetUrl.indexOf('icid') > -1) ?
                new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: targetUrl.split('?')[1] }).get('icid') : ''
        };
        Object.assign(data, elementData);
        if (data && data.category && data.category !== 'Search') {
            this.analyticsService.processEvent(data);
        }
        else if (data && data.category && data.category === 'Search' && data.searchTerm) {
            this.analyticsService.processEvent(data);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AnalyticsClickDirective.prototype, "eventData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AnalyticsClickDirective.prototype, "onClick", null);
    AnalyticsClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tmoDigitalAnalytics]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_analytics_service__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"]])
    ], AnalyticsClickDirective);
    return AnalyticsClickDirective;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts":
/*!****************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(changeRef) {
        this.changeRef = changeRef;
        this.menuOpened = false;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropdownDirective.prototype.closeDropdown = function () {
        this.menuOpened = false;
        this.changeRef.detectChanges();
    };
    DropdownDirective.prototype.openDropdown = function () {
        this.toggle.next(true);
        this.changeRef.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DropdownDirective.prototype, "toggle", void 0);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tmoDropdown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/directives/focus-out.directive.ts":
/*!*****************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/directives/focus-out.directive.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: FocusListenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusListenDirective", function() { return FocusListenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");


var FocusListenDirective = /** @class */ (function () {
    function FocusListenDirective(renderer, eRef) {
        this.renderer = renderer;
        this.eRef = eRef;
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Fire event to parent navigation component when user clicks outside of element
    // This will be used to close out of the component view
    FocusListenDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.isFocused) {
            setTimeout(function () {
                _this.listenerFn = _this.renderer.listen('document', 'click', function (event) {
                    if (!_this.eRef.nativeElement.contains(event.target)) {
                        _this.focusChange.emit(true);
                    }
                });
            }, 0);
        }
        else if (this.listenerFn) {
            this.listenerFn();
        }
    };
    FocusListenDirective.prototype.ngOnDestroy = function () {
        if (this.listenerFn) {
            this.listenerFn();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tmoFocusListen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], FocusListenDirective.prototype, "isFocused", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FocusListenDirective.prototype, "focusChange", void 0);
    FocusListenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tmoFocusListen]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FocusListenDirective);
    return FocusListenDirective;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/content.ts":
/*!*************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/content.ts ***!
  \*************************************************************************************************************/
/*! exports provided: UnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavComponent", function() { return UnavComponent; });
var UnavComponent;
(function (UnavComponent) {
    UnavComponent.EnableTypeEnum = {
        TRUE: 'true',
        FALSE: 'false',
    };
    UnavComponent.ComponentTypeEnum = {
        HEADER: 'header',
        FOOTER: 'footer',
    };
    UnavComponent.ComponentNavTypeEnum = {
        PROSPECT: 'prospect',
        CUSTOMER: 'customer',
        DEFAULT: 'default',
        MYTMO: 'mytmo'
    };
    UnavComponent.NavThemeTypeEnum = {
        LIGHT: 'light',
        DARK: 'dark',
    };
})(UnavComponent || (UnavComponent = {}));


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/header.ts":
/*!************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/header.ts ***!
  \************************************************************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
var Header = /** @class */ (function () {
    function Header() {
        /**
         * universal links in the flyer.
         */
        this.sites = [];
        /**
         * Navigation on for the header.
         */
        this.navigationLinks = [];
        /**
         * Icons on the header.
         */
        this.utility = [];
    }
    return Header;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/headerUserLinks.ts":
/*!*********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/headerUserLinks.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: HeaderUserLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserLinks", function() { return HeaderUserLinks; });
var HeaderUserLinks;
(function (HeaderUserLinks) {
    HeaderUserLinks.LabelColorEnum = {
        BLACK: 'BLACK',
        MAGENTA: 'MAGENTA',
        WHITE: 'WHITE',
        GREY: 'GREY'
    };
})(HeaderUserLinks || (HeaderUserLinks = {}));


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/iconLink.ts":
/*!**************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/iconLink.ts ***!
  \**************************************************************************************************************/
/*! exports provided: IconLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconLink", function() { return IconLink; });
var IconLink;
(function (IconLink) {
    IconLink.IconTypeEnum = {
        TMOBILEICON: 'T-MOBILE-ICON',
        CORPORATEICON: 'CORPORATE-ICON'
    };
})(IconLink || (IconLink = {}));


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/index.ts":
/*!***********************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LinkUrl, Header, HeaderUserLinks, IconLink, Link, UnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "../../../libs/shared/digital-unav/src/lib/models/header.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony import */ var _headerUserLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerUserLinks */ "../../../libs/shared/digital-unav/src/lib/models/headerUserLinks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderUserLinks", function() { return _headerUserLinks__WEBPACK_IMPORTED_MODULE_1__["HeaderUserLinks"]; });

/* harmony import */ var _iconLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconLink */ "../../../libs/shared/digital-unav/src/lib/models/iconLink.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconLink", function() { return _iconLink__WEBPACK_IMPORTED_MODULE_2__["IconLink"]; });

/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ "../../../libs/shared/digital-unav/src/lib/models/link.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_3__["Link"]; });

/* harmony import */ var _linkUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linkUrl */ "../../../libs/shared/digital-unav/src/lib/models/linkUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkUrl", function() { return _linkUrl__WEBPACK_IMPORTED_MODULE_4__["LinkUrl"]; });

/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "../../../libs/shared/digital-unav/src/lib/models/content.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnavComponent", function() { return _content__WEBPACK_IMPORTED_MODULE_5__["UnavComponent"]; });









/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/link.ts":
/*!**********************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/link.ts ***!
  \**********************************************************************************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
var Link;
(function (Link) {
    Link.LinkTypeEnum = {
        DEFAULT: 'DEFAULT',
        PRIMARYBUTTON: 'PRIMARY-BUTTON',
        SECONDARYBUTTON: 'SECONDARY-BUTTON',
        SINGLECOLUMN: 'SINGLE-COLUMN',
        BUTTONCOLUMN: 'BUTTON-COLUMN',
        BLADE: 'BLADE'
    };
    Link.TargetWindowEnum = {
        NONE: 'NONE',
        SELF: 'SELF',
        NEW: 'NEW'
    };
})(Link || (Link = {}));


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/models/linkUrl.ts":
/*!*************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/models/linkUrl.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LinkUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkUrl", function() { return LinkUrl; });
var LinkUrl;
(function (LinkUrl) {
    LinkUrl.CustomerTypeEnum = {
        PROSPECT: 'PROSPECT',
        TMOPREVIOUSLYAUTHENTICATED: 'TMO-PREVIOUSLY-AUTHENTICATED',
        TMOCURRENTLYAUTHENTICATED: 'TMO-CURRENTLY-AUTHENTICATED',
        PARTNERPREVIOUSLYAUTHENTICATED: 'PARTNER-PREVIOUSLY-AUTHENTICATED',
        PARTNERCURRENTLYAUTHENTICATED: 'PARTNER-CURRENTLY-AUTHENTICATED'
    };
})(LinkUrl || (LinkUrl = {}));


/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/analytics.service.ts":
/*!*************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/analytics.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-ref.service */ "../../../libs/shared/digital-unav/src/lib/services/window-ref.service.ts");



var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(windowRef) {
        this.windowRef = windowRef;
        this.navType = 'tNav';
    }
    AnalyticsService.prototype.fireEventToAnalytics = function (eventData) {
        var window = this.windowRef.nativeWindow();
        var utagPath = window.utag ? window.utag.cfg.path : '';
        if (/\/tmobile\/(tmobile|mytmobile|myaccountapp)/i.test(utagPath)) {
            var newCustomEvent = void 0;
            window._PDL = window._PDL || {};
            window._PDL.eventData = eventData;
            if (window.navigator.userAgent.indexOf('MSIE') !== -1 ||
                window.navigator.appVersion.indexOf('Trident/') > 0) {
                newCustomEvent = document.createEvent('CustomEvent');
                newCustomEvent.initCustomEvent('globalNavigation', true, false, {});
            }
            else {
                newCustomEvent = new CustomEvent('globalNavigation');
            }
            window.dispatchEvent(newCustomEvent);
        }
        else if (window.utag &&
            /\/tmobile\/(nextgen|account|uno)/i.test(utagPath) &&
            window.digitalData) {
            window.digitalData.events.push(eventData);
            if (typeof window.digitalData.hasCallbacks === 'function' && window.digitalData.hasCallbacks()) {
                window.digitalData.triggerEvent();
            }
            else if (typeof window.triggerEvent === 'function') {
                window.triggerEvent("CLICK_EVENT");
            }
        }
    };
    AnalyticsService.prototype.processEvent = function (data) {
        var eventData = {
            eventInfo: {
                eventAction: 'click',
                eventType: 'navigation'
            },
            eventDescription: {
                ctaName: data.ctaName || '',
                category: data.category || '',
                icid: data.icid || '',
                navType: data.navType || '',
                subCategory: data.subCategory || '',
                targetUrl: data.targetUrl || '',
                searchTerm: data.searchTerm || '',
                autosearch: data.autosearch || ''
            }
        };
        if (data.targetUrl && data.targetUrl.indexOf('tel:') > -1) {
            if (data.ctaName === undefined) {
                eventData.eventDescription.ctaName = data.targetUrl.replace('tel:', '');
            }
            var info = {
                subInfo: [
                    {
                        eventType: 'clickToCall',
                        eventAction: 'click'
                    }
                ]
            };
            Object.assign(eventData, info);
        }
        this.fireEventToAnalytics(eventData);
    };
    AnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_window_ref_service__WEBPACK_IMPORTED_MODULE_2__["WindowRefService"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/cart.service.ts":
/*!********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/cart.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie.service */ "../../../libs/shared/digital-unav/src/lib/services/cookie.service.ts");





var CartService = /** @class */ (function () {
    function CartService(cookieService, config) {
        this.cookieService = cookieService;
        this.config = config;
        this.cartCookie = this.config.cartCookie;
    }
    CartService.prototype.getCartcounter = function () {
        var cookie = this.cartCookie && this.cookieService.getCookie(this.cartCookie);
        if (cookie) {
            try {
                var cartCounter = JSON.parse(cookie).cartCounter;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(cartCounter);
            }
            catch (_a) {
                console.log('error parsing cart cookie');
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], Object])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/content-path.service.ts":
/*!****************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/content-path.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ContentPathService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPathService", function() { return ContentPathService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./window-ref.service */ "../../../libs/shared/digital-unav/src/lib/services/window-ref.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session.service */ "../../../libs/shared/digital-unav/src/lib/services/session.service.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cookie.service */ "../../../libs/shared/digital-unav/src/lib/services/cookie.service.ts");











var ContentPathService = /** @class */ (function () {
    function ContentPathService(http, config, platformId, windowRef, cookieService, sessionService) {
        this.http = http;
        this.config = config;
        this.platformId = platformId;
        this.windowRef = windowRef;
        this.cookieService = cookieService;
        this.sessionService = sessionService;
        this.baseUrl = this.config.baseUrl;
        this.contentMap$ = this.http
            .get(this.baseUrl + "/content/sites.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    }
    ContentPathService.prototype.resolveContentUrl = function (component, clientId, site) {
        var _this = this;
        switch (site) {
            case _models__WEBPACK_IMPORTED_MODULE_7__["UnavComponent"].ComponentNavTypeEnum.PROSPECT:
                return this.getContentMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (val) { return _this.getUrlPath(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (id) { return _this.baseUrl + "/content/" + id + "." + component + ".json"; }));
            case _models__WEBPACK_IMPORTED_MODULE_7__["UnavComponent"].ComponentNavTypeEnum.CUSTOMER:
                return this.getAuthContent(component);
            default:
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.baseUrl + "/content/" + clientId + "." + component + ".json");
        }
    };
    ContentPathService.prototype.getContentMap = function () {
        return this.contentMap$;
    };
    ContentPathService.prototype.getUrlPath = function (res) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            if (this.isB2b()) {
                return 'business';
            }
            var urlpath_1 = _models__WEBPACK_IMPORTED_MODULE_7__["UnavComponent"].ComponentNavTypeEnum.DEFAULT;
            var window_1 = this.windowRef.nativeWindow();
            var curentPath_1 = window_1.location.pathname;
            if (curentPath_1 === '/')
                return urlpath_1;
            if (res && res.sites) {
                res.sites.forEach(function (x) {
                    var temp = curentPath_1.split('/')[1];
                    if (x === temp) {
                        urlpath_1 = x;
                    }
                });
            }
            if (res && res.groups) {
                res.groups.forEach(function (group) {
                    if (group.path) {
                        group.path.forEach(function (path) {
                            if (curentPath_1.startsWith(path)) {
                                urlpath_1 = group.id;
                            }
                        });
                    }
                });
            }
            return urlpath_1;
        }
    };
    ContentPathService.prototype.isB2b = function () {
        var window = this.windowRef.nativeWindow();
        var location = window.location.host;
        return location.includes('business.t-mobile.com') ? true : false;
    };
    ContentPathService.prototype.getAuthContent = function (component) {
        var _this = this;
        return this.sessionService.getMytmoUserState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var state = _this.sessionService.userSession;
            var varient = _models__WEBPACK_IMPORTED_MODULE_7__["UnavComponent"].ComponentNavTypeEnum.MYTMO;
            if (state.varient) {
                varient = state.varient;
            }
            return _this.baseUrl + "/content/" + varient + "." + component + ".json";
        }));
    };
    ContentPathService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_6__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object, String, _window_ref_service__WEBPACK_IMPORTED_MODULE_8__["WindowRefService"],
            _cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"],
            _session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]])
    ], ContentPathService);
    return ContentPathService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/content.service.ts":
/*!***********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/content.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: UNAV_TRANSFER_STATE_KEY, UNAV_TRANSFER_STATE, ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAV_TRANSFER_STATE_KEY", function() { return UNAV_TRANSFER_STATE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAV_TRANSFER_STATE", function() { return UNAV_TRANSFER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.service */ "../../../libs/shared/digital-unav/src/lib/services/session.service.ts");
/* harmony import */ var _manage_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-header */ "../../../libs/shared/digital-unav/src/lib/services/manage-header.ts");
/* harmony import */ var _content_path_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content-path.service */ "../../../libs/shared/digital-unav/src/lib/services/content-path.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");










var UNAV_TRANSFER_STATE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["makeStateKey"])('UNAV_TRANSFER_STATE_KEY');
var UNAV_TRANSFER_STATE = {};
var ContentService = /** @class */ (function () {
    function ContentService(transferState, http, uss, manageHeader, cps) {
        this.transferState = transferState;
        this.http = http;
        this.uss = uss;
        this.manageHeader = manageHeader;
        this.cps = cps;
        transferState.onSerialize(UNAV_TRANSFER_STATE_KEY, function () {
            return UNAV_TRANSFER_STATE;
        });
    }
    ContentService.prototype.getContent = function (clientId, component, siteType) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.uss.getState(), this.getAuthoring(clientId, component, siteType))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (res) {
            if (component === _models__WEBPACK_IMPORTED_MODULE_2__["UnavComponent"].ComponentTypeEnum.FOOTER) {
                return _this.filterBystate(res[1], res[0]);
            }
            else if (_models__WEBPACK_IMPORTED_MODULE_2__["UnavComponent"].ComponentTypeEnum.HEADER) {
                return _this.manageHeader.getHeaderData(res[1], res[0], _this.uss.userSession, siteType);
            }
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["shareReplay"])(1));
    };
    ContentService.prototype.getAuthoring = function (clientId, component, siteType) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.cps.resolveContentUrl(component, clientId, siteType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(function (x) {
            if (_this.transferState.hasKey(UNAV_TRANSFER_STATE_KEY)) {
                var transferState = _this.transferState.get(UNAV_TRANSFER_STATE_KEY, {});
                if (transferState[x]) {
                    // If our SSR transfer state cache has a JSON, emit that first to prevent a flicker during SSR transition.
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(transferState[x]);
                }
            }
            return _this.http.get(x).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (v) {
                UNAV_TRANSFER_STATE[x] = v;
            }));
        }));
    };
    ContentService.prototype.parse = function (json) {
        try {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(JSON.parse(json));
        }
        catch (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["throwError"])(error);
        }
    };
    ContentService.prototype.filterBystate = function (data, filterBy) {
        var _this = this;
        Object.keys(data).forEach(function (x) {
            if (Array.isArray(data[x]) && x === 'linkUrl') {
                data[x] = _this.getLinks(data[x], filterBy);
            }
            else if (Array.isArray(data[x])) {
                data[x].forEach(function (element) {
                    _this.filterBystate(element, filterBy);
                });
            }
            else if (typeof data[x] === 'object') {
                _this.filterBystate(data[x], filterBy);
            }
        });
        return data;
    };
    ContentService.prototype.getLinks = function (Links, custype) {
        return Links.filter(function (x) { return (x.customerType || []).indexOf(custype) > -1; });
    };
    ContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["TransferState"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _manage_header__WEBPACK_IMPORTED_MODULE_6__["ManageHeader"],
            _content_path_service__WEBPACK_IMPORTED_MODULE_7__["ContentPathService"]])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/cookie.service.ts":
/*!**********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/cookie.service.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");



var CookieService = /** @class */ (function () {
    function CookieService(platformId) {
        this.platformId = platformId;
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
    }
    CookieService.prototype.getCookie = function (name) {
        if (!name || !this.isPlatformBrowser) {
            return null;
        }
        var lenght = name.length + 1;
        return (document.cookie
            .split(';')
            .map(function (c) { return c.trim(); })
            .filter(function (cookie) {
            return cookie.substring(0, lenght) === name + "=";
        })
            .map(function (cookie) {
            return decodeURIComponent(cookie.substring(lenght));
        })[0] || null);
    };
    CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/logout.service.ts":
/*!**********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/logout.service.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window-ref.service */ "../../../libs/shared/digital-unav/src/lib/services/window-ref.service.ts");






var LogoutService = /** @class */ (function () {
    function LogoutService(http, config, windowRef) {
        this.http = http;
        this.config = config;
        this.windowRef = windowRef;
        this.iamHost = this.config.iamHost || 'https://account.t-mobile.com';
        this.sessionHost = this.config.sessionHost || 'https://my.t-mobile.com';
        this.logoutRedirect = this.config.logoutRedirect || false;
    }
    LogoutService.prototype.doLogout = function () {
        var _this = this;
        return this.http.jsonp(this.iamHost + "/oauth2/v1/signout", 'callback').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res) {
                _this.mytmoLogout();
                return true;
            }
            else {
                return false;
            }
        }));
    };
    LogoutService.prototype.mytmoLogout = function () {
        if (sessionStorage) {
            sessionStorage.clear();
        }
        if (document.forms['MyTmosessionLogOut']) {
            document.forms['MyTmosessionLogOut'].action = this.sessionHost + "/apps/mytmobile/eservice/servlet/Logout";
            var hiddenRedirectUrl = document.getElementById("redirectUrlParamText");
            if (hiddenRedirectUrl) {
                if (this.logoutRedirect) {
                    var window_1 = this.windowRef.nativeWindow();
                    var filteredUrl = this.getParsedUrlForAuthUNAV(window_1.location.href, false);
                    hiddenRedirectUrl.setAttribute('value', filteredUrl);
                }
                else if (hiddenRedirectUrl.parentNode) {
                    hiddenRedirectUrl.parentNode.removeChild(hiddenRedirectUrl);
                }
            }
            document.forms['MyTmosessionLogOut'].submit();
        }
    };
    LogoutService.prototype.getParsedUrlForAuthUNAV = function (url, isLogin) {
        var parsedUrl = new URL(url);
        var filteredUrl = parsedUrl.origin + parsedUrl.pathname;
        filteredUrl = (parsedUrl.pathname === '/search' && isLogin) ? (filteredUrl + '?unav=mytmo') : filteredUrl;
        return filteredUrl;
    };
    LogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_3__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object, _window_ref_service__WEBPACK_IMPORTED_MODULE_5__["WindowRefService"]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/manage-header.ts":
/*!*********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/manage-header.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ManageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHeader", function() { return ManageHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var _models_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/header */ "../../../libs/shared/digital-unav/src/lib/models/header.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");





var ManageHeader = /** @class */ (function () {
    function ManageHeader(platformId) {
        this.platformId = platformId;
        this.currentPageUrl = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId) ? window.location.pathname.toLowerCase() : '';
    }
    ManageHeader.prototype.getHeaderData = function (data, filterBy, userSession, siteType) {
        this.headerdata = new _models_header__WEBPACK_IMPORTED_MODULE_3__["Header"]();
        this.headerdata.sitesTitle = data.sitesTitle;
        this.headerdata.title = data.title;
        this.headerdata.search = data && data.search ? data.search : {};
        if (data.logo) {
            var _a = data.logo, id = _a.id, targetWindow = _a.targetWindow, label = _a.label, description = _a.description, icon = _a.icon, hoverIcon = _a.hoverIcon, linkType = _a.linkType;
            this.headerdata.logo = { id: id, targetWindow: targetWindow, label: label, description: description, icon: icon, hoverIcon: hoverIcon, linkType: linkType };
            if (data.logo.linkUrl) {
                var linkUrls = data.logo.linkUrl;
                for (var _i = 0, linkUrls_1 = linkUrls; _i < linkUrls_1.length; _i++) {
                    var entry = linkUrls_1[_i];
                    if ((entry.customerType || []).includes(filterBy)) {
                        var linkUrlResp = [];
                        linkUrlResp.push({
                            linkText: entry.linkText,
                            linkHref: entry.linkHref
                        });
                        this.headerdata.logo.linkUrl = linkUrlResp;
                        break;
                    }
                }
            }
        }
        if (data.sites) {
            for (var _b = 0, _c = data.sites; _b < _c.length; _b++) {
                var site = _c[_b];
                var linkUrls = site.linkUrl || [];
                for (var _d = 0, linkUrls_2 = linkUrls; _d < linkUrls_2.length; _d++) {
                    var entry = linkUrls_2[_d];
                    if ((entry.customerType || []).includes(filterBy)) {
                        var linkUrlResp = [];
                        linkUrlResp.push({
                            linkText: entry.linkText,
                            linkHref: entry.linkHref
                        });
                        this.headerdata.sites = this.headerdata.sites || [];
                        this.headerdata.sites.push({
                            id: site.id,
                            targetWindow: site.targetWindow,
                            label: site.label,
                            description: site.description,
                            icon: site.icon,
                            hoverIcon: site.hoverIcon,
                            linkType: site.linkType,
                            linkUrl: linkUrlResp,
                            activeState: site.activeState
                        });
                        break;
                    }
                }
            }
        }
        if (data.navigationLinks) {
            for (var _e = 0, _f = data.navigationLinks; _e < _f.length; _e++) {
                var navigationLink = _f[_e];
                var linkUrls = navigationLink.linkUrl || [];
                for (var _g = 0, linkUrls_3 = linkUrls; _g < linkUrls_3.length; _g++) {
                    var entry = linkUrls_3[_g];
                    if ((entry.customerType || []).includes(filterBy)) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId) && !navigationLink['active'])
                            navigationLink['active'] = this.checkForActiveNavigationLink(entry.linkHref); //platform browser check for ssr
                        var linkUrlRespObj = this.getLinkUrlResponse(entry, filterBy, navigationLink['active']);
                        this.headerdata.navigationLinks = this.headerdata.navigationLinks || [];
                        this.headerdata.navigationLinks.push({
                            id: navigationLink.id,
                            targetWindow: navigationLink.targetWindow,
                            label: navigationLink.label,
                            description: navigationLink.description,
                            icon: navigationLink.icon,
                            hoverIcon: navigationLink.hoverIcon,
                            linkType: navigationLink.linkType,
                            linkUrl: linkUrlRespObj.linkUrlResp,
                            active: navigationLink.active || linkUrlRespObj.activeLink
                        });
                        break;
                    }
                }
            }
        }
        if (data.utility) {
            for (var _h = 0, _j = data.utility; _h < _j.length; _h++) {
                var util = _j[_h];
                var linkUrls = util.linkUrl || [];
                for (var _k = 0, linkUrls_4 = linkUrls; _k < linkUrls_4.length; _k++) {
                    var entry = linkUrls_4[_k];
                    if ((entry.customerType || []).includes(filterBy)) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId) && !util['active'])
                            util['active'] = this.checkForActiveNavigationLink(entry.linkHref);
                        var linkUrlRespArr = this.getLinkUrlResponse(entry, filterBy, util['active']);
                        this.headerdata.utility = this.headerdata.utility || [];
                        this.headerdata.utility.push({
                            id: util.id,
                            targetWindow: util.targetWindow,
                            label: util.label,
                            description: util.description,
                            icon: util.icon,
                            hoverIcon: util.hoverIcon,
                            linkType: util.linkType,
                            linkUrl: linkUrlRespArr.linkUrlResp,
                            showInMobileView: util.showInMobileView,
                            buttonType: util.buttonType,
                            disabled: util.disabled,
                            active: util['active'] || linkUrlRespArr.activeLink
                        });
                        break;
                    }
                }
            }
        }
        if (data.userLinks) {
            var _l = data.userLinks, labelColor = _l.labelColor, mobileIcon = _l.mobileIcon;
            var labelText = data.userLinks.labelText;
            if (siteType === _models__WEBPACK_IMPORTED_MODULE_2__["UnavComponent"].ComponentNavTypeEnum.CUSTOMER) {
                var name_1 = userSession && userSession.name;
                if (name_1) {
                    labelText = name_1.substring(0, 20);
                }
            }
            this.headerdata.userLinks = { labelColor: labelColor, labelText: labelText, mobileIcon: mobileIcon };
            if (data.userLinks.link) {
                var userLink = data.userLinks.link;
                var userLinkUrlResp = [];
                for (var _m = 0, userLink_1 = userLink; _m < userLink_1.length; _m++) {
                    var entryLink = userLink_1[_m];
                    if (entryLink.linkUrl &&
                        entryLink.linkUrl[0] &&
                        (entryLink.linkUrl[0].customerType || []).includes(filterBy)) {
                        var childUrlResp = [];
                        for (var _o = 0, _p = entryLink.linkUrl[0].childLinks || []; _o < _p.length; _o++) {
                            var childEntry = _p[_o];
                            var childLinkRep = [];
                            for (var _q = 0, _r = childEntry.categorizedlink || []; _q < _r.length; _q++) {
                                var childLinkEntry = _r[_q];
                                var childLinkUrlResp = [];
                                if (childLinkEntry.linkUrl &&
                                    childLinkEntry.linkUrl[0] &&
                                    (childLinkEntry.linkUrl[0].customerType || []).includes(filterBy)) {
                                    childLinkUrlResp.push({
                                        linkText: childLinkEntry.linkUrl[0].linkText,
                                        linkHref: childLinkEntry.linkUrl[0].linkHref
                                    });
                                    childLinkRep.push({
                                        linkUrl: childLinkUrlResp,
                                        id: childLinkEntry.id,
                                        targetWindow: childLinkEntry.targetWindow,
                                        label: childLinkEntry.label,
                                        description: childLinkEntry.description,
                                        icon: childLinkEntry.icon,
                                        hoverIcon: childLinkEntry.hoverIcon,
                                        linkType: childLinkEntry.linkType
                                    });
                                }
                            }
                            if (childLinkRep.length > 0) {
                                childUrlResp.push({
                                    categoryName: childEntry.categoryName,
                                    categorizedlink: childLinkRep
                                });
                            }
                        }
                        var linkUrlResp = [];
                        if (childUrlResp.length > 0) {
                            linkUrlResp.push({
                                linkText: entryLink.linkUrl[0].linkText,
                                linkHref: entryLink.linkUrl[0].linkHref,
                                childLinks: childUrlResp
                            });
                        }
                        if (linkUrlResp.length > 0) {
                            userLinkUrlResp.push({
                                id: entryLink.id,
                                targetWindow: entryLink.targetWindow,
                                label: entryLink.label,
                                description: entryLink.description,
                                icon: entryLink.icon,
                                hoverIcon: entryLink.hoverIcon,
                                linkType: entryLink.linkType,
                                linkUrl: linkUrlResp
                            });
                        }
                    }
                }
                this.headerdata.userLinks.link = userLinkUrlResp;
            }
        }
        return this.headerdata;
    };
    ManageHeader.prototype.getLinkUrl = function (url) {
        url = url.indexOf('http') === 0 ? new URL(url).pathname.toLowerCase()
            : url.indexOf('www.') === 0 ? new URL('https://' + url).pathname.toLowerCase()
                : url.split(/[?#]/)[0];
        return url;
    };
    ManageHeader.prototype.checkForActiveNavigationLink = function (url) {
        var linkURL = url ? this.getLinkUrl(url.toLowerCase()) : url;
        return this.currentPageUrl === linkURL;
    };
    ManageHeader.prototype.getLinkUrlResponse = function (entry, filterBy, activeLink) {
        var childUrlResp = [];
        var linkUrlResp = [];
        linkUrlResp['active'] = activeLink;
        for (var _i = 0, _a = entry.childLinks || []; _i < _a.length; _i++) {
            var childEntry = _a[_i];
            var childLinkRep = [];
            if (childEntry.categorizedlink) {
                for (var _b = 0, _c = childEntry.categorizedlink; _b < _c.length; _b++) {
                    var childLinkEntry = _c[_b];
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId) && !activeLink)
                        activeLink = this.checkForActiveNavigationLink(childLinkEntry.linkUrl[0].linkHref);
                    var childLinkUrlResp = [];
                    if (childLinkEntry.linkUrl &&
                        childLinkEntry.linkUrl[0] &&
                        childLinkEntry.linkUrl[0].customerType &&
                        childLinkEntry.linkUrl[0].customerType.includes(filterBy)) {
                        childLinkUrlResp.push({
                            linkText: childLinkEntry.linkUrl[0].linkText,
                            linkHref: childLinkEntry.linkUrl[0].linkHref
                        });
                        childLinkRep.push({
                            linkUrl: childLinkUrlResp,
                            id: childLinkEntry.id,
                            targetWindow: childLinkEntry.targetWindow,
                            label: childLinkEntry.label,
                            description: childLinkEntry.description,
                            icon: childLinkEntry.icon,
                            hoverIcon: childLinkEntry.hoverIcon
                        });
                    }
                }
            }
            childUrlResp.push({
                categoryName: childEntry.categoryName,
                categorizedlink: childLinkRep
            });
        }
        linkUrlResp.push({
            linkText: entry.linkText,
            linkHref: entry.linkHref,
            childLinks: childUrlResp,
        });
        return { linkUrlResp: linkUrlResp, activeLink: activeLink };
    };
    ManageHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ManageHeader);
    return ManageHeader;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/search-bar.service.ts":
/*!**************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/search-bar.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: SearchBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarService", function() { return SearchBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");



var SearchBarService = /** @class */ (function () {
    function SearchBarService(http) {
        this.http = http;
    }
    SearchBarService.prototype.getResultData = function (searchTerm, data, callback) {
        var params = {};
        params['query'] = searchTerm;
        params['max_results'] = data.maxPredictive;
        params['beginning'] = '1';
        var meta = {
            url: data.url,
        };
        if (window['nav_search']) {
            /* istanbul ignore next: Only wiring with window methods */
            window['nav_search'](params, meta, callback);
            /* istanbul ignore next: Only wiring with window methods */
        }
    };
    SearchBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchBarService);
    return SearchBarService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/session.service.ts":
/*!***********************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/session.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "../../../libs/shared/digital-unav/src/lib/models/index.ts");
/* harmony import */ var _util_user_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/user-state */ "../../../libs/shared/digital-unav/src/lib/util/user-state.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cookie.service */ "../../../libs/shared/digital-unav/src/lib/services/cookie.service.ts");









var SessionService = /** @class */ (function () {
    function SessionService(userState, config, cookieService, http) {
        var _this = this;
        this.userState = userState;
        this.config = config;
        this.cookieService = cookieService;
        this.http = http;
        this.sessionHost = this.config.sessionHost || 'https://my.t-mobile.com';
        this.unavCookie = 'tmoUnav';
        this.userSession = {
            switchAccount: "flase",
        };
        this.userState$ = this.http.jsonp(this.sessionHost + "/bin/corsdomain", 'callback')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            if (res) {
                _this.userSession = res;
                return _models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.TMOCURRENTLYAUTHENTICATED;
            }
            else {
                return _models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.PROSPECT;
            }
        }, function (error) {
            return _models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.PROSPECT;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
    }
    SessionService.prototype.getState = function () {
        if (this.userState) {
            this.getSessionAttributes();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.userState);
        }
        else {
            return this.getMytmoUserState();
        }
    };
    SessionService.prototype.getMytmoUserState = function () {
        if (this.istmoDomain()) {
            return this.mytmocookieState();
        }
        else {
            return this.userState$;
        }
    };
    SessionService.prototype.mytmocookieState = function () {
        var mytmoCookie = this.cookieService.getCookie(this.unavCookie);
        try {
            if (mytmoCookie) {
                this.userSession = JSON.parse(mytmoCookie);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.TMOCURRENTLYAUTHENTICATED);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.PROSPECT);
            }
        }
        catch (_a) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_models__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.PROSPECT);
        }
    };
    SessionService.prototype.istmoDomain = function () {
        var host = window.location.hostname;
        var istmo = host.endsWith('.t-mobile.com');
        return istmo;
    };
    SessionService.prototype.getSessionAttributes = function () {
        var mytmoCookie = this.cookieService.getCookie(this.unavCookie);
        try {
            if (mytmoCookie) {
                this.userSession = JSON.parse(mytmoCookie);
            }
        }
        catch (_a) {
            return this.userSession;
        }
        return this.userSession;
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_util_user_state__WEBPACK_IMPORTED_MODULE_6__["UNAV_USER_STATE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_config__WEBPACK_IMPORTED_MODULE_4__["UNAV_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, Object, _cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/services/window-ref.service.ts":
/*!**************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/services/window-ref.service.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");


var _window = function () {
    return window;
};
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.nativeWindow = function () {
        return _window();
    };
    WindowRefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/shared-digital-unav.module.ts":
/*!*************************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/shared-digital-unav.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SharedDigitalUnavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDigitalUnavModule", function() { return SharedDigitalUnavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/digital-unav-header/digital-unav-header.component */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-header/digital-unav-header.component.ts");
/* harmony import */ var _components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/digital-unav-footer/digital-unav-footer.component */ "../../../libs/shared/digital-unav/src/lib/components/digital-unav-footer/digital-unav-footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_analytics_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/analytics-click.directive */ "../../../libs/shared/digital-unav/src/lib/directives/analytics-click.directive.ts");
/* harmony import */ var _components_ntm_unav_dropdown_ntm_unav_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ntm-unav-dropdown/ntm-unav-dropdown.component */ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown/ntm-unav-dropdown.component.ts");
/* harmony import */ var _components_ntm_log_in_menu_ntm_log_in_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ntm-log-in-menu/ntm-log-in-menu.component */ "../../../libs/shared/digital-unav/src/lib/components/ntm-log-in-menu/ntm-log-in-menu.component.ts");
/* harmony import */ var _components_ntm_search_bar_ntm_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ntm-search-bar/ntm-search-bar.component */ "../../../libs/shared/digital-unav/src/lib/components/ntm-search-bar/ntm-search-bar.component.ts");
/* harmony import */ var _components_ntm_universal_menu_ntm_universal_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ntm-universal-menu/ntm-universal-menu.component */ "../../../libs/shared/digital-unav/src/lib/components/ntm-universal-menu/ntm-universal-menu.component.ts");
/* harmony import */ var _directives_focus_out_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/focus-out.directive */ "../../../libs/shared/digital-unav/src/lib/directives/focus-out.directive.ts");
/* harmony import */ var _components_footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer-panel/footer-panel.component */ "../../../libs/shared/digital-unav/src/lib/components/footer-panel/footer-panel.component.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config */ "../../../libs/shared/digital-unav/src/lib/config.ts");
/* harmony import */ var _components_ntm_unav_dropdown_container_ntm_unav_dropdown_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ntm-unav-dropdown-container/ntm-unav-dropdown-container.component */ "../../../libs/shared/digital-unav/src/lib/components/ntm-unav-dropdown-container/ntm-unav-dropdown-container.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "../../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/dropdown.directive */ "../../../libs/shared/digital-unav/src/lib/directives/dropdown.directive.ts");


















var SharedDigitalUnavModule = /** @class */ (function () {
    function SharedDigitalUnavModule() {
    }
    SharedDigitalUnavModule_1 = SharedDigitalUnavModule;
    SharedDigitalUnavModule.forRoot = function (config) {
        return {
            ngModule: SharedDigitalUnavModule_1,
            providers: [{ provide: _config__WEBPACK_IMPORTED_MODULE_14__["UNAV_CONFIG"], useValue: config }]
        };
    };
    var SharedDigitalUnavModule_1;
    SharedDigitalUnavModule = SharedDigitalUnavModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"]
            ],
            declarations: [
                _components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_4__["DigitalUnavHeaderComponent"],
                _components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_5__["DigitalUnavFooterComponent"],
                _components_ntm_unav_dropdown_ntm_unav_dropdown_component__WEBPACK_IMPORTED_MODULE_8__["NtmUnavDropdownComponent"],
                _components_ntm_unav_dropdown_container_ntm_unav_dropdown_container_component__WEBPACK_IMPORTED_MODULE_15__["NtmUnavDropdownContainerComponent"],
                _components_ntm_log_in_menu_ntm_log_in_menu_component__WEBPACK_IMPORTED_MODULE_9__["NtmLogInMenuComponent"],
                _components_ntm_search_bar_ntm_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["NtmSearchBarComponent"],
                _components_ntm_universal_menu_ntm_universal_menu_component__WEBPACK_IMPORTED_MODULE_11__["NtmUniversalMenuComponent"],
                _directives_focus_out_directive__WEBPACK_IMPORTED_MODULE_12__["FocusListenDirective"],
                _directives_analytics_click_directive__WEBPACK_IMPORTED_MODULE_7__["AnalyticsClickDirective"],
                _components_footer_panel_footer_panel_component__WEBPACK_IMPORTED_MODULE_13__["FooterPanelComponent"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["DropdownDirective"]
            ],
            exports: [_components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_4__["DigitalUnavHeaderComponent"], _components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_5__["DigitalUnavFooterComponent"]],
            entryComponents: [_components_digital_unav_header_digital_unav_header_component__WEBPACK_IMPORTED_MODULE_4__["DigitalUnavHeaderComponent"], _components_digital_unav_footer_digital_unav_footer_component__WEBPACK_IMPORTED_MODULE_5__["DigitalUnavFooterComponent"]]
        })
    ], SharedDigitalUnavModule);
    return SharedDigitalUnavModule;
}());



/***/ }),

/***/ "../../../libs/shared/digital-unav/src/lib/util/user-state.ts":
/*!**************************************************************************************************************!*\
  !*** D:/TMO_PROJECTS/TMNG/tmo-aem-ui-integration/tmo-ng/libs/shared/digital-unav/src/lib/util/user-state.ts ***!
  \**************************************************************************************************************/
/*! exports provided: UNAV_USER_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAV_USER_STATE", function() { return UNAV_USER_STATE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");

var UNAV_USER_STATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('UNAV_USER_STATE');


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tmo-digital-header theme=\"dark\" sticky='true' skinny='false'> </tmo-digital-header>\n\n<div style=\"height: 1000px; background-color: antiquewhite\"></div>\n\n\n\n<tmo-digital-footer>   </tmo-digital-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2ZsZXgvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'flex-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tmo-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tmo_shared_digital_unav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tmo/shared/digital-unav */ "../../../libs/shared/digital-unav/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"],
                _tmo_shared_digital_unav__WEBPACK_IMPORTED_MODULE_5__["SharedDigitalUnavModule"].forRoot({
                    baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].unavBaseUrl,
                    cartApiUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cartApiUrl,
                    cartCookie: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].cartCookie,
                    sessionHost: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].sessionHost
                })],
            providers: [
                { provide: _tmo_shared_digital_unav__WEBPACK_IMPORTED_MODULE_5__["UNAV_USER_STATE"], useValue: _tmo_shared_digital_unav__WEBPACK_IMPORTED_MODULE_5__["LinkUrl"].CustomerTypeEnum.PROSPECT },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    production: false,
    unavBaseUrl: '/assets/mock-json',
    cartApiUrl: '/assets/mock-json/mockCart.json',
    cartCookie: 'tmobglobalshareddata',
    sessionHost: 'https://my.t-mobile.com'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../../../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
    ngZone: 'noop'
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TMO_PROJECTS\TMNG\tmo-aem-ui-integration\tmo-ng\apps\flex\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map