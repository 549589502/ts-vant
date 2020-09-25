import { get, post } from '../common/plugins/plugin-axios'

export default {
	login(dataObj: any) {
		return post('/sys/appLogin', dataObj);
	},
}
