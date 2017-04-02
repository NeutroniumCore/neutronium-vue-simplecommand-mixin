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
			if (this.canExecute) {
				var beforeCb = this.beforeCommand;
				if (!!beforeCb)
					beforeCb();
				this.command.Execute(this.arg);
			}
		}
	}
  };

  export default commandMixin