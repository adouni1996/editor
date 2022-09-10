import Vue from 'vue'
import DxTextBox from 'devextreme-vue/text-box'
import DxTagBox from 'devextreme-vue/tag-box'
import { DxSelectBox } from 'devextreme-vue/select-box'
import { DxPopup } from 'devextreme-vue/popup'
import { DxPopover } from 'devextreme-vue/popover'
import DxTextArea from 'devextreme-vue/text-area'
import notify from 'devextreme/ui/notify'
import { DxCheckBox } from 'devextreme-vue/check-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxRadioGroup from 'devextreme-vue/radio-group'
import { DxLoadPanel } from 'devextreme-vue/load-panel'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import DxDropDownBox from 'devextreme-vue/drop-down-box'
import { DxSwitch } from 'devextreme-vue/switch'
import {
  DxDataGrid,
  DxColumn,
  DxPaging
} from 'devextreme-vue/data-grid'
import DxTreeView from 'devextreme-vue/tree-view'

import { DxTreeList, DxSelection } from 'devextreme-vue/tree-list'
import DxValidator, {
  DxRequiredRule,
  DxStringLengthRule,
  DxNumericRule
} from 'devextreme-vue/validator'

import DxValidationGroup from 'devextreme-vue/validation-group'
import DxButton from 'devextreme-vue/button'

Vue.prototype.$notify = notify

const ComponentObject = [
  {
    'name': 'DxNumericRule',
    'obj': DxNumericRule
  },
  {
    'name': 'DxSelection',
    'obj': DxSelection
  },
  {
    'name': 'DxTagBox',
    'obj': DxTagBox
  },
  {
    'name': 'DxTreeList',
    'obj': DxTreeList
  },
  {
    'name': 'DxSwitch',
    'obj': DxSwitch
  },
  {
    'name': 'DxStringLengthRule',
    'obj': DxStringLengthRule
  },
  {
    'name': 'DxDropDownBox',
    'obj': DxDropDownBox
  },
  {
    'name': 'DxScrollView',
    'obj': DxScrollView
  },
  {
    'name': 'DxTreeView',
    'obj': DxTreeView
  },
  {
    'name': 'DxPaging',
    'obj': DxPaging
  },
  {
    'name': 'DxDataGrid',
    'obj': DxDataGrid
  },
  {
    'name': 'DxColumn',
    'obj': DxColumn
  },
  {
    'name': 'DxValidationGroup',
    'obj': DxValidationGroup
  },
  {
    'name': 'DxLoadPanel',
    'obj': DxLoadPanel
  },
  {
    'name': 'DxPopover',
    'obj': DxPopover
  }, {
    'name': 'DxButton',
    'obj': DxButton
  }, {
    'name': 'DxTextBox',
    'obj': DxTextBox
  }, {
    'name': 'DxCheckBox',
    'obj': DxCheckBox
  }, {
    'name': 'DxTextArea',
    'obj': DxTextArea
  }, {
    'name': 'DxSelectBox',
    'obj': DxSelectBox
  }, {
    'name': 'DxRadioGroup',
    'obj': DxRadioGroup
  }, {
    'name': 'DxPopup',
    'obj': DxPopup
  }, {
    'name': 'DxDateBox',
    'obj': DxDateBox
  }, {
    'name': 'DxValidator',
    'obj': DxValidator
  }, {
    'name': 'DxRequiredRule',
    'obj': DxRequiredRule
  }
]

ComponentObject.forEach((item) => {
  Vue.component(item.name, item.obj)
})
