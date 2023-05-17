import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside,Popover,
  Main, Menu, Submenu, MenuItem, Card, Upload, Dialog, Breadcrumb, BreadcrumbItem,Image,Tabs,TabPane,Table,TableColumn,Switch,Tooltip,
  Pagination,MessageBox,Tag,Tree,Select,Option,Alert,Cascader,Steps,Step,Checkbox,CheckboxGroup,DatePicker,TimePicker,InputNumber,CheckboxButton,Loading
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Image)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Popover)
Vue.component(MessageBox.name, MessageBox)
Vue.prototype.$message = Message
