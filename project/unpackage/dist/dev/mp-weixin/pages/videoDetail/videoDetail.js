(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/videoDetail/videoDetail"],{

/***/ 123:
/*!*************************************************************************************************************!*\
  !*** C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/main.js?{"page":"pages%2FvideoDetail%2FvideoDetail"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _videoDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/videoDetail/videoDetail.vue */ 124));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_videoDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 124:
/*!******************************************************************************************!*\
  !*** C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=template&id=04e088e0& */ 125);
/* harmony import */ var _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=script&lang=js& */ 127);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=style&index=0&lang=scss& */ 129);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/videoDetail/videoDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 125:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=template&id=04e088e0& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=template&id=04e088e0& */ 126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_04e088e0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 126:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=template&id=04e088e0& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 174))
    },
    uPopup: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-popup/u-popup */ "uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 146))
    },
    uLineProgress: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-line-progress/u-line-progress */ "uview-ui/components/u-line-progress/u-line-progress").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-line-progress/u-line-progress.vue */ 181))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.footerShow = true
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 127:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=script&lang=js& */ 128);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 128:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      // 用户cookie
      userCookie: '',
      // mv的id
      mvid: '',
      // mv的地址
      mvVideo: '',
      // 进度条参数
      mvPlayTime: 0,
      // 获取mv数据
      mvData: [],
      // 获取点赞数,评论数
      mvLike: 0,
      mvComment: 0,
      // 点赞
      mvLikeYes: 1,
      // 取消点赞
      mvLikeNo: 2,
      // 点赞判断
      mvLikeYesOrNo: true,
      // 底部弹窗
      footerShow: false,
      // 用户评论信息
      userMvComment: [] };

  },
  onLoad: function onLoad(options) {var _this = this;
    this.mvid = JSON.parse(options.vid);
    // 获取用户coolie
    uni.getStorage({
      key: "user",
      success: function success(res) {
        _this.$store.state.myCookie = res.data.cookie;
      } });

    this.userCookie = this.$store.state.myCookie;
    // 获取用户评论信息
    uni.request({
      url: this.$Url + '/comment/video?id=' + this.mvid,
      dataType: 'json', //默认 json格式
      method: 'GET', //请求方式
      withCredentials: true,
      success: function success(res) {
        _this.userMvComment = res.data.hotComments;
      },
      fail: function fail(error) {
        console.log(error);
      } });

  },
  onShow: function onShow() {var _this2 = this;
    // 获取mv地址
    uni.request({
      url: this.$Url + '/video/url?id=' + this.mvid,
      dataType: 'json', //默认 json格式
      method: 'GET', //请求方式
      withCredentials: true,
      success: function success(res) {
        _this2.mvVideo = res.data.urls[0].url;
      },
      fail: function fail(error) {
        console.log(error);
      } });

    // 获取mv数据
    uni.request({
      url: this.$Url + '/video/detail?id=' + this.mvid,
      dataType: 'json', //默认 json格式
      method: 'GET', //请求方式
      withCredentials: true,
      success: function success(res) {
        console.log(res);
        _this2.mvData = res.data.data;
      },
      fail: function fail(error) {
        console.log(error);
      } });

    // 获取mv点赞数，评论数
    uni.request({
      url: this.$Url + '/video/detail/info?vid=' + this.mvid,
      dataType: 'json', //默认 json格式
      method: 'GET', //请求方式
      withCredentials: true,
      success: function success(res) {
        console.log(res);
        _this2.mvLike = res.data.likedCount;
        _this2.mvComment = res.data.commentCount;
      },
      fail: function fail(error) {
        console.log(error);
      } });

  },
  methods: {
    onPlayTime: function onPlayTime(event) {
      // console.log(event.detail)
      // console.log(event.detail.currentTime/event.detail.duration)
      this.mvPlayTime = event.detail.currentTime / event.detail.duration * 100;
    },
    onLike: function onLike(like) {var _this3 = this;
      uni.request({
        url: this.$Url + '/resource/like?t=' + like + '&type=1&id=' + this.mvid + '&cookie=' + this.userCookie,
        dataType: 'json', //默认 json格式
        method: 'GET', //请求方式
        withCredentials: true,
        success: function success(res) {
          console.log(res);
          _this3.mvLikeYesOrNo = !_this3.mvLikeYesOrNo;
          // 获取mv点赞数，评论数
          uni.request({
            url: _this3.$Url + '/video/detail/info?vid=' + _this3.mvid,
            dataType: 'json', //默认 json格式
            method: 'GET', //请求方式
            withCredentials: true,
            success: function success(res) {
              console.log(res);
              _this3.mvLike = res.data.likedCount;
              _this3.mvComment = res.data.commentCount;
            },
            fail: function fail(error) {
              console.log(error);
            } });

        },
        fail: function fail(error) {
          console.log(error);
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 129:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Documents/Tencent Files/1347374188/FileRecv/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=style&index=0&lang=scss& */ 130);
/* harmony import */ var _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_1347374188_FileRecv_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 130:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/someo/Desktop/学习/网易云项目/MusicWeb/project/pages/videoDetail/videoDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[123,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/videoDetail/videoDetail.js.map