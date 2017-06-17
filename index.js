const commandMixin = {
	props: {
		command: {
			required: true,
			validator: function (value) {
				return typeof value === 'object'
			}
		},
		arg: {
			type: Object,
			required: false,
			default: null
		}
	},
	computed: {
		canExecute: function () {
			return !!this.command
		}
	},
	methods: {
		execute: function () {
			if (!this.canExecute) {
				return
			}

			const arg = this.arg
			const evt = {arg: arg, cancel: false}
			this.$emit('beforeExecute', evt)

			if (evt.cancel) {
				return
			}
			this.command.Execute(arg);
			this.$emit('afterExecute', arg)
		}
	}
};

export default commandMixin