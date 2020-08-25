import Vue from 'vue'
import 'vant/lib/index.less'
import {
  Button,
  Icon,
  RadioGroup,
  Radio,
  Col,
  Row,
  Field,
  Search,
  Checkbox,
  CheckboxGroup,
  Uploader,
  Dialog
} from 'vant'

Vue.use(Button)
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Col)
Vue.use(Row)
Vue.use(Field)
Vue.use(Search)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Uploader)

Vue.prototype.$messageBox = Dialog
